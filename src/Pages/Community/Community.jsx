import styled from 'styled-components';

const Community = () => {
	return (
		<>
			<CommunityTitle>COMMUNITY</CommunityTitle>
			<BoxWrapper>
				<FirstBox>
					<div>
						<div>제목</div>
						<div>시간</div>
					</div>
					<Comment>
						<div>댓글 아이콘</div>
						<div>댓글 수</div>
					</Comment>
				</FirstBox>
				<SecondBox>
					<div>
						<div>제목</div>
						<div>시간</div>
					</div>
					<Comment>
						<div>댓글 아이콘</div>
						<div>댓글 수</div>
					</Comment>
				</SecondBox>
			</BoxWrapper>
		</>
	);
};

export default Community;

const CommunityTitle = styled.div`
	font-size: 2.3rem;
	text-align: center;
	margin-bottom: 50px;
`;
const BoxWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FirstBox = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	padding: 30px;
	margin: 0 10px 0 50px;
	border: 1px solid gray;
	border-radius: 10px;
`;
const SecondBox = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	padding: 30px;
	margin: 0 50px 0 10px;
	border: 1px solid gray;
	border-radius: 10px;
`;

const Comment = styled.div`
	display: flex;
	align-items: center;
`;
