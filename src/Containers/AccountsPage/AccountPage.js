import React from 'react';
import classes from './AccountsPage.module.css';
import InputBox from '../../Components/Inputbox/Inputbox'
import Button from '../../Components/Button/Button';
import DeleteIcon from '../../Components/DeleteIcon/DeleteIcon';

class AccountPage extends React.Component{

  state={
    responseData:JSON.parse(localStorage.getItem("Data")).accountsPage,
    activeAccountData:null,
    activeAccount:null
  }

  handleChange=(val)=>{
    if(this.state.responseData[val]!=undefined){
    this.setState({activeAccountData:{...this.state.responseData[val],confirmpassword:this.state.responseData[val].password},activeAccount:val})
  }
}

  handleDelete=()=>{
    this.setState({activeAccountData:{...this.state.activeAccountData,profilePic:null}})
  }

  handleInput=(e)=>{
    this.setState({activeAccountData:{...this.state.activeAccountData,[e.target.name]:e.target.value}})
  }

 handleImageUpdate=(e)=>{
   var fReader= new FileReader();
   fReader.readAsDataURL(e.target.files[0]);
   fReader.onload=(e)=>{
    this.setState({activeAccountData:{...this.state.activeAccountData,profilePic:e.target.result}})
   }
   
 }

 handleUpdate=()=>{
   let data=JSON.parse(localStorage.getItem("Data"))
   data.accountsPage={...this.state.responseData,[this.state.activeAccount]:{...this.state.activeAccountData}}
   localStorage.setItem("Data",JSON.stringify(data))
   this.setState({responseData:{...this.state.responseData,[this.state.activeAccount]:{...this.state.activeAccountData}}})
   alert("Information Updated Successfully!")
 }
 
  render(){
  return (
    <div>
    <main>
      <div className={classes.AccountSection}>
      <h3>List of Accounts</h3>
      <p>Accounts</p>
      <select onChange={(e=>{this.handleChange(e.target.value)})}>
        <option>Select account</option>
        <option>Admin</option>
        <option>Editor</option>
        <option>Merchant</option>
        <option>Customer</option>
      </select>
      </div>
      <div className={classes.AccountDetails}>
        <div className={classes.AvatarSection}>
          <h3>Change Avatar</h3>
          <div className={classes.ImageDiv}><div className={this.state.activeAccountData==null?classes.ImageDivInactive:this.state.activeAccountData.profilePic==null?classes.ImageDivInactive:null}><img src={this.state.activeAccountData==null?null:this.state.activeAccountData.profilePic}/></div>
            <div className={classes.ImageOverlay}><DeleteIcon opacity="light" handleDelete={this.handleDelete}/></div>
          </div>
          <label><div className={classes.Uploadbutton}>Upload new photo</div><input type="file" onChange={this.handleImageUpdate} /></label>       
        </div>
        <div className={classes.AccountSettingsSection}>
        <h3>Account Settings</h3>
        <div>
          <InputBox label="Account Name" type="text" name="name" handleInput={this.handleInput} value={this.state.activeAccountData==null?"":this.state.activeAccountData.name} />
          <InputBox label="Account Email" type="email" name="email" handleInput={this.handleInput} value={this.state.activeAccountData==null?"":this.state.activeAccountData.email}/>
          <InputBox label="Password" type="password" name="password" handleInput={this.handleInput} value={this.state.activeAccountData==null?"":this.state.activeAccountData.password}/>
          <InputBox label="Re-enter Password" name="confirmpassword" type="password" handleInput={this.handleInput} value={this.state.activeAccountData==null?"":this.state.activeAccountData.confirmpassword}/>
          <InputBox label="Phone" type="text" name="phone" handleInput={this.handleInput} value={this.state.activeAccountData==null?"":this.state.activeAccountData.phone}/>
          <Button label="Update your profile" width="avail" handleUpdate={this.handleUpdate}/>
          <Button label="Delete your account" width="full"/>
        </div>

        </div>
      </div>
    </main>
    </div>
  );

  }
}
export default AccountPage;
