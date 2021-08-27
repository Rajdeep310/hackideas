import React, { useEffect, useState } from 'react'
import fire from './Firebase'
import './App.css';


const sortOptions = {
    'vote': { column: 'vote' },
    'title': { column: 'title' }
}

function Feedlist() {

    const [feeds, setFeeds] = useState([]);
    const [sortBy, setSortBy] = useState('vote');
    useEffect(() => {
        const unsubscribe = fire
            .firestore()
            .collection('feed')
            .orderBy(sortOptions[sortBy].column, 'asc')
            .onSnapshot((snapshot) => {
                const newFeeds = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTime(newFeeds)
            })
        return () => unsubscribe();
    }, [sortBy])



    return (
        <div>
            <h2>ALL CHALLENGES</h2>
            <div>

                <label>Sort By :  </label>
                <select className='select-tag' value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option>ALL ITEMS</option>
                    <option value='vote'>Vote</option>
                    <option value='title'>Title</option>

                </select>
            </div>

            <div className='allFeed'>
                {feeds.map((feed) => {

                    return (

                        <div key={feed.id} className="feed">
                            <div className='feed-title'>Title: <span className='feed-details'>{feed.title}</span></div>
                            <div className='feed-desc'>Description: <span className='feed-details'>{!feed.disc ? (feed.desc)  : 'None'}</span></div>
                            <div className='feed-feature'>Feature: <span className='feed-details'>{feed.feature}</span></div>
                            <div className='feed-vote'> Votes: <span className='feed-details'>{feed.vote}</span></div>
                        </div>

                    )
                })}
            </div>




        </div>
    )
}

export default Feedlist