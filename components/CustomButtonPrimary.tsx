import { Button } from "@chakra-ui/react";

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  [x: string]: any;
};

/**
 *
 * @param param0 button content
 * @returns custom button with gradient bg-color
 */
const CustomButtonPrimary: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      fontSize={".8em"}
      color={"#fff"}
      bgGradient={"linear(to-r, #4DE3CF, #30BACF, #128FD0)"}
      _hover={{
        bgGradient: "linear(to-r, #4DE3CF, #30BACF, #128FD0)",
        color: "#eee",
      }}
      _active={{
        bgGradient: "linear(to-r, #4DE3CF, #30BACF, #128FD0)",
        color: "#eee",
        transform: "scale(0.98)",
      }}
      _focus={{
        bgGradient: "linear(to-r, #4DE3CF, #30BACF, #128FD0)",
        color: "#eee",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButtonPrimary;
