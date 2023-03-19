import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import MealPlanner from "./Pages/MealPlanner";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/meal_planner" element={<MealPlanner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
