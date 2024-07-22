import { Box, Flex } from "@chakra-ui/react";
import { cubicBezier, motion } from "framer-motion";

/*--= Variables for animation =--*/
export const MotionFlex = motion(Flex);
export const MotionBox  = motion(Box);
// export const MotionH1   = motion(H1Header);
export const easing     = cubicBezier(0.35, 0.27, 0.3, 0.83);

/*--= Animation Variant =--*/
type Props = {
   // animVariant: any
   children: React.ReactNode
}
const SPRING_OPTIONS = {
   type: "spring",
   mass: 3,
   stiffness: 150,
   damping: 50,
};

const animVariant = {
   hidden: { opacity: 0 },
   visible: { opacity: 1,
      transition: { duration: 3 }
      // transition: { SPRING_OPTIONS }
   }
};

export const AnimationVariant = ({children}: Props) => {
   return (
      <MotionFlex gap={"0rem"} className={"carouselWrapper"}
         variants={animVariant}
         initial = "hidden"
         animate = "visible"
         >
         {children}
      </MotionFlex>
   )
}

type AnimProps = {
   start: number;
   end: number;
   duration: number;
   delay: number;
}
export const scaleAnimation = ({start, end, duration, delay}: AnimProps | any) => {
// export const scaleAnim = ({start=0, end=1, duration=1, delay}: AnimProps | any) => {
   return {
      hidden: { scale: start },
      visible: { scale: end ,
         transition: {
            duration: duration,
            ease: "easeInOut",
            delay: delay,
         },
      },
   }
}