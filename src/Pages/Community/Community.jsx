import { BsChatRightQuote } from 'react-icons/bs';
import styled from 'styled-components';
import { COMMENT } from '../../context/Mockup';

const Community = () => {
	return (
		<>
			<CommunityTitle>COMMUNITY</CommunityTitle>
			<BoxWrapper>
				{COMMENT.map((item) => (
					<>
						<FirstBox key={item.id}>
							<div>
								<Title>{item.title}</Title>
								<div>{item.time}</div>
							</div>
							<Comment>
								<BsChatRightQuote size={22} />
								<CommentNum>{item.Comment}</CommentNum>
							</Comment>
						</FirstBox>
					</>
				))}
			</BoxWrapper>
		</>
	);
};

export default Community;

const CommunityTitle = styled.div`
	font-size: 2.3rem;
	text-align: center;
	margin: 200px 0 100px 0;
`;
const BoxWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 30px;
`;
const Title = styled.div`
	padding-bottom: 10px;
	font-size: 1.2rem;
	font-weight: 600;
`;
const FirstBox = styled.div`
	display: flex;
	flex-basis: 40%;
	flex-grow: 1;
	justify-content: space-between;
	padding: 30px;
	margin: 10px 10px;
	border: 1px solid gray;
	border-radius: 10px;
`;
const Comment = styled.div`
	display: flex;
	align-items: center;
`;
const CommentNum = styled.div`
	padding-left: 10px;
`;
