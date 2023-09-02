import React from 'react'
import { Link } from 'react-router-dom'

const CountriesItem = ({url, title,population, region, capital, alt, item}) => {
  // console.log(item.borders ? item.borders : 'no match');
  return (
    <li className="cards__item">
        <Link to={`about/${title}`}>
            <img src={url} alt={alt}/>
            <div className="cards__item-inner">
                <h3 className="cards__title">{title}</h3>
                <p className="population">Population: <span>{population}</span></p>
                <p className="region">Region: <span>{region}</span></p>
                <p className="capital">Capital: {capital ? capital.join(', ') : 'no capital'}</p>
            </div>
        </Link>
    </li>
  )
}

export default CountriesItem
