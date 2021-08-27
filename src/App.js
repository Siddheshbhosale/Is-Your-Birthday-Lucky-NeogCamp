import "./styles.css";
import happy from "/src/happy.svg";
import unhappy from "/src/unhappy.svg";
import { useState } from "react";

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

export default function App() {
  var luckyNo = 0;
  var date = "";
  const [displayalert, setdisplayAlert] = useState("flex");
  const [displayresult, setdisplayresult] = useState('');

  const checkTheNO = (e) => {
    e.preventDefault();
    let sum = 0;
    let array = date.split("-");
    array.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
      }
      return 0;
    });
    if (sum % luckyNo === 0) {
      setdisplayresult(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setdisplayresult([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv
      ]);
    }
  };

  return (
    <div className="container">
      <div className="firstpage">
        <div className="maintitle">
          <h1>
            <p>Hello Friend!</p>Want to know is your birthday lucky
          </h1>
          <a href="#secondpage">Checkout Now 👇</a>
        </div>
      </div>

      {/* secondpage start */}
      <div id="secondpage">
        {/* alertbox */}
        <div id="alertBox" style={{ display: `${displayalert}` }}>
          <div className="privacy">
            <strong>Privacy Notice!</strong> We are not storing your data.
          </div>
          <div
            id="cross"
            onClick={() => {
              setdisplayAlert("none");
            }}
          >
            <span role="img" aria-labelledby="crossIcon">
              &#10060;
            </span>
          </div>
        </div>
        {/* alertBox end */}
        {/* workspace start */}
        <div className="workspace">
          <div className="instruction">
            Enter your birthday date and lucky no....
          </div>
          {/* form start */}
          <form onSubmit={checkTheNO}>
            <label htmlFor="input-date">Enter your birthday</label>
            <input
              id="input-date"
              type="date"
              onChange={(e) => {
                date = e.target.value;
              }}
              required
            />

            <label htmlFor="input-no.">Enter your lucky no.</label>
            <input
              id="input-no."
              type="number"
              placeholder="0"
              onChange={(e) => {
                luckyNo = e.target.value;
              }}
              required
            />
            <button type="submit">Check</button>
          </form>
          {/* form end */}
        </div>
        {/* workspace end */}

        <div>
          <div className="lable">{displayresult[0]}</div>
          <div>{displayresult[1]}</div>;
        </div>

         {/* footer start */}
        <footer>
          <div className="creator">
            Made with <strong>&lt;/&gt;</strong> by Siddhesh
          </div>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Siddheshbhosale" target="blank">
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="#" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="https//:linkedin.com/in/siddheshbhosale" target="blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="footerLink">
              <a href="#" target="blank">
                <i className="fas fa-briefcase"></i>
              </a>
            </li>
          </ul>

          <div className="legacyText">
            <a href="#alertBox" style={{ cursor: "pointer", color: "Black" }}>
              Privacy Policy
            </a>
          </div>
        </footer>
        {/* footer end */}

      </div>
      {/* secondpage end */}
    </div>
  );
}

