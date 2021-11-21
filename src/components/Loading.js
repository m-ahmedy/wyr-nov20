import { connect } from "react-redux";

export function Loading({ active }) {
  return (
    <hr
      style={{
        height: 10,
        border: "none",
        backgroundColor: active ? "blue" : "transparent"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    active: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
