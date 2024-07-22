import { Box, Button, Flex } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { PrimaryAccentButton } from '../../../assets/styles/Styles';
import { MotionBox } from 'src/assets/variables/Variables';

const sxCheckAnimWrapper = {
   // background:"primary.500",
   // background:"rgb(255, 255, 255)",
   display        :  "flex",
   justifyContent :  "center",
   alignItems     :  "center;",
   width          :  "150px",
   height         :  "150px",
   borderRadius   :  "100%",
   border         :  "1px solid",
   borderColor    :  "accent.100",
   // initial={{ scale:0.8 }}
}

const CheckmarkAnim = (props: any) => {
   const [isChecked, setIsChecked] = useState(true)
   const pathLength = useMotionValue(0)
   const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])

   return (
       <Flex className='checkmarkAnimContainer' flexDirection={"column"} alignItems={"center"}>

         {/* Checkmark Anim */}
         <MotionBox className="checkAnimWrapper" sx={sxCheckAnimWrapper}
            initial={{opacity:1}}
            animate={{
               //  scale: isChecked ? 1 : 0.8,
               opacity: isChecked ? 1 : 0.2,
                  backgroundColor: isChecked
                     ? "#fff7f5"
                     : "#eb620099"
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            // onTap={() => setIsChecked(!isChecked)}
            >
            <svg>
                  <motion.path
                     d="M38 74.707l24.647 24.646L116.5 45.5"
                     fill="transparent"
                     strokeWidth="20"
                     stroke="#eb6200"
                     strokeLinecap="round"
                     initial={{ pathLength: 0, opacity: 1 }}
                  //   initial={{ pathLength: 0.9, opacity: 1 }}
                     animate={{
                        pathLength: isChecked ? 0.9 : 0,
                        // scale: isChecked ? 0.8 : 1,
                     }}
                     style={{ pathLength, opacity }}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
            </svg>
         </MotionBox>

         <PrimaryAccentButton
            label    =  "on/off"
            size     =  "sm"
            margin   =  "1rem 0"
            onClick={() => setIsChecked(!isChecked)}
            // link     =  {buttonlink}
            // target   =  "_self"
            // icon     =  ""

         />

      </Flex>
   )
//    const easing = cubicBezier(0.35, 0.27, 0.3, 0.83);
//    const checkIconTransition = { ease: easing, duration: 0.5, delay: 0.75 }

//   return (
//     <svg
//       {...props}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={3}
//       >
//          <motion.path
//             animate={{pathLength: 1}}
//             transition={checkIconTransition}
//             strokeLinecap={"round"}
//             strokeLinejoin={"round"}
//             d="M5 1314 4L19 7"
//          />

//       </svg>
//   )
}

export default CheckmarkAnim

