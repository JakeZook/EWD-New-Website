import React from "react";
import { motion } from "framer-motion";

const Reviews = () => {
	const reviewData = [
		{
			name: "John Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Jane Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Pee Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Yelp",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Poop Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Fart Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "TripAdvisor",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Ass Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Dink Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
		{
			name: "Donk Doe",
			review:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis",
			date: "2022-01-01",
			platform: "Google",
			img: "https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 1 }}
			className="pb-20"
		>
			<div className="carousel w-full">
				{reviewData.map((review, index) => (
					<div
						key={index}
						id={`item${index}`}
						className="carousel-item lg:w-1/2 w-full flex justify-evenly hover:opacity-80"
					>
						<div className="card card-side bg-accent shadow-xl">
							<figure>
								<img
									className="mask mask-circle ml-2"
									src={review.img}
									alt="Movie"
								/>
							</figure>
							<div className="card-body w-80">
								<h2 className="text-2xl text-primary text-center">
									{review.name}
									<div className="flex justify-center">
										<div className="bg-primary mask mask-star text-primary text-5xl">
											-
										</div>
										<div className="bg-primary mask mask-star text-primary text-5xl">
											-
										</div>
										<div className="bg-primary mask mask-star text-primary text-5xl">
											-
										</div>
										<div className="bg-primary mask mask-star text-primary text-5xl">
											-
										</div>
										<div className="bg-primary mask mask-star text-primary text-5xl">
											-
										</div>
									</div>
								</h2>
								<h3 className="text-center">{review.date}</h3>
								<p className="text-center">{review.review}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Reviews;
