import React from 'react';
import classes from './ProductsPage.module.css';
import InputBox from '../../Components/Inputbox/Inputbox'
import Button from '../../Components/Button/Button';
import DeleteIcon from '../../Components/DeleteIcon/DeleteIcon';
import TableRow from '../../Components/TableRow/TableRow';
import {Link} from 'react-router-dom'

class ProductsPage extends React.Component{

state={
    categories:JSON.parse(localStorage.getItem("Data")).productsPage.categories,
    products:JSON.parse(localStorage.getItem("Data")).productsPage.products.map(item =>{return{...item,checked:false}}),
    newCategory:"",
    Overlay:false
}

handleToggle=(e)=>{
    const updatedproduct=this.state.products.map(item=>{
        if(item.name==e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML){
            return {...item,checked:!item.checked};
        }else{
            return item;
        }
    })
    this.setState({products:[...updatedproduct]})
}

handleProductDelete=(e)=>{
    let prodpos;
    const updatedproduct=this.state.products.map((item,pos)=>{
        if(item.name==e.target.parentElement.parentElement.parentElement.childNodes[1].innerHTML){
            prodpos=pos;
            return null;
        }else{
            return item;
        }
    })
    updatedproduct.splice(prodpos,1);
    this.setState({products:[...updatedproduct]})
    const combinedProdCat={products:[...updatedproduct],categories:[...this.state.categories]}
    const Data=JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("Data",JSON.stringify({...Data,productsPage:{...combinedProdCat}}));

}

handleProductDeleteMlt=()=>{
    const products=[...this.state.products];
    for(var i=0;i<products.length;i++){
        if(products[i].checked){
            products.splice(i,1);
            i--;
        }
    }
    this.setState({products:[...products]});
    const combinedProdCat={products:[...products],categories:[...this.state.categories]}
    const Data=JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("Data",JSON.stringify({...Data,productsPage:{...combinedProdCat}}));
}

handleInput=(e)=>{
    e.target.value=this.state.newCategory==e.target.value?"":e.target.value;
    this.setState({newCategory:e.target.value})
}

handleClose=()=>{
    this.setState({Overlay:false})
}

handleNewCategory=(e)=>{
    e.preventDefault()
    e.target.category.value=""
    const updatedcategory=[...this.state.categories,this.state.newCategory]
    this.setState({categories:updatedcategory,Overlay:false})
    const combinedProdCat={products:[...this.state.products],categories:[...updatedcategory]}
    const Data=JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("Data",JSON.stringify({...Data,productsPage:{...combinedProdCat}}));

}

handleCategoryDelete=(e)=>{
    let prodpos;
    const updatedcategory=this.state.categories.map((item,pos)=>{
        if(item==e.target.parentElement.parentElement.parentElement.childNodes[0].innerHTML){
            prodpos=pos;
            return null;
        }else{
            return item;
        }
    })
    updatedcategory.splice(prodpos,1);
    this.setState({categories:[...updatedcategory]})
    const combinedProdCat={products:[...this.state.products],categories:[...updatedcategory]}
    const Data=JSON.parse(localStorage.getItem("Data"));
    localStorage.setItem("Data",JSON.stringify({...Data,productsPage:{...combinedProdCat}}));
}

  render(){
  return (
     <div> 
    <div className={this.state.Overlay?classes.OverLay:classes.None}></div>
    <div className={this.state.Overlay?classes.Popup:classes.None}>
            <div className={classes.PopupHeading}>
                <h3>New Category</h3>
                <i onClick={this.handleClose} className="fas fa-times"></i>
            </div>
            <form onSubmit={this.handleNewCategory} >
            <InputBox handleInput={this.handleInput} name="category" label="Category" type="text"/>
            <Button label="Add" type="submit" width="full"/>
            </form>
    </div>
    <main className={classes.Main}>
        <div className={classes.ProductList}>
        <div className={classes.TableSection}>
        <table>
        <thead>
        <tr className={classes.TableHeaders}>
            <th></th>
            <th>Product Name</th>
            <th>Units Sold</th>
            <th>In Stock</th>
            <th>Expire Date</th>
            <th></th>   
        
        </tr>
        </thead>
        <tbody>
        {this.state.products.map((item,pos) =>{
            return <TableRow key={pos+1} product={item} handleToggle={this.handleToggle} handleDelete={this.handleProductDelete}/>
        })}
        </tbody>
        </table>
        </div>

        <Link to ="products/add"><Button label="Add New Product" width="full"/></Link>
        <Button label="Delete Selected Products" width="full" handleUpdate={this.handleProductDeleteMlt}/>
        </div>
        <div className={classes.CategoryList}>
        <h3>Product Categories</h3>
        <div className={classes.TableSection}>
        <table>
            <tbody>
                {this.state.categories.map((item,pos)=>{
                    return (<tr key={pos+1}>
                      <td>{item}</td>
                      <td><DeleteIcon handleDelete={this.handleCategoryDelete}/></td>
                    </tr>)
                })}
            </tbody>
        </table>
        </div>
        <Button handleUpdate={()=>{this.setState({Overlay:true})}} label="Add New Category" width="full"/>
        </div>

        </main>
    </div>
  );

  }
}
export default ProductsPage;
