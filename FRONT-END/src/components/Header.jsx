import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Avatar } from "@mui/material";
import LogoImage from "../img/icon.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <a style={{ color: "white", textDecoration: "none" }} href="/">
          <Toolbar disableGutters>
            <Avatar alt="Logo" src={LogoImage} sx={{ marginRight: "10px" }} />{" "}
            {/* Adicione a imagem com o componente Avatar */}
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Procuradoria Geral do Estado
            </Typography>
          </Toolbar>
        </a>
      </Container>
    </AppBar>
  );
};

export default Header;
