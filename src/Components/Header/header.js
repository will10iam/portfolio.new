import React from "react";

import logo from "../../Assets/logo1.png";
import Navbar from "../NavBar/navbar";

export default function Header() {
	return (
		<div className="flex md:flex-col justify-center items-center py-4">
			<img className="w-32 h-32" src={logo} alt="" />
			<Navbar />
		</div>
	);
}
