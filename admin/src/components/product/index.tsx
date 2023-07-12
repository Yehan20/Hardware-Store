import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa'
interface ProductInterface{
  product:{
    _id:string;
    name:string;
    category:string;
    price:number;
    inStock:boolean;
    img:string;
  }

}

const Product:React.FC<ProductInterface>= ({product}) => {
  return (
     <tr>
       <td><input type="checkbox" name="product" /></td>
       <td>
        <div className='td-flex'>
        <img src={product.img} alt={product.name} /> <span>{product.name}</span> 
        </div>
        </td>
       <td>{product.category}</td>
       <td>{product.price}</td>
       <td>{product.inStock?'Yes':'No'}</td>
       <td><Link className='edit' to={`/edit/${product._id}`}>Edit</Link>
           <button ><FaTrashAlt color='red'/></button>
       </td>
     </tr>
  )
}

export default Product