import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import './style.css'
import { NotificationsNone, Language, Settings } from "@mui/icons-material"
const Header = () => {
  return (
    <div className='container header'>
      <header>
        <h1>Tooland Admin</h1>
        <div className='right-section'>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={Logo} alt="logo" />
        </div>
      </header>
    </div>
  )
}

export default Header