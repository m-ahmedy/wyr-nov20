import { Route, Routes } from "react-router";
import Loading from "./components/Loading";
import { NavBar } from "./components/NavBar";
import CreateQuestion from "./routes/CreateQuestion";
import GetQuestions from "./routes/GetQuestions";
import GetUsers from "./routes/GetUsers";
import SaveAnswer from "./routes/SaveAnswer";
import SelectUser from "./routes/SelectUser";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Would you rather?</h1>
      <Loading />
      <NavBar />
      <Routes>
        <Route path="/users/get" element={<GetUsers />} />
        <Route path="/users/select" element={<SelectUser />} />
        <Route path="/questions/get" element={<GetQuestions />} />
        <Route path="/questions/create" element={<CreateQuestion />} />
        <Route path="/answers/save" element={<SaveAnswer />} />
      </Routes>
    </div>
  );
}
