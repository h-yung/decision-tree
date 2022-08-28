import { Outlet, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Plant from './Plant';

import './Layout.css';
import '../tufte.css';

export default function Layout(){
	

    return (
        <div className="max-h-screen max-w-screen-md">
			{/* <main className="Layout-main max-h-fit pb-10"> */}
			<main className="Layout-main w-full max-h-fit pb-10">

				{/* <Outlet /> */}

				<div className="carousel w-full">
					<Home />
					<Plant />
					<About />
				</div> 
			</main>
			<nav className="sticky bottom-0 Nav navlist w-full py-2 gap-2">
				<a href="#home" className="Nav-link">
					Home
				</a>
				<a href="#plant" className="Nav-link">
					Plant
				</a>
				<a href="#about" className="Nav-link">
					About
				</a>
			</nav>
		</div>
    )
}