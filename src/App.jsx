import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./comp/index";
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
} from "./pages/index";

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/all-rooms" element={<AllRooms />} />
				<Route path="/ballpark-rooms" element={<BallparkRooms />} />
				<Route path="/denver-rooms" element={<DenverRooms />} />
				<Route path="/team-building" element={<TeamBuilding />} />
				<Route path="/gift-cards" element={<GiftCards />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
