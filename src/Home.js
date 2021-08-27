import React from 'react'

import './App.css';

import Feed from './Feed'
import Feedlist from './Feedlist'

function Home({ handleLogout }) {

    return (
        <div>
            <div className='header'><h2>HACK IDEAS</h2></div>
            <div className='log-head'>
                <h2 className='normal'>Welcome</h2>

                <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </div>


            <Feed />
            <Feedlist />


        </div>
    )
}

export default Home