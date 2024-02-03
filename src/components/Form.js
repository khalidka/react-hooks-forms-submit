import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);
  // add state for holding error messages
const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add some validation logic to check if the form inputs have the required data, and hold some error messages in state:
    
    // first name is required
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* conditionally render error messages */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;

/* 
Conclusion

By setting up our form components using controlled inputs, we give React state control over the data being displayed in the DOM. As a benefit of having the form data in state, we can more easily access it once a form is submitted and either pass it along to another component or use it to make a fetch request. We can also more easily perform some validation logic when the form data is submitted.
*/