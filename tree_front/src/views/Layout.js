import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';

export default function Layout(){

    return (
        <div className="Layout">
			<header className="App Layout-header">
				<h1>Welcome to the tree.</h1>
			</header>
			<main className="Layout-main">
				<Outlet />
			</main>
			<nav className="Nav">
				<NavLink to="/" className="Nav-link">
					Home
				</NavLink>
				<NavLink to="/about" className="Nav-link">
					About
				</NavLink>
				<NavLink to="/suggest" className="Nav-link">
					Suggest
				</NavLink>
			</nav>
		</div>
    )
}