import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { roomData } from "../comp";
import { motion } from "framer-motion";

const RoomPage = () => {
	const { id } = useParams();
	const room = roomData.find((r) => r.link === `/rooms/${id}`);
	if (!room) {
		return <div>Room not found</div>;
	}

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const calculateProgressValue = (value) => (value / 60) * 100;

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center my-3">
				<h1 className="text-primary font-display text-5xl py-3">{room.name}</h1>
				<h2 className="text-neutral font-display text-3xl ">{room.location}</h2>
			</header>
			<aside className="flex flex-col items-center justify-center border-l-8 border-accent border-double lg:hidden">
				<img
					src={room.img}
					alt={room.name}
					className="mask mask-squircle w-72"
				/>
				<div className="flex justify-evenly py-5">
					<div className="badge badge-accent badge-md mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-4 h-4"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
								clipRule="evenodd"
							/>
						</svg>
						{room.players} Players
					</div>
					<div className="badge badge-accent badge-md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
							<path
								fillRule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
								clipRule="evenodd"
							/>
						</svg>
						{room.price} Per Player
					</div>
				</div>
				<div className="flex justify-center w-full py-3">
					<div className="badge badge-primary badge-md mx-2">
						{room.appeals[0]}
					</div>
					<div className="badge badge-primary badge-md mx-2">
						{room.appeals[1]}
					</div>
					<div className="badge badge-primary badge-md mx-2">
						{room.appeals[2]}
					</div>
				</div>
				<div className="flex flex-row my-5 justify-center">
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center pb-4">Escape Rate:</p>
						<motion.div
							className="radial-progress bg-black-600 text-primary"
							style={{ "--size": "5rem" }}
							initial={{ "--value": 0 }}
							whileInView={{
								"--value": calculateProgressValue(room.escapeRate),
							}}
							transition={{ duration: 2 }}
							viewport={{ once: true, amount: 0.25 }}
							role="progressbar"
						>
							<p className="text-neutral">{room.escapeRate}%</p>
						</motion.div>
					</div>
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center pb-4">Record Time:</p>
						<motion.div
							className="radial-progress bg-black-600 text-primary"
							style={{ "--size": "5rem" }}
							initial={{ "--value": 0 }}
							whileInView={{
								"--value": calculateProgressValue(room.recordTime),
							}}
							transition={{ duration: 2 }}
							viewport={{ once: true, amount: 0.25 }}
							role="progressbar"
						>
							<p className="text-neutral">{room.recordTime}%</p>
						</motion.div>
					</div>
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center pb-4">Average Time:</p>
						<motion.div
							className="radial-progress bg-black-600 text-primary"
							style={{ "--size": "5rem" }}
							initial={{ "--value": 0 }}
							whileInView={{
								"--value": calculateProgressValue(room.averageTime),
							}}
							transition={{ duration: 2 }}
							viewport={{ once: true, amount: 0.25 }}
							role="progressbar"
						>
							<p className="text-neutral">{room.averageTime}%</p>
						</motion.div>
					</div>
				</div>
				<p className="text-neutral text-lg text-center px-3">{room.desc}</p>
			</aside>
			<aside className="hidden lg:flex items-center justify-around border-l-8 border-accent border-double">
				<img
					src={room.img}
					alt={room.name}
					className="mask mask-squircle w-96"
				/>
				<div className="flex flex-col items-center w-1/3">
					<div className="flex justify-evenly py-5">
						<div className="badge badge-accent badge-md mr-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-4 h-4"
							>
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
									clipRule="evenodd"
								/>
							</svg>
							{room.players} Players
						</div>
						<div className="badge badge-accent badge-md">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
								<path
									fillRule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
									clipRule="evenodd"
								/>
							</svg>
							{room.price} Per Player
						</div>
					</div>
					<div className="flex justify-center w-full py-3">
						<div className="badge badge-primary badge-md mx-2">
							{room.appeals[0]}
						</div>
						<div className="badge badge-primary badge-md mx-2">
							{room.appeals[1]}
						</div>
						<div className="badge badge-primary badge-md mx-2">
							{room.appeals[2]}
						</div>
					</div>
					<p className="text-center text-xl">{room.desc}</p>
					<div className="flex flex-row my-5 justify-center">
						<div className="mx-3 flex flex-col items-center justify-center">
							<p className="text-primary text-center pb-4">Escape Rate:</p>
							<motion.div
								className="radial-progress bg-black-600 text-primary"
								style={{ "--size": "5rem" }}
								initial={{ "--value": 0 }}
								whileInView={{
									"--value": calculateProgressValue(room.escapeRate),
								}}
								transition={{ duration: 2 }}
								viewport={{ once: true, amount: 0.25 }}
								role="progressbar"
							>
								<p className="text-neutral">{room.escapeRate}%</p>
							</motion.div>
						</div>
						<div className="mx-3 flex flex-col items-center justify-center">
							<p className="text-primary text-center pb-4">Record Time:</p>
							<motion.div
								className="radial-progress bg-black-600 text-primary"
								style={{ "--size": "5rem" }}
								initial={{ "--value": 0 }}
								whileInView={{
									"--value": calculateProgressValue(room.recordTime),
								}}
								transition={{ duration: 2 }}
								viewport={{ once: true, amount: 0.25 }}
								role="progressbar"
							>
								<p className="text-neutral">{room.recordTime}%</p>
							</motion.div>
						</div>
						<div className="mx-3 flex flex-col items-center justify-center">
							<p className="text-primary text-center pb-4">Average Time:</p>
							<motion.div
								className="radial-progress bg-black-600 text-primary"
								style={{ "--size": "5rem" }}
								initial={{ "--value": 0 }}
								whileInView={{
									"--value": calculateProgressValue(room.averageTime),
								}}
								transition={{ duration: 2 }}
								viewport={{ once: true, amount: 0.25 }}
								role="progressbar"
							>
								<p className="text-neutral">{room.averageTime}%</p>
							</motion.div>
						</div>
					</div>
				</div>
			</aside>
			<div className="flex justify-center">
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="lg:w-1/2 h-80 max-sm:h-48 md:w-14 text-primary"
					initial={{ rotate: 27 }}
					animate={{ rotate: -360 }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					style={{ position: "relative" }}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
					/>
				</motion.svg>
			</div>
			<aside className="flex flex-col items-center justify-center border-r-8 border-accent border-double">
				<p className="text-neutral text-lg text-center p-3">
					{room.longDesc[0]}
				</p>
				<p className="text-neutral text-lg text-center p-3">
					{room.longDesc[1]}
				</p>
				<p className="text-neutral text-lg text-center p-3">
					{room.longDesc[2]}
				</p>
			</aside>
			<ul className="border-b-8 border-accent border-double">
				{room.facts.map((appeal) => (
					<li key={appeal} className="text-primary text-lg text-center p-3">
						{appeal}
					</li>
				))}
			</ul>
			<section className="flex justify-evenly p-5">
				<button className="btn btn-primary text-2xl hover:btn-accent">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-6"
					>
						<path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
					</svg>
					All Rooms
				</button>
				<button className="btn btn-primary text-2xl hover:btn-accent">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
							clipRule="evenodd"
						/>
					</svg>
					About Us
				</button>
			</section>
			<main>
				<iframe
					src={room.booking}
					style={{
						width: "100%",
						height: "600px",
						border: "none",
						overflow: "visible",
					}}
					title="Booking Widget"
				></iframe>
			</main>
		</div>
	);
};

export default RoomPage;
