import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
    const {id,image,title,summary,date} = props
    const datesy = date.slice(0,4);
    const day = date.slice(8,10);
    function dateFilter(dates) {
        const month = dates.slice(5,7)
        switch (month) {
            case '01':
                return ('January')
            case '02':
                return ('February')
            case '03':
                return ('March')
            case '04':
                return ('April')
            case '05':
                return ('May')
            case '06':
                return ('June')
            case '07':
                return ('july')
            case '08':
                return ('August')
            case '09':
                return ('September')
            case '10':
                return ('October')
            case '11':
                return ('November')
            case '12':
                return ('December')
            default:
                break;
        }
    }

  return (
     <div>
    <div className="container">
    <span class="loader"></span>
    <div className='card'>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{summary}</p>
    <div className='date'>
    <h2>{`${dateFilter(date)} ${day} ${datesy}`}</h2>
      <NavLink to={`/single/${id}`}>
        Read More
      </NavLink>
    </div>
      </div>
    </div>
     </div>
  )
}

export default Card
