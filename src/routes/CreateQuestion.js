import { connect } from "react-redux";
import { createQuestionThunk } from "../redux/thunks";

export function CreateQuestion(props) {

  function formHandler(e) {
    e.preventDefault()

    const optionOneText = e.target['option-one'].value
    const optionTwoText = e.target['option-two'].value
    
    props.createQuestion({ optionOneText, optionTwoText })
  }
    return (
        <section>
            <h1>Create Question</h1>
            <div>
                <form onSubmit={formHandler}>
                    <input name="option-one" required />
                    <input name="option-two" required />
                    <button type='submit'>Create Question</button>
                </form>
            </div>
        </section>
    );
}

function mapDispatchToProps(dispatch) {
  return {
    createQuestion({ optionOneText, optionTwoText }) {
      dispatch(createQuestionThunk({ optionOneText, optionTwoText }))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateQuestion)
