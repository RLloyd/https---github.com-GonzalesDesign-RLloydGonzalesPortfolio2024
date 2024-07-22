import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { LayoutGroup } from 'framer-motion';

const ExpandingButton = ({hoveredText, unHoveredText}:any) => {
// const ExpandingButton = () => {
   const [isHovering, setIsHovering] = useState(false);
   const xWidth = useRef(0)
   const widthRef = useRef<HTMLDivElement>(null)
   const durationTime = .5;
  return (
      <LayoutGroup> {/* LayoutGroup & layout allows to animate everything inside as one */}
         <motion.div
            className="
               bg-gray-500
               flex
               cursor-pointer"
            style={{minWidth:xWidth.current, width:"fit-content"}} //applies the captured xWidth as minWidth

            /* move the trigger here & add a ref to capture un-hovered state width to avoid the flickering effect. it only flickers when the un-hovered state is wider that the hovered state width */
            /* use framer-motion onHover... instead to address all devices better */
            // onMouseEnter={() => {
            onHoverStart={() => {
               if(!isHovering){
                  xWidth.current = widthRef.current!.offsetWidth; //capture the width of the un-hovered state
                  // console.log("xWidth.current: ", xWidth.current)
                  // console.log("xWidth: ", xWidth)
                  // console.log("widthRef.current: ", widthRef.current)
                  // if(xWidth.current > 50)
                  //    xWidth.current = 50
               }
               setIsHovering(true)
            }}
            // onMouseLeave={() =>
            onHoverEnd={() =>
               setIsHovering(false)}
            >

            <motion.div
               ref={widthRef}
               className="inline-block text-gray-300 bg-gray-900 px-4 py-1.5 uppercase tracking-wider text-sm font-medium whitespace-nowrap border"
               style={{borderRadius:"6px",
                  // textAlign:"left"
               }}
               layout
               // onMouseEnter={() => setIsHovering(true)}
               // onMouseLeave={() => setIsHovering(false)}
               transition={{duration:durationTime}}
               >
               <AnimatePresence initial={false} mode={'wait'}> {/* AnimatePresence is needed for the exit prop to work */}
                  <motion.span
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{duration:durationTime}}
                     key={isHovering ? "hovering" : "unhovering"}
                     >
                     {isHovering ? hoveredText : unHoveredText}
                     {/* {isHovering ? "4" : "4123456789:5M"} */}
                  </motion.span>
               </AnimatePresence>
            </motion.div>
         </motion.div>
      </LayoutGroup>
  )
}

export default ExpandingButton