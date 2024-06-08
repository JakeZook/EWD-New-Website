import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = (props) => {
	const navigate = useNavigate();

	const handleLinkClick = (link) => {
		navigate(`${link}`);
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-wrap justify-center items-center mt-5">
				<div className="w-32 h-32 flex-shrink-0 mb-5">
					<img
						className="w-full h-full mask mask-decagon object-cover"
						src={props.data.img}
						alt={props.data.name}
					/>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-3xl font-bold pb-2 text-primary font-display">
						{props.data.name}
					</h2>
					<h3 className="text-primary text-2xl pb-3 font-display">
						{props.data.location}
					</h3>
					<div className="flex items-center mb-3">
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
							{props.data.players} Players
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
							{props.data.price} Per Player
						</div>
					</div>
					<p className="text-sm text-center my-5 px-2">{props.data.desc}</p>
					{props.data.disclaimer && (
						<aside className="bg-accent m-3 p-3">
							<h2 className="text-center text-primary text-lg">DISCLAIMER:</h2>
							<p className="text-center text-neutral text-md">
								{props.data.disclaimer}
							</p>
						</aside>
					)}
				</div>
			</div>
			<div className="flex flex-col border-b-8 border-b-accent rounded pb-5 border-double">
				<div className="flex flex-row mb-5 justify-center">
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center">Escape Rate:</p>
						<div
							className="radial-progress bg-secondary text-primary border-4 border-secondary"
							style={{
								"--value": (props.data.escapeRate / 60) * 100,
								"--size": "5rem",
							}}
							role="progressbar"
						>
							{props.data.escapeRate}%
						</div>
					</div>
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center">Record Time:</p>
						<div
							className="radial-progress bg-secondary text-primary border-4 border-secondary"
							style={{
								"--value": (props.data.recordTime / 60) * 100,
								"--size": "5rem",
							}}
							role="progressbar"
						>
							{props.data.recordTime}
						</div>
					</div>
					<div className="mx-3 flex flex-col items-center justify-center">
						<p className="text-primary text-center">Average Time:</p>
						<div
							className="radial-progress bg-secondary text-primary border-4 border-secondary"
							style={{
								"--value": (props.data.averageTime / 60) * 100,
								"--size": "5rem",
							}}
							role="progressbar"
						>
							{props.data.averageTime}
						</div>
					</div>
				</div>
				<div className="flex justify-around">
					<button
						className="btn btn-primary hover:btn-accent"
						onClick={() => {
							if (props.data.location === "Ballpark") {
								handleLinkClick("/booking-ballpark");
							} else {
								handleLinkClick("/booking-convention-center");
							}
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
								clipRule="evenodd"
							/>
						</svg>
						Book Now
					</button>
					<button
						className="btn btn-primary hover:btn-accent"
						onClick={() => {
							handleLinkClick(props.data.link);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
								clipRule="evenodd"
							/>
						</svg>
						More Info
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
