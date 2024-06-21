// eslint-disable-next-line prettier/prettier
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';
import 'animate.css';
import { Mobile, PC } from '../../hooks/useMediaQuery';
const Banner = () => {
	return (
		<BannerWrapper>
			<ReactPlayer
				url="/7234120-uhd_3840_2160_30fps.mp4"
				playing={true}
				muted={true}
				loop={true}
				width="100%"
				height="100%"
			/>
			<PC>
				<PcBannerTitle>
					<h1>벨로나와 함께 당신의 광채를 발견해보세요!</h1>
					<p>Bellona - 아름다움과 혁신이 만나는 곳.</p>
				</PcBannerTitle>
			</PC>
			<Mobile>
				<MobileBannerTitle>
					<h1>벨로나와 함께 당신의 광채를 발견해보세요!</h1>
					<p>Bellona - 아름다움과 혁신이 만나는 곳.</p>
				</MobileBannerTitle>
			</Mobile>
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
const PcBannerTitle = styled.div`
	position: absolute;
	top: 40%;
	left: 40%;

	color: #222;
	/* color: white; */

	animation: ${opacity} 2s ease;
	h1 {
		font-size: 2.5rem;
		margin-bottom: -10px;
	}
	p {
		font-size: 1.5rem;
	}
`;
const MobileBannerTitle = styled.div`
	position: absolute;
	top: 40%;
	left: 40%;

	color: #222;
	/* color: white; */

	animation: ${opacity} 2s ease;
	h1 {
		font-size: 1.5rem;
		margin-bottom: -10px;
	}
	p {
		font-size: 1rem;
	}
`;
const BannerWrapper = styled.div`
	position: relative;
	top: -90px;
	height: 100%;
`;
