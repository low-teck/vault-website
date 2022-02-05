import type { NextPage } from 'next';
import Layout from '../components/layout';
import Image from 'next/image';
import heroImage from '../public/hero-img.png';
import mac from '../public/mac.png';
import windows from '../public/windows.png';
import linux from '../public/linux.png';

const Home: NextPage = () => {
	const downloadApp = (platform: string) => {
		switch (platform) {
			case 'mac':
				// download mac app
				break;
			case 'windows':
				// download windows app
				break;
			case 'linux':
				// download linux app
				break;
			default:
				break;
		}
	};

	return (
		<div className="flex flex-col">
			<section className="w-full">
				<div className=" bg-hero-pattern bg-center bg-no-repeat bg-cover">
					<div className="grid grid-cols-2">
						<div className="flex flex-col px-10 mt-20 mx-20">
							<h1 className="text-7xl font-lato ">
								{' '}
								Secure your files easily using{' '}
								<span className="text-primary uppercase">Vault!</span>
							</h1>
							<h3 className="text-lg text-gray-dark w-90 mt-2">
								A cross-platform, offline and secure app to encrypt your files using strong
								cryptographic algorithms.
							</h3>
						</div>
						<div className="flex align-left ">
							<Image src={heroImage} alt="hero image" />
						</div>
					</div>
				</div>
			</section>

			<section className="w-full translate-y-[-5rem]">
				<h1 className="w-full text-center text-5xl">Download Now</h1>
				<div className="grid grid-cols-3 px-20 mt-10 select-none">
					<div className="w-full  mx-auto text-center hover:scale-110">
						<div
							className="hover:bg-gray p-10 cursor-pointer flex flex-col justify-center"
							onClick={() => downloadApp('mac')}
						>
							<h1>Mac</h1>
							<div className="h-100 w-100">
								<Image src={mac} alt="mac" height={100} width={100} />
							</div>
						</div>
					</div>
					<div className="w-full  mx-auto text-center hover:scale-110">
						<div
							className="hover:bg-gray p-10 cursor-pointer flex flex-col justify-center"
							onClick={() => downloadApp('linux')}
						>
							<h1> Linux</h1>
							<div className="h-100 w-100">
								<Image src={linux} alt="linux" height={100} width={100} />
							</div>
						</div>
					</div>
					<div className="w-full  mx-auto text-center hover:scale-110">
						<div
							className="hover:bg-gray p-10 cursor-pointer flex flex-col justify-center"
							onClick={() => downloadApp('windows')}
						>
							<h1> Windows</h1>
							<div className="h-100 w-100">
								<Image src={windows} alt="windows" height={100} width={100} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
