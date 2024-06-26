import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styled from 'styled-components';

const NotFound = () => {
	return (
		<NotFoundWrapper>
			<p>
				Not Found <br /> 준비중입니다.
			</p>

			<DotLottieReact
				src="o1GjH5ZswG.json"
				loop
				autoplay
				height={50}
			></DotLottieReact>
		</NotFoundWrapper>
	);
};

export default NotFound;

const NotFoundWrapper = styled.div`
	height: 500px;
	font-size: 3rem;
	text-align: center;
	canvas {
		transform: translateY(-210px);
	}
`;
