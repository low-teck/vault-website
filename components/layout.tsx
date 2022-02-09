import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="h-screen overflow-x-hidden flex flex-col">
			<Head>
				<title>Vault</title>
				<meta
					name="description"
					content="Secure your app using cryptographic algorithms"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className="sticky top-0 z-50">
				<Navbar />
			</header>
			<main className="absolute flex-1 z-10">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
