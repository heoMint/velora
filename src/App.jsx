/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import MainHome from './Pages/Main/view/MainHome';
import Products from './Pages/Products/Products';
import AboutUs from './Pages/About/AboutUs';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import Community from './Pages/Community/Community';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './Pages/Login/LoginPage';

const queryClient = new QueryClient();

function App() {
	const isLogin = false;
	return (
		<QueryClientProvider client={queryClient}>
			<HashRouter>
				<Header />

				<Routes>
					<Route path="/" element={<MainHome />} />
					<Route path="/products" element={<Products />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/community" element={<Community />} />
					{!isLogin && <Route path="/login" element={<LoginPage />} />}
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</HashRouter>
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
