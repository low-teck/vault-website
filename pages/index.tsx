import type { NextPage } from "next";
import Layout from "../components/layout";
import Image from "next/image";
import heroImage from "../public/hero-img.png";
import mac from "../public/mac.png";
import windows from "../public/windows.png";
import linux from "../public/linux.png";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const [os, setOs] = useState<String>();
	useEffect(() => {
		let userAgent = navigator.appVersion;
		let currOs;
		if (userAgent.includes("Macintosh")) {
			currOs = "Mac";
		} else if (userAgent.includes("Windows")) {
			currOs = "Windows";
		} else if (userAgent.includes("Linux")) {
			currOs = "Linux";
		}

		setOs(currOs);
	}, []);
	useEffect(() => {
		console.log(os);
	}, [os]);
	const downloadApp = () => {
		switch (os) {
			case "mac":
				// download mac app
				break;
			case "windows":
				// download windows app
				break;
			case "linux":
				// download linux app
				break;
			default:
				break;
		}
	};

	return (
		<div className="flex flex-col">
			<section className="w-full h-screen">
				<div className=" bg-hero-pattern bg-center bg-no-repeat bg-cover h-full w-full">
					<div className="flex h-full justify-center w-8/12">
						<div className="flex  flex-col px-10 mt-20 sm:mx-20 ml-30">
							<h1 className="lg:text-8xl text-2xl font-lato mt-20 ">
								Secure your files,{" "}
								<span className="text-primary uppercase">
									Vault!
								</span>
							</h1>
							<h3 className="lg:text-2xl text-lg text-gray-dark w-90 mt-4">
								A cross-platform, offline and secure app to
								encrypt your files using strong cryptographic
								algorithms.
							</h3>
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
