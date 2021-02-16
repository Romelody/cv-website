import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../scss/MyWork.scss'

function MyWork() { 
	return(
		<>
			<section className="MyWork" id="mywork">
				<div className="marco">
					<div className="one"></div>
					<div className="two"></div>
					<div className="three"></div>
					<div className="four"></div>
				</div>
				<Container>
					<h3>This Are some of my latest works</h3>
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