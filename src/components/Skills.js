import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/Skills.scss'

function Skills() { 
	return(
		<>
			<section className="Skills" id="skills">
				<Container>
					<Row>
						<Col md={3}>
              here my skills
						</Col>
            <Col md={9}>
              graaaphiccc
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
    
}
export default Skills