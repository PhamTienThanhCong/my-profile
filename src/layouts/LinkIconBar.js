import { colors } from "@/theme";
import { Icon, Link, Stack, Tooltip, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { BiLink } from "react-icons/bi";
import { FaDev, FaFacebook, FaLinkedin, FaPhone, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

const icons = {
  github: VscGithubInverted,
  linkedin: FaLinkedin,
  devpost: FaDev,
  email: MdEmail,
  document: IoMdDocument,
  youtube: FaYoutube,
  blog: FaDev,
  link: BiLink,
  phone: FaPhone,
  telegram: FaTelegramPlane,
  facebook: FaFacebook
};

const LinkIcon = ({ index, color, onHoverColor, url, label, icon }) => (
  <Tooltip label={label} aria-label={`${label}-tooltip`} key={`link-${index}`}>
    <Link aria-label={`Open link to ${url}`} display="inline-block" href={url} isExternal>
      <Icon as={icons[icon]} fontSize="xl" color={color} _hover={{ color: onHoverColor }} />
    </Link>
  </Tooltip>
);

const LinkIconBar = ({ links, color, onHoverColor, ...props }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const iconColor = color || useColorModeValue(colors.subtle.light, colors.subtle.dark);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const hoverColor = onHoverColor || useColorModeValue(colors.secondary.light, colors.secondary.dark);
  return (
    <Stack mt={4} direction="row" spacing="12px" justify="center" mb={10} {...props}>
      {links.map((link, index) => (
        <LinkIcon key={link.label} index={index} color={iconColor} onHoverColor={hoverColor} {...link} />
      ))}
    </Stack>
  );
};

export default LinkIconBar;
