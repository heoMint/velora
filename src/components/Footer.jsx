import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<FooBox>
				<div>냥글냥글 소개</div>
				<div>크리에이터신청</div>
				<div>제휴문의</div>
				<div>이용약관 </div>
				<div>개인정보처리방침 </div>
				<div>저작권 안내</div>
			</FooBox>
			<FooBox>
				<div>공지사항</div>
				<div>FAQ</div>
			</FooBox>
			<div>
				<div>
					벨로라 통신판매중개자로서 중개하는 거래에 대하여 책임을 부담하지
					않습니다. 단, 냥글냥글이 판매자로 등록/판매한 상품은 판매자로서 책임을
					부담합니다.
				</div>
				<div>
					벨로라 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단 복제,
					전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법 등에
					의하여 엄격히 금지됩니다.
				</div>
			</div>
			<div>
				<div>2024</div>
				<div>Copyright ©</div>
			</div>
		</FooterWrapper>
	);
};

export default Footer;


const FooterWrapper = styled.div`
	background-color: #eeeeee;
`;
const FooBox = styled.div`
	display: flex;
`;
