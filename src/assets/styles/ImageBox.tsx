import { Box } from "@chakra-ui/react";

type Props = {
    boxSize?: string
    borderRadius?: string
    border?: string
    boxShadow?: string
    margin?: string
    objectPosition?: string
    background?: string
};

export const sxImageBox = {
    boxSize: "200px",
    borderRadius: "full",
    border: "2px solid hsla(100, 50%, 70%, 0.95)",
    boxShadow: "5px 10px 16px hsla(90, 60%, 50%, 0.5)",
    margin: "0px auto",
    objectPosition: "-2px",
    background: "hsla(80, 100%, 60%, 0.35)",
};

const ImageBox = ({
    boxSize,
    borderRadius,
    border,
    boxShadow,
    margin,
    objectPosition,
    background
    // borderRadius = "full",
    // border = "2px solid hsla(100, 50%, 70%, 0.95)",
    // boxShadow = "5px 10px 16px hsla(90, 60%, 50%, 0.5)",
    // margin = "0px auto",
    // objectPosition = "-2px",
    // background = "hsla(80, 100%, 60%, 0.35)"
}: Props) => {

  return (

    <Box
        boxSize = {boxSize}
        borderRadius = {borderRadius}
        border = {border}
        boxShadow = {boxShadow}
        margin = {margin}
        objectPosition = {objectPosition}
        background = {background}>
    </Box>

  )
}

export default ImageBox

