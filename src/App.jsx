import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav, Footer } from "./comp/index";
import {
	Home,
	AllRooms,
	About,
	BallparkRooms,
	Contact,
	DenverRooms,
	Faq,
	GiftCards,
	TeamBuilding,
	RoomSelector,
} from "./pages/index";

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-rooms" element={<AllRooms />} />
				<Route path="/ballpark" element={<BallparkRooms />} />
				<Route path="/convention-center" element={<DenverRooms />} />
				<Route path="/team-building" element={<TeamBuilding />} />
				<Route path="/gift-cards" element={<GiftCards />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/room-selector" element={<RoomSelector />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
