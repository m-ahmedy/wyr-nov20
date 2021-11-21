export const LOAD_QUESTIONS = 'questions/load'
export const CREATE_QUESTION = 'questions/create'
export const ANSWER_QUESTION = 'questions/answer'

export function loadQuestions(questions) {
    return {
        type: LOAD_QUESTIONS,
        payload: { questions }
    }
}

export function createQuestion(formattedQuestion) {
    return {
        type: CREATE_QUESTION,
        payload: { formattedQuestion }
    }
}

export function answerQuestion({ qid, answer, authedUser }) {
    return {
        type: ANSWER_QUESTION,
        payload: { qid, answer, authedUser }
    }
}
