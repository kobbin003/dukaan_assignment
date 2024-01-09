import { ReactNode } from "react";
//
const Button = ({
	children,
	text,
	reverse,
}: {
	children: ReactNode;
	text?: string;
	reverse?: boolean;
}) => {
	return (
		<button
			className={`flex items-center border-1.5 border-font-gray/20 py-1 ${
				text ? "px-2" : "px-1"
			} gap-2 rounded-[5px]`}
		>
			{text && (
				<span
					className={`text-font-gray/90 text-xs tracking-normal ${
						reverse && "order-2"
					}`}
				>
					{text}
				</span>
			)}
			{children}
		</button>
	);
};

export default Button;
