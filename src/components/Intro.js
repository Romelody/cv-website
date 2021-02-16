import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/Intro.scss'

function Intro() { 
	return(
		<>
			<section className="Intro" id="intro">
				<img src="./assets/bg-01.svg" className="bg-01"/>
				<img src="./assets/circle.png" className="circle"/>
				<Container>
					<Row>
						<Col md={6}>
							<h1 className="hello">Hi!<span>I'm Melody</span></h1>
							<h1 className="me">I'm a Frontend</h1>
							<p>Welcome to my site. I'm proud to show you, what i can do and all my experience in the different fields in which I develop</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
    
}
export default Intro