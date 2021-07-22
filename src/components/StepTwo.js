const StepTwo = ({ name, email, password, setEdit }) => {
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
};

export default StepTwo;
