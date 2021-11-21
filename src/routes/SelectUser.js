import { connect } from "react-redux";
import { loginUserThunk } from "../redux/thunks";

export function SelectUser(props) {
  function formHandler(e) {
    e.preventDefault()

    const userId = e.target['user-id'].value

    props.loginUser(userId)
  }

  return (
    <section>
      <h1>Select User</h1>
      <div>
        <form onSubmit={formHandler}>
          <select name='user-id'>
            {props.users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <button type='submit'>Select User</button>
        </form>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    users: Object.keys(state.users).map(userId => state.users[userId])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser(userId) {
      dispatch(loginUserThunk(userId))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectUser)
