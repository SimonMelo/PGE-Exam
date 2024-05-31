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
import { processes } from "../components/ProcessMore";
import Header from "../components/Header";

const ScreenProcess = () => {
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
        Processos
        <IconButton
          component={RouterLink}
          to="/new-process"
          aria-label="Adicionar Clientes"
        >
          +
        </IconButton>
      </Typography>
      <Grid container spacing={2}>
        {processes.map((process) => (
          <Grid item xs={12} sm={6} md={4} key={process.id}>
            <RouterLink
              to={`/process/${processes.id}`}
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
                    {process.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {process.type}
                  </Typography>
                  <Typography variant="body2">{process.description}</Typography>
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

export default ScreenProcess;
