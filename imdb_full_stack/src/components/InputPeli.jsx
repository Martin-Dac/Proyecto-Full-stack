import React, { useState } from "react";
import { TextField, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export function InputPeli({ onFetchSuccess }) {
  const [InputValor, setInputValor] = useState("");

  const ManejoSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/peliculas/?nombre=${InputValor}`)
      .then((response) => response.json())
      .then((data) => {
        onFetchSuccess(data);
      })
      .catch((error) => console.error(error));
  };

  const ManejoCambio = (e) => {
    setInputValor(e.target.value);
  };

  return (
    <div>
      <form onSubmit={ManejoSubmit}>
        <TextField
          variant="outlined"
          label="Buscar Pelicula"
          value={InputValor}
          onChange={ManejoCambio}
          InputProps={{
            endAdornment: (
              <IconButton position="end" onClick={ManejoSubmit}>
                <SearchIcon cursor="pointer" style={{color:'#e9ecef'}}/>
              </IconButton>
            ),
            sx:{ borderRadius: '20px', width: '500px', backgroundColor: '#60606088', input:{color:'#e9ecef'}},
          }}
          InputLabelProps={{
            style: { color: '#e9ecef' },
          }}
        ></TextField>
      </form>
    </div>
  );
}
