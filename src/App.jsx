import Rating from "./Component/Rating";
import "./App.css";
import ThankYouPage from "./Component/ThankYouPage";
import { useState } from "react";


function App() {
  const [showThankYouPage, setshowThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <div className="app">
      {/* <Rating/> */}
      {/* <ThankYouPage/> */}
      {showThankYouPage ? (
        <ThankYouPage rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setshowThankYouPage={setshowThankYouPage}
        />
      )}

      <div className="attribution">
        Challenge by{" "}
        <span
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </span>
        . Coded by <span href="#">Psargar616 (Pranjali Sargar)</span>.
      </div>
    </div>
  );
}

export default App;
