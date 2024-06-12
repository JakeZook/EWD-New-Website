import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import bg1 from "../assets/ewd_tb1.jpg";
import bg2 from "../assets/ewd_tb2.jpg";
import bg3 from "../assets/ewd_tb3.jpg";
import bg4 from "../assets/ewd_tb4.jpg";

const TeamBuilding = () => {
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
				<h1 className="text-primary font-display text-5xl py-3">
					Team Building
				</h1>
				<h2 className="text-neutral font-display text-3xl text-center">
					Reserve a group exigence here!
				</h2>
			</header>
			<main className="mt-12 flex justify-center flex-col items-center pb-20 text-center">
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center lg:border-r-8 lg:border-accent lg:border-double mx-5 mb-10 max-lg:flex-col max-lg:m-0"
				>
					<img
						src={bg1}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3 max-lg:mb-3 max-lg:hidden"
					/>
					<aside className="flex flex-col items-center w-2/3 mr-3 max-lg:m-0">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							Allow Us to Host Your Event
						</h2>
						<img
							src={bg1}
							alt="A person escaping from a locked door"
							className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3 max-lg:mb-3 lg:hidden"
						/>
						<p className="text-center px-3 text-xl pb-5 max-lg:m-0">
							Reserve a Team Building event with CoBiz Magazine’s{" "}
							<span
								onClick={() =>
									(window.location.href =
										"https://www.escapeworksdenver.com/team-building-activities/")
								}
								className="text-primary hover:text-accent cursor-pointer"
							>
								Best Team Building place!
							</span>{" "}
							Team Building events at EscapeWorks are private, scheduled to
							start at the same time, and available for groups of 13 or more
							people.
						</p>
						<p className="text-center px-3 text-xl pb-5 max-lg:m-0">
							If you would like assistance with booking your event, please{" "}
							<span
								onClick={() =>
									(window.location.href =
										"https://webforms.pipedrive.com/f/1DZFysW2n731ohmINfooaizvOHJysoPcG8kbzlEsPCQeiYGhpeQkCdVaKKcxgd6g3")
								}
								className="text-primary hover:text-accent cursor-pointer"
							>
								{" "}
								email tb@escapeworksdenver.com{" "}
							</span>
							or fill out this{" "}
							<span className="text-primary hover:text-accent cursor-pointer">
								{" "}
								form{" "}
							</span>{" "}
							and we will get back to you quickly (Normally withing 30 minutes).
						</p>
						<div className="flex justify-center mb-5">
							<button
								onClick={() =>
									(window.location.href = "mailto:tb@escapeworksdenver.com")
								}
								className="btn btn-primary text-black text-xl hover:btn-accent btn-md mx-3"
							>
								Email Us
							</button>
							<button
								onClick={() =>
									(window.location.href =
										"https://webforms.pipedrive.com/f/1DZFysW2n731ohmINfooaizvOHJysoPcG8kbzlEsPCQeiYGhpeQkCdVaKKcxgd6g3")
								}
								className="btn btn-primary text-black text-xl hover:btn-accent btn-md mx-3"
							>
								Inquiry Form
							</button>
						</div>
					</aside>
				</motion.section>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center lg:border-r-8 lg:border-accent lg:border-double mx-1 ml-5 mb-10 max-lg:flex-col max-lg:m-0"
				>
					<aside className="flex flex-col items-center w-2/3 max-lg:m-0">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							Pricing and Availability
						</h2>
						<img
							src={bg2}
							alt="A person escaping from a locked door"
							className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 max-lg:mb-3 lg:hidden"
						/>
						<p className="text-center px-3 text-xl pb-5 ml-3 max-lg:m-0">
							(For 13+ Participants) We have a discounted rate of $30 per person
							Sunday afternoon through Friday afternoon; and $33 per person for
							team building events that start between 3PM Friday and 3PM Sunday.
							A booking fee of 5.5% will also apply. A further discount of an
							additional $2 per player is granted to nonprofit organizations,
							with presentation of a valid 501c3.
						</p>
						<p className="text-center px-3 text-xl pb-5 ml-3 max-lg:m-0">
							Rooms are on a first-come, first-served basis. If you would like
							to schedule your event on your own, choose the location you'd
							prefer below. Input the information for the event such as number
							of participants, date, time, and the rooms interested in playing.
							We will respond back to you via email shortly to confirm. You will
							not be charged until the event is confirmed.
						</p>
						<div className="flex justify-center mb-5">
							<button
								onClick={() =>
									(window.location.href =
										"https://bookeo.com/escapeworksdenver?type=41553KTXJH717A347DE67A")
								}
								className="btn btn-primary text-black text-xl hover:btn-accent btn-md mx-3"
							>
								Convention Center
							</button>
							<button
								onClick={() =>
									(window.location.href =
										"https://bookeo.com/escapeworksdenver?type=41553KTXJH717A347DE67A")
								}
								className="btn btn-primary text-black text-xl hover:btn-accent btn-md mx-3"
							>
								Ballpark
							</button>
						</div>
					</aside>
					<img
						src={bg2}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 max-lg:mb-3 max-lg:hidden"
					/>
				</motion.section>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center lg:border-r-8 lg:border-accent lg:border-double mx-5 mb-15 max-lg:flex-col max-lg:m-0"
				>
					<img
						src={bg3}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3 max-lg:mb-3 max-lg:hidden"
					/>
					<aside className="flex flex-col items-center w-2/3 mr-3 max-lg:m-0">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							What is Team Building?
						</h2>
						<img
							src={bg3}
							alt="A person escaping from a locked door"
							className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3 max-lg:mb-3 lg:hidden"
						/>
						<p className="text-center px-3 text-xl pb-5 max-lg:m-0">
							Team building is the process of participating in an activity with
							co-workers and associates to work better and more efficiently. By
							partaking in an activity together, you’ll learn to trust your
							teammates. You’ll also be able to collaborate more effectively,
							which makes for greater productivity when working on projects and
							tasks.
						</p>
					</aside>
				</motion.section>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 1 }}
					className="flex justify-between items-center lg:border-r-8 lg:border-accent lg:border-double mx-1 ml-5 mb-10 max-lg:m-0 max-lg:flex-col
					text-center"
				>
					<aside className="flex flex-col items-center w-2/3 max-lg:m-0">
						<h2 className="text-primary text-4xl border-b-8 border-accent border-double pb-1 mb-3 font-display">
							How can we strengthen your team?
						</h2>
						<img
							src={bg4}
							alt="A person escaping from a locked door"
							className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 max-lg:mb-3 lg:hidden"
						/>
						<p className="text-center px-3 text-xl pb-5 ml-3 max-lg:m-0">
							There are lots of team building exercises out there, but only
							<span
								className="text-primary hover:text-accent cursor-pointer"
								onClick={() => handleLinkClick("/about")}
							>
								{" "}
								EscapeWorks Denver{" "}
							</span>{" "}
							offers thrills and adventure in addition to practical benefits.
							Our rooms range in difficulty and skill level, which means both
							newcomers and advanced players can take part. Regardless of what
							room you choose, you’ll be privy to complex and challenging
							puzzles, as well as interesting clues that you must examine
							carefully before moving to the next step.
						</p>
						<p className="text-center px-3 text-xl pb-5 ml-3 max-lg:m-0">
							As a result, our escape rooms are the best for showing staff an
							amazing time while also benefiting them in the workplace. You can
							even make it a regular occurrence to continue building skills well
							into the future.
						</p>
					</aside>
					<img
						src={bg4}
						alt="A person escaping from a locked door"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 max-lg:mb-3 max-lg:hidden"
					/>
				</motion.section>
			</main>
		</div>
	);
};

export default TeamBuilding;
