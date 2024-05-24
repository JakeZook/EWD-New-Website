import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { RoomCard, RoomCardDesktop, roomData } from "../comp/index";

const BallparkRooms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center justify-center mb-8">
				<h1 className="p-5 text-5xl text-primary font-display">Ballpark</h1>
				<p className="text-2xl text-neutral text-center font-display">
					Explore our diverse set of escape rooms across two different
					locations!
				</p>
			</header>
			{roomData.map(
				(room, index) =>
					room.location === "Ballpark" && (
						<motion.div
							key={index}
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 1 }}
							className="flex items-center flex-wrap lg:hidden"
						>
							<RoomCard data={room} />
						</motion.div>
					)
			)}
			{roomData.map(
				(room, index) =>
					room.location === "Ballpark" && (
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.5 }}
							key={index}
							className={`hidden lg:flex items-stretch justify-center mx-28 pb-10 ${
								index === 0 || index % 2 === 0
									? "flex-row border-l-8 border-l-accent border-double"
									: "flex-row-reverse border-r-8 border-r-accent border-double"
							}`}
						>
							<RoomCardDesktop data={room} index={index} />
						</motion.div>
					)
			)}
		</div>
	);
};

export default BallparkRooms;
