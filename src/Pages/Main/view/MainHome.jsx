// eslint-disable-next-line prettier/prettier
import styled from 'styled-components';
import Banner from '../Banner';
import Lank from '../Lank';
import EventBanner from '../../../components/EventBanner';
import AllProducts from '../../../components/AllProducts';
import Community from '../../Community/Community';

const MainHome = () => {
	return (
		<>
			<Banner />
			<Lank />
			<EventBanner />
			<AllProducts />
			<Community />
		</>
	);
};

export default MainHome;
