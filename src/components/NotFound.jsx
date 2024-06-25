import styled from 'styled-components';

const NotFound = () => {
	return (
		<NotFoundWrapper>
			<p>Not Found</p>
			<span>준비중입니다</span>
		</NotFoundWrapper>
	);
};

export default NotFound;

const NotFoundWrapper = styled.div`
	height: 500px;
	font-size: 6rem;
	text-align: center;
	span {
		padding-top: -150px;
	}
`;
