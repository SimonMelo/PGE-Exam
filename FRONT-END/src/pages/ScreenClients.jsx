import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { clientsMore } from "../components/ClientsMore";
import Header from "../components/Header";

const ScreenClients = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography
            style={{ fontWeight: "bold" }}
            variant="h4"
            component="div"
            gutterBottom
          >
            Clientes
            <IconButton
              component={RouterLink}
              to="/new-clients"
              aria-label="Adicionar Clientes"
            >
              +
            </IconButton>
          </Typography>
          <Grid container spacing={2}>
            {clientsMore.map((clients) => (
              <Grid item xs={12} sm={6} md={4} key={clients.id}>
                <RouterLink
                  to={`/clients/${clients.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {clients.name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 1 }}>
                        {clients.document}
                      </Typography>
                    </CardContent>
                  </Card>
                </RouterLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ScreenClients;
