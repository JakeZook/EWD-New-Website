import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import bg1 from "../assets/ewd_background_4.jpg";
import bg2 from "../assets/ewd_background_5.jpg";

const GiftCards = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate();

	const handleLinkClick = (link) => {
		navigate(`${link}`);
	};

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center my-3">
				<h1 className="text-primary font-display text-5xl py-3">Gift Cards</h1>
				<h2 className="text-neutral font-display text-3xl ">
					Give a gift of an escape
				</h2>
			</header>
			<main className="mt-12 flex justify-center flex-col items-center pb-20">
				<section className="flx flex-col items-center mb-10">
					<h2 className="text-4xl text-primary font-display pb-5">
						Please choose a location:
					</h2>
					<div className="flex justify-between">
						<div className="flex flex-col items-center">
							<h4 className="text-2xl text-accent">Convention Center</h4>
							<p>1529 Champa St.</p>
							<p>Denver, CO 80202</p>
							<button className="btn btn-primary text-md hover:btn-accent btn-md mt-3">
								Buy Here
							</button>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col items-center">
								<h4 className="text-3xl text-accent">Ballpark</h4>
								<p>1925 Blake St.</p>
								<p>Denver, CO 80202</p>
								<button className="btn btn-primary text-md hover:btn-accent btn-md mt-3">
									Buy Here
								</button>
							</div>
						</div>
					</div>
				</section>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center border-r-8 border-accent border-double mx-1 mb-10"
				>
					<img
						src={bg1}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3 max-lg:mb-3"
					/>
					<aside className="flex flex-col items-center w-2/3">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							Why buy a gift card?
						</h2>
						<p className="text-center px-3 text-xl pb-3">
							Buying gifts for your friends and family is one of the best
							feelings in the world. However, we all know people who are a
							little hard to shop for. In this case, you may agonize over what
							to get your loved one, all while worrying about how your gift will
							be received.
						</p>
						<button className="btn btn-primary text-black text-xl hover:btn-accent btn-md">
							Redeem Voucher
						</button>
					</aside>
				</motion.section>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center border-l-8 border-accent border-double mx-1"
				>
					<aside className="flex flex-col items-center w-2/3">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							We got you covered
						</h2>
						<p className="text-center px-3 text-xl pb-3">
							Fortunately, EscapeWorks Denver has just the thing for you. Our
							theme-based escape rooms offer fun, adventure, and excitement to
							people of all skill levels and ages. We can also accommodate many
							diverse group sizes, from couples to groups of 12 or more. And if
							you’re not sure when you or a loved one will have time to partake
							in the experience, why not pick up one of our convenient gift
							cards?
						</p>
						<button
							onClick={() => handleLinkClick("/all-rooms")}
							className="btn btn-primary text-black text-xl hover:btn-accent btn-md"
						>
							View Rooms
						</button>
					</aside>
					<img
						src={bg2}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 max-lg:mb-3"
					/>
				</motion.section>
			</main>
		</div>
	);
};

export default GiftCards;
