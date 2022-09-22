import { Outlet, NavLink } from 'react-router-dom';

import './Layout.css';
import '../tufte.css';

export default function Layout(){
	

    return (
        <div className="max-h-screen max-w-screen-md">
			<main className="Layout-main max-h-fit pb-10">
				<Outlet />
			</main>
			<nav className="Nav sticky bottom-0">
				<ul className="navlist btm-nav btm-nav-sm">
					<li className="hover-bordered Nav-link_left">
						<NavLink to="/" className="Nav-link">
							Home
						</NavLink>
					</li>
					<li className="hover-bordered">
						<NavLink to="/plant" className="Nav-link">
							Plant
						</NavLink>
					</li>
					<li className="hover-bordered Nav-link_right">
						<NavLink to="/about" className="Nav-link">
							About
						</NavLink>
					</li>
					{/* <li className="hover-bordered">
						<NavLink to="/suggest" className="Nav-link">
							Suggest
						</NavLink>
					</li> */}
				</ul>
			</nav>
		</div>
    )
}