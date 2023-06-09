import {useEffect,useState} from 'react'


const useApi = (URL) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const makeAPICall=async()=>{
        setLoading(true);
        setIsError(false);
        try{
            const response=await fetch(URL);
            const {articles}=await response.json();
            setData(articles);
            setLoading(false);
            console.log(articles)
        }catch(error){
            setIsError(true);
            setLoading(false)
        };
    };
    useEffect(()=>{
        makeAPICall(URL)
    },[])
  return [data,loading,isError];
}

export default useApi