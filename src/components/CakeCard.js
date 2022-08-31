import { Link } from "react-router-dom"

export const CakeCard=({eachcake})=>{
    return(
        <Link state={eachcake}to='/single-cake' className='products-item'>
        <img src={eachcake.image} alt="" />
        <h4>{eachcake.name}</h4>
        <p>
            <b>Ingridients: </b>{eachcake.ingredients}</p>
        <p>
            <b>Price: </b>{eachcake.prices}$</p>
        <p>
            <b>Weight:</b>{eachcake.weight} pounds</p>
        </Link>
    )
}
