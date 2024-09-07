"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  IconButton,
  Spacer,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import { colors } from "../theme";
import languages from "@/data/languages";
import Image from "next/image";

const navBtns = [
  {
    label: "About"
  },
  {
    label: "Experience"
  },
  {
    label: "Projects"
  },
  {
    label: "Contact"
  },
  {
    label: "Blog",
    href: "https://viblo.asia/u/PhamTienThanhCong/"
  }
];

const Logo = () => {
  const logo = useColorModeValue("/logo/logo.png", "/logo/logo-dark.png");
  return (
    <Box m="2">
      <img alt="" src={logo} width="60" height="60" onClick={scroll.scrollToTop} />
    </Box>
  );
};

const MenuToggle = ({ isOpen, onOpen }) => (
  <Box display={{ base: "block", md: "none" }} pr={4}>
    <Button onClick={onOpen}>{isOpen ? <Icon as={CloseIcon} /> : <Icon as={HamburgerIcon} />}</Button>
  </Box>
);

const NavButtons = ({ size, onClose }) => {
  const t = useTranslations("Header");
  const btns = navBtns.map((btn) => (
    <Button key={btn.label} size={size} variant="link" mb={2} mx={3} onClick={onClose}>
      {btn.href ? (
        <Link href={btn.href} isExternal>
          {t(btn.label)}
        </Link>
      ) : (
        <ScrollLink
          to={btn.label.toLowerCase()}
          href={btn.href}
          spy
          smooth
          offset={-70}
          duration={500}
          onClick={onClose}
        >
          {t(btn.label)}
        </ScrollLink>
      )}
    </Button>
  ));
  return <>{btns}</>;
};

const ColorModeButton = ({ mr }) => {
  const t = useTranslations("Header");
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  return (
    <Tooltip label={t(`Toggle ${nextMode} mode`)} aria-label={t(`Toggle ${nextMode} mode`)}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={t(`Toggle ${nextMode} mode`)}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        style={{ marginRight: mr }}
      />
    </Tooltip>
  );
};

const LanguageSwitcher = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" size="md" mr={4}>
        <IoLanguage />
      </MenuButton>
      <MenuList>
        {/* <Link href="/" locale="en">
          <MenuItem>English</MenuItem>
        </Link> */}
        {languages.map((lang) => (
          <Link key={lang.code} href="/" locale={lang.code}>
            <MenuItem>
              <Image src={lang.image} alt={lang.name} width="24" height="24" style={{ marginRight: "24px" }} />
              {lang.name}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

const MenuLinks = ({ onClose }) => (
  <Stack
    display={{ base: "none", sm: "none", md: "block" }}
    width={{ sm: "full", md: "auto" }}
    spacing="24px"
    direction={["column", "row", "row", "row"]}
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
    <ColorModeButton mr="12px" ml={2} />
    <LanguageSwitcher />
  </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack alignItems="center" justifyContent="center" direction={["column"]} spacing="24px" mt="20vh">
            <NavButtons size="lg" onClose={onClose} />
            <ColorModeButton />
            <LanguageSwitcher />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={["row", "row", "row", "row"]}
        px={{ base: 0, md: 4 }}
        alignItems="center"
        justifyContent="center"
        bg={primary}
      >
        <Logo />
        <Spacer />
        <MenuLinks onClose={onClose} />
        <NavMenu isOpen={isOpen} onClose={onClose} />
        <MenuToggle isOpen={isOpen} onOpen={onOpen} />
      </Stack>
    </Sticky>
  );
}
