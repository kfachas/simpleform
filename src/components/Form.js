import { useState } from "react";
import StepTwo from "./StepTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [verif, setVerif] = useState("");
  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");
  const [eye, setEye] = useState("eye-slash");
  const [eye2, setEye2] = useState("eye-slash");

  const [edit, setEdit] = useState(true);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handlePassword2Change = (event) => {
    const value = event.target.value;
    setPassword2(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (password === password2 && password.length > 1) {
      setVerif("blue");
      if (username && email) {
        setEdit(false);
      }
    } else if (password !== password2 && password.length > 1) {
      setVerif("red");
    }
  };
  if (!edit) {
    return (
      <StepTwo
        name={username}
        email={email}
        password={password}
        setEdit={setEdit}
      />
    );
  } else {
    return (
      <div>
        <h1>Create Account</h1>
        <form onSubmit={handleClick}>
          <ul>
            <li>
              <input
                placeholder="Username"
                type="text"
                value={username}
                name="username"
                onChange={handleUsernameChange}
              />
            </li>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </li>
            <li
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <div
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
              >
                <FontAwesomeIcon
                  className="eye"
                  onClick={() => {
                    if (eye === "eye-slash") {
                      setEye("eye");
                    } else {
                      setEye("eye-slash");
                    }
                  }}
                  icon={eye}
                />
              </div>
              <input
                placeholder="Password"
                type={type}
                name="password"
                className={verif}
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </li>
            <li
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <div
                onClick={() => {
                  if (type2 === "password") {
                    setType2("text");
                  } else {
                    setType2("password");
                  }
                }}
              >
                <FontAwesomeIcon
                  className="eye"
                  onClick={() => {
                    if (eye2 === "eye-slash") {
                      setEye2("eye");
                    } else {
                      setEye2("eye-slash");
                    }
                  }}
                  icon={eye2}
                />
              </div>
              <input
                placeholder="Password"
                type={type2}
                name="password2"
                className={verif}
                value={password2}
                onChange={handlePassword2Change}
              />
            </li>
            <input
              type="submit"
              value="Register"
              style={{
                backgroundColor: "#5C47D2",
                color: "white",
                borderRadius: "10px",
                width: "170px",
                marginLeft: "30px",
              }}
            />
          </ul>
          <h3>{verif === "blue" && "Les mots de passes sont identiques"}</h3>
          <h3>
            {verif === "red" && "Les mots de passes ne sont pas identiques"}
          </h3>
        </form>
      </div>
    );
  }
};

export default Form;
