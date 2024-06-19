import { LANKPRODUCTS } from '../../context/Mockup';
import styled, { keyframes } from 'styled-components';
import { useLankSlider } from '../../hooks/useSlider';
import { useLankScroll } from '../../hooks/useScroll';

const Lank = () => {
	const lastIndex = 10;
	const pageSize = 1; // 한 페이지에 보여질 이미지 개수
	const intervalTime = 3000;
	const { selected, setIsHovered } = useLankSlider(lastIndex, intervalTime);
	const { isContentCardItem } = useLankScroll();

	const renderImageCard = (item, index) => (
		<CardWrapper key={item.id}>
			<Card isVisible={isContentCardItem}>
				<LankNum>{item.rank}</LankNum>
				<ImageCard>
					<Img src={item.url} alt={`Image ${index}`} />
				</ImageCard>
				<LankText>
					<Brand>{item.brand}</Brand>
					<ProductsTitle>{item.title}</ProductsTitle>
					<PriceWrapper>
						<Price>{`${item.num} / ${item.price}`}</Price>
					</PriceWrapper>
					<Description>{item.description}</Description>
				</LankText>
			</Card>
		</CardWrapper>
	);
	const renderImages = () => {
		const startIndex = selected;
		const endIndex = (startIndex + pageSize) % lastIndex;

		if (startIndex <= endIndex) {
			return LANKPRODUCTS.slice(startIndex, endIndex + 1).map(renderImageCard);
		} else {
			return [
				...LANKPRODUCTS.slice(startIndex, lastIndex).map(renderImageCard),
				...LANKPRODUCTS.slice(0, endIndex + 1).map(renderImageCard),
			];
		}
	};
	return (
		<LankWrapper
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			isVisible={scrollY >= 400}
		>
			<LankTitle>실시간 디바이스 LANK</LankTitle>
			<LankList>
				<CarouselWrapper>{renderImages()}</CarouselWrapper>
			</LankList>
		</LankWrapper>
	);
};

export default Lank;

const slideTop = keyframes`
	 0% {
    transform: translateY(70px);
	opacity: 0;
  }
  100% {
    transform: translateY(0px);
	opacity: 1;
  }
`;

const slideTopLank = keyframes`
	 0% {
    transform: translateY(100px);
	opacity: 0;
  }
  100% {
    transform: translateY(0px);
	opacity: 1;
  }
`;

const CarouselWrapper = styled.div`
	height: 500px;
`;
const LankWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 50px;

	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	animation: ${(props) => (props.isVisible ? slideTopLank : 'none')} 0.6s
		ease-in-out both;
	transition: opacity 0.5s ease-in-out;
`;
const LankTitle = styled.div`
	text-align: center;
	margin-bottom: 100px;
	font-size: 2.3rem;
	font-weight: 500;
`;
const LankList = styled.div`
	display: grid;
	justify-content: center;
`;

const LankText = styled.div``;
const CardWrapper = styled.div`
	padding-bottom: 40px;
`;
const Card = styled.div`
	display: flex;

	animation: ${slideTop} 0.3s ease-in-out;
`;
const ImageCard = styled.div``;
const Img = styled.img`
	width: 150px;
	height: 150px;
	border: 1px solid black;
	border-radius: 3px;
	margin-right: 30px;
`;

const LankNum = styled.div`
	padding: 10px 20px 0 0;
	font-size: 1.2rem;
	font-weight: 600;
`;
const Brand = styled.div`
	color: #333;
	padding-top: 10px;
`;
const ProductsTitle = styled.div`
	display: grid;
	align-items: center;
	padding: 10px 0;
	font-size: 1.3rem;
`;
const PriceWrapper = styled.div`
	padding-bottom: 10px;
`;
const Price = styled.div`
	margin-right: 30px;
`;
const Description = styled.div`
	width: 300px;
	padding-top: 10px;
	color: gray;
`;
