import IconDropDown from "../../icons/IconDropDown";
import IconHelp from "../../icons/IconHelp";
import IconMessage from "../../icons/IconMessage";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
	return (
		<div className=" bg-white flex justify-between items-center h-14 px-8 py-7 border border-b-2 tracking-normal">
			<div className="flex items-center gap-3">
				<div className="text-font-dark text-xsm">Payments</div>
				<div className="flex items-center text-font-gray gap-1 text-xs">
					<IconHelp />
					<p className="font-light text-xs">How it works</p>
				</div>
			</div>
			<div className="">
				<SearchBar
					placeholderText="Search features, tutorials, etc."
					twBgColor="bg-dark-grey"
					twWidth="w-80"
					twRounded="rounded-md"
					twIconHeight="h-4"
					twPxPy="py-2 px-3"
				/>
			</div>
			<div className="flex gap-2.5">
				<button className="rounded-full bg-darker-grey w-max p-2.5">
					<IconMessage />
				</button>
				<button className="rounded-full bg-darker-grey w-max p-2.5">
					<IconDropDown twHeight="h-3.5" twWidth="w-4" />
				</button>
			</div>
		</div>
	);
};

export default Header;
