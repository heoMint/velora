// eslint-disable-next-line prettier/prettier
import ReactPlayer from 'react-player';
import styled, { keyframes } from 'styled-components';
import 'animate.css';

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
			<VideoWrapper>
				<ReactPlayer
					url="/videoplayback.mp4"
					playing={true}
					muted={true}
					loop={true}
					width="100%"
					height="100%"
				/>
			</VideoWrapper>
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
	padding: 100px 0 0 50px;
	color: #222;

	animation: ${opacity} 2s ease;
	strong {
		font-size: 3rem;
		margin-bottom: -10px;
		span {
			font-weight: 400;
		}
	}
	p {
		font-size: 1.5rem;
	}
	@media (max-width: 767px) {
		padding: 100px 0 50px 20px;
		strong {
			font-size: 2rem;
			margin-bottom: -10px;
			span {
				font-weight: 400;
			}
		}
		p {
			font-size: 1.2rem;
		}
	}
`;
const VideoWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 60%;
	height: 600px;
	video {
		border-radius: 40% 0 0 0/ 60% 0 0 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	@media (max-width: 767px) {
		width: 100%;
		height: auto;
		video {
			border-radius: 40% 0 0 0/ 30% 0 0 0;
		}
	}
`;
const BannerWrapper = styled.div`
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;
