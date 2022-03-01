import { useState } from "react";
import "./EightBall.css";

/** returns random int index from 0 to length of answers
 *  REVIEW: move inside component or give better name(choice or choose)
 */
function choice(answers) {
  return Math.floor(Math.random() * answers.length);
}

/** Eightball for showing random message and color on click
 *
 *  Props:
 *  - Answers: {msg, color}
 *
 *  State:
 *  -message -> random message & color
 *
 *  Index -> App -> EightBall
 */

function EightBall({ answers }) {
  const [msgAndColor, setMsgAndColor] = useState({
    msg: "Think of a question",
    color: "black",
  });
  function handleClick() {
    setMsgAndColor(answers[choice(answers)]);
  }
  

  function setInitial() {
    setMsgAndColor({
      msg: "Think of a question",
      color: "black",
    });
  }

  return (
    <div className="EightBall">
      <button
        className="EightBall-random"
        onClick={handleClick}
        style={{ backgroundColor: msgAndColor.color }}
      >
        <b className="EightBall-msg">{msgAndColor.msg}</b>
      </button>

      <button className="EightBall-initial" onClick={setInitial}>
        <b className="EightBall-msg">Reset</b>
      </button>
    </div>
  );
}

export default EightBall;
