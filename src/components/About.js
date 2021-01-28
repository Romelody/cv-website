import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/About.scss'

function About() { 
	return(
		<>
			<section className="About">
				<Container>
					<Row>
						<Col md={6}>
						<div>
							<h3>About Me</h3>
							<p>Well i don't know where i have to start.
								I studied on the University of Buenos Aires (U.B.A.) the carrer of Graphic Design for 4 years. Before i had to end my studies there i start to study programming by myself. I bought a membership and i have learnd many things like UX Design, UI, JS, SCSS, ilustration and many other things. 
								I really like learn new things not only about the programming world becouse i think everything it's connected  
							</p>
						</div>
						</Col>
							<Col md={6}>
								<Row>
									<Col md={6}>
										<div>
											<img src="" alt=""/>
											<p>Graphic Designer</p>
											<p>University of Buenos Aires (U.B.A.)</p>
											<p>3 Years of experience at work</p>
										</div>
										<div>
											<img src="" alt=""/>
											<p>Programmer - Front End</p>
											<p>Online Learning</p>
											<p>2 Years of experience at Work</p>
										</div>
									</Col>
									<Col md={6}>
										<div>
											<img src="" alt=""/>
											<p>UX</p>
											<p>Online Learning</p>
											<p>Many proyects above</p>
										</div>
										<div>
											<img src="" alt=""/>
											<p>UI</p>
											<p>Online Learning</p>
											<p>Many proyects above</p>
										</div>
									</Col>
								</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
    
}
export default About