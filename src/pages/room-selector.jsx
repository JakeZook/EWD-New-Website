import React, { useState, useEffect } from "react";
import { roomData, RoomCard, RoomCardDesktop } from "../comp";
import { motion } from "framer-motion";

const RoomSelector = () => {
	const [location, setLocation] = useState("");
	const [numPlayers, setNumPlayers] = useState(1);
	const [experience, setExperience] = useState(1);
	const [kids, setKids] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [pickedRooms, setPickedRooms] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormSubmitted(true);

		// FIler rooms based on location
		let updatedRooms = roomData.filter((room) => room.location === location);

		// Filter rooms based on number of players
		if (numPlayers > 8) {
			updatedRooms = updatedRooms.map((room) => {
				if (room.players === 12) {
					return { ...room, points: room.points + 1 };
				} else {
					return room;
				}
			});
			updatedRooms = updatedRooms.filter((room) => room.players !== 8);
		} else {
			// Keep all rooms if 8 players but prioritize smaller rooms
			updatedRooms = updatedRooms.map((room) => {
				if (room.players === 8) {
					return { ...room, points: room.points + 1 };
				} else {
					return room;
				}
			});
		}

		// Filter rooms based on kids
		if (kids) {
			updatedRooms = updatedRooms.map((room) => {
				if (
					room.name === "Wizard's Alley" ||
					room.name === "Blackbeard's Brig" ||
					room.name === "Egyptian Tomb"
				) {
					return { ...room, points: room.points + 2 };
				}
				return room;
			});

			updatedRooms = updatedRooms.filter(
				(room) => room.name !== "The Exorcism"
			);
			updatedRooms = updatedRooms.filter((room) => room.name !== "Speakeasy");
		}

		// Filter rooms based on experience
		if (experience <= 2) {
			updatedRooms = updatedRooms.map((room) => {
				if (
					room.name === "Wizard's Alley" ||
					room.name === "Blackbeard's Brig" ||
					room.name === "Egyptian Tomb"
				) {
					return { ...room, points: room.points + 2 };
				} else {
					return { ...room, points: room.points + 1 };
				}
				return room;
			});
		} else if (experience <= 4) {
			updatedRooms = updatedRooms.map((room) => {
				if (
					room.name === "Casino Heist" ||
					room.name === "Speakeasy" ||
					room.name === "The Exorcism" ||
					room.name === "Vampire Hunter"
				) {
					return { ...room, points: room.points + 2 };
				}
				return room;
			});
		} else if (experience <= 5) {
			updatedRooms = updatedRooms.map((room) => {
				if (room.name === "Vampire Hunter" || room.name === "Space Wars") {
					return { ...room, points: room.points + 3 };
				}
				return room;
			});
		}

		// Remove rooms with 0 points
		updatedRooms = updatedRooms.filter((room) => room.points > 0);

		// Sort rooms based on points
		updatedRooms.sort((a, b) => b.points - a.points);
		setPickedRooms(updatedRooms);
	};

	// Reset form
	const handleBackToForm = () => {
		setFormSubmitted(false);
		setExperience(1);
		setKids(false);
		setLocation("");
		setNumPlayers(1);
		setPickedRooms([]);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center justify-center mb-8">
				<h1 className="p-5 text-5xl text-primary font-display text-nowrap">
					Room Selector
				</h1>
				<p className="text-2xl text-neutral text-center font-display">
					Find the room best for you!
				</p>
			</header>
			{!formSubmitted && (
				<form
					onSubmit={handleSubmit}
					className="space-y-4 flex flex-col items-center justify-center mb-5"
				>
					<select
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						className="select select-primary w-full max-w-md bg-black"
					>
						<option value="" disabled>
							Select Location
						</option>
						<option value="Convention Center">Convention Center</option>
						<option value="Ballpark">Ballpark</option>
					</select>
					<div className="flex justify-between">
						<div className="flex flex-col items-center mr-3">
							<div className="label">
								<span className="label-text">Players: 1-12</span>
							</div>
							<input
								type="number"
								min="1"
								max="12"
								placeholder="Number of players"
								className="input input-bordered input-primary w-full max-w-12 bg-black"
								value={numPlayers}
								onChange={(e) => setNumPlayers(parseInt(e.target.value))}
							/>
						</div>
						<div className="flex flex-col items-center ml-3">
							<div className="label">
								<span className="label-text">Any kids</span>
							</div>
							<input
								type="checkbox"
								className="checkbox checkbox-primary checkbox-lg mt-2"
								onChange={(e) => setKids(e.target.checked)}
							/>
						</div>
					</div>
					<div className="label">
						<span className="label-text">
							Rate your experience with escape rooms:
						</span>
					</div>
					<input
						type="range"
						min="1"
						max="5"
						className="range range-xsm w-1/4 bg-black range-primary max-md:w-3/4"
						step="1"
						defaultValue={experience}
						onChange={(e) => setExperience(parseInt(e.target.value))}
					/>
					<div className="w-1/4 flex justify-between text-xs px-2 max-md:w-3/4">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
					</div>
					<button type="submit" className="btn btn-outline btn-primary">
						Submit
					</button>
				</form>
			)}
			{formSubmitted && (
				<>
					{pickedRooms.map((room, index) => (
						<motion.div
							key={index}
							className="flex items-center flex-wrap lg:hidden"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 1 }}
						>
							<RoomCard data={room} />
						</motion.div>
					))}
					{pickedRooms.map((room, index) => (
						<motion.div
							key={index}
							className={`hidden lg:flex items-stretch justify-center mx-28 pb-10 ${
								index === 0 || index % 2 === 0
									? "flex-row border-l-8 border-l-accent border-double"
									: "flex-row-reverse border-r-8 border-r-accent border-double"
							}`}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 1 }}
						>
							<RoomCardDesktop data={room} index={index} />
						</motion.div>
					))}
					<div className="flex justify-center mb-5">
						<button
							className="btn btn-primary hover:btn-accent w-56 text-2xl mt-3"
							onClick={handleBackToForm}
						>
							Choose Again
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default RoomSelector;
