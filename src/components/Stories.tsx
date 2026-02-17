'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const stories = [
	{
		name: 'Sarah Mitchell',
		role: 'Software Engineer at TechCorp',
		image: 'https://via.placeholder.com/400x400/6366f1/ffffff?text=Image+6',
		quote: "Juan Without Borders didn't just find me a job — they found me a career. The team ensured my workplace had screen reader compatibility, and my employer has been incredibly supportive. I've been promoted twice in three years.",
		disability: 'Visual Impairment',
		badge: 'Placed 2023',
	},
	{
		name: 'Marcus Johnson',
		role: 'Data Analyst at GlobalFinance',
		image: 'https://via.placeholder.com/400x400/14b8a6/ffffff?text=Image+7',
		quote: 'As a wheelchair user, I was nervous about finding an employer who truly understood accessibility. JWB connected me with a company that had already adapted their entire office. I felt welcome from day one.',
		disability: 'Mobility',
		badge: 'Placed 2024',
	},
	{
		name: 'Aisha Patel',
		role: 'Marketing Manager at BrandCo',
		image: 'https://via.placeholder.com/400x400/4f46e5/ffffff?text=Image+0',
		quote: 'The support I received was extraordinary. From resume building to interview prep with accommodations for my hearing impairment, every step was thoughtful. My employer even learned basic sign language for me.',
		disability: 'Hearing Impairment',
		badge: 'Placed 2024',
	},
];

export default function Stories() {
	const [activeStory, setActiveStory] = useState(0);

	return (
		<section
			id="stories"
			className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
			aria-labelledby="stories-heading"
		>
			<div className="container-max">
				<AnimatedSection className="text-center mb-16">
					<span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/50 dark:bg-primary/10 text-primary dark:text-primary mb-4">
						Success Stories
					</span>
					<h2 id="stories-heading" className="section-heading mb-4">
						Real People, Real{' '}
						<span className="gradient-text gradient-text-dark">
							Transformations
						</span>
					</h2>
					<p className="section-subheading mx-auto">
						Hear from individuals whose lives were changed through inclusive
						employment opportunities.
					</p>
				</AnimatedSection>

				<AnimatedSection animation="fade-up" delay={200}>
					<div className="max-w-5xl mx-auto">
						{/* Story cards */}
						<div className="relative bg-white dark:bg-slate-800/50 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden">
							<div className="grid md:grid-cols-5 gap-0">
								{/* Image side */}
								<div className="md:col-span-2 relative h-64 md:h-auto">
									<Image
										src={stories[activeStory].image}
										alt={`Portrait of ${stories[activeStory].name}, ${stories[activeStory].role}`}
										className="w-full h-full object-cover"
										width={400}
										height={400}
										loading="lazy"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
									<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
										<span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium">
											{stories[activeStory].badge}
										</span>
									</div>
								</div>

								{/* Content side */}
								<div className="md:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
									<div
										className="flex gap-1 mb-4"
										aria-label="5 out of 5 stars"
										role="img"
									>
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className="w-5 h-5 text-amber-400"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>

									<blockquote>
										<p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
											&ldquo;{stories[activeStory].quote}&rdquo;
										</p>
									</blockquote>

									<div className="mb-6">
										<div className="font-bold text-slate-900 dark:text-white text-lg">
											{stories[activeStory].name}
										</div>
										<div className="text-slate-500 dark:text-slate-400 text-sm">
											{stories[activeStory].role}
										</div>
									</div>

									{/* Story selector */}
									<div
										className="flex gap-3"
										role="tablist"
										aria-label="Select a success story"
									>
										{stories.map((story, index) => (
											<button
												key={index}
												onClick={() => setActiveStory(index)}
												role="tab"
												aria-selected={activeStory === index}
												aria-label={`Story from ${story.name}`}
												className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
													activeStory === index
														? 'border-primary scale-110 shadow-lg shadow-primary/25'
														: 'border-slate-200 dark:border-slate-600 opacity-60 hover:opacity-100'
												}`}
											>
												<Image
													src={story.image}
													alt={story.name}
													className="w-full h-full object-cover"
													width={48}
													height={48}
												/>
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</AnimatedSection>
			</div>
		</section>
	);
}
