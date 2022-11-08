import "./styles.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaInfoCircle
} from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" />
          <h3 className="name">MetaMask</h3>
          <h4 className="username">@metamask</h4>
          <p className="bio">MetaMask brings Ethereum to your web browser</p>
          <div className="links">
            <ul>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="org">
            <label>6/8 Organizations </label>
            <span className="info">
              <FaInfoCircle />
            </span>
            <input type="range" />
          </div>
          <div className="follow-section">
            <p>
              <b>4K</b> Followers
            </p>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
