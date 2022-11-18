import { useEffect } from "react";
import MainSection from "./components/MainSection.js";
import ReviewsSection from "./components/ReviewsSection";
import useAxios from "./hooks/useAxios";

function App() {

  return (
    <div className="container mx-auto">
    <MainSection/>
    <ReviewsSection/>
    </div>
  );
}

export default App;
