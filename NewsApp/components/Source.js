import React,{useState,useEffect} from 'react'

const apikey='4d4b92addb884ecbb0c0e4d6ef998304';
const URL='https://newsapi.org/v2/top-headlines/sources?';

const Source = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const makeAPICall=async(url)=>{
        setLoading(true);
        setIsError(false);
        try{
            const response=await fetch(url);
            const {sources}=await response.json();
            setData(sources);
            setLoading(false);
            console.log(sources)
        }catch(error){
            setIsError(true);
            setLoading(false)
        };
    };
    useEffect(()=>{
        const correctURL=`${URL}&apiKey=${apikey}`
        makeAPICall(correctURL)
    },[])

    if(isError){
        return<h3 className="text-center">Something went wrong</h3>
       }
       if(loading){
        return<div className="d-flex justify-content-center mt-10">
        <div className="spinner-border "style={{width: "3rem",height: "3rem"}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
       }
  return (
    <div>
    <h2 className="text-center">Sources</h2>
    <div className='container'>
    <div className='row row row-cols-1 row-cols-md-4 gy-3 my-3 '> 
     
 {data.map((eachInfo)=>{
      const {name,description,url,language}=eachInfo;
       return(
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card text-bg-light" style={{width:"19rem",height:"auto"}}>
          <div className="card-body overflow-auto">
            {name?(
            <h5 className="card-title "> {name}</h5>):<h1>no data</h1>}
            <h5 className="card-title">{}</h5>
            <p className="card-text">language: {language}</p>
            <p className="card-text">{description}</p>
            <a href={url} className="btn btn-primary" target='blank'>Read More</a>
    
          </div>
        </div>
        </div>
       )
        })}
      
         </div>
     
        </div>
    
     </div>
  )
}

export default Source