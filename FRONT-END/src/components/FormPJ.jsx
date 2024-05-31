import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const FormPJ = () => {
  const [razaoSocial, setRazaoSocial] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [documento, setDocumento] = useState("");

  const handleDocumentoChange = (event) => {
    const file = event.target.files[0];
    setDocumento(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", {
      razaoSocial,
      nomeFantasia,
      cnpj,
      endereco,
    });
  };

  return (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cadastro de Pessoa Jurídica
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Razão Social"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Nome Fantasia"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            fullWidth
            margin="normal"
            required
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
                <Button style={{marginBottom: "10px"}}
                  variant="contained"
                  color="primary"
                  component="span"
                  startIcon={<CloudUpload />}
                >
                  Adicionar Documento
                </Button>
              </label>
            </Grid>
            <Grid item xs={3}>
              {documento && <Typography>{documento.name}</Typography>}
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormPJ;
