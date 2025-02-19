import React from "react";
import "./header.css";
import logo from "../../Assets/logo1.png";
import Navbar from "../NavBar/navbar";

export default function Header() {
	return (
		<div className="flex justify-stretch items-center">
			<img className="w-32 h-32" src={logo} alt="" />
			<Navbar />
		</div>
	);
}
