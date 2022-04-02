import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favourites from './components/pages/Favourites/Favourites';
import Home from './components/pages/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/favourites' element={<Favourites />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
