import { LANKPRODUCTS } from '../../context/Mockup';
import styled, { keyframes } from 'styled-components';
import { useLankSlider } from '../../hooks/useSlider';
import { useLankScroll } from '../../hooks/useScroll';

const Lank = () => {
	const lastIndex = 10;
	const pageSize = 4; // 한 페이지에 보여질 이미지 개수
	const intervalTime = 3000;
	const { selected, setIsHovered } = useLankSlider(lastIndex, intervalTime);
	const { isContentCardItem } = useLankScroll();

	const renderImageCard = (item, index) => (
		<CardWrapper key={item.id}>
			<Card isVisible={isContentCardItem}>
				<LankNum>{item.rank}</LankNum>
				<ItemWrapper>
					<ImageCard>
						<Img src={item.url} alt={`Image ${index}`} />
					</ImageCard>
					<LankText>
						<Brand>{item.brand}</Brand>
						<ProductsTitle>{item.title}</ProductsTitle>
					</LankText>
				</ItemWrapper>
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
		<RankBackground>
			<LankWrapper
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				isVisible={scrollY >= 200}
			>
				<LankTitle>
					<div>디바이스</div>
					<div>LANK</div>
				</LankTitle>
				<LankList>
					<CarouselWrapper>{renderImages()}</CarouselWrapper>
				</LankList>
			</LankWrapper>
		</RankBackground>
	);
};

export default Lank;

const slideTop = keyframes`
	 0% {
    transform: translateX(70px);
	opacity: 0;
  }
  100% {
    transform: translateX(0px);
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
const RankBackground = styled.div`
	position: relative;
	top: -90px;

	background-image: url('/src/assets/SpritePattern.png');
	background-size: cover;
`;
const CarouselWrapper = styled.div`
	height: 400px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-left: 100px;
`;
const LankWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	opacity: ${(props) => (props.isVisible ? 1 : 0)};
	animation: ${(props) => (props.isVisible ? slideTopLank : 'none')} 0.6s
		ease-in-out both;
	transition: opacity 0.5s ease-in-out;
`;
const ItemWrapper = styled.div``;
const LankTitle = styled.div`
	position: absolute;
	top: 100px;
	left: 80px;
	text-align: left;

	font-size: 1.6rem;
	font-weight: 300;
	:nth-child(2) {
		color: #ff3131;
		font-weight: 700;
		font-style: italic;
	}
`;
const LankList = styled.div``;

const LankText = styled.div``;
const CardWrapper = styled.div`
	padding: 40px 0;
`;
const Card = styled.div`
	display: flex;
	text-align: center;

	animation: ${slideTop} 0.3s ease-in-out;
`;
const ImageCard = styled.div``;
const Img = styled.img`
	width: 180px;
	height: 180px;
	border: 5px solid #f1f1f1;
	border-radius: 100%;
`;

const LankNum = styled.div`
	padding: 10px 10px 0 0;
	font-size: 1.2rem;
	font-weight: 600;
`;
const Brand = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #969595;
	padding-top: 10px;
`;
const ProductsTitle = styled.div`
	display: grid;
	align-items: center;
	width: 200px;
	padding: 10px 0;
	font-size: 1.3rem;
	font-weight: 600;
`;
