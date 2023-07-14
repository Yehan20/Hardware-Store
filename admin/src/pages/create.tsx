import React, {useEffect, useState } from 'react'
import {ref,getDownloadURL,uploadBytes} from 'firebase/storage'
import {storage} from '../firebase'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const URL = 'https://toolandservice.onrender.com/products/add'

const Create = () => {

  type InputEvent =  React.ChangeEvent<HTMLInputElement> |React.ChangeEvent<HTMLTextAreaElement>  |React.ChangeEvent<HTMLSelectElement>
 
  const navigate = useNavigate();

  const [file,setFiles] = useState<any>('');
  const [product,setProduct] = useState({category:'Garden Tools',name:'',desc:'',price:''});
  const [error,setError] = useState('');
  const [toggle,setToggle] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(false);

  const handleChange=(event:InputEvent)=>{
    const name = event.target.name;
    const value =event.target.value;
    setProduct({...product,[name]:value})
  }

  useEffect(()=>{
   error && toast(error,{

        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        type:'error',
        progress: undefined,
        theme: "light",
        
    
      })
  },[toggle])


  const handleAdd = async()=>{

    // setError('f')
    if (!file) {
      setToggle(!toggle)
      setError('Fill all Feilds !')
      return ;
    };
    const imageRef = ref(storage,`files/${Date.now()}.${file.name}`)
    try{
        setLoading(true)
        // upload image to fitebase
        const uploaded= await uploadBytes(imageRef,file);
        const imageURL = await getDownloadURL(uploaded.ref) // get the url from the uploaded image

        const newProduct ={...product,img:imageURL};
        const Token = localStorage.getItem('adminToken');

        const addImage = await axios.post(URL,{
            ...newProduct
        },{
             headers:{
                 'Authorization':`Bearer ${Token}`
             }
        })
        setError('')
        setLoading(false)
        navigate('/',{state:{data:addImage.data}})

        
    }catch(e:any){
        // console.log(e.response.data);
        setToggle(!toggle)
        setLoading(false)
        if(!e.response.data.message){
            setError(e.message);
            return
        }
        setError(e.response.data.message);
    }


  }
  return (
    <>
     <ToastContainer  style={{fontFamily:'Poppins'}}/>
     <div className="create container" data-aos='fade-up' data-aos-duration='2000'>
        <h2>Create</h2>
        <form className='create-form'>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Name' name='name' onChange={(e:InputEvent)=>handleChange(e)} />
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <textarea id='desc' name='desc' placeholder='Description'  onChange={(e:InputEvent)=>handleChange(e)}>

                </textarea>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" placeholder='Amount'  onChange={(e:InputEvent)=>handleChange(e)} name='price' />
            </div>
            <div>
                <label htmlFor="stock">Category</label>
                 <select name="category" id=""  onChange={(e:InputEvent)=>handleChange(e)} >
                     <option  value="Garden Tools">	Garden Tools</option>
                     <option  value="Power Tools">	Power Tools</option>
                     <option  value="Hand Tools">	Hand Tools</option>
                     <option  value="Machine Tools">	Machine Tools</option>
                 </select>
            </div>
            {/* <div>
                <label htmlFor="stock">in Stock</label>
                 <select name="" id="">
                     <option  value="true">Yes</option>
                     <option value="false">No</option>
                 </select>
            </div> */}
            <div>
                <label htmlFor="name">Image</label>
                <input type="file" onChange={(e:any)=>setFiles(e.target.files[0])}  />
            </div>
            <button type='button' disabled={loading} onClick={handleAdd}>
                {loading?'Please wait ...':'Add New Product'}
            </button>
      
        </form>
    </div>
    </>

  )
}

export default Create