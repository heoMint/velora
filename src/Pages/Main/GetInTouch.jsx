import styled, { keyframes } from 'styled-components';

const GetInTouch = () => {
	return (
		<ImgBox>
			<Img />
			<TextBox>
				<strong>VELORA</strong>
				<p>HOW ELSE CAN WE HELP YOU?</p>
				<p>Get in Touch</p>
			</TextBox>
		</ImgBox>
	);
};

export default GetInTouch;

const scrollTop = keyframes`
	  0% {
    transform: translateY(200px);
	opacity: 0;
  }
  100% {
    transform: translateY(-100%);
	opacity: 1;
  }
`;
const Img = styled.div`
	height: 350px;
	background: url('/Frame 427.png');
	background-size: cover;
`;
const ImgBox = styled.div`
	height: 350px;
	width: 100%;
`;
const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: translate(0%, -120%);
	color: white;
	animation: ${scrollTop} 3s ease-in-out;
	strong {
		padding-bottom: 20px;
		font-size: 6rem;
	}
	p {
		font-size: 1.5rem;
		margin: 5px;
	}
	@media (max-width: 767px) {
		strong {
			font-size: 5rem;
		}
	}
`;
