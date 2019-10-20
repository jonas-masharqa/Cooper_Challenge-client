import React from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react'

function SignupForm(props) {
  return (
    <>
      <div id="login-form">
        <div>
          <label>Email</label>
          <Input type="text" id="email" onChange={props.inputChangeHandler} />
        </div>

        <div>
          <label>Password</label>
          <Input type="text" id="password" onChange={props.inputChangeHandler} />
        </div>

        <div>
          <label>Password Confirmation</label>
          <Input type="text" id="password_confirmation" onChange={props.inputChangeHandler} />
        </div>
        <Button onClick={(e) => props.signupHandler(e)} id="submit">Submit</Button>
      </div>
    </>
  )
}

export default SignupForm;
