import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../public/favicon.ico";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="flex justify-center  bg-white z-99">
			<div className="flex place-self-center flex-row w-8/12 justify-between">
				<span className="flex row m-3">
					<Image
						src={logo}
						alt="Vault"
						width={40}
						height={10}
						className="h-8 w-8 mr-2"
					/>
					<p className="font-lato text-primary font-normal lowercase mx-3 text-3xl">
						vault
					</p>
				</span>
				{/*<button
					aria-label="Toggle Dark Mode"
					onClick={() =>
						setTheme(theme === "dark" ? "light" : "dark")
					}
				>
					dark
				</button>*/}
				<span className="flex row m-3">
					<button className="mx-3 rounded-none ">About</button>
					<button className="mx-3">Docs</button>
				</span>
			</div>
		</nav>
	);
};
export default Navbar;
