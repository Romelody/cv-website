import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/Footer.scss'

function Intro() { 
	return(
		<>
			<footer>
				<Container>
					<Row>
						<Col md={4}>
              <p>Made by Myself</p>
						</Col>
            <Col md={8}>
					    <Row>
                <p>If you like you can check my other sites</p>
                <img src="" alt="ilustration"/>
                <img src="" alt="Photograpy"/>
                <img src="" alt="All about me"/>
              </Row>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
    
}
export default Intro