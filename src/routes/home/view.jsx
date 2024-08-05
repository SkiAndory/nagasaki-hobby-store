import React from "react";

import Header from "../../components/header/component";
import Footer from "../../components/footer/component";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Home;
