import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Footer = () => {
	return (
		<FooterWrapper>
			<FooBoxWrapper>
				<FooBox>
					<span>냥글냥글 소개</span>
					<span>크리에이터신청</span>
					<span>제휴문의</span>
					<span>이용약관 </span>
					<span>개인정보처리방침 </span>
					<span>저작권안내</span>
				</FooBox>
				<FooBox>
					<span>공지사항</span>
					<span>FAQ</span>
				</FooBox>
				<FooIcon>
					<FaFacebookF />
					<FaInstagram />
					<FaYoutube />
					<RiKakaoTalkFill />
				</FooIcon>
				<FooBox>
					<div>
						벨로라 통신판매중개자로서 중개하는 거래에 대하여 책임을 부담하지
						않습니다. 단, 냥글냥글이 판매자로 등록/판매한 상품은 판매자로서
						책임을 부담합니다.
					</div>
					<div>
						벨로라 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한 무단
						복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업 진흥법
						등에 의하여 엄격히 금지됩니다.
					</div>
				</FooBox>

				<FooYear>
					<div>2024</div>
					<div>Copyright ©</div>
				</FooYear>
			</FooBoxWrapper>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	height: 400px;
	background-color: #eeeeee;
`;
const FooBoxWrapper = styled.div`
	padding-top: 30px;
`;
const FooBox = styled.div`
	padding: 30px 0 0 50px;
	span {
		padding-right: 20px;
		word-break: keep-all;
	}
	div {
		padding: 0 0 10px 0;
	}
`;
const FooIcon = styled.div`
	padding: 30px 0 0 50px;
	svg {
		font-size: 24px;
		padding-right: 20px;
	}
`;
const FooYear = styled.div`
	padding: 20px 0 0 50px;
	:nth-child(1) {
		font-weight: 800;
		font-size: 60px;
		padding-bottom: 10px;
	}
	:nth-child(2) {
		color: gray;
	}
`;
