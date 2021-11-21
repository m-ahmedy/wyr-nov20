import { formatQuestion } from "../utils";
import { questions } from "./initialState";
import { users } from "./initialState";

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(questions);
    }, 1000);
  });
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ authedUser, qid, answer });
    }, 500);
  });
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(users);
    }, 1000);
  });
}

export function _loginUser(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(userId);
    }, 1000);
  });
}
