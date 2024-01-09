import IconWallet from "../../icons/IconWallet";
import NavBarHeader from "./navbarheader/NavBarHeader";
import NavList from "./navlist/NavList";

const Navbar = () => {
	return (
		<>
			<div className="fixed flex flex-col justify-between min-h-screen overflow-visible w-56 bg-dark-blue  pb-3 px-1.5 tracking-normal">
				<div className="flex flex-col gap-3">
					<NavBarHeader />
					<NavList />
				</div>
				<div className="flex items-center gap-3 bg-dark-grey/10 w-[90%] py-2 px-3 mb-2 rounded-[5px] self-center">
					<div className="bg-light-grey/10 p-1 rounded-[5px]">
						<IconWallet />
					</div>
					<div className="flex flex-col text-font-grayer ">
						<p className="font-normal text-xs">Available credits</p>
						<p className="font-semibold text-white/90">222.10</p>
					</div>
				</div>
			</div>
			<div className="w-56 min-w-56 bg-yellow-300">
				{/* this is an empty div under the navbar with same width as navbar*/}
			</div>
		</>
	);
};

export default Navbar;
