import { Outlet, NavLink } from 'react-router-dom';

import './Layout.css';
import '../tufte.css';

export default function Layout(){
	

    return (
        <div className="max-h-screen max-w-screen-md">
			<main className="Layout-main max-h-fit">
				<Outlet />
			</main>
			<nav className="Nav fixed bottom-0">
				<ul className="btm-nav btm-nav-sm bg-base-100">
					<li className="hover-bordered">
						<NavLink to="/" className="Nav-link">
							Home
						</NavLink>
					</li>
					<li className="hover-bordered">
						<NavLink to="/about" className="Nav-link">
							About
						</NavLink>
					</li>
					<li className="hover-bordered">
						<NavLink to="/suggest" className="Nav-link">
							Suggest
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
    )
}