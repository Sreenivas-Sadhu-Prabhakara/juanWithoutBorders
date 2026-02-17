'use client';

import AnimatedSection from './AnimatedSection';

const employers = [
	{
		benefit: 'Tax Incentives',
		description:
			'Access government tax credits and incentives for hiring individuals with disabilities, reducing your overall employment costs.',
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
					d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
				/>
			</svg>
		),
	},
	{
		benefit: 'Diverse Talent Pipeline',
		description:
			'Access a pre-vetted pool of skilled, motivated candidates who bring unique perspectives and problem-solving abilities to your team.',
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
					d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
				/>
			</svg>
		),
	},
	{
		benefit: 'Accommodation Guidance',
		description:
			'We provide expert guidance on workplace accommodations, helping you create an inclusive environment that benefits all employees.',
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
					d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	},
	{
		benefit: 'Compliance Support',
		description:
			'Stay ahead of ADA, EEOC, and international disability employment regulations with our compliance tools and resources.',
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
	},
];

export default function Employers() {
	return (
		<section
			id="employers"
			className="section-padding bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 dark:from-slate-950 dark:via-brand-950/50 dark:to-slate-950 text-white relative overflow-hidden"
			aria-labelledby="employers-heading"
		>
			{/* Background decorations */}
			<div className="absolute inset-0 -z-0" aria-hidden="true">
				<div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
			</div>

			<div className="container-max relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left content */}
					<div>
						<AnimatedSection animation="fade-up">
							<span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-brand-300 border border-white/10 mb-4">
								For Employers
							</span>
							<h2
								id="employers-heading"
								className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
							>
								Hire Inclusively,{' '}
								<span className="bg-gradient-to-r from-brand-400 via-accent-400 to-warm-400 bg-clip-text text-transparent">
									Grow Exponentially
								</span>
							</h2>
							<p className="text-lg text-slate-300 mb-8 leading-relaxed">
								Companies that embrace disability inclusion see up to 28% higher
								revenue, 30% better profit margins,
								<br className="hidden sm:block" /> and 2x more net income.
								Partner with us to build a truly inclusive workforce.
							</p>
						</AnimatedSection>

						<div className="space-y-4">
							{employers.map((item, index) => (
								<AnimatedSection
									key={index}
									animation="slide-left"
									delay={index * 100}
								>
									<div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
										<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/30 transition-colors">
											{item.icon}
										</div>
										<div>
											<h3 className="font-semibold text-white mb-1">
												{item.benefit}
											</h3>
											<p className="text-sm text-slate-400 leading-relaxed">
												{item.description}
											</p>
										</div>
									</div>
								</AnimatedSection>
							))}
						</div>

						<AnimatedSection animation="fade-up" delay={500}>
							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="#contact"
									className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100 !shadow-white/20"
								>
									Partner With Us
								</a>
								<a
									href="#stories"
									className="btn-ghost !text-slate-300 hover:!bg-white/10"
								>
									See Success Stories →
								</a>
							</div>
						</AnimatedSection>
					</div>

					{/* Right - Image */}
					<AnimatedSection animation="scale" delay={200}>
						<div className="relative">
							<div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
								<img
									src="https://via.placeholder.com/600x450/ec4899/ffffff?text=Image+5"
									alt="Corporate employer welcoming a new team member in an accessible office"
									className="w-full h-auto aspect-[4/3] object-cover"
									loading="lazy"
								/>
							</div>
							{/* Testimonial overlay */}
							<div className="absolute -bottom-6 -left-6 max-w-xs bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-5 border border-slate-100 dark:border-slate-700">
								<div className="flex gap-1 mb-2" aria-label="5 out of 5 stars">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="w-4 h-4 text-amber-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-sm text-slate-700 dark:text-slate-300 italic">
									&ldquo;Juan Without Borders transformed our hiring. Our
									inclusive team drives real innovation.&rdquo;
								</p>
								<p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
									— HR Director, Fortune 500
								</p>
							</div>
						</div>
					</AnimatedSection>
				</div>
			</div>
		</section>
	);
}
