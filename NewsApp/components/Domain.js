import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const apikey='77213c0324f64359a68a1c2684698613';
const URL='https://newsapi.org/v2/everything?domains=';
const Domain = () => {
    const [item,setItem]=useState("")
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState(false);

    const makeAPICall=async(value)=>{
        setLoading(true);
        setIsError(false);
        try{
            const response=await fetch(`${URL}${value}&apiKey=${apikey}`);
            const {articles}=await response.json();
            setData(articles);
            setLoading(false);
            console.log(articles)
        }catch(error){
            setIsError({status:true,msg:error.message||"something went wrong"});
            setLoading(false)
        };
    };

    const handleChange=(value)=>{
        setItem(value)
        makeAPICall(value)
     }
    if(isError){
        return<h3 className="text-center">Something went wrong</h3>
       }
       
  return (
    <div>
        <form className="d-flex " role="search" style={{justifyContent:"center"}}>
        <input className="form-control me-2 " style={{width:"27rem",border:"2px solid blue",margin:"2px"}} type="search" id='txt'value={item} onChange={(e)=>handleChange(e.target.value)} placeholder="Note: Website name.domain name eg: gadgets360.com" aria-label="Search" />
      </form>

      <div> 
      <NavLink className="nav-link text-center text-primary" aria-current="page" to="/search"><u>Go Back</u></NavLink>
       <p className="text-center"><b>Note: </b>This is a free API it has limited requests please use wisely.</p>
<div className='container'>
<div className='row row row-cols-1 row-cols-md-4 gy-3 my-3 '> 

{Array.isArray(data)?
 data.map((eachInfo)=>{
  const {id,urlToImage,title,publishedAt,description,url}=eachInfo;
   return(
<div className="col-sm-6 col-md-4 col-lg-3">
  <div className="card text-bg-light" style={{width:"19rem",height:"29rem"}}>
      <img src={urlToImage} className="card-img-top" alt="image" style={{height:"12rem"}}/>
      <div className="card-body overflow-auto">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{}</h5>
        <p className="card-text">{publishedAt}</p>
        <p className="card-text">{description}</p>
        <a href={url} className="btn btn-primary" target='blank'>Read More</a>
 
      </div>
    </div>
    </div>
   )
    }):null}  
    </div>
 
 </div>
 
 </div>
    </div>
  )
}

export default Domain