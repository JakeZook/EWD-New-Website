import React from "react";
import logo from "../assets/logo.png";

function Nav() {
	return (
		<div>
			<div className="drawer-end">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					<div className="w-full navbar bg-base-300 flex flex-row-reverse">
						<div className="flex-none lg:hidden">
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
						<img className="w-24" src={logo} alt="Escapeworks denver"></img>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								<li>
									<a>Navbar Item 1</a>
								</li>
								<li>
									<a>Navbar Item 2</a>
								</li>
							</ul>
						</div>
					</div>
					{/* Page content here */}
					Content
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-3"
						aria-label="close sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 w-80 min-h-full bg-base-200">
						{/* Sidebar content here */}
						<li>
							<a>Sidebar Item 1</a>
						</li>
						<li>
							<a>Sidebar Item 2</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Nav;
