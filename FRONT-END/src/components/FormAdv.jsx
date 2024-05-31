import React, { useState } from "react";
import { TextField, Typography, Button, Grid, Box } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const FormAdv = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [aob, setAob] = useState("");
  const [role, setRole] = useState("");
  const [documento, setDocumento] = useState(null);

  const handleDocumentoChange = (event) => {
    const file = event.target.files[0];
    setDocumento(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados enviados:", {
      nome,
      cpf,
      endereco,
      aob,
      role,
      documento,
    });
    setNome("");
    setCpf("");
    setEndereco("");
    setAob("");
    setRole("");
    setDocumento(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Advogado
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
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
        <TextField
          label="AOB"
          value={aob}
          onChange={(e) => setAob(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
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
              <Button
                style={{ marginBottom: "10px" }}
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
  );
};

export default FormAdv;
