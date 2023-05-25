import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Image from "next/image";
import { styled } from "@stitches/react";
import Link from "next/link";

const MenuContainer = styled("div", {
  display: "flex",
  height: "auto",
  padding: "1.875em 0",
});

const MenuRoot = styled(NavigationMenu.Root, {
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  width: "100%",
  padding: "0.5rem",
  backgroundColor: "rgb(27,41,64)",
  boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  minWidth: "10rem",
});

const MenuList = styled(NavigationMenu.List, {
  all: "unset",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center",
  color: "white",
  borderRadius: "0.5rem",
  minWidth: "10rem",
});

const MenuBrand = styled(NavigationMenu.Item, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  height: "2.5rem",
  width: "fit-content",
  padding: "0 1rem",
  borderRadius: "0.25rem",
  color: "black",
  cursor: "pointer",
});

const MenuItem = styled(NavigationMenu.Item, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  height: "2.5rem",
  width: "fit-content",
  padding: "1rem 1rem",
  borderRadius: "0.25rem",
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  "&:focus": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

type Props = {};

export function AppBar({}: Props) {
  return (
    <MenuContainer>
      <MenuRoot>
        <MenuList>
          <MenuBrand>
            <Link href="/">
              <Image
                src="/AYS.jpg"
                alt="AYS - Afet Yönetim Sistemi"
                width={150}
                height={150}
              />
            </Link>
          </MenuBrand>
          <MenuItem>Hakkımızda</MenuItem>
        </MenuList>
      </MenuRoot>
    </MenuContainer>
  );
}
