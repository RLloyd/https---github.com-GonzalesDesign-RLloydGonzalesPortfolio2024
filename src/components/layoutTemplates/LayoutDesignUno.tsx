/*--= Layout Design Uno  =--*/
/*-= Description: Includes background image with text descriptions & buttons =-*/
// NOTE! This is based on HeroTemplate. Consolidate both template designs into one

import { ReactNode } from "react";

type Props = {
	image?: ReactNode;
	content?: ReactNode;
	action?: ReactNode;
};

const LayoutDesignUno = ({ image, content, action }: Props) => {
	return (
		<>
			{image}

			{content}

			{action}
		</>
	);
};

export default LayoutDesignUno;
