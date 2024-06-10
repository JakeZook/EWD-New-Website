import React from "react";

import bg2 from "../assets/ewd_background_2.jpg";
import bg3 from "../assets/ewd_background_3.jpg";

const About = () => {
	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center my-3">
				<h1 className="text-primary font-display text-5xl py-3">About Us</h1>
				<h2 className="text-neutral font-display text-3xl ">
					Welcome to the largest Escape Room in Denver
				</h2>
			</header>
			<main className="my-24">
				<section className="flex justify-center mx-10 pb-20 border-b-8 border-accent border-double">
					<aside className="flex flex-col items-center">
						<h2 className="text-5xl text-primary pb-2 mb-5 border-b-8 border-accent border-double">
							Our Story
						</h2>
						<p className="text-neutral text-center text-lg py-3">
							EscapeWorks Denver was founded in 2015 by Paul and Melissa Shultz.
							We are a family-owned business that is passionate about creating
							memorable experiences for our guests. Our goal is to provide a fun
							and challenging experience that you will remember for years to
							come.
						</p>
						<p className="text-neutral text-center text-lg py-3">
							EscapeWorks now has two locations in Denver, Colorado. Our
							Convention Center facility is located on 15th Champa right off the
							16th STreet Mall. Our Ballpark facility is found within the
							historic ballpark district on 19th and Blake, a block away from
							Coors Field.
						</p>
						<button className="btn btn-primary btn-lg hover:btn-accent mx-3 mt-3">
							Contact Us
						</button>
					</aside>
					<img
						src={bg3}
						alt="A hallway of doors"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3"
					/>
				</section>
				<section className="flex justify-center mx-10 mt-20">
					<img
						src={bg2}
						alt="A hallway of doors"
						className="sm:max-w-lg max-lg:max-w-md max-md:max-w-sm max-sm:max-w-56 rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3 border-8 border-accent"
					/>
					<aside className="flex flex-col items-center">
						<h2 className="text-5xl text-primary pb-2 mb-5 border-b-8 border-accent border-double">
							The Rooms
						</h2>
						<p className="text-neutral text-center text-lg py-3">
							Here at EscapeWorks Denver, we believe in providing a fun and
							thrilling experience to our guests. Our themed escape rooms offer
							plenty of surprises, as well as puzzles designed to really test
							your problem-solving abilities.
						</p>
						<p className="text-neutral text-center text-lg py-3">
							Whether on a first date, with a group of friends, or enjoying a
							new experience with your family, we want all guests to walk away
							feeling completely satisfied. That’s why we meticulously plan our
							escape rooms and develop themes that offer the most intrigue and
							excitement. When visiting us, guests can choose from the following
							options:
						</p>
						<button className="btn btn-primary btn-lg hover:btn-accent mx-3 mt-3">
							All Rooms
						</button>
					</aside>
				</section>
			</main>
		</div>
	);
};

export default About;
