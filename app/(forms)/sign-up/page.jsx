import React from "react";

export default function SignUp() {
  return (
    <form>
      <h1>Sign up</h1>
      <div>
        <label>First Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
    </form>
  );
}
