import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AboutUs.module.css';

const AboutUs = () => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		gsap.to('[data-speed]', {
			y: (i, el) =>
				(1 - parseFloat(el.getAttribute('data-speed'))) *
				ScrollTrigger.maxScroll(window),
			ease: 'none',
			scrollTrigger: {
				start: 0,
				end: 'max',
				invalidateOnRefresh: true,
				scrub: 0,
			},
		});

		gsap.fromTo(
			`.${styles.title_deco_right}`,
			{ x: 400, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				scrub: 0,
				duration: 1,
				onComplete: () => {
					gsap.to(`.${styles.title_deco_right}`, { opacity: 0, duration: 1 });
				},
			},
		),
			gsap.fromTo(
				`.${styles.title_deco_left}`,
				{ x: -200, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					scrub: 0,
					duration: 1,
					onComplete: () => {
						gsap.to(`.${styles.title_deco_left}`, { opacity: 0, duration: 1 });
					},
				},
			);
		gsap.fromTo(
			`.${styles.title_velora}`,
			{ opacity: 0 },
			{
				opacity: 0,
				scrub: 0,
				duration: 2,
				onComplete: () => {
					gsap.to(`.${styles.title_velora}`, { opacity: 1, duration: 1 });
				},
			},
		);
	}, []); // 마운트 시 한 번만 실행

	return (
		<div id={styles.wrapper}>
			<section id={styles.content}>
				<div className={styles.heading} aria-hidden="true">
					<p>smooooth</p>
					<div className={styles.text_container}>
						<p>scrolling</p>
						<p data-speed="0.95">scrolling</p>
						<p data-speed="0.9">scrolling</p>
						<p data-speed="0.85">scrolling</p>
						<p data-speed="0.8">scrolling</p>
						<p data-speed="0.75">scrolling</p>
						<p data-speed="0.7">scrolling</p>
					</div>
				</div>
				<div className={styles.title_name_wrapper}>
					<div className={styles.title_deco_left}>
						<span className={styles.title_name}>VEL </span>
						<span className={styles.sub_title_name}>velvet</span>
					</div>
					<div className={styles.title_deco_right}>
						<span className={styles.sub_title_name}>aura </span>
						<span className={styles.title_name}>ORA</span>
					</div>
				</div>
				<div class={styles.title_velora}>VELORA</div>
				<div className={styles.image_grid_wrapper}>
					<section className={`${styles.image_grid} ${styles.container}`}>
						<div className={styles.image_cont} data-speed="1.2"></div>
						<div className={styles.image_cont} data-speed="1.3">
							<img data-speed="auto" src="/public/Frame 446.png" alt="" />
						</div>
						<div className={styles.image_cont} data-speed="1.2">
							<img data-speed="auto" src="/public/Frame 445.png" alt="" />
						</div>
					</section>
				</div>
				<section className={`${styles.title} ${styles.container}`}>
					<h1>
						<span className={styles.eyebrow} aria-hidden="true">
							with{' '}
						</span>
						GSAP scrollsmoother
					</h1>
					<p>
						Seamlessly integrated with GSAP and ScrollTrigger. Leveraging native
						scrolling - no "fake" scrollbars or event hijacking.
					</p>
				</section>

				<section className={`${styles.bars} ${styles.container}`}>
					<div className={styles.bars_text}>
						<div className={`${styles.flow} ${styles.content}`}>
							<h2>Speed Control</h2>
							<p>
								Animate elements along at different speeds, slow them down or
								make them whizz past.
							</p>
						</div>
					</div>

					<div className={styles.bars_cont}>
						<div className={styles.bar} data-speed="2.4">
							<p>2.4</p>
						</div>

						<div className={styles.bar} data-speed="0.9">
							<p>0.9</p>
						</div>

						<div className={styles.bar} data-speed="1">
							<p>1</p>
						</div>

						<div className={styles.bar} data-speed="1.1">
							<p>1.1</p>
						</div>

						<div className={styles.bar} data-speed="1.2">
							<p>1.2</p>
						</div>
					</div>
				</section>

				<section className={styles.v_center}>
					<div className={styles.parallax_slab}>
						<img
							data-speed="auto"
							src="https://assets.codepen.io/756881/smoothscroller-1.jpg"
							alt=""
						/>
					</div>
				</section>

				<section className={`${styles.staggered} ${styles.container}`}>
					<div className={styles.staggered_text}>
						<div className={`${styles.flow} ${styles.content}`}>
							<h2>Add some lag (the good kind!)</h2>
							<p>
								loosen the connection to the scroll to give a feeling of 'follow
								through.'
							</p>
						</div>
					</div>

					<div className={styles.staggered_demo}>
						<h3 id="split-stagger">stagger...</h3>
					</div>
				</section>

				<section className={`${styles.parallax_images} ${styles.container}`}>
					<div className={styles.parallax_text}>
						<div className={`${styles.flow} ${styles.content}`}>
							<h2>Easy parallax image effects</h2>
							<p>
								Pop your images in a container with overflow hidden, size them a
								little larger than the container and set data-speed to auto.
								GSAP does the rest.
							</p>
						</div>
					</div>

					<div className={styles.image_cont}>
						<img
							data-speed="auto"
							src="https://assets.codepen.io/756881/neon3.jpg"
							alt=""
						/>
					</div>
					<div className={styles.image_cont}>
						<img
							data-speed="auto"
							src="https://assets.codepen.io/756881/neon2.jpg"
							alt=""
						/>
					</div>
				</section>

				<section className={styles.spacer}></section>
			</section>
		</div>
	);
};

export default AboutUs;
