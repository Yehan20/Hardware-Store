import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './style.css'
import { NavLink } from 'react-router-dom'
import {HiTemplate} from 'react-icons/hi'
import {FaUsers} from 'react-icons/fa'
import {IoAnalyticsSharp} from 'react-icons/io5'
import {SiGoogleanalytics} from 'react-icons/si'
import {BsListUl} from 'react-icons/bs'
import {TbReportAnalytics} from 'react-icons/tb'
import {FiPlus,FiEdit,FiLogOut} from 'react-icons/fi'
import { useAppDispatch } from '../../hooks/redux_selectors'
import { logout } from '../../slices/authSlice'

const SideBar = () => {
  const location  = useLocation();
  const pageName= (location.pathname.split('/')[1])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = ()=>{
      dispatch(logout());
      navigate('/login',{replace:true})

  }
  return (
    <aside>
    <div>
      <h3>Dashboard</h3>
      <ul>
        <li><HiTemplate/><NavLink to='/'>Products</NavLink></li>
        <li><FiPlus/><NavLink to='/new'>New Product</NavLink></li>
        <li className={`${pageName==='edit'?'active':''}`}><FiEdit/><span style={{display:'inline-block',marginLeft:'5px'}}>Edit</span></li>
        <li><SiGoogleanalytics/><NavLink to='/products'>Analytics</NavLink></li>
        <li><IoAnalyticsSharp/><NavLink to='/products'>Sales</NavLink></li>
      </ul>
    </div>
    <div>
      <h3>Stats</h3>
      <ul>
        <li><FaUsers/><NavLink to='/users'>Users</NavLink></li>
        <li><BsListUl/><NavLink to='/orders'>Orders</NavLink></li>
        <li><TbReportAnalytics/><NavLink to='/products'>Report</NavLink></li>
      </ul>
    </div>
    <div>
      <h3>Other</h3>
      <ul>
        <li><FaUsers /><button onClick={handleLogout} className='logout'>Logout</button></li>
      </ul>
    </div>
 </aside>
  )
}

export default SideBar