import React from "react";

function Nav() {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<details>
									<summary className="text-lg">Info</summary>
									<ul className="p-2">
										<li>
											<a className="text-lg">About</a>
										</li>
										<li>
											<a className="text-lg">FAQ</a>
										</li>
										<li>
											<a className="text-lg">Contact</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary className="text-lg">Rooms</summary>
									<ul className="p-2">
										<li>
											<a className="text-lg">All Rooms</a>
										</li>
										<li>
											<a className="text-lg">Champa Rooms</a>
										</li>
										<li>
											<a className="text-lg">Blake Rooms</a>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<a className="text-lg">Team Building</a>
							</li>
							<li>
								<a className="text-lg">Gift Cards</a>
							</li>
							<a className="btn btn-primary md:hidden">Book Now!</a>
						</ul>
					</div>
					<a className="btn btn-ghost text-3xl">EscapeWorks</a>
				</div>
				<div className="navbar-center hidden md:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary className="text-xl">Info</summary>
								<ul className="p-2 bg-secondary">
									<li>
										<a className="text-xl">About</a>
									</li>
									<li>
										<a className="text-xl">FAQ</a>
									</li>
									<li>
										<a className="text-xl">Contact</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<details>
								<summary className="text-xl">Rooms</summary>
								<ul className="p-2 bg-secondary">
									<li>
										<a className="text-xl">All Rooms</a>
									</li>
									<li>
										<a className="text-xl">Champa Rooms</a>
									</li>
									<li>
										<a className="text-xl">Blake Rooms</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a className="text-xl">Team Building</a>
						</li>
						<li>
							<a className="text-xl">Gift Cards</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn btn-primary max-sm:hidden mr-1 text-lg">
						Book Now!
					</a>
				</div>
			</div>
		</div>
	);
}

export default Nav;
