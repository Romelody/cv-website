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
						<li><a href="#">Intro</a></li>
						<li><a href="#">MyWork</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Skills</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</Container>
			</header>
		</>
	)
}

export default Header;