import { useState } from "react";
import { connect } from "react-redux";
import { answerQuestionThunk } from "../redux/thunks";

export function SaveAnswer(props) {
    const [qid, setQid] = useState("");
    const [answer, setAnswer] = useState("");

    function formHandler(e) {
        e.preventDefault();

        props.saveAnswer({ qid, answer });
    }

    return (
        <section>
            <h1>Save Answer</h1>
            <div>
                <form onSubmit={formHandler}>
                    <select
                        value={qid}
                        onChange={(e) => setQid(e.target.value)}
                        name="question-id"
                    >
                        {Object.keys(props.questions).map((qid) => (
                            <option key={qid} value={qid}>
                                {qid}
                            </option>
                        ))}
                    </select>
                    <select
                        name="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    >
                        <option value="optionOne">
                            {props.questions[qid]?.optionOne.text}
                        </option>
                        <option value="optionTwo">
                            {props.questions[qid]?.optionTwo.text}
                        </option>
                    </select>
                    <button type="submit">Save Answer</button>
                </form>
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveAnswer({ qid, answer }) {
            dispatch(answerQuestionThunk({ qid, answer }));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveAnswer);
