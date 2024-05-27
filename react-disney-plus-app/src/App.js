import './App.css';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import Nav from './components/Nav';

const Layout = () => {
	return(
		<div>
			<Nav />
			<Outlet />
		</div>
	)
}
function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<LoginPage />} />
					<Route path='main' element={<MainPage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path=':movieId' element={<DetailPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
