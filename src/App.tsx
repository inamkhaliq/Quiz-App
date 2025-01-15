import { Avatar, Box, Button, Typography } from '@mui/material';
import './App.css';
import A from './components/a/a';
import Person from './components/Person/Person';
import UserList from './components/UserList/UserList';
import ChildrenProps from './components/childrenProps/ChildrenProps';
import Heading from './components/Heading/Heading';
import B from './components/b/B';
import BasicButtons from './components/Button/Button';
import BullyQuestion from './components/QuizApp/QuizApp';
import { ReactHTML, useEffect, useState } from 'react';
import { fetchData } from "./Services/Question_API"
import axios from 'axios';
import { quizType, questionType, shuffleArray } from './Types';
import { clickOptions } from '@testing-library/user-event/dist/click';

function App() {
  let [questions, setQuestions] = useState<questionType[]>([]);
  let [qNo, setQno] = useState<number>(0);
  let [score,setScore]=useState<number>(0);
  let [answerindx,setAnswerindx]=useState<number>();
  let [disable,setDisable]=useState<boolean>(false);
  let [start, setStart] = useState<boolean>(false);
  let [startBtn, setStartBtn] = useState<boolean>(true);
  
  const getApiData=()=>{
    axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple").then((res) => {
      const quiz = res.data.results.map((q: quizType) => {
        return {
          question: q.question,
          correct_answer: q.correct_answer,
          options: shuffleArray(q.incorrect_answers.concat(q.correct_answer)),
        }
      });
      setQuestions(quiz);
    }).catch(err => console.log(err))
  }


  let person = {
    name: "Junaid",
    age: 25,
    isActive: true
  }
  let users = [
    {
      name: "Ahmad",
      age: 17
    },
    {
      name: "Ali",
      age: 44
    },
    {
      name: "Akbar",
      age: 36
    },
    {
      name: "shoaib",
      age: 47
    },

  ]

  return (

    <div className="App">
      <Typography
        sx={{
          fontFamily: "Fascinate Inline",
          color: "transparent",
          backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(135, 241, 255))",
          fontWeight: "400",
          backgroundSize: "100%",
          backgroundClip: "text",
          filter: "drop-shadow(rgb(0, 133, 163) 2px 2px)",
          fontSize: "70px",
          textAlign: "center",
          margin: "0px 20px 20px 20px",
        }}
        variant='h1'
        component="h1"
      >
        Quiz Application
      </Typography>
      {
        startBtn?<>
          <Button
            variant='contained'
            sx={{
              cursor: "pointer",
              color: "black",
              background: "linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145))",
              border: "2px solid rgb(211, 133, 88)",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
              borderRadius: "10px",
              height: "40px",
              margin: "20px 0px",
              padding: "0px 40px",
              // display: start ? "none" : "inline-block"

            }}
            onClick={() => {
              getApiData();
              setQno(0);
              setStart(true);
              setStartBtn(false);
              setScore(0)
              setAnswerindx(4)
              setDisable(false)
            }}
          >
            Start Quiz
          </Button>
        </>:null
      }
      {
        start? <>
          <Typography
            sx={{
              color:"rgb(255, 255, 255)",
              fontSize:"2rem",
              margin:"0px",
              fontFamily:"Catamaran, sans-serif",
              boxSizing:"border-box",
              fontWeight: 700,
            }}
          >
            {`Score ${score}`}
          </Typography>
          {
            questions?.length!==0?<>
              <Box
                sx={{
                  maxWidth: "1000px",
                  background: "rgb(235, 254, 255)",
                  borderRadius: "10px",
                  border: "2px solid rgb(0, 133, 163)",
                  padding: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
                  textAlign: "center",
                  margin: "auto"
                }}
              >
                <Typography>Question {`${qNo+1}/ ${questions?.length}`}</Typography>
                <Typography>{questions[qNo]?.question}</Typography>
                {
                  questions[qNo]?.options?.map((option: string, indx: number) => {
                    return (
                      <Button
                        key={indx}
                        disabled={disable}
                        onClick={()=>{
                          if(option==questions[qNo]?.correct_answer){
                            setScore((prv:number)=>prv+1)
                          }
                          setDisable((prv:boolean)=>prv?false:true)
                          setAnswerindx(indx)
                          if(qNo==questions.length-1){
                            setStartBtn(true)
                          }
                        }}
                        sx={{
                          background:
                            option==questions[qNo].correct_answer && disable?
                            "linear-gradient(90deg, rgb(86, 255, 164), rgb(89, 188, 134))":
                            answerindx==indx?
                            "linear-gradient(90deg, rgb(255, 86, 86), rgb(193, 104, 104))":
                            "linear-gradient(90deg, rgb(86, 204, 255), rgb(110, 175, 180))",
                          cursor: "pointer",
                          fontFamily: "Catamaran, sans-serif",
                          userSelect: "none",
                          fontSize: "0.8rem",
                          width: "100%",
                          height: "40px",
                          margin: "5px 0px",
                          border: "3px solid rgb(255, 255, 255)",
                          boxShadow: "rgba(0, 0, 0, 0.1) 1px 2px 0px",
                          borderRadius: "10px",
                          color: "rgb(255, 255, 255)",
                          textShadow: "rgba(0, 0, 0, 0.25) 0px 1px 0px",
                        }}
                      >{option}
                      </Button>
                    )
                  })
                }
              {
                disable && qNo<questions.length-1?<>
                  <Button
                    variant='contained'
                    sx={{
                      cursor: "pointer",
                      color: "black",
                      background: "linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145))",
                      border: "2px solid rgb(211, 133, 88)",
                      boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
                      borderRadius: "10px",
                      height: "40px",
                      margin: "20px 0px",
                      padding: "0px 40px",
                    }}
                    onClick={() => {
                      setQno((prv:any)=>{
                        if(prv<questions.length-1){
                          return prv+1
                        }
                        return prv;
                      })
                      if(qNo==questions.length-1){
                        setStart(false)                      
                      }
                      setDisable((prv:boolean)=>prv?false:true)
                      setAnswerindx(4);
                    }}
                  >
                    Next Question
                  </Button>
                </>:null
                }
            </Box>
            </>:<Typography>Loading....</Typography>
          }
          
        </> : null
      }

      {/* <UserList list={users}></UserList> */}
      {/* <Person details={person}></Person>
      <A name={"Inam"} age={25}/>
      <br></br>
      <A name={"Ahmad"} age={15}/>
      <br></br>
      <ChildrenProps>Hi this is Children Props using React</ChildrenProps>
      <Heading>HI this is Heading component</Heading>
      <B>
        <Heading>Heading from inside a react component</Heading>
      </B> */}
      {/* <A>
        this is component A
        <Heading>
          Heading inside the component "A"
        </Heading>
      </A> */}
      {/* <BasicButtons>qwertyuio</BasicButtons>
      */}
    </div>
  );
}

export default App; 
