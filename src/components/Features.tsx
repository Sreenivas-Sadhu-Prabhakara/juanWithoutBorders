'use client';

import AnimatedSection from './AnimatedSection';

const features = [
	{
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
				/>
			</svg>
		),
		title: 'Personalized Matching',
		description:
			'Our AI-powered system considers your unique abilities, preferences, accommodation needs, and career goals to find the perfect match.',
		color: 'primary',
	},
	{
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
				/>
			</svg>
		),
		title: 'Verified Accessible Workplaces',
		description:
			'Every employer on our platform is vetted for accessibility compliance, reasonable accommodations, and genuine commitment to inclusion.',
		color: 'secondary',
	},
	{
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
				/>
			</svg>
		),
		title: 'Skills Development',
		description:
			'Access free training programs, mentorship opportunities, and career coaching designed to help you advance in your chosen field.',
		color: 'primary',
	},
	{
		icon: (
			<svg
				className="w-7 h-7"
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
		title: 'Ongoing Support',
		description:
			'From application to onboarding and beyond, our dedicated support team ensures a smooth transition into your new role.',
		color: 'primary',
	},
	{
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
				/>
			</svg>
		),
		title: 'Global Reach',
		description:
			'Our platform spans across borders, connecting you with remote and on-site opportunities from companies worldwide that value inclusion.',
		color: 'secondary',
	},
	{
		icon: (
			<svg
				className="w-7 h-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={1.5}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
				/>
			</svg>
		),
		title: 'Assistive Technology Support',
		description:
			'Our platform is built with accessibility-first design, supporting screen readers, voice control, keyboard navigation, and all assistive technologies.',
		color: 'tertiary',
	},
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
	primary: {
		bg: 'bg-primary/50 dark:bg-primary/10',
		icon: 'text-primary dark:text-primary',
		border: 'group-hover:border-primary dark:group-hover:border-primary',
	},
	secondary: {
		bg: 'bg-secondary/50 dark:bg-secondary/10',
		icon: 'text-secondary dark:text-secondary',
		border: 'group-hover:border-secondary dark:group-hover:border-secondary',
	},
	tertiary: {
		bg: 'bg-tertiary/50 dark:bg-tertiary/10',
		icon: 'text-tertiary dark:text-tertiary',
		border: 'group-hover:border-tertiary dark:group-hover:border-tertiary',
	},
};

export default function Features() {
	return (
		<section id="about" className="section-padding" aria-labelledby="features-heading">
			<div className="container-max">
				<AnimatedSection className="text-center mb-16">
					<span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/50 dark:bg-primary/10 text-primary dark:text-primary mb-4">
						Why Choose Us
					</span>
					<h2 id="features-heading" className="section-heading mb-4">
						Designed for{' '}
						<span className="gradient-text gradient-text-dark">Everyone</span>
					</h2>
					<p className="section-subheading mx-auto">
						We&apos;ve built every feature with accessibility at its core, ensuring an
						inclusive experience for all users regardless of ability.
					</p>
				</AnimatedSection>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{features.map((feature, index) => (
						<AnimatedSection key={index} animation="fade-up" delay={index * 100}>
							<div
								className={`group card-interactive p-6 sm:p-8 h-full ${colorMap[feature.color].border}`}
								role="article"
							>
								<div
									className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colorMap[feature.color].bg} mb-5`}
								>
									<span className={colorMap[feature.color].icon}>
										{feature.icon}
									</span>
								</div>
								<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
									{feature.title}
								</h3>
								<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</AnimatedSection>
					))}
				</div>
			</div>
		</section>
	);
}
