import { Outlet, NavLink } from 'react-router-dom';

import './Layout.css';

export default function Layout(){
	

    return (
        <div className="min-h-screen" data-theme="night">
			<main className="Layout-main">
				<Outlet />
			</main>
			<nav className="Nav sticky bottom-5">
				<ul className="menu menu-horizontal bg-base-100 rounded-box">
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