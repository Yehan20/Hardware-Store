import React from 'react'

const Create = () => {
  return (
    <div className="create container">
        <h2>Create</h2>
        <form className='create-form'>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Name' name='name' />
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <textarea id='desc' placeholder='Description'>

                </textarea>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" placeholder='Amount' name='amount' />
            </div>
            <div>
                <label htmlFor="stock">Category</label>
                 <select name="" id="">
                     <option  value="true">Yes</option>
                     <option value="false">No</option>
                 </select>
            </div>
            <div>
                <label htmlFor="stock">in Stock</label>
                 <select name="" id="">
                     <option  value="true">Yes</option>
                     <option value="false">No</option>
                 </select>
            </div>
            <div>
                <label htmlFor="name">Image</label>
                <input type="file"  />
            </div>
            <button>
                Add New Product
            </button>
        </form>
    </div>
  )
}

export default Create