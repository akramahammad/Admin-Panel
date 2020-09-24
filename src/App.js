import React from 'react';
import classes from './App.module.css';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import axios from 'axios'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import AccountsPage from './Containers/AccountsPage/AccountPage'
import LoginPage from './Containers/Login Page/LoginPage'
import ProductsPage from './Containers/ProductsPage/ProductsPage'
import NewProduct from './Containers/NewProductPage/NewProduct';
import DashboardPage from './Containers/DashboardPage/Dashboard';

class App extends React.Component{

  state={
    isUserLoggedIn:localStorage.getItem("status")!=undefined?localStorage.getItem("status")=="true":false,
    username:null
  }

  onUserLogin=(user)=>{
    this.setState({isUserLoggedIn:true,username:user})
    localStorage.setItem("status",true);
    localStorage.setItem("username",user);
  }
  onUserLogout=()=>{
    this.setState({isUserLoggedIn:false})
    localStorage.setItem("status",false);
  }
  componentDidMount(){
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
    .then(resp =>{
      window.localStorage.getItem("Data")!=undefined?JSON.parse(window.localStorage.getItem("Data")):window.localStorage.setItem("Data",JSON.stringify(resp.data))
    })
    .catch(err=>{
      console.log("Call Failed")
    })

    }

  render(){
  return (
    <div className="App">
    <BrowserRouter>
      <Route render={(props)=> <Topbar onUserLogout={this.onUserLogout} user={this.state.username} loggedInStatus={this.state.isUserLoggedIn} {...props}/>}/>
      <Switch>
        <Route path="/accounts" render={()=> this.state.isUserLoggedIn?<AccountsPage/>:<Redirect to="/"/>}/>
        <Route exact path="/" render={()=> this.state.isUserLoggedIn?<Redirect to="/dashboard"/>:<LoginPage onUserLogin={this.onUserLogin}/>} />
        <Route exact path="/products" render={(props)=> this.state.isUserLoggedIn?<ProductsPage {...props}/>:<Redirect to="/"/>}/>
        <Route path="/products/add" render={(props)=> this.state.isUserLoggedIn?<NewProduct {...props}/>:<Redirect to="/"/>}/>
        <Route path="/dashboard" render={(props)=> this.state.isUserLoggedIn?<DashboardPage {...props}/>:<Redirect to="/"/>}/>
      </Switch>
    </BrowserRouter>
      <Footer/>
    </div>
  );

  }
}
export default App;
