import { Link, useParams } from "react-router-dom"
import useFetch from "../../customHook/useFetch"
import Loader from "../../components/loader/Loader"

const About = () => {
  const {name} = useParams()
  const {data, loading, error} = useFetch(`https://countries-api-v7sn.onrender.com/countries?search=${name}`)

  return (
    <>
      {loading && <Loader/>}
      {error && <h1 className='error-message'>{error}</h1>}
     <div className="back-button-wrapper">
        <Link className="back-button" to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z" fill="#111517"/>
        </svg>
          <span>Back</span>
        </Link>
      </div>

     {data &&  <div className="country-info">
        <img
          className="country-info__img"
          src={data[0].flags.svg}
          alt={data[0].flags.alt}
        />
        <div className="country-info__content">
          <h2>{data[0].name.common}</h2>
          <ul className="country-info__list">
            <li className="country-info__item">
              <p className="name">
                Native Name: <span>{data[0].name.nativeName}</span>
              </p>
              <p className="population">
                Population: <span>{data[0].population.toLocaleString('en-En')}</span>
              </p>
              <p className="region">
                Region: <span>{data[0].region}</span>
              </p>
              <p className="sub-region">Sub Region: <span>{data[0].subregion}</span>
              </p>
              <p className="capital">
                Capital: {data[0].capital.join(', ')}
              </p>
            </li>
            <li className="country-info__item">
              <p className="name">
                Top Level Domain: <span>{data[0].cioc ? data[0].cioc : ' no domain'}</span>
              </p>
              <p className="population">
                Currencies: <span>{data[0].currencies ? data[0].currencies.join(', ') : 'no currencies'}</span>
              </p>
              <p className="region">
                Languages: <span>{data[0].languages ? data[0].languages.join(', ') : 'no language'}</span>
              </p>
            </li>
          </ul>

          <div className="country-info__borders">
            <h3>Border Countries:</h3>
            {data[0].borders.length ? data[0].borders.map(item=><Link key={item._id} to={`/about/${item.common.toLowerCase()}`}>{item.common}</Link>) : ' no borders'}
          </div>
        </div>
      </div> }
    </>
  )
}

export default About
