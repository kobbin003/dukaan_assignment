import imageUrl from "../../../assets/nishyan.png";
import IconDownArrow from "../../../icons/IconDownArrow";
const NavBarHeader = () => {
	return (
		<div className="h-16 w-full flex items-center justify-between px-2">
			<div className="flex items-center gap-3">
				<img src={`${imageUrl}`} alt="" className="h-10 rounded-sm" />
				<div className="flex flex-col whitespace-nowrap">
					<p className="text-white">Nishyan</p>
					<p className="text-font-grayer text-xs underline underline-offset-4">
						Visit store
					</p>
				</div>
			</div>
			<div className="pr-1">
				<IconDownArrow
					iconFill="fill-white"
					iconStroke="stroke-white"
					height="h-4"
					width="w-4"
				/>
			</div>
		</div>
	);
};

export default NavBarHeader;
