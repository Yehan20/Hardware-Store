import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux_selectors'
import { getUsers } from '../slices/authSlice';
import profile from '../assets/images/profile.png'
import { isValidMotionProp } from 'framer-motion';

type userType={
     _id:string,
     name:string,
     isAdmin:boolean,
     createdAt:string
}

const Users = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector((state) => state.Auth)
    console.log(users);
    useEffect(() => {
        const token = localStorage.getItem('adminToken')
        dispatch(getUsers(token as string))
    }, [])
    return (
        <div className='table-container users-table'>
            <table className='product-table'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Is Admin</th>
                        <th>Date Joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user:userType, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.isAdmin?'Admin':'User'}</td>
                            <td>{user.createdAt.toLocaleString().split('T')[0]}</td>
                            <td>
                                <div className='td-flex'>
                                    <img src={profile} alt='profile'/>
                                </div>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users