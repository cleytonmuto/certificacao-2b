import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import "./App.css";
import Welcome from "./components/Welcome/Welcome";
import PickCategory from "./components/PickCategory/PickCategory";
import Question from "./components/Question/Question";
import GameOver from "./components/GameOver/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
