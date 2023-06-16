import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Badge from "@mui/material/Badge";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Player = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const[video,setVideo] = useState({});
  const[like,setLike] = useState(5);
  useEffect(()=>{
    axios.get(`https://648bfcbd8620b8bae7ec02d1.mockapi.io/videos/${id}`).then((response)=>
    {
      setVideo(response.data);
      setLike(response.data.likes)
    })
  },[])

  function update(){
    const res =  axios.put(`https://648bfcbd8620b8bae7ec02d1.mockapi.io/videos/${id}`, {likes: like }).then(()=>{
      // axios.get(`https://648bfcbd8620b8bae7ec02d1.mockapi.io/videos/${id}`).then((response)=>
      // {
      //   setVideo(response.data);
      //   setLike(response.data.likes)
      // })
    });
  }
  // const video = Alldata.find((data)=>data.id==id);
  const handleDelete  =(id)=>{
    console.log(id);
      axios.delete(`https://648bfcbd8620b8bae7ec02d1.mockapi.io/videos/${id}`)
      .then((response)=>navigate("/"));
        
  }
  return (
    <div className='player-container'>

      <div className='player-main'>
        <div className='frame' >
            <iframe width="98%" height="98%" src={video.url} frameborder="0" title={"video.name"} allow="autoplay;" muted="unmuted" allowfullscreen ></iframe>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/X7WXHhokylc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className='discription'>
            <h3>Discription</h3>
            <p>{video.discription}</p>
            <div className='add-icon' onClick={()=>navigate("/create")}>              
                <AddIcon/>
            </div>
        </div>
            
      </div>
      <div className='info'>
            <h2>{video.name}</h2>
            <div className='icons'>
                <Badge badgeContent={like} color="secondary" onClick={()=>{setLike(like+1);update()}}>
                    <FavoriteOutlinedIcon fontSize="large" color="secondary" onClick={()=>{setLike(like+1);update()}}/>
                </Badge>    
                <DeleteIcon fontSize="large" color="error" onClick={()=>handleDelete(video.id)}/>            
            </div>
      </div>
    </div>
  )
}

export default Player
