import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import Img1 from 'common/assets/image/app/img-1.png';
import Img2 from 'common/assets/image/app/img-3.png';
import Img3 from 'common/assets/image/app/img-4.png';
import Img4 from 'common/assets/image/app/img-5.png';
import Img5 from 'common/assets/image/app/img-6.png';
import Img6 from 'common/assets/image/app/img-8.png';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
	const particlesInit = useCallback(async (engine) => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	return (
		<>
			<Particles
				id="tsparticles"
				init={particlesInit}
				className="particle"
				options={{
					particles: {
						number: {
							value: 15,
							density: { enable: true, value_area: 800 },
						},

						shape: {
							type: ['images'],
							image: [
								{
									src: `${Img1?.src}`,
									width: 50,
									height: 52,
								},
								{
									src: `${Img2?.src}`,
									width: 50,
									height: 52,
								},
								{
									src: `${Img3?.src}`,
									width: 20,
									height: 23,
								},
								{
									src: `${Img4?.src}`,
									width: 20,
									height: 23,
								},
								{
									src: `${Img5?.src}`,
									width: 50,
									height: 53,
								},
								{
									src: `${Img6?.src}`,
									width: 50,
									height: 53,
								},
							],
						},
						opacity: {
							value: 0.57626369048095938,
							random: false,
							anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
						},
						size: {
							value: 8,
							random: true,
							anim: { enable: false, speed: 40, size_min: 0.8, sync: false },
						},
						line_linked: {
							enable: false,
							distance: 150,
							color: '#ffffff',
							opacity: 0.4,
							width: 1,
						},
						move: {
							enable: true,
							speed: 3,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'out',
							bounce: false,
							attract: { enable: false, rotateX: 600, rotateY: 1200 },
						},
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: { enable: true, mode: 'repulse' },
							onclick: { enable: true, mode: 'push' },
							resize: true,
						},
						modes: {
							grab: { distance: 400, line_linked: { opacity: 1 } },
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: { distance: 200, duration: 0.4 },
							push: { particles_nb: 4 },
							remove: { particles_nb: 2 },
						},
					},
					retina_detect: true,
				}}
			/>
		</>
	);
};
export default ParticlesComponent;
