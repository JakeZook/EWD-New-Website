import React from "react";

const RoomCard = (props) => {
	return (
		<div className="flex w-96 border-l-8 border-l-accent rounded pl-5 pb-5">
			<div className="min-w-96 px-5">
				<img
					className="mask mask-squircle pb-5"
					src={props.data.img}
					alt={props.data.name}
				/>
				<div className="flex justify-around">
					<button className="btn btn-primary text-xl hover:btn-accent">
						Book Now
					</button>
					<button className="btn btn-primary text-xl hover:btn-accent">
						More Info
					</button>
				</div>
			</div>
			<div className="flex flex-col items-center justify-between">
				<h3 className="text-primary text-3xl">{props.data.name}</h3>
				<div className="flex justify-around">
					<div className="badge badge-primary badge-outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path
								fillRule="evenodd"
								d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
								clipRule="evenodd"
							/>
						</svg>
						Up to 8 players
					</div>
					<div className="badge badge-primary badge-outline">
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
						$35 per player
					</div>
				</div>
				<p className="text-center text-neutral">{props.data.desc}</p>
				<div>
					<div className="flex">
						<div className="mx-5">
							<h4 className="text-center text-primary py-3">Escape Rate:</h4>
							<div
								className="radial-progress"
								style={{ "--value": (props.data.escapeRate / 60) * 100 }}
								role="progressbar"
							>
								{props.data.escapeRate}%
							</div>
						</div>
						<div className="mx-5">
							<h4 className="text-center text-primary py-3">Record Time:</h4>
							<div
								className="radial-progress"
								style={{ "--value": (props.data.recordTime / 60) * 100 }}
								role="progressbar"
							>
								{props.data.recordTime}%
							</div>
						</div>
						<div className="mx-5">
							<h4 className="text-center text-primary py-3">Average Time:</h4>
							<div
								className="radial-progress"
								style={{ "--value": (props.data.averageTime / 60) * 100 }}
								role="progressbar"
							>
								{props.data.averageTime}%
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
