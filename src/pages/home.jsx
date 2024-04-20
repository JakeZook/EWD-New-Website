import React from "react";

import bg1 from "../assets/ewd_background_1.jpg";
import bg2 from "../assets/ewd_background_2.jpg";
import bg3 from "../assets/ewd_background_3.jpg";
import lp from "../assets/ewd-lp.jpg";
import et from "../assets/et.jpg";
import bb from "../assets/bb.jpg";
import ch from "../assets/ch.jpg";
import sp from "../assets/sp.jpg";
import vh from "../assets/vh.jpg";

import { RoomCard } from "../comp/index";

function Home() {
	const roomData = [
		{
			name: "Egyptian Tomb",
			img: et,
			desc: "You and an intrepid team of archaeologists must enter an Egyptian tomb that’s been sealed since the 1940s. Your mission? To find information on a famed archaeologist who hasn’t been seen since entering the tomb decades ago.",
			escapeRate: 34.3,
			recordTime: 29.07,
			averageTime: 45.55,
			price: 35,
			link: "/egyptian-tomb",
		},
	];

	return (
		<div className="bg-black max-w-max">
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: "url(" + bg1 + ")",
				}}
			>
				<div className="hero-overlay bg-opacity-0"></div>
				<div className="hero-content text-center text-neutral-content z-0">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl text-neutral font-bold">
							Can you escape?
						</h1>
						<p className="mb-5 text-2xl text-neutral">
							Do you have what it takes to solve the puzzles and escape the room
							in time?
						</p>
						<button className="btn btn-primary text-2xl text-neutral hover:btn-accent">
							Book Now!
						</button>
					</div>
				</div>
			</div>
			<div className="flex p-10 max-lg:flex-col-reverse max-lg:items-center">
				<img
					className="max-w-lg rounded-lg shadow-2xl mask mask-parallelogram max-lg:mask-circle max-md:mt-3"
					src={lp}
					alt=""
				/>
				<div className="flex flex-col align-between items-center p-5">
					<h2 className="text-3xl text-primary text-center border-b-8 border-b-accent pb-2 border-double border-w-8">
						An Unforgettable And Exciting Experience
					</h2>
					<p className="my-5 text-center">
						Just like when we opened in 2016, EscapeWorks Denver wants to push
						the boundaries of your experience! Our rooms are designed to totally
						immerse you in your chosen scenario.
					</p>
					<p className="my-5 text-center">
						We want you to feel like you are really there, to feel the pulse
						pounding thrill of trying to break into a casino vault or be
						transported back to the time of prohibition and the excitement of
						finding your way into a gangster’s speakeasy.
					</p>
					<button className="btn btn-primary hover:btn-accent w-56 text-2xl text-neutral mt-3">
						Contact Us
					</button>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center align-center">
				<div className="divider divider-accent text-3xl text-primary">
					Why Choose Us?
				</div>
				<h2 className="text-xl text-accent">A Whole New Experience</h2>
			</div>
			<div className="flex flex-row max-lg:flex-col justify-evenly py-5">
				<div className="flex flex-col justify-between items-center text-primary lg:pr-5 max-md:py-5 lg:border-r-2 lg:border-r-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-16 h-16"
					>
						<path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
					</svg>

					<h2 className="text-accent text-2xl text-center">
						Locally Developed
					</h2>
					<p className="text-md text-neutral text-center mt-3">
						Our escape rooms are one of a kind! Each of our rooms are designed
						onsite, and tested thoroughly by our game masters.
					</p>
				</div>
				<div className="flex flex-col justify-evenly items-center text-primary mx-3 lg:pr-5 max-md:my-5 lg:border-r-2 lg:border-r-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-16 h-16"
					>
						<path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
						<path
							fillRule="evenodd"
							d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
							clipRule="evenodd"
						/>
					</svg>

					<h2 className="text-accent text-2xl text-center">
						Explore Multiple Areas
					</h2>
					<p className="text-md text-neutral text-center mt-3">
						Each experience has multiple rooms for your group to explore! You’ll
						need to search every inch for your way out.
					</p>
				</div>
				<div className="flex flex-col justify-evenly items-center text-primary mx-3 lg:pr-5 max-md:my-5 lg:border-r-2 lg:border-r-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-16 h-16"
					>
						<path
							fillRule="evenodd"
							d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
							clipRule="evenodd"
						/>
					</svg>

					<h2 className="text-accent text-2xl text-center">
						Beyond The "First Generation"
					</h2>
					<p className="text-md text-neutral text-center mt-3">
						Our rooms are considered “second” or “third” generation rooms- we
						use electronics, relays, and programs to run seamless escapes
					</p>
				</div>
				<div className="flex flex-col justify-evenly items-center text-primary mx-3 lg:pr-5 max-md:my-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-16 h-16"
					>
						<path
							fillRule="evenodd"
							d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z"
							clipRule="evenodd"
						/>
					</svg>

					<h2 className="text-accent text-2xl text-center">
						Immersive Experiences
					</h2>
					<p className="text-md text-neutral text-center mt-3">
						We constantly update decor and game elements to provide the best
						customer experience.
					</p>
				</div>
			</div>
			<div className="flex flex-row-reverse p-10 max-lg:flex-col-reverse max-lg:items-center">
				<img
					className="max-w-lg rounded-lg shadow-2xl mask mask-parallelogram-2 max-lg:mask-circle max-md:mt-3"
					src={bg3}
					alt=""
				/>
				<div className="flex flex-col align-between items-center p-5">
					<h2 className="text-3xl text-primary text-center border-b-8 border-b-accent pb-2 border-double border-w-8">
						Experience The Best Escape Room Denver Has To Offer
					</h2>
					<p className="my-5 text-center">
						When seeking a genuine escape room experience in Denver, we have
						just what you’re looking for. You and your team of 2 to 12 friends
						will love our thrilling theme-based rooms, each of which offers
						players 60 minutes to complete puzzles and make their escape.
					</p>
					<p className="my-5 text-center">
						Unsure which room to choose? Try out our room selector to find the
						best match for your team.
					</p>
					<button className="btn btn-primary hover:btn-accent w-56 text-2xl text-neutral mt-3">
						Choose Room
					</button>
				</div>
			</div>
			<div>
				{roomData.map((room, index) => (
					<RoomCard key={index} data={roomData[index]} />
				))}
			</div>
		</div>
	);
}

export default Home;
