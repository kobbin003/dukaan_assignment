import IconAudience from "../../../icons/IconAudience";
import IconBars from "../../../icons/IconBars";
import IconClipBoard from "../../../icons/IconClipBoard";
import IconColourPalette from "../../../icons/IconColourPalette";
import IconCursor from "../../../icons/IconCursor";
import IconDelivery from "../../../icons/IconDelivery";
import IconDiscount from "../../../icons/IconDiscount";
import IconHome from "../../../icons/IconHome";
import IconLightning from "../../../icons/IconLightning";
import { IconPayment } from "../../../icons/IconPayment";
import IconProduct from "../../../icons/IconProduct";
import IconSpeaker from "../../../icons/IconSpeaker";
import NavListItem from "../navlistItem/NavListItem";

const NavList = () => {
	return (
		<ul className="text-font-grayer text-xs font-medium flex flex-col gap-1">
			<NavListItem name="Home">
				<IconHome />
			</NavListItem>

			<NavListItem name="Orders">
				<IconClipBoard />
			</NavListItem>
			<NavListItem name="Products">
				<IconProduct />
			</NavListItem>
			<NavListItem name="Delivery">
				<IconDelivery />
			</NavListItem>
			<NavListItem name="Marketing">
				<IconSpeaker />
			</NavListItem>
			<NavListItem name="Analytics">
				<IconBars />
			</NavListItem>
			<NavListItem name="Payments">
				<IconPayment />
			</NavListItem>
			<NavListItem name="Tools">
				<IconCursor />
			</NavListItem>
			<NavListItem name="Discounts">
				<IconDiscount />
			</NavListItem>
			<NavListItem name="Audience">
				<IconAudience />
			</NavListItem>
			<NavListItem name="Appearance">
				<IconColourPalette />
			</NavListItem>
			<NavListItem name="Plugins">
				<IconLightning />
			</NavListItem>
		</ul>
	);
};

export default NavList;
