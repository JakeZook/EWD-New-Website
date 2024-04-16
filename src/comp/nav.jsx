import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

function Nav() {
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate("/");
	};

	return (
		<div>
			<div className="drawer-end">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					<div className="w-full navbar bg-base-300 flex max-lg:flex-row-reverse justify-between">
						<div className="flex lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<img
							className="md:w-56 w-32 ml-5"
							src={logo}
							alt="Escapeworks denver"
							onClick={() => {
								handleLogoClick();
							}}
						></img>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal items-center text-neutral text-xl">
								<li>
									<details>
										<summary>Escape Rooms</summary>
										<ul className="p-2 bg-primary rounded-t-none top-16">
											<li>
												<a>All Escape Rooms</a>
											</li>
											<li>
												<a>Denver</a>
											</li>
											<li>
												<a>Ballpark</a>
											</li>
										</ul>
									</details>
								</li>
								<li>
									<a>Team Building</a>
								</li>
								<li>
									<a>Gift Cards</a>
								</li>
								<li>
									<details>
										<summary>Info</summary>
										<ul className="p-2 bg-primary rounded-t-none top-16">
											<li>
												<a>About</a>
											</li>
											<li>
												<a>FAQ</a>
											</li>
											<li>
												<a>Contact</a>
											</li>
										</ul>
									</details>
								</li>
							</ul>
						</div>
						<div className="max-lg:hidden">
							<button className="btn btn-primary text-neutral text-2xl mr-5">
								Book Now
							</button>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 md:w-80 max-sm:w-60 min-h-full bg-base-200 text-neutral text-xl">
						<li>
							<details>
								<summary>Escape Rooms</summary>
								<ul className="p-2 bg-primary rounded-t-none">
									<li className="border border-red-700">
										<a>All Escape Rooms</a>
									</li>
									<li>
										<a>Denver</a>
									</li>
									<li>
										<a>Ballpark</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a>Team Building</a>
						</li>
						<li>
							<a>Gift Cards</a>
						</li>
						<li>
							<details>
								<summary>Info</summary>
								<ul className="p-2 bg-primary rounded-t-none">
									<li>
										<a>About</a>
									</li>
									<li>
										<a>FAQ</a>
									</li>
									<li>
										<a>Contact</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<button className="btn btn-primary mt-5 text-neutral">
								Book Now
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Nav;
