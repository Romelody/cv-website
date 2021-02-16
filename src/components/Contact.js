import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/Contact.scss'

function Intro() { 
	return(
		<>
			<section className="Contact" id="contact">
				<Container>
          <form>
					  <Row>
              <Col md={6}>
                <label>Message</label>
                <input></input>
              </Col>
              <Col md={6}>
                <label>Name</label>
                <input></input>
                <label>Mail</label>
                <input></input>
              </Col>
					  </Row>
          </form>
				</Container>
			</section>
		</>
	);
    
}
export default Intro