import React from 'react';
import classes from './LoginPage.module.css';
import InputBox from '../../Components/Inputbox/Inputbox'
import Button from '../../Components/Button/Button';

class LoginPage extends React.Component{
state={
    user:null
}
handleInput=(e)=>{
    this.setState({user:e.target.value})
}

handleLogin=(e)=>{
  e.preventDefault();
  this.props.onUserLogin(this.state.user)
}
  render(){
  return (
    <div>
        <main className={classes.Main}>
         <div className={classes.LoginBox}>
            <h3>Welcome to Dashboard Login</h3>
            <form onSubmit={this.handleLogin}>
            <InputBox label="Username" type="text" width="full" handleInput={this.handleInput}/>
            <InputBox label="Password" type="password" width="full"/>
            <Button label="Login" type="submit" width="full" />
            <Button label="Forgot Password" width="full"/>
            </form>
         </div>
        </main>
    </div>
  );

  }
}
export default LoginPage;
