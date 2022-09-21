import { Routes, Route } from 'react-router-dom';
import About from './views/About';
import Layout from './views/Layout';
import Home from './views/Home';
import Plant from './views/Plant';
// import Suggest from './views/Suggest';
import { sampleData } from './utils/sampleData';

function App() {
  	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route
					index
					element={<Home qList={sampleData} />}
				/>
				<Route
					path="/plant"
					element={<Plant />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				{/* <Route
					path="/suggest"
					element={<Suggest />}
				/> */}
			</Route>
		</Routes>
  );
}

export default App;
