import React from 'react';
import '../scss/Header.scss'

import {Container, Row, Col} from 'react-bootstrap'

function Header(){
	return(
		<>
			<header>
				<Container className="header">
					<a href="#" className="logo">Melody Calderon</a>
					<ul>
						<li><a href="#intro">Intro</a></li>
						<li><a href="#mywork">MyWork</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</Container>
			</header>
		</>
	)
}

export default Header;