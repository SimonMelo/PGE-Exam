import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import Header from "../components/Header";

const NewProcessPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    peopleNames: "",
    peopleDocuments: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDocumentoChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, peopleDocuments: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados do formulário:", formData);
  };
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "600px", width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Novo Processo
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome do Processo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Tipo do Processo"
              name="type"
              value={formData.type}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Descrição do Processo"
              name="description"
              value={formData.description}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Nomes das Pessoas Envolvidas"
              name="peopleNames"
              value={formData.peopleNames}
              onChange={handleChange}
              margin="normal"
            />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleDocumentoChange}
                  style={{ display: "none" }}
                  id="upload-documento"
                />
                <label htmlFor="upload-documento">
                  <Button
                    style={{ marginBottom: "10px" }}
                    variant="contained"
                    color="primary"
                    component="span"
                  >
                    Adicionar Documento
                  </Button>
                </label>
              </Grid>
              <Grid item xs={3}>
                {formData.peopleDocuments && (
                  <Typography>{formData.peopleDocuments.name}</Typography>
                )}
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "10px" }}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default NewProcessPage;
