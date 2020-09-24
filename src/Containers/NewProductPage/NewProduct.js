import React from 'react';
import classes from './NewProduct.module.css';
import InputBox from '../../Components/Inputbox/Inputbox'
import Button from '../../Components/Button/Button';
import DeleteIcon from '../../Components/DeleteIcon/DeleteIcon'

class NewProduct extends React.Component{
state={
    categories:JSON.parse(localStorage.getItem("Data")).productsPage.categories,
    newproduct:null
}

handleDelete=()=>{
    this.setState({newproduct:{...this.state.newproduct,image:null}})
}

 handleImageUpdate=(e)=>{
    var fReader= new FileReader();
    fReader.readAsDataURL(e.target.files[0]);
    fReader.onload=(e)=>{
    this.setState({newproduct:{...this.state.newproduct,image:e.target.result}})
    }    
}

handleSubmit=(e)=>{
    e.preventDefault();
    let data=JSON.parse(localStorage.getItem("Data"));
    data.productsPage.products.push(this.state.newproduct);
    localStorage.setItem("Data",JSON.stringify(data))
    alert("Added Product Successfully");
    this.props.history.push("/products");
}

handleInput=(e)=>{
    this.setState({newproduct:{...this.state.newproduct,[e.target.name]:e.target.value}})
}

  render(){
  return (
        <main>
         <div className={classes.Main}>
             <h3 className={classes.Heading}>Add Product</h3>
             <form onSubmit={this.handleSubmit}>
             <div className={classes.ProductDetailsSection}>
             
                 <div className={classes.ProductDetails}>
                   
                   <InputBox handleInput={this.handleInput} label="Product Name" name="name" type="text"/>
                   <p>Description</p>
                   <textarea onChange={this.handleInput} name="description"></textarea>
                   <p>Category</p>
                   <select onChange={this.handleInput} name="category">
                       {this.state.categories.map(item=> <option>{item}</option>)}
                   </select>
                   <div className={classes.ExpireDate}>
                   <InputBox handleInput={this.handleInput} name="expireDate" type="date" label="Expire Date"/>                   
                   </div>
                   <div>
                       <InputBox handleInput={this.handleInput} name="unitSold" type="text" label="Units Sold"/>
                        <InputBox handleInput={this.handleInput}  name="stock" type="text" label="Units In Stock"/>
                    </div>
                    
                 </div>
                 <div className={classes.ProductImage}>
                    <div className={classes.ImageDiv}><div className={this.state.newproduct==null?classes.ImageDivInactive:this.state.newproduct.image==null?classes.ImageDivInactive:null}><img className={this.state.newproduct==null?classes.None:(this.state.newproduct.image==null?classes.None:null)} onChange={this.handleInput} src={this.state.newproduct==null?null:this.state.newproduct.image}/></div>
                        <div className={classes.ImageOverlay}><DeleteIcon opacity="light" handleDelete={this.handleDelete}/></div>
                    </div>
                    <label>
                    <div className={classes.Uploadbutton}>Upload new photo</div><input type="file" name="image" onChange={this.handleImageUpdate} /></label>       

                 </div>
                 </div>
                 <Button label="Add Product Now" type="submit" width="full"/>
             </form>
            </div>
        </main>

  );

  }
}
export default NewProduct;
