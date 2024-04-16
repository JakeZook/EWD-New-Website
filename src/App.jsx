import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./comp/index";
import { Home } from "./pages/index";

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
