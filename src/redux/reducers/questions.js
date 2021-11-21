import {
    ANSWER_QUESTION,
    CREATE_QUESTION,
    LOAD_QUESTIONS,
} from "../actionCreators/questions";

const initialState = {};

export function questions(state = initialState, action) {
    switch (action.type) {
        case LOAD_QUESTIONS: {
            const { questions } = action.payload;
            return { ...questions };
        }

        case CREATE_QUESTION: {
            const { formattedQuestion } = action.payload;

            return {
                ...state,
                [formattedQuestion.id]: formattedQuestion,
            };
        }

        case ANSWER_QUESTION: {
            const { qid, authedUser, answer } = action.payload;

            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser],
                    },
                },
            };
        }

        default:
            return state;
    }
}
