import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/2B_Games_logo.webp";
import ColoeModelSwitch from "./ColorModelSwitch";
const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <ColoeModelSwitch />
    </HStack>
  );
};

export default NavBar;
