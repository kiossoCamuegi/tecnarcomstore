import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function DashboardWrapper({title, content, active}) {
  document.title = "Dashboard - "+title; 
  return (
    <div className='dashboard-area'>
        <div className="sidebar bg-black">
             <div className="user-info">
                <Avatar sx={{ bgcolor:"red", width:100, height:100}}>AN</Avatar>    
                <div className="name"><h3>Pedro Mateus</h3></div>  
            </div>    
            <ul>
                <Link to="/" className={active === 1 ? "active" : ""}> </Link>
            </ul>
        </div>
        <div className="content-wrapper col">
            <div className="dash-header">
           
            </div>
             <div className="content col">
                {content}
             </div>
             <div className="footer-info">
                 
             </div>
        </div>
    </div>
  )
}

export default DashboardWrapper