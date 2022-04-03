import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Favourites from './components/pages/Favourites/Favourites';
import Home from './components/pages/Home/Home';
import Movies from './components/pages/Movies/Movies';
import TvSeries from './components/pages/TvSeries/TvSeries';
import MoviesProvider from './context/Movies/MoviesProvider';

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<MoviesProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/tv-series' element={<TvSeries />} />
					<Route path='/favourites' element={<Favourites />} />
				</Routes>
			</MoviesProvider>
		</BrowserRouter>
	);
}

export default App;
