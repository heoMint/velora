import { useState } from 'react';
import { ALLPRODUCTS } from '../../context/Mockup';
import { useProductsSlider } from '../../hooks/useSlider';
import { useProductsScroll } from '../../hooks/useScroll';
import styled, { keyframes } from 'styled-components';

const AllProducts = () => {
	const [isHover, setIsHover] = useState(null);

	const lastIndex = 5;
	const pageSize = 3; // 한 페이지에 보여질 이미지 개수
	const intervalTime = 3000; // Interval time in milliseconds

	const { selected, setIsHovered } = useProductsSlider(lastIndex, intervalTime);

	const { scrollY, isContentCardItem } = useProductsScroll();
	// const handlerPrev = () => {
	// 	setSelected((prevSelected) => (prevSelected - 1 + lastIndex) % lastIndex);
	// };
	// const handlerNext = () => {
	// 	setSelected((prevSelected) => (prevSelected + 1) % lastIndex);
	// };

	const renderImageCard = (image, index) => (
		<CardWrapper key={image.id}>
			<Card isVisible={isContentCardItem}>
				<ImageCard
					onMouseEnter={() => setIsHover(index)}
					onMouseLeave={() => setIsHover(null)}
				>
					<Img
						src={image.url}
						alt={`Image ${index}`}
						isHover={isHover === index}
					/>
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
			isVisible={scrollY >= 1000}
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
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	justify-content: center;
	overflow: visible;
	position: relative;
	margin-bottom: 100px;
`;
const CardWrapper = styled.div`
	overflow: hidden;
	animation: ${fadeInRight} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	@media (max-width: 767px) {
	}
`;
const Card = styled.div`
	padding: 20px 10px;
`;

const ImageCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 300px;
	height: 300px;
	border: 1px solid #e4e4e4;
	margin-bottom: 20px;
	@media (max-width: 767px) {
		width: 180px;
		height: 180px;
	}
`;
const Img = styled.img`
	width: 80%;
	border-radius: 5px;
	background-size: cover;
	backface-visibility: hidden;

	transform: ${(props) => (props.isHover ? 'scale(1.2)' : 'scale(1)')};
	transition: transform 0.6s ease-in-out;
	z-index: ${(props) => (props.isHover ? 1 : 0)};
	@media (max-width: 767px) {
		width: 80%;
	}
`;

const Title = styled.div`
	text-align: center;
	font-size: 2.3rem;
	margin: 150px 0 50px;
	color: #111;
`;
const ProductsTitle = styled.div`
	margin-bottom: 10px;
	font-size: 1.4rem;
	font-weight: 600;
	color: #111;
	@media (max-width: 767px) {
		font-size: 1.2rem;
	}
`;
const Num = styled.div`
	/* font-weight: 600; */
`;

const PriceWrapper = styled.div`
	display: flex;
`;
