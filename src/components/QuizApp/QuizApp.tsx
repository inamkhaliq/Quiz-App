import React, { ChangeEvent } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
  const handleAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    onAnswer(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{question}</FormLabel>
      <RadioGroup name="options" onChange={handleAnswer}>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
      <Button variant="contained" color="primary" onClick={() => onAnswer('')}>
        Submit
      </Button>
    </FormControl>
  );
};

const BullyQuestion: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  const handleAnswer = (answer: string) => {
    setSelectedOption(answer);
  };

  return (
    <Question
      question="In the videogame Bully, what is the protagonist's last name?"
      options={['Hopkins', 'Crabblesnitch', 'Kowalski', 'Smith']}
      onAnswer={handleAnswer}
    />
  );
};

export default BullyQuestion;