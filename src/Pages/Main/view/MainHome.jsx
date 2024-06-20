// eslint-disable-next-line prettier/prettier
import styled from 'styled-components';
import Banner from '../Banner';
import Lank from '../Lank';
import EventBanner from '../../../components/EventBanner';
import AllProducts from '../AllProducts';
import Comm from '../Comm';

const MainHome = () => {
	return (
		<>
			<Banner />
			<Lank />
			<EventBanner />
			<AllProducts />
			<Comm />
		</>
	);
};

export default MainHome;
