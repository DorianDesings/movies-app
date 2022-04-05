import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Details from './components/pages/Details/Details';
import Favourites from './components/pages/Favourites/Favourites';
import Home from './components/pages/Home/Home';
import Movies from './components/pages/Movies/Movies';
import Series from './components/pages/Series/Series';
import FavouritesProvider from './context/Favourite/FavouritesProvider';
import MoviesProvider from './context/Movies/MoviesProvider';
import SeriesProvider from './context/Series/SeriesProvider';

function App() {
	return (
		<BrowserRouter>
			<Menu />
			<MoviesProvider>
				<SeriesProvider>
					<FavouritesProvider>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/movies' element={<Movies />} />
							<Route path='/series' element={<Series />} />
							<Route path='/favourites' element={<Favourites />} />
							<Route path='/details/:type/:id' element={<Details />} />
						</Routes>
					</FavouritesProvider>
				</SeriesProvider>
			</MoviesProvider>
		</BrowserRouter>
	);
}

export default App;
