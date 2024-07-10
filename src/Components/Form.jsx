import { useState } from "react";

export default function form() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function handleTextChange(e) {
    setUser({ ...user, [e.target.id]: e.target.value });
  }

  // Console.log user name
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Hello, ${user.firstName} ${user.lastName}!`);
    setUser({
      firstName: "",
      lastName: "",
    });
  }

  return (
    <div className="Form">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" />
      </div>
      <div className="container">
        <div>
          <h1>Create a Google Account</h1>
          <p>Enter your name</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              onChange={handleTextChange}
              value={user.firstName}
            />
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name (optional)"
              onChange={handleTextChange}
              value={user.lastName}
            />
            <div className="btn_container">
              <input className="submit_btn" type="submit" value="Next" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
