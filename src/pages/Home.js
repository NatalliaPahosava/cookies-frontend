import { useState, useEffect } from 'react'
import { CakeCard } from '../components/CakeCard'

const Home = () => {
  const [cakes, setCakes] = useState([])
  useEffect(() => {
        fetch('http://localhost:4000/')
        .then((res) => res.json())
        .then((data) => setCakes(data))
        .catch((err) => console.error(err))
  }, [])
  const allCakes = cakes.map(eachCake => 
   {return (<CakeCard key={eachCake._id} eachcake={eachCake}/>)
})
  return (
    <div className='container'>
      <h1>Home Component</h1>
      <div className='products'>{allCakes}</div>
    </div>
  )
}
export default Home
