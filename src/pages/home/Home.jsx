import { Fragment, useEffect, useState } from 'react'
import CountriesItem from '../../components/countriesItem/CountriesItem'
import Loader from '../../components/loader/Loader'
import useFetch from '../../customHook/useFetch'

const Home = () => {
  const [url, setUrl] = useState('https://countries-api-v7sn.onrender.com/countries?limit=250')
  const {data, loading, error} = useFetch(url)
  const [varData, setvarData] = useState(null)

  useEffect(()=>{
      setvarData(data)
  }, [data])

  const onSearch = e => {
   const newData =  data.filter(item => item.name.common.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
   setvarData(newData)
  }

  const onFilter = e => {
    if(e.target.nodeName === 'LI'){
      setUrl(`https://countries-api-v7sn.onrender.com/countries?region=${e.target.textContent}`)
    }
  }
  
  return (
   <>
      {loading && <Loader/>}
      <form className="search" action="#">
                <input onChange={onSearch} className="search__input" type="search" name='search' placeholder='Search for a country…' required aria-label='Search for a country…'/>
                <div className="search__select">
                    <span>Filter by Region</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z" fill="black"/>
                    </svg>
                    <ul onClick={onFilter} className="search__select-list" >
                        <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                    </ul>
                </div>
            </form>
            {error && <h1 className='error-message'>{error}</h1>}
            {varData && <ul className="cards">
                {varData.map(item=><Fragment key={item.name.common}><CountriesItem url={item.flags.svg} title={item.name.common} population={item.population} region={item.region} capital={item.capital} alt={item.flags.alt} item={item}/></Fragment>)}
            </ul> }   
      </>
  )
}

export default Home
