import { Button } from "@chakra-ui/react";

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  [x: string]: any;
};
const CustomButtonSecondary: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button fontSize={".8em"} color={"#49AFE6"} {...props}>
      {children}
    </Button>
  );
};

export default CustomButtonSecondary;
