import { connect } from "react-redux";
import { getUsersThunk } from "../redux/thunks";

export function GetUsers(props) {
  return (
    <section>
      <h2>Get Users</h2>
      <div>
        <button onClick={() => props.getUsers()}>
          Get Users
        </button>
      </div>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers() {
      dispatch(getUsersThunk())
    }
  }
}

export default connect(null, mapDispatchToProps)(GetUsers)
