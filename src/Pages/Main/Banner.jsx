// eslint-disable-next-line prettier/prettier
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Banner = () => {
	return (
		<BannerWrapper>
			<ReactPlayer
				url="/public/7234120-uhd_3840_2160_30fps.mp4"
				playing={true}
				muted={true}
				loop={true}
				width="100%"
				height="100%"
			/>
		</BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	position: relative; /* 수정된 부분: absolute -> relative */
	top: -90px;
	height: 100%;
`;
