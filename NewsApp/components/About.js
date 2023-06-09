import React from 'react'

const About = () => {
  return (
    <div className='container mt-5'>
        <h3>Hello Users!</h3>
        <p>Hope you all are reading news daily 😊 <br/>Let Us look at the App Structure i.e How I made this app. </p>
        <br/>
        <h4>Reactjs</h4>
        <hr/>
        <p>In reactjs I mainly use hooks to Structure the app and Router to make app a single page application. moreOver For fetching An API I have use fetch with async&await after fetching i have converted in JSON format. At <br/> last i have destructure the data according to my usecase. Hooks include useState,useEffect & CustomHook. In react-router-dom i have used NavLink,Link,Routes,Route & Browser Router.</p>
        <h4>Styling</h4>
        <hr/>
        <p>For Styling I Have used bootstrap which is a Framework Of CSS. for styling the NavBar, Footer, Container, Cards..etc. And i have used custom CSS also wherever it is required.</p>
        <h4>News Api</h4>
        <hr/>
        <p>News API is a simple HTTP REST API for searching and retrieving live articles from all over the web It is an API which provides News in the JSON format. It provides us an updated news daily to the viewers from the JSON format we have to take the data which is required for news Article. <br/> <li>For More Info Refer the Documentation of the API <a href='https://newsapi.org/docs' target='blank'>Here</a></li>.</p>
        <h4>GitHub Repo</h4>
        <hr/>
        <p>For the Source Code Refer To My GitHub Repo <a href='#'>Here</a>.</p>
        <br/>
        <p>Awesuddin Mohammed😊</p>
    </div>
    
  )
}

export default About