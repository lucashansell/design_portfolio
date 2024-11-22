

const About = () => {
    return(
        <>
        <h2>About Me</h2>
        <div id="about-container">
            <div className="column">
                <img src="src/assets/headshot.png" style={{width: "300px"}}/>
            </div>
            <div className="column">
                <p>
                    I am a software developer and UX/UI designer. I design and create websites and applications. In my free time
                    I am a passionate adventure sports athlete. In the winter I enjoy skiing, ice climbing, snow kiting, and hunting.
                    In the summer I enjoy paragliding, speedflying, whitewater kayaking, rock climbing and sailing. 
                </p>
            </div>
        </div>
        </>
    )
}

export default About;