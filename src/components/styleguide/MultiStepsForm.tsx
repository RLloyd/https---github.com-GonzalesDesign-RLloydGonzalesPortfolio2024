import { Flex, Text } from "@chakra-ui/react";
import { H1Header } from "../../assets/styles/Styles";
import { ReactElement, useState } from "react";

const MultiStepsForm = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	// function next() {
	const next = () => {
		setCurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	};

	const back = () => {
		setCurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	};

	const goTo = (index: number) => {
		setCurrentStepIndex(index);
	};

	return (
		<>
			currentStepIndex, step: steps[currentStepIndex], goTo, next, back
			<Flex>
				<H1Header>MultiStepsForm</H1Header>
				<Text>https://www.youtube.com/watch?v=uDCBSnWkuH0</Text>
				<Text>Chakra Stepper: https://chakra-ui.com/docs/components/stepper/usage</Text>
			</Flex>
		</>
	);
};

export default MultiStepsForm;
