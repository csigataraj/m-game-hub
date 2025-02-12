import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../interfaces/game";
import { IconType } from "react-icons";
import { color } from "framer-motion";

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
};

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  return (
    <HStack marginY={1}>
      {platforms.map((item) => (
        <Icon as={iconMap[item.platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
