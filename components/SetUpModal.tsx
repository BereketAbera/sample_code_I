import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Flex,
  VStack,
  Heading,
  Divider,
  HStack,
  Center,
} from "@chakra-ui/react";
import { AddIcon, ChevronLeftIcon, LockIcon } from "@chakra-ui/icons";
import CustomButtonSecondary from "./CustomButtonSecondary";
import CustomButtonPrimary from "./CustomButtonPrimary";

/**
 *
 * @returns setup modal jsx with all it's logic.
 */
const SetUpModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  /**
   *
   * @param activeIndex is the index of the dot to be shown as active
   * @returns array of dots to show the current user stage
   */
  const renderPageDots = (activeIndex: Number) => {
    return [1, 2, 3, 4].map((value) => {
      let common = {
        cursor: "pointer",
        rounded: "100%",
        margin: 1,
        backgroundColor: "#D9D9D9",
        _hover: {
          backgroundColor: "#4DE3CF",
        },
        width: 2,
        height: 2,
      };
      let style = activeIndex === value ? { backgroundColor: "#4DE3CF" } : {};
      return <Box {...common} {...style} key={value}></Box>;
    });
  };

  return (
    <>
      <Center height={"100vh"}>
        <Button onClick={onOpen}>Open Modal</Button>
      </Center>

      <Modal
        isCentered
        scrollBehavior={"inside"}
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex
              justifyContent={"space-between"}
              position={"relative"}
              alignItems={"center"}
              gap={4}
            >
              <Text color={"#49AFE6"}>Get Started</Text>
              <Box flex={1} textAlign={"end"}>
                <CustomButtonSecondary>
                  <span>{`You're in a 30 day free trial`}</span>
                </CustomButtonSecondary>
              </Box>
              <ModalCloseButton
                right={"0"}
                top={"0"}
                style={{ position: "relative" }}
                color={"#888"}
                fontSize={".8em"}
              />
            </Flex>
          </ModalHeader>
          <ModalBody width={"lg"} margin={"auto"} padding={"2em"}>
            <VStack>
              <Heading fontSize={"4xl"} as={"h2"} fontWeight={"extrabold"}>
                Setup
              </Heading>
              <Heading fontSize={"xl"} as={"h3"}>
                Connect your accounts to start tracking
              </Heading>
              <Box paddingBottom={4}>
                <Divider width={150} />
              </Box>
              <VStack width={"sm"} gap={1}>
                <Text fontSize={"md"}>
                  Link an external account to track you investments, debts, cash
                  flows, etc.
                </Text>
                <CustomButtonPrimary width={"100%"} leftIcon={<AddIcon />}>
                  Link an account
                </CustomButtonPrimary>
                <HStack alignItems={"start"}>
                  <LockIcon fontSize={"3xl"} color={"gray"} />
                  <Text fontSize={"xs"}>
                    By clicking a new account, {`you're`} initiating a
                    connection via MX to receive on-going realtime data about
                    your spending activity and cashflow in your connected
                    account. <br />
                    We do not share data. Ever. All data is secure and strictly
                    used to benefit your use of Chronifit technology.
                  </Text>
                </HStack>
                <Box paddingBottom={8} paddingTop={8}>
                  <Divider width={150} />
                </Box>
                <Text fontSize={"sm"} textAlign={"center"}>
                  <Text as="b">NOTE:</Text> You will still need to manually
                  input and update other data points to track your full net
                  worth and Chronifit dates.
                </Text>
                <HStack>{renderPageDots(4)}</HStack>
                <Button
                  color={"gray"}
                  colorScheme="gray"
                  variant="outline"
                  leftIcon={<ChevronLeftIcon />}
                >
                  Back
                </Button>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SetUpModal;
