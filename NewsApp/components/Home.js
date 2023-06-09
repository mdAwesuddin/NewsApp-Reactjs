import React from 'react'
import useApi from './customApi/useApi';

const apikey='4d4b92addb884ecbb0c0e4d6ef998304';
const URL='https://newsapi.org/v2/top-headlines?country=in';

const correctURL=`${URL}&apiKey=${apikey}`

const Home = () => {
   
   const [articles,loading,isError]=useApi(correctURL);
    
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
    <div >
<h2 className="text-center">Top Headlines</h2>
<div className='container'>
<div className='row row row-cols-1 row-cols-md-4 gy-3 my-3 '> 
 
{articles.map((eachInfo)=>{
  const {id,urlToImage,title,publishedAt,description,url}=eachInfo;
   return(
<div className="col-sm-4 col-md-4 col-lg-3 col-xs-10">
  <div className="card text-bg-light" style={{width:"19rem",height:"29rem"}}>
      <img src={urlToImage} className="card-img-top" alt="image" style={{height:"12rem"}}/>
      <div className="card-body overflow-auto">
        {title?(
        <h5 className="card-title "> {title}</h5>):<h1>no data</h1>}
        <h5 className="card-title">{}</h5>
        <p className="card-text">{publishedAt}</p>
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

export default Home