interface QuestionType {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface Quiz {
  question: string;
  correct: string;
  options: string[];
}
type QuestionPropType = {
  question: string,
  options: string[],
  callBackSubmitFunc: (e: React.FormEvent<EventTarget>, userAnswer: string) => void
}