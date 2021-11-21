import * as API from '../../api'
import { setAuthedUser } from '../actionCreators/authedUser'
import { clearLoading, setLoading } from '../actionCreators/loading'
import { loadUsers } from '../actionCreators/users'
import { answerQuestion, createQuestion, loadQuestions } from '../actionCreators/questions'
import { formatQuestion } from '../../utils'

export function getUsersThunk() {
    return async function(dispatch) {
        dispatch(setLoading())

        const users = await API._getUsers()

        dispatch(loadUsers(users))
        dispatch(clearLoading())
    }
}

export function loginUserThunk(userId) {
    return async function(dispatch) {
        dispatch(setLoading())

        const authedUserId = await API._loginUser(userId)

        dispatch(setAuthedUser(authedUserId))
        dispatch(clearLoading())
    }
}

export function getQuestionsThunk() {
    return async function(dispatch) {
        dispatch(setLoading())

        const questions = await API._getQuestions()

        dispatch(loadQuestions(questions))
        dispatch(clearLoading())
    }
}

export function createQuestionThunk({ optionOneText, optionTwoText }) {
    return async function (dispatch, getState) {
        const { authedUser } = getState()

        dispatch(setLoading())

        const formattedQuestion = await API._saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText
        })

        dispatch(createQuestion(formattedQuestion))
        dispatch(clearLoading())
    }
}

export function answerQuestionThunk({ qid, answer }) {
    return async function (dispatch, getState) {
        const { authedUser } = getState()

        dispatch(setLoading())
        await API._saveQuestionAnswer({ qid, answer, authedUser })

        dispatch(answerQuestion({ qid, answer, authedUser }))
        dispatch(clearLoading())
    }
}
