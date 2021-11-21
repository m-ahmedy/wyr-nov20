import { CREATE_QUESTION, ANSWER_QUESTION } from "../actionCreators/questions";
import { LOAD_USERS } from "../actionCreators/users";

const initialState = {};

export function users(state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS: {
            const { users } = action.payload;
            return { ...users };
        }

        case CREATE_QUESTION: {
            const { formattedQuestion } = action.payload;
            const { author, id } = formattedQuestion;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [...state[author].questions, id],
                },
            };
        }

        case ANSWER_QUESTION: {
            const { qid, authedUser, answer } = action.payload;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                },
            };
        }

        default:
            return state;
    }
}
