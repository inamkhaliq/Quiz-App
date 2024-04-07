export type quizType={
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[],
    question:string,
    type:string
}
export type questionType={
    question:string,
    correct_answer:string
    options:string[],
}
export const shuffleArray = (array: any []) =>[...array].sort(() => Math.random()- 0.5)
