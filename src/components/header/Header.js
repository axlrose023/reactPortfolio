import "./style.css";
import {Link} from "react-router-dom";
import cv from './cv.pdf'
const Header = () => {

    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Volodymyr</em>
					</strong>
					<br />a full-stack developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<Link to={cv} className="btn" target="_blank" download>Download CV</Link>
			</div>
		</header>
	);
}

export default Header;