import styled from 'styled-components';

const EventBanner = () => {
	return (
		<EventBannerWrapper>
			<img src="/Frame 426.png" alt="event banner" />
		</EventBannerWrapper>
	);
};

export default EventBanner;

const EventBannerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
	overflow: hidden;
	img {
		width: 100%;
	}
	@media (max-width: 767px) {
		height: 100px;
	}
`;
