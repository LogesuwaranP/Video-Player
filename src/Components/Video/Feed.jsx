import React, { useState } from 'react'
import VideoCard from './VideoCard';
import "./Feed.css";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Feed = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className='video-container'>
      <div className='add-icon' onClick={()=>navigate("/create")}>
            <AddIcon/>
      </div>
       {
          data.map(( video)=> <VideoCard video={video} key={video.id} />)
       }
    </div>
  )
}

export default Feed;
