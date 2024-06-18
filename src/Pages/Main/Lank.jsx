import styled from 'styled-components';

const Lank = () => {
	return (
		<LankWrapper>
			<LankTitle>실시간 디바이스 LANK</LankTitle>

			<LankList>
				<LankNum>1번</LankNum>
				<LankImage>이미지 박스</LankImage>
				<LankText>
					<div>메디큐브</div>
					<div>에이지알 부스터 프로</div>
					<div>1ea / 658,000원</div>
					<div>단 하나에 담긴 혁신, 메디큐브 최초 6 in 1 토탈케어</div>
				</LankText>
			</LankList>
		</LankWrapper>
	);
};

export default Lank;

const LankWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 100px;
	margin-left: 50px;
`;
const LankTitle = styled.div`
	margin-bottom: 100px;
	font-size: 3rem;
	font-weight: 500;
`;
const LankNum = styled.div`
	margin-right: 30px;
`;
const LankList = styled.div`
	display: flex;
`;
const LankText = styled.div`
	display: grid;
	align-items: center;
`;
const LankImage = styled.div`
	width: 150px;
	height: 150px;
	border: 1px solid black;
	border-radius: 3px;
	margin-right: 30px;
`;
