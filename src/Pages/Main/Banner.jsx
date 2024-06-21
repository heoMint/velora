// eslint-disable-next-line prettier/prettier
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';
import 'animate.css';
import { Mobile, PC } from '../../hooks/useMediaQuery';
const Banner = () => {
	return (
		<BannerWrapper>
			<BannerTitle>
				<div className="container">
					<strong>
						<span>벨로나와 함께</span> <br /> 당신의 광채를 발견해보세요!
					</strong>
					<p>Bellona - 아름다움과 혁신이 만나는 곳.</p>
				</div>
			</BannerTitle>
			<ReactPlayer
				url="/7234120-uhd_3840_2160_30fps.mp4"
				playing={true}
				muted={true}
				loop={true}
				width="100%"
				height="600px"
			/>
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
	/* position: absolute;
	top: 50%;
	transform: translateY(-30%); */
	/* margin-left: 100px; */
	padding: 60px 0;
	color: #222;
	/* color: white; */

	animation: ${opacity} 2s ease;
	strong {
		font-size: 3.5rem;
		margin-bottom: -10px;
		span {
			font-weight: 400;
		}
	}
`;

const BannerWrapper = styled.div`
	/* position: relative; /* 수정된 부분: absolute -> relative */
	/* top: -90px; */
	/* height: 70vh; */
	background-color: #fff;
	video {
		height: 800px;
		object-fit: cover;
	}
`;
