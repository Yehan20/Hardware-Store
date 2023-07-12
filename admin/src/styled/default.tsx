import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`



   *::after,*::before,*{
     box-sizing:border-box ;
   }


   body{
     margin:0;
     font-family:'Poppins',sans-serif;
    
   }
    
   .container{
     padding:0.5em 3em 1em 3em;
   }
  
   .App{
     display:flex ;
     flex-wrap:wrap;
     min-height:100vh ;
     align-content:space-between;
   }
   .table-container{
     flex-grow:1;
   }
   .td-flex{
     display:flex;
     align-items:center;
     gap:10px;
   }
   .product-table{
      padding:0.5em;
      border-collapse: collapse;
      width: 100%;
      margin-top:1em;
   }
   .product-table th {
    padding:8px 8px 8px 4px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    background-color: #f2f2f2;
    font-family:'Rajdhani',sans-serif;
    font-size:1rem;
   }
   .create.container{
    width:100% ;
    padding-top:0;
    padding-left:2em;
   }
   .create h2{
    margin:0;
   }
   .create-form {
     max-width:500px;
     /* border:1px solid red; */
     width:100% ;
     /* padding:1em; */
   }
   .create-form div{
    margin-bottom:0.5em;
   }
   .create-form input ,.create-form textarea,.create-form select{
     display:block;
     width:100% ;
     padding:0.5em 1em;
     border-radius:0.1em;
     border:0;
     outline:1px solid #ccc;
     font-family:'Poppins',sans-serif;
     font-size:0.9rem;
   }
   .create-form button{
     margin-top:1em;
     display:inline-block;
     padding:0.5em 2em 0.5em 1em;
     border:0;
     background-color:orangered;
     color:#fff;
     font-family:'Poppins',sans-serif;
     text-align:left;
     cursor:pointer;
     border-radius:0.2em;
   }
   .update{
    width:100% ;
   }
   .update h2{
    margin-top:0;
   }
   .create-form button:hover{
     opacity:0.8;
   }
   .create-form label{
     display:block ;
     margin-bottom:0.5em;
 
   }
   .edit-product{
    width:100% ;
    /* border:1px solid red; */
   }
   
   .edit-product form {
    display:flex;
    margin-top:2em;
    justify-content:space-between;
   }
   .edit-product .profile{
     background-color:#f5f5f5;
     padding:1em;
     font-family:'Rajdhani',sans-serif;
   }
   .edit-product h3{
    margin:0;
    font-size:1.3rem;
    font-weight:400;
   }
   .edit-product p{
    font-family:'Poppins',sans-serif;
    margin:0;
   }
   .edit-product img {
     all:unset;
     width:200px ;
   }
   .edit-product .profile div{
    display:flex;
    margin-bottom:1em;
    align-items:center;
    gap:1em;
   }
   .edit-product img{
      width:50px;
   }
   /* .edit-product .profile div  {
     display:flex;
   } */

   .edit-product div{
    margin-bottom:0.5em;
   }
    .edit-product form input ,  .edit-product form textarea,  .edit-product form select{
     display:block;
     width:100% ;
     padding:0.5em 1em;
     border-radius:0.1em;
     border:0;
     outline:1px solid #ccc;
     font-family:'Poppins',sans-serif;
     font-size:0.9rem;
   }
   .edit-product button{
     margin-top:1em;
     display:block;
     padding:0.5em 2em 0.5em 2em;
     border:0;
     background-color:orangered;
     color:#fff;
     font-family:'Poppins',sans-serif;
     text-align:left;
     cursor:pointer;
     border-radius:0.2em;
    
   }
   .edit-product button:hover{
     opacity:0.8;
   }
   .edit-product form .col img{
      width:150px ;
   }
  
   .login{
 
      width:100%;
   }
   .login h2{
    text-align:center;
   }
   .login form{

      margin:10em auto;
      max-width:550px;
      width:100% ;
    
   }
   .login form  label{
      display:block;
   }
   .login form div{
    margin-bottom:1em;
   }
   .login form input{
    width:100% ;
      padding:0.7em 2em;
   }
   .login form button{
      display:inline-block ;
      margin-top:1em;
      border:0;
      background:orangered ;
      color:#fff;
      font-family:'Poppins',sans-serif;
      padding:0.5em 2em;
      cursor:pointer;
   }
   tr:hover td{
    cursor:pointer ;
    background-color:#FFFFF7;
   }
   
   .err{
    color:red;
    text-align:center;
   }
   .users-table{
     height:500px;
     overflow:auto;
   }

`