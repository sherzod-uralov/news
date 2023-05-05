import React, { useEffect, useState } from 'react'
import { FetchData } from './Helper'
import Card from './Card'
const Home = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    FetchData('https://api.spaceflightnewsapi.net/v3/articles',setData)
  },[])

  return (
    <div>
      
      {
        
        data.map((info) => (
          <Card key={info.id} date = {info.publishedAt} id = {info.id} image = {info.imageUrl} tittle = {info.title} summary = {info.summary}/>
          
        ))
      }
    </div>
  )
}

export default Home
