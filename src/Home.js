import React from 'react'

import './App.css';

function Home({handleLogout}) {
    
    return (
        <div>
            <div className='header'><h2>HACK IDEAS</h2></div>
            <div className='log-head'>
                <h2 className='normal'>Welcome</h2>
                
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
           
            
            

            
        </div>
    )
}

export default Home