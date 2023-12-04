"use client";

import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SHORT_NAME, PAGES, NAME } from "./constants";
import { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav className="lg:hidden flex items-center">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {PAGES.map((page) => (
          <Link key={page.path} href={page.path}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page.label}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
      <div className="flex grow justify-center">
        <Link href="/">
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {NAME}
          </Typography>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;
