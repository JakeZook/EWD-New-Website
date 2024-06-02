import React from "react";
import { useParams } from "react-router-dom";
import { roomData } from "../comp";

const RoomPage = () => {
	const { id } = useParams();
	const room = roomData.find((r) => r.link === `/rooms/${id}`);
	if (!room) {
		return <div>Room not found</div>;
	}

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center">
				<h1 className="text-primary font-display text-5xl">{room.name}</h1>
				<div className="flex items-center justify-around">
					<img
						className="w-96 h-full mask mask-decagon object-cover"
						src={room.img}
						alt={room.name}
					/>
					<p>{room.desc}</p>
				</div>
				<div>
					<p>Players: {room.players}</p>
					<p>Price: ${room.price}</p>
					<p>Escape Rate: {room.escapeRate}%</p>
					<p>Record Time: {room.recordTime}</p>
					<p>Average Time: {room.averageTime}</p>
					<p>Location: {room.location}</p>
				</div>
			</header>
		</div>
	);
};

export default RoomPage;
