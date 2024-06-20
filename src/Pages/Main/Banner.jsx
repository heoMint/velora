// eslint-disable-next-line prettier/prettier
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';
import 'animate.css';
const Banner = () => {
	return (
		<BannerWrapper>
			<ReactPlayer
				url='/public/7234120-uhd_3840_2160_30fps.mp4'
				playing={true}
				muted={true}
				loop={true}
				width="100%"
				height="100%"
			/>
			<BannerTitle>
				<h1>벨로라와 함께 당신의 광채를 발견해보세요!</h1>
				<p>Velora - 아름다움과 혁신이 만나는 곳.</p>
			</BannerTitle>
		</BannerWrapper>
	);
};

export default Banner;

const opacity = keyframes`
	from{
		transform: translateY(100px);
		opacity:0
	}to{
		transform: translateY(0);
		opacity:1
	}
`;
const BannerTitle = styled.div`
	position: absolute;
	top: 320px;
	margin-left: 100px;
	color: #222;
	/* color: white; */

	animation: ${opacity} 2s ease;
	h1 {
		font-size: 3.5rem;
		margin-bottom: -10px;
	}
	p {
		font-size: 1.7rem;
	}
`;
const BannerWrapper = styled.div`
	position: relative; /* 수정된 부분: absolute -> relative */
	top: -90px;
	height: 100%;
`;
