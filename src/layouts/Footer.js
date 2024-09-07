"use client";
import links from "@/data/footerLinks";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoRepoForked, GoStar } from "react-icons/go";
import { animateScroll as scroll } from "react-scroll";
import LinkIconBar from "./LinkIconBar";

const GITHUB_URL = "https://github.com/PhamTienThanhCong/my-profile";

export default function Footer() {
  const [forks, setForks] = useState(0);
  const [stars, setStars] = useState(0);
  // https://github.com/PhamTienThanhCong/my-profile
  useEffect(() => {
    fetch("https://api.github.com/repos/PhamTienThanhCong/my-profile")
      .then((response) => response.json()) // Converting the response to a JSON object
      .then((data) => {
        setForks(data.forks);
        setStars(data.stargazers_count);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
      <Link href={GITHUB_URL} isExternal>
        <Text fontSize="sm">
          Made with{" "}
          <span aria-label="heart" role="img">
            &#128153;
          </span>
          {" by Pham Tien Thanh Cong"}
        </Text>
      </Link>
      <Stack direction="row" alignItems="center" justify="center">
        <GoRepoForked /> <Text size="xs">{forks}</Text>
        <GoStar /> <Text size="xs">{stars}</Text>
      </Stack>

      <Text fontSize="sm" mt={2} onClick={scroll.scrollToTop}>
        <span role="img" aria-label="rocket">
          &#128640;
        </span>{" "}
        Scroll to the top!{" "}
        <span role="img" aria-label="rocket">
          &#128640;
        </span>
      </Text>
      <LinkIconBar links={links} />
    </Box>
  );
}
