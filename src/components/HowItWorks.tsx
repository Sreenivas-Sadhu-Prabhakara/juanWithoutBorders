'use client';

import AnimatedSection from './AnimatedSection';

const stepsJobSeeker = [
	{
		step: '01',
		title: 'Create Your Profile',
		description:
			'Tell us about your skills, experience, accessibility needs, and career aspirations. Our accessible form adapts to your input method.',
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		),
	},
	{
		step: '02',
		title: 'Get Matched',
		description:
			'Our intelligent matching system pairs you with employers who offer the accommodations you need and roles that fit your strengths.',
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
				/>
			</svg>
		),
	},
	{
		step: '03',
		title: 'Interview with Confidence',
		description:
			'We prepare you with interview coaching, accommodation requests are handled for you, and our team supports you every step of the way.',
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
				/>
			</svg>
		),
	},
	{
		step: '04',
		title: 'Thrive in Your Role',
		description:
			'Ongoing support, mentorship, and check-ins ensure you succeed and grow in your career with an employer who values you.',
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
				/>
			</svg>
		),
	},
];

export default function HowItWorks() {
	return (
		<section
			id="how-it-works"
			className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
			aria-labelledby="how-heading"
		>
			<div className="container-max">
				<AnimatedSection className="text-center mb-16">
					<span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-secondary/50 dark:bg-secondary/10 text-secondary dark:text-secondary mb-4">
						Simple Process
					</span>
					<h2 id="how-heading" className="section-heading mb-4">
						How It{' '}
						<span className="gradient-text gradient-text-dark">Works</span>
					</h2>
					<p className="section-subheading mx-auto">
						Getting started is easy. Our streamlined process is designed to be
						intuitive and accessible for everyone.
					</p>
				</AnimatedSection>

				<div className="relative">
					{/* Connection line */}
					<div
						className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-primary via-secondary to-tertiary dark:from-primary dark:via-secondary dark:to-tertiary"
						aria-hidden="true"
					/>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{stepsJobSeeker.map((item, index) => (
							<AnimatedSection
								key={index}
								animation="fade-up"
								delay={index * 150}
							>
								<div className="relative text-center group">
									{/* Step number circle */}
									<div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg group-hover:border-primary dark:group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300 mb-6 mx-auto">
										<span className="text-primary dark:text-primary group-hover:scale-110 transition-transform duration-300">
											{item.icon}
										</span>
										<span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold flex items-center justify-center shadow-md">
											{item.step}
										</span>
									</div>
									<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
										{item.title}
									</h3>
									<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
										{item.description}
									</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
