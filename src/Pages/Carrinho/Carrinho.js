import React from "react";
import "./Carrinho.css";
import { useHistory } from "react-router";
import { IconContext } from "react-icons";
import {RiShoppingCartLine} from "react-icons/ri";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';





export default function Carrinho() {
    let titulo;
    titulo = "Carrinho";
    const history = useHistory; 
    let produto;
    produto = "Produto";

    return (
        <>        
                <div className = "titulo">
                    <IconContext.Provider value={{ color: "#000000", size: "42px"}}>
                        <RiShoppingCartLine/>
                    </IconContext.Provider>
                    {titulo}            
                </div> 
                <div className="cointainer">
        <Grid container spacing={5}
            justify="center"
            alignItems="center">
            <Grid className = "item" item xs={11}>
                <Paper className = "paper">
                    {produto}
                
                </Paper>        
            </Grid>   
                <Grid className = "item" item xs={11}>
                    <Paper className = "paper">Produto</Paper>
                </Grid>
        </Grid>
            <form className = "cep">
                <h3>Calcule seu CEP</h3>
                <TextField id="CEP" label="Digite seu CEP" variant="outlined"></TextField> 
                <Button variant="contained" color="primary" size="large">
                    Calcular
                </Button>
            </form>
        
        </div>
    </>
  );
}




