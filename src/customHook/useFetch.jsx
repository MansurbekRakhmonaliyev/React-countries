import { useCallback, useEffect, useState } from "react"

const initialValue = {data: null, loading:true, error:null}
const useFetch = (url) => {
  const [informaton, setInformation] = useState(initialValue)
  const getData = useCallback(async ()=>{
    try {
      setInformation({data:null, loading: true, error: null})
        const req = await fetch(url)
        if(!req.ok){
            throw new Error(req.status + ' ' + req.statusText)
        }
        const data = await req.json()
        setInformation(prev=>({...prev, data:data.data, loading:false}))
    } catch (err) {
        setInformation(prev=>({...prev, loading:false, error:err.message}))
    }
  }, [url])
  useEffect(()=>{
    getData()
  }, [getData])

  return informaton
}

export default useFetch
