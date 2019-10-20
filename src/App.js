import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import DisplayCooperChart from './Components/DisplayCooperChart';
import {
  Container,
  Grid,
  Header,
  Button
} from 'semantic-ui-react'


class App extends Component {
  state = {
    distance: '',
    gender: 'female',
    age: '',
    renderLoginForm: false,
    authenticated: false,
    email: '',
    password: '',
    message: '',
    entrySaved: false,
    renderIndex: false,
    updateIndex: false,
    renderCooperChart: false,
    updateCooperChart: false
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true, updateCooperChart: true });
  }


  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  resultCooperChartUpdated() {
    this.setState({ updateCooperChart: false })
  }

 render() {
  let renderLogin;
  let renderSignup;
  let user;
  let performanceDataIndex;
  let renderChart;
  
  if (this.state.authenticated === true) {
    user = JSON.parse(sessionStorage.getItem('credentials')).uid;
    renderLogin = (
      <p>Hi {user}</p>
    )
    if (this.state.renderIndex === true) {
      performanceDataIndex = (
        <>
          <DisplayPerformanceData
            updateIndex={this.state.updateIndex}
            indexUpdated={this.indexUpdated.bind(this)}
          />
          <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
          </>
          )
    } else {
      performanceDataIndex = (
        <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
      )
    }
    if (this.state.renderCooperChart === true) {
      renderChart = (
        <>
          <DisplayCooperChart
            updateCooperChart={this.state.updateCooperChart}
            resultCooperChartUpdated={this.resultCooperChartUpdated.bind(this)}
          />
          <Button id="show-chart" onClick={() => this.setState({ renderCooperChart: false })}>Hide Chart</Button>
        </>
      )
    } else {
      renderChart = (
        <Button id="show-chart" onClick={() => this.setState({ renderCooperChart: true })}>Show Chart</Button>
      )
    }
  } else { 
    if (this.state.renderLoginForm === true) {
      renderLogin = (
      <>
        <LoginForm 
          loginHandler={this.onLogin.bind(this)}
          inputChangeHandler={this.onChange.bind(this)}
        />
      </>
      )
    } else {
      renderLogin = (
        <>
          <Button id="login" onClick={ () => this.setState({ renderLoginForm: true }) }>Login</Button>
          <p>{this.state.message}</p>
        </>
      )
    }
    if (this.state.renderSignupForm === true) {
      renderSignup = (
      <>
        <SignupForm 
          signupHandler={this.onSignup.bind(this)}
          inputChangeHandler={this.onChange.bind(this)}
        />
      </>
      )
    } else {
      renderSignup = (
        <>
          <Button id="login" onClick={ () => this.setState({ renderSignupForm: true }) }>Sign Up</Button>
          <p>{this.state.message}</p>
        </>
      )
    }
  }
    return (
      <>
        <Container>
          <Grid centered columns={3}>
          <Grid.Column>
            <Header
              as="h1"
              textalign="center"
              >
                Cooper
              </Header>
              <Grid.Row>
                <InputFields
                  inputChangeHandler={this.onChange.bind(this)} 
                  />
                  <DisplayCooperResult 
                    distance={this.state.distance}
                    gender={this.state.gender}
                    age={this.state.age}
                    authenticated={this.state.authenticated}
                    entrySaved={this.state.entrySaved}
                    entryHandler={this.entryHandler.bind(this)}
                  />
                  
                    <div>
                      {performanceDataIndex}
                    </div>

                    {renderLogin}
                    {renderSignup}
                  </Grid.Row>
                  
                  <Grid.Row>
                    <Container>
                      <div>
                        {renderChart}
                      </div>
                    </Container>
                  </Grid.Row>
              </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;