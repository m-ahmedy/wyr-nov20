import { connect } from "react-redux";
import { getQuestionsThunk } from "../redux/thunks";

export function GetQuestions(props) {
  return (
    <section>
      <h2>Get Questions</h2>
      <div>
        <button onClick={() => props.getQuestions()}>
          Get Questions
        </button>
      </div>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getQuestions() {
      dispatch(getQuestionsThunk())
    }
  }
}

export default connect(null, mapDispatchToProps)(GetQuestions)
