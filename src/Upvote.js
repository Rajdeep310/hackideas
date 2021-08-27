import React, { useState } from 'react'
import fire from './Firebase'
import './App.css';

const Upvote = (props) => {
    const [newVote, setNewVote] = useState(props.vote + 1)
    const [voteText, setVoteText] = useState('Vote')
    const [disable, setDisable] = useState(false)
    // update vote count in firestore
    function updateVote(e) {
        setVoteText('Voted!')
        setDisable(true)
        setNewVote(props.vote + 1)
        fire.firestore().collection('feed').doc(props.id).set({

            vote: newVote
        }, { merge: true })

    }
    return (
        // Disabling upvote button once user upvotes
        <button className='vote-btn' disabled={disable} onClick={updateVote}>{voteText}</button>

    )
}

export default Upvote