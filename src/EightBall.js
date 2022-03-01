import { useState } from "react";
import "./EightBall.css";

/** returns random int index from 0 to length of answers */
function getRandomColorAndMessage(answers) {
  return Math.floor(Math.random() * answers.length);
}

/** Eightball for showing random message and color on click
 *
 *  Props:
 *  - Answers: {msg, color}
 *
 *  State:
 *  -message -> random message
 *  -color -> random color
 *
 *  Index -> App -> EightBall
 */

function EightBall({ answers }) {
  const [msg, setMsg] = useState("Think of a question");
  const [color, setColor] = useState("black");
  function handleClick() {
    setMsg(answers[getRandomColorAndMessage(answers)].msg);
    setColor(answers[getRandomColorAndMessage(answers)].color);
  }
  return (
    <button
      className="btn"
      onClick={handleClick}
      style={{ backgroundColor: color, borderRadius: "50%", height: "150px" }}
    >
      <b style={{ color: "white" }}>{msg}</b>
    </button>
  );
}

export default EightBall;
