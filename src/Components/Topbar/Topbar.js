import React from 'react'
import classes from './Topbar.module.css';
import Menuitem from '../MenuItem/Menuitem'
import {Link} from 'react-router-dom'

const Topbar=(props)=>{
    return(
        <header className={classes.Topbar}>
            <Link to="/"><h2>Product Admin</h2></Link>
            <nav>
                {props.loggedInStatus?<Link to="/dashboard"><Menuitem label="Dashboard" class="fas fa-tachometer-alt" active={props.location.pathname=="/dashboard"?true:false}/></Link>:<Link to="/"><Menuitem label="Dashboard" class="fas fa-tachometer-alt"/></Link>}
                {props.loggedInStatus?<Link to="/products"><Menuitem label="Products" class="fas fa-shopping-cart" active={props.location.pathname=="/products"||props.location.pathname=="/products/add"?true:false}/></Link>:<Link to="/"><Menuitem label="Products" class="fas fa-shopping-cart"/></Link>}
                {props.loggedInStatus?<Link to="/accounts"><Menuitem label="Accounts" class="far fa-user" active={props.location.pathname=="/accounts"?true:false}/></Link>:<Link to="/"><Menuitem label="Accounts" class="far fa-user"/></Link>}
            </nav>
            {
                props.loggedInStatus?<p>{props.user==undefined?localStorage.getItem("username"):props.user} <span onClick={props.onUserLogout}>Logout</span></p>:<span>Login</span>
            }
            <div className={classes.MenuDiv}>
                <div className={classes.HamburgerWrapper}><i className="fas fa-bars"></i></div>
                <div className={classes.Dropdown}>
                {props.loggedInStatus?<Link to="/dashboard"><Menuitem label="Dashboard" class="fas fa-tachometer-alt" active={props.location.pathname=="/dashboard"?true:false}/></Link>:<Link to="/"><Menuitem label="Dashboard" class="fas fa-tachometer-alt"/></Link>}
                {props.loggedInStatus?<Link to="/products"><Menuitem label="Products" class="fas fa-shopping-cart" active={props.location.pathname=="/products"||props.location.pathname=="/products/add"?true:false}/></Link>:<Link to="/"><Menuitem label="Products" class="fas fa-shopping-cart"/></Link>}
                {props.loggedInStatus?<Link to="/accounts"><Menuitem label="Accounts" class="far fa-user" active={props.location.pathname=="/accounts"?true:false}/></Link>:<Link to="/"><Menuitem label="Accounts" class="far fa-user"/></Link>}
                {
                props.loggedInStatus?<p className={classes.DropdownUsername}>{props.user==undefined?localStorage.getItem("username"):props.user} <span onClick={props.onUserLogout}>Logout</span></p>:<span>Login</span>
                }
                </div>
            </div>
            
        </header>
    )
}

export default Topbar;