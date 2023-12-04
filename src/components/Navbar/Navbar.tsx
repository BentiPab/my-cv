import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

const Navbar = () => {
  return (
    <>
      <WebNavbar />
      <MobileNavbar />
    </>
  );
};
export default Navbar;
