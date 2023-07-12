import React,{useEffect,useState} from 'react'
import { useAppSelector } from '../hooks/redux_selectors';
import { Navigate, useNavigate } from 'react-router';

const PrivateRoute = ({children}:any) => {

    const {user,loading} = useAppSelector(state=>state.Auth);

    
    if(!loading && user.name){
        return children;
    }

    return loading?'':(!loading && user.name)?children:<Navigate to={'/login'} replace={true}/>
}

export default PrivateRoute