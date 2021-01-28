import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/Intro.scss'

function Intro() { 
	return(
		<>
			<section className="Intro">
				<Container>
					<Row>
						<Col md={6}>
							<h1>Hi!<span>I'm Melody</span></h1>
							<p>Welcome to my site. I'm proud to show you, what i can do and all my experience in the different fields in which I develop</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
    
}
export default Intro