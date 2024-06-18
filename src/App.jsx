/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './Pages/Main/view/MainHome';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import Community from './Pages/Community/Community';

function App() {
	return (
		<>
			
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<MainHome />} />
					<Route path="/products" element={<Products />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/community" element={<Community />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
