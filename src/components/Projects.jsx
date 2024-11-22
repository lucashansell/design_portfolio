import '../css/projects.css'

const Projects = () => {
    return(
        <>
        <h2>Projects</h2>
        <div id="project-container">
            <div className='column'>
                <h3>Design Portfolio</h3>
                <p>
                    In my UX class my semester project was to design an application. The application I designed was a sailing app
                    that helped simplify the users process when it came to weather forecasting and route planning.
                </p>
                <br/>
                <p>
                    Potential App users where interviewd to create empathy maps. This helped to understand what users are looking
                    for and helped shaped how to app was designed.
                </p>
                <img src='src/assets/dillon.jpeg' style={{width: '100%'}}/>
                <br/>
                <br/>
                <p>
                    The business canvas is used to prove that the app was a viable business idea.
                </p>
                <img src='src/assets/BusinessCanvas.jpeg' style={{width: '100%'}}/>
                <br/>
                <br/>
                <p>
                    The persona shows what an ideal user would look like. This gives us insight on the user group and how
                    the app should look like. This also shaped how the application was designed. The app should be tailored
                    to fit the needs of the ideal user. Even though the app is designed for theh ideal user it should also
                    be useful and usable for all other users.
                </p>
                <img src='src/assets/Persona-template.jpeg.jpg' style={{width: '100%'}}/>
            </div>
            <div className='column'>
                <h3>Weather App</h3>
                <p>
                    In my Web Development class I created a weather app that would display current weather data of the selected 
                    location as well as the weather forecast
                </p>
                <img src='src/assets/weatherapp.png' style={{width: '100%'}}/>
                <br/>
                <p>
                    The design process for this weather app was very simple. I wanted to
                    create an application that would provide the user with weather data for
                    the requested location. I modeled the application to be similar to currentl
                    successful weather applications like Apples weather app.
                    I started by first getting the api call to succesfully work and then once I 
                    was able to get all the information I wanted to get from openweatherapi I seperated
                    the data into similar categories like temperature, atmoshperic readings and wind. The
                    final step was to create an apaplication that was visually appealing and easy to use.
                    Resulting in the final product shown above.
                </p>
            </div>
        </div>
        </>
    )
}

export default Projects;