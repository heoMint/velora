import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import { ALLPRODUCTS } from '../context/Mockup';
import { useProductsSlider } from '../hooks/useSlider';
import { useProductsScroll } from '../hooks/useScroll';
import styled, { keyframes } from 'styled-components';

const AllProducts = () => {
	const lastIndex = 5;
	const pageSize = 3; // 한 페이지에 보여질 이미지 개수
	const intervalTime = 2000; // Interval time in milliseconds

	const { selected, setSelected, setIsHovered } = useProductsSlider(
		lastIndex,
		intervalTime,
	);
	const { scrollY, isContentCardItem } = useProductsScroll();
	const handlerPrev = () => {
		setSelected((prevSelected) => (prevSelected - 1 + lastIndex) % lastIndex);
	};
	const handlerNext = () => {
		setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
	};

	const renderImageCard = (image, index) => (
		<CardWrapper key={image.id}>
			<Card isVisible={isContentCardItem}>
				<ImageCard>
					<Img src={image.url} alt={`Image ${index}`} />
				</ImageCard>
				<ProductsTitle>{image.title}</ProductsTitle>
				<PriceWrapper>
					<Num>{`${image.num} / ${image.price}`}</Num>
				</PriceWrapper>
			</Card>
		</CardWrapper>
	);

	const renderImages = () => {
		const startIndex = selected;
		const endIndex = (startIndex + pageSize) % lastIndex;

		if (startIndex <= endIndex) {
			return ALLPRODUCTS.slice(startIndex, endIndex + 1).map(renderImageCard);
		} else {
			return [
				...ALLPRODUCTS.slice(startIndex, lastIndex).map(renderImageCard),
				...ALLPRODUCTS.slice(0, endIndex + 1).map(renderImageCard),
			];
		}
	};

	return (
		<ProductsWrapper
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			isVisible={scrollY >= 1500}
		>
			<div>
				<Title>ALL PRODUCTS</Title>
				{/* <ButtonWrapper>
					<ButtonBox>
						<button onClick={handlerPrev}>
							<PiArrowLeftThin />
						</button>
					</ButtonBox>
					<ButtonRight>
						<button onClick={handlerNext}>
							<PiArrowRightThin />
						</button>
					</ButtonRight>
				</ButtonWrapper> */}
			</div>
			<CarouselWrapper>{renderImages()}</CarouselWrapper>
		</ProductsWrapper>
	);
};

export default AllProducts;

const scrollTop = keyframes`
	  0% {
    transform: translateY(100px);
	opacity: 0;
  }
  100% {
    transform: translateY(0px);
	opacity: 1;
  }
`;

const fadeInRight = keyframes`
	  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
const ProductsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	animation: ${(props) => (props.isVisible ? scrollTop : 'none')} 0.6s
		ease-in-out both;
	transition: opacity 0.5s ease-in-out;
`;
const CarouselWrapper = styled.div`
	width: 1440px;
	display: flex;
	justify-content: center;
	overflow: hidden;
	position: relative;
`;
const CardWrapper = styled.div`
	overflow: hidden;
	padding: 0 10px;
	animation: ${fadeInRight} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
const Card = styled.div``;

const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-bottom: 20px;
`;
const Img = styled.img`
	width: 100%;
	height: 300px;
	border: 1px solid #777;
	border-radius: 5px;

	background-size: cover;
	backface-visibility: hidden;
`;

const Title = styled.div`
	text-align: center;
	font-size: 2.3rem;
	margin: 100px 0;
`;
const ProductsTitle = styled.div`
	font-size: 1.4rem;
	font-weight: 500;
`;
const Num = styled.div``;

const PriceWrapper = styled.div`
	display: flex;
`;

// 오른쪽 왼쪽 버튼을 눌러 슬라이드 앞뒤로 넘기기

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-right: 120px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 55px;
		height: 55px;
		margin-bottom: 30px;
		border: 1px solid;
		border-radius: 50%;

		&:hover {
			transition: 500ms ease;
		}
		button {
			display: flex;
			align-items: center;
			font-size: 36px;
			background-color: transparent;
			border-style: none;
		}
	}
`;
const ButtonBox = styled.div``;
const ButtonRight = styled.div`
	margin: 0 10px;
`;
