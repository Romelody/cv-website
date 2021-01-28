import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/MyWork.scss'

function MyWork() { 
	return(
		<>
			<section className="MyWork">
				<Container>
					<Row>
						<Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
            <Col md={3}>
              <img src="./assets/proyec-example.png" alt=""/>
						</Col>
					</Row>
          <a> and my own sites</a>
				</Container>
			</section>
		</>
	);
    
}
export default MyWork