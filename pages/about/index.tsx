import type { NextPage } from "next";

const About: NextPage = () => {
	return (
		<div className="flex flex-col h-screen">
			<section className="w-screen h-screen">
				<div className="bg-hero-pattern bg-center bg-no-repeat bg-cover h-screen w-full">
					<div className="flex text-center justify-center h-screen w-full">
						<div className="flex justify-evenly w-8/12  flex-col px-10  ">
							<h1 className="lg:text-8xl text-2xl font-lato  ">
								low-teck
								<br />
							</h1>
							<div className="flex justify-evenly flex-row w-full">
								<div className="font-lato">
									<h3 className="text-2xl font-lato">
										Tanmay
									</h3>
									<br />
									<ul className="list-none hover:list-disc">
										<li>
											<a
												target="_blank"
												href="https://github.com/gairTanm"
											>
												github
											</a>
										</li>
										<li>
											<a
												target="_blank"
												href="https://gairTanm.github.io"
											>
												website
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-2xl font-lato">
										Ujjwal
									</h3>
									<br />
									<ul className="list-none hover:list-disc">
										<li>
											<a target="_blank" href="">
												github
											</a>
										</li>
										<li>
											<a target="_blank" href="">
												website
											</a>
										</li>
									</ul>
								</div>
							</div>
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

export default About;
