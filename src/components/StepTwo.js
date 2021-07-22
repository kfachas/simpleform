import { useState } from "react";
import Form from "./Form";
const StepTwo = ({ name, email, password }) => {
  const [edit, setEdit] = useState(false);
  if (!edit) {
    return (
      <>
        <h1 class="results">Results</h1>
        <div className="stepTwo">
          <p>Email : {email}</p>
          <p>Name : {name}</p>
          <p>Password : {password}</p>
        </div>
        <div className="btnTwo">
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit your information
          </button>
        </div>
      </>
    );
  } else {
    return <Form name={name} email={email} password={password}></Form>;
  }
};

export default StepTwo;
