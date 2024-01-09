import { ReactNode } from "react";

const NavListItem = ({
	children,
	name,
}: {
	children: ReactNode;
	name: string;
}) => {
	return (
		<li
			className={`flex items-center ${
				name == "Payments" && "bg-dark-grey/10"
			} px-3.5 py-1.5 rounded-[5px]`}
		>
			{children}
			<span className="absolute pl-8">{name}</span>
		</li>
	);
};

export default NavListItem;
