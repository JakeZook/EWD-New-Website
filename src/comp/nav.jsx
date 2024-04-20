import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import BookingModal from "./booking-modal";

function Nav() {
	const navigate = useNavigate();

	const [drawer, setDrawer] = useState(false);
	const [escapeRoomDropdownOpen, setEscapeRoomDropdownOpen] = useState(false);
	const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

	const bookingModal = document.getElementById("booking-modal");

	const handleLinkClick = (link) => {
		navigate(`${link}`);
		setDrawer(false);
		setEscapeRoomDropdownOpen(false);
		setInfoDropdownOpen(false);
	};

	const toggleDrawer = () => {
		setDrawer(!drawer);
	};

	const toggleEscapeRoomDropdown = () => {
		setEscapeRoomDropdownOpen(!escapeRoomDropdownOpen);
	};

	const toggleInfoDropdown = () => {
		setInfoDropdownOpen(!infoDropdownOpen);
	};

	return (
		<>
			<div className="drawer-end fixed top-0 w-full z-10 lg:opacity-90">
				<input
					id="navDrawer"
					type="checkbox"
					className="drawer-toggle"
					checked={drawer}
					onChange={toggleDrawer}
				/>
				<div className="drawer-content flex flex-col opacity-90">
					<div className="w-full navbar bg-base-300 flex max-lg:flex-row-reverse justify-between">
						<div className="flex lg:hidden">
							<label
								htmlFor="navDrawer"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost"
								onClick={() => setDrawer(false)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current text-primary"
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
							className="md:w-56 w-32 ml-5 cursor-pointer hover:opacity-80"
							src={logo}
							alt="Escapeworks denver"
							onClick={() => {
								handleLinkClick("/");
							}}
						></img>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal items-center text-neutral text-xl">
								<li
									className="dropdown dropdown-hover"
									onMouseLeave={() => setEscapeRoomDropdownOpen(false)}
								>
									<div
										tabIndex={0}
										role="button"
										className="btn bg-base-300 border-none text-xl text-neutral hover:text-primary"
										onClick={() => {
											toggleEscapeRoomDropdown();
											handleLinkClick("/all-rooms");
										}}
										onMouseEnter={() => setEscapeRoomDropdownOpen(true)}
									>
										Escape Rooms
									</div>
									{escapeRoomDropdownOpen && (
										<ul className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-52">
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/all-rooms")}
												>
													All Escape Rooms
												</a>
											</li>
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/denver-rooms")}
												>
													Denver Rooms
												</a>
											</li>
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/ballpark-rooms")}
												>
													Ballpark Rooms
												</a>
											</li>
										</ul>
									)}
								</li>
								<li>
									<a
										className="text-neutral hover:text-primary"
										onClick={() => handleLinkClick("/team-building")}
									>
										Team Building
									</a>
								</li>
								<li>
									<a
										className="text-neutral hover:text-primary"
										onClick={() => handleLinkClick("gift-cards")}
									>
										Gift Cards
									</a>
								</li>
								<li
									className="dropdown dropdown-hover"
									onMouseLeave={() => setEscapeRoomDropdownOpen(false)}
								>
									<div
										tabIndex={0}
										role="button"
										className="btn bg-base-300 border-none text-xl text-neutral hover:text-primary"
										onClick={() => {
											toggleEscapeRoomDropdown();
											handleLinkClick("/about");
										}}
										onMouseEnter={() => setEscapeRoomDropdownOpen(true)}
									>
										Info
									</div>
									{escapeRoomDropdownOpen && (
										<ul className="dropdown-content z-[1] menu p-2 shadow bg-primary rounded-box w-52">
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/about")}
												>
													About
												</a>
											</li>
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/faq")}
												>
													FAQ
												</a>
											</li>
											<li>
												<a
													className="text-lg hover:text-accent"
													onClick={() => handleLinkClick("/contact")}
												>
													Contact
												</a>
											</li>
										</ul>
									)}
								</li>
							</ul>
						</div>
						<div className="max-lg:hidden">
							<button
								className="btn btn-primary text-neutral text-2xl mr-5 hover:btn-accent"
								onClick={() => {
									bookingModal.showModal();
									setDrawer(false);
								}}
							>
								Book Now
							</button>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="navDrawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 md:w-80 max-sm:w-60 min-h-full bg-base-200 text-neutral text-xl">
						<li>
							<details>
								<summary>Escape Rooms</summary>
								<ul className="p-2 bg-primary rounded-t-none">
									<li>
										<a onClick={() => handleLinkClick("/all-rooms")}>
											All Escape Rooms
										</a>
									</li>
									<li>
										<a onClick={() => handleLinkClick("/denver-rooms")}>
											Denver
										</a>
									</li>
									<li>
										<a onClick={() => handleLinkClick("/ballpark-rooms")}>
											Ballpark
										</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<a onClick={() => handleLinkClick("/team-building")}>
								Team Building
							</a>
						</li>
						<li>
							<a onClick={() => handleLinkClick("gift-cards")}>Gift Cards</a>
						</li>
						<li>
							<details>
								<summary>Info</summary>
								<ul className="p-2 bg-primary rounded-t-none">
									<li>
										<a onClick={() => handleLinkClick("/about")}>About</a>
									</li>
									<li>
										<a onClick={() => handleLinkClick("/faq")}>FAQ</a>
									</li>
									<li>
										<a onClick={() => handleLinkClick("/contact")}>Contact</a>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<button
								className="btn btn-primary mt-5 text-neutral"
								onClick={() => {
									bookingModal.showModal();
									setDrawer(false);
								}}
							>
								Book Now
							</button>
						</li>
					</ul>
				</div>
			</div>
			<dialog id="booking-modal" className="modal modal-bottom sm:modal-middle">
				<BookingModal />
			</dialog>
		</>
	);
}

export default Nav;
