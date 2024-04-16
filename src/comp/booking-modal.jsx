import React from "react";

const BookingModal = () => {
	return (
		<div className="modal-box max-h-[100vh] pt-0.5">
			<div className="modal-action justify-center m-0 mb-1">
				<form method="dialog">
					<button className="btn btn-ghost text-neutral">Close</button>
				</form>
			</div>
			<div className="flex w-full max-sm:flex-col">
				<div className="grid flex-grow card bg-primary rounded-box place-items-center">
					<div className="card text-neutral bg-primary">
						<div className="card-body items-center text-center">
							<h2 className="card-title text-accent text-3xl">Denver</h2>
							<p>1529 Champa St. Denver, CO, 80202</p>
							<p>303-420-6969</p>

							<div className="card-actions justify-end">
								<button className="btn btn-accent">Book Here</button>
							</div>
						</div>
					</div>
				</div>
				<div className="divider divider-horizontal max-sm:divider-vertical divider-primary text-neutral">
					OR
				</div>
				<div className="grid flex-grow card bg-primary rounded-box place-items-center">
					<div className="card text-neutral bg-primary">
						<div className="card-body items-center text-center">
							<h2 className="card-title text-accent text-3xl">Ballpark</h2>
							<p>1925 Blake St. Denver, CO, 80202</p>
							<p>666-666-6666</p>

							<div className="card-actions justify-end">
								<button className="btn btn-accent">Book Here</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
