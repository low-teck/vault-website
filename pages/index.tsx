import type { NextPage } from "next";
import Layout from "../components/layout";
import linux from "../public/linux.png";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const [link, setLink] = useState<string>();
	const [os, setOs] = useState<string>();
	useEffect(() => {
		let userAgent = navigator.appVersion;
		let currOs;
		if (userAgent.includes("Macintosh")) {
			currOs = "Mac";
		} else if (userAgent.includes("Windows")) {
			currOs = "Windows";
		} else if (userAgent.includes("Linux")) {
			currOs = "Linux";
		} else {
			currOs = "Windows";
		}

		setOs(currOs);
		switch (currOs) {
			case "Mac":
				// download mac app
				setLink(
					"https://github.com/low-teck/vault/releases/download/v0.1.0-alpha/Vault-0.1.0.dmg"
				);
				break;
			case "Windows":
				// download windows app
				setLink(
					"https://github.com/low-teck/vault/releases/download/v0.1.0-alpha/Vault.Setup.0.1.0.exe"
				);
				break;
			case "Linux":
				// download linux app
				setLink(
					"https://github.com/low-teck/vault/releases/download/v0.1.0-alpha/x_0.1.0_amd64.deb"
				);
				break;
			default:
				setLink("https://github.com/low-teck/vault/releases/download/v0.1.0-alpha/Vault-0.1.0.dmg");
				break;
		}
	}, []);

	return (
		<div className="flex flex-col h-screen">
			<section className="w-screen h-screen">
				<div className="bg-hero-pattern bg-center bg-no-repeat bg-cover h-screen w-full">
					<div className="flex text-center justify-center h-screen w-full">
						<div className="flex justify-evenly w-8/12  flex-col px-10  ">
							<h1 className="lg:text-8xl text-2xl font-lato  ">
								Secure your files,
								<br />
								<span className="text-primary uppercase">
									Vault!
								</span>
							</h1>
							<h3 className="lg:text-2xl text-lg text-gray-dark w-90 ">
								A cross-platform, offline and secure app to
								encrypt your files using strong cryptographic
								algorithms.
							</h3>
							<a href={link}>
								<button
									disabled={link ? false : true}
									className="bg-blue hover:bg-blue-700 disabled:bg-lightblue disabled:opacity-70 disabled:text-gray text-black font-bold py-2 px-4 rounded"
								>
									{os
										? `Download for ${os}`
										: `Open on your PC`}
								</button>
							</a>
						</div>
						{/*<div className="flex align-left sm:w-500 sm:h-500">
							<Image src={heroImage} alt="hero image" />
						</div>*/}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
