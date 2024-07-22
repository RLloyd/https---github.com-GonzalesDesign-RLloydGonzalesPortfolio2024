import { ReactNode } from "react";

type Props = {
	image?: ReactNode;
	content?: ReactNode;
	action?: ReactNode;
};

const HeroTemplate = ({ image, content, action }: Props) => {
	return (
		<>
			{image}

			{content}

			{action}
		</>
	);
};

export default HeroTemplate;
