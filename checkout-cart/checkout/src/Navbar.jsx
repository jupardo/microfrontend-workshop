import React, { useState } from "react";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useEffect } from "react";


export default function Navbar() {
  const [pokemon, setPokemon] = useState([]);
  function togglePokemon(e) {
    console.log(e.detail);
    const {id} = e.detail;
    if(pokemon.includes(id)) {
      setPokemon(prev => [...prev.filter((value) => value !== id)]);
    } else {
      setPokemon(prev => [...prev, id]);
    }
  }
  useEffect(() => {
    window.addEventListener("favorites:toggle", togglePokemon);
    return () => {
      window.removeEventListener("favorites:toggle", togglePokemon);
    }
  }, []);
  return (
    <Box sx={{
      flexGrow: 1
    }}>
      <Toolbar sx={{
        borderBottom: "1px solid #D9D9D9"
      }}>
        <Box sx={{
        maxWidth: (theme) => theme.breakpoints.values.md,
        margin: "0 auto",
        display: "flex",
        width: "100%"
      }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon
        </Typography>
        <Button variant="text" onClick={() => console.log(pokemon)}><FavoriteBorderIcon></FavoriteBorderIcon></Button>
        </Box>
      </Toolbar>
    </Box>
  )
}