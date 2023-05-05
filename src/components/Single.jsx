import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FetchData } from './Helper'
import axios from 'axios'
const Single = () => {
    const {id} = useParams()
    const [Data,setData] = useState([]);
    
    useEffect(() => {
      FetchData(`https://api.spaceflightnewsapi.net/v3/articles/${id}`,setData) 
    },[])
    console.log(Data);
  return (
    <div>
     <div className="container">
     <div className='card'>
      <img src={Data.imageUrl} alt="" />
      <h3>{Data.title}</h3>
      <p>{Data.summary}</p>
    </div>
     </div>
    </div>
  )
}

export default Single
