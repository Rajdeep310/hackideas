import React ,{useState}from 'react'
import fire from './Firebase'
import './App.css';


const Feed=()=> {
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [feature,setFeature]=useState('');


    //adding new challenge into firebase with all details
    function onSubmit(e){
        e.preventDefault();
        fire.firestore()
        .collection('feed')
        .add({
            title,
            desc,
            feature,
            vote:0,
        })
        .then(()=>{
            setTitle('')
            setDesc('')
            setFeature('')
        })
    }

    return (
        <form className='feed-sub' onSubmit={onSubmit}>
            ADD CHALLENGE
            <input type="text" value={title} onChange={e=>setTitle(e.currentTarget.value)} placeholder="Challenge Title" />
            <input type="text" value={desc} onChange={e=>setDesc(e.currentTarget.value)} placeholder="Challenge Description" />
            <div className='feed-last'>
                
            <select className='feed-select' value={feature} onChange={e=>setFeature(e.target.value)} >
                <option>CHALLENGE TAG</option>
                <option>Tech</option>
                <option>Feature</option>
                <option>Others</option>
                </select> 
            {/* ADD button disabled if no input is provided in title */}
           <button disabled={!title} className='add-btn'>ADD</button>
            </div>
        </form>
    )
}

export default Feed
