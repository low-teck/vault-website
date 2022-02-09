const Footer = () => {
	return (
		<footer className="absolute bg-transparent  w-full h-14 bg-black bottom-0 z-50">
			<div className="mx-10 flex justify-center flex-row py-3">
				<p className="text-gray mt-2 px-0.5">
					<a
						href="mailto:lowteck@gmail.com"
						className="text-gray-light"
					>
						Contact us
					</a>
				</p>
				<p className="text-gray mt-2 px-8">
					<a
						href="https://github.com/low-teck/vault"
						className="text-gray-light"
					>
						Github
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
