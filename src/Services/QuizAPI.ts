const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);

export const getQuizData = async (TotalQuestions: number, level: Difficulty): Promise<Quiz[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${TotalQuestions}&category=18&difficulty=${level}&type=multiple`;
    const apiRespose = await fetch(endpoint);
    let { results } = await apiRespose.json();
    const quizData: Quiz[] = results.map((questionData: QuestionType) => {
        return {
            question: questionData.question,
            correct: questionData.correct_answer,
            options: shuffleArray([questionData.correct_answer, ...questionData.incorrect_answers])
        }
    });
    return quizData;
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
};