import React from 'react';
import {
  Button,
  Input
} from 'semantic-ui-react'


const LoginForm = (props) => {
  return (
    <>
      <div id="login-form">
        <div>
          <label>Email</label>
          <Input type="text" placeholder=""  id="email" onChange={props.inputChangeHandler}></Input>
        </div>

        <div>
          <label>Password</label>
          <Input type="text" placeholder=""  id="password" onChange={props.inputChangeHandler}></Input>
        </div>
        <Button onClick={(e) => props.loginHandler(e)} id="submit">Submit</Button>
      </div>
    </>
  )
}

export default LoginForm;