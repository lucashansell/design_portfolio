
const Experience = () => {
    return(
        <>
        <h2>Experience</h2>
        <div id="skills-container">
            <div className="column">
                <h3>Skills</h3>
                <ul className="unordered">
                    <li>
                        <img src="src/assets/react.svg"  className="ul-img"/>
                        React
                    </li>
                    <li>
                    <img src="src/assets/java.svg"  className="ul-img"/>
                        Java
                    </li>
                    <li>
                    <img src="src/assets/python.svg"  className="ul-img"/>
                        Python
                    </li>
                    <li>
                    <img src="src/assets/c.svg"  className="ul-img"/>
                        C
                    </li>
                    <li>
                    <img src="src/assets/sql.svg"  className="ul-img"/>
                        Sequel
                    </li>
                    <li>
                    <img src="src/assets/aws.svg"  className="ul-img"/>
                        AWS
                    </li>
                </ul>
            </div>
            <div className="column">
                <img src="src/assets/code.jpg" style={{width: "100%"}} />
            </div>
        </div>
            <h3>Work</h3>
        <div id="work-container">
            <div className="box">
            <h4>Software Engineering intern at Digs</h4>
            <p className="p-exp">
                Digs is a start up company focusing on software for construction management. As an intern with Digs
                 I wrote the testing manual for the web application for the company. In addition, I did manual testing
                  on the product as well as wrote automated testing for the web application.
            </p>
            </div>
            <div className="box">
            <h4>DevOps Engineering intern at Experian</h4>
            <p className="p-exp">
                I worked as a DevOps Engineer for the cloud security team. The majority of my work was with AWS and 
                python. I used EC2, S3, Lambda, CodeBuild, Route53 and IAM. I also used security software such as 
                WIZ and Imperva by writing scripts to pull public endpoints from wiz and checking to make sure that 
                the endpoints are behind imperva web application firewall. I also spent time learning about AI 
                security and governance.
            </p>
            </div>
            <div className="box">
            <h4>Software Enginner at Experian: Starting in June</h4>
            <p className="p-exp">
                I will be working as a software engineer at Experian as a saleforce developer
                starting June 2024.
            </p>
            </div>
        </div>
        </>
    )
}

export default Experience