import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles.css';
const StoryComponent = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.pin01',
				scrub: 1,
				pin: '.pin01',
				start: 'top top',
				end: '+=800%',
			},
		});

		tl.to('.bg', { height: 0, duration: 1, delay: -0.9 })
			.to('.typo01', { y: 0, duration: 1, delay: -1.1 })
			.to('.typo02', { y: 0, duration: 1, delay: -1.1 })
			.to('.typo span', { opacity: 0, duration: 1 })
			.to('.typo span', { width: 0, duration: 1 })
			.to('.typo', { gap: 0, duration: 1, delay: -1 })
			.to('.typo', { width: 'auto', y: 0, top: '36%', duration: 1 })
			.to('.bg02', { top: 0, duration: 1, delay: -1 })
			.to('.txt01', { opacity: 1, y: 0, duration: 1 })
			.to('.txt01', { opacity: 0, y: -40, duration: 1 })
			.to('.txt02', { opacity: 1, y: 0, duration: 1 })
			.to('.txt02', { opacity: 0, y: -40, duration: 1 })
			.to('.txt03', { opacity: 1, y: 0, duration: 1 })
			.to('.images', { opacity: 1, delay: -5 })
			.to('.images', { y: '-70%', duration: 6, delay: -4 });
	}, []);

	return (
		<div className="story">
			<div className="pin-spacer">
				<div className="pin01">
					<div className="inner">
						<div
							className="typo"
							style={{
								gap: '351px',
								width: '1240px',
								top: '487px',
								transform: 'translate(0%, -50%)',
							}}
						>
							<div className="typo01 fontC">
								VEL
								<span className="fontD" style={{ opacity: 1, width: '155px' }}>
									&nbsp;Good, Well
								</span>
							</div>
							<div className="typo02 fontC">
								ORA
								<span className="fontD" style={{ opacity: 1, width: '165px' }}>
									&nbsp;Glow, Shine
								</span>
							</div>
						</div>
						<div className="bg" style={{ height: '400px' }}>
							<img src="/e12ac7866eb761df333f85ee59effdd7.jpg" alt="" />
						</div>
					</div>
					<div className="bg02" style={{ top: '974px' }}>
						<img src="/image 11.png" alt="" />
					</div>
					<div
						className="images"
						style={{ opacity: 0, transform: 'translate(0px, 0px)' }}
					>
						<img src="/Frame 444.png" alt="" />
						<img src="/Frame 445.png" alt="" />
						<img src="/Frame 446.png" alt="" />
						<img src="/b7058d7552cf6b8e35f770a29abe65bd.jpg" alt="" />
						<img src="/5ab45317b41ec85a340a6b623f14ea41.jpg" alt="" />
						<img src="/70da054b08e2d37afa13366aeb155eb0.jpg" alt="" />
						<img src="/70da054b08e2d37afa13366aeb155eb0.jpg" alt="" />
					</div>
					<div className="rolling">
						<div
							className="txt txt01"
							style={{ transform: 'translate(0px, 0px)', opacity: 0 }}
						>
							<h3>About Us</h3>
							<p>
								<i>
									<strong>벨로라</strong>
									<sub>velora</sub>
								</i>
								는 스킨케어 루틴을 향상시키기 위해 고안된
								<br />
								혁신적이고 고품질 미용 기기를 통해 자연스러운 아름다움을
								향상시킬 수 있다고 믿습니다.
							</p>
							<p>
								가정에서도 효과적이고 손쉽게 관리할 수 있는 <br />
								새로운 뷰티 라이프스타일을 경험해보세요.
							</p>
						</div>
						<div
							className="txt txt02"
							style={{ transform: 'translate(0px, 0px)', opacity: 0 }}
						>
							<h3>Our Technology</h3>
							<p>
								<i>
									<strong>벨로라</strong>
									<sub>velora</sub>
								</i>
								는 커뮤니티에 참여하여 스타일, 혁신, 효율성의 완벽한 조화로
								도움을 주는 페이지입니다. <br />
							</p>
						</div>
						<div
							className="txt txt03"
							style={{ transform: 'translate(0px, 0px)', opacity: 0 }}
						>
							<h3>Our Community</h3>
							<p>
								여러분의 생각, 질문, 경험을 공유하여 스킨케어 기술의 미래를
								만들어가는 데 동참해 주세요. <br />
								<i>
									<strong>커뮤니티</strong>
									<sub>Community </sub>
								</i>
								모든 목소리가 중요하고 모두가 자신있게 스킨케어 목표를 달성할 수
								있는 커뮤니티를 함께 만들어 갑시다.
							</p>
							<div className="box">
								우리는 스킨케어에 대한 귀하의 전문성과 열정을 소중히 여깁니다.
								<br />
								우리는 제품을 향상하고 귀하의 요구 사항을 충족시키기 위해
								노력하고 있으므로 귀하의 의견을 듣고 싶습니다.
								<br />
								이제 막 기기를 사용하기 시작하신 분이든 오랜 팬이시든 여러분의{' '}
								<br />
								피드백은 매우 소중합니다.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoryComponent;
