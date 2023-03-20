import {useState, useEffect} from 'react'
const BASE_URL = 'https://us-central1-skooldio-react-hooks.cloudfunctions.net'
export const UseAPI = (path) =>{
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(false)
    //fetch API
    useEffect(()=>{
      setLoading(true)
      fetch(BASE_URL + path)
      .then((resp)=>resp.json())
      .then((resp)=>{
        setData(resp)
        setLoading(false)
      }
      )
    },[])
    //return ค่าที่จะใช้งาน มองเป็นเหมือน api return ของที่ต้องใช้ ไม่ return internal hook
    return {data, loading}
}

export default UseAPI;