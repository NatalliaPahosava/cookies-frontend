import { Link } from 'react-router-dom'

export const CakeCard = ({ eachcake }) => {
  return (
    <Link state={eachcake} to='/single-cake' className='cakes-item'>
      <img src={eachcake.image} alt='' />
      <h4>Name:{eachcake.name}</h4>
      <p>
        <b>Phone Number:</b>
        {eachcake.phone}
      </p>
      <p>
        <b>Zip, State: </b>
        {eachcake.zipcode}
      </p>
      <p>
        <b>Event date: </b>
        {eachcake.eventdate}
      </p>
      <p>
        <b>Description: </b>
        {eachcake.description}
      </p>
    </Link>
  )
}
