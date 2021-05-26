import React from "react";
import "./Carrinho.css";
import { TextField } from "@material-ui/core";
import { Button, IconButton } from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete';

export default function Carrinho() {
  let titulo;
  let produtos; /* coloquei as variáveis para visualizaçãomas creio que, com certeza, terá que modificar para ficar de fato funcional */
  let cep;
  let tamanho;
  let preço1;
  let preço2;
  tamanho = "TAMANHO: 39";
  titulo = "Seu Carrinho";
  produtos = "Tênis da Vila França";
  cep = "Calcule seu CEP";
  preço1 = "R$ 199,90";
  preço2 = "R$ 119,90";

  return (
    <>
      <div className="titulot">{titulo}</div>

      <div className="cointainer">
        {" "}
        {/* div para compreender todos os elementos, utilizei ela essencialmente para  */}
        <div className="produtos">
          {" "}
          {/* "partir" a tela entre o descritivo dos produtos e o resumo do pedido */}
          <div className="fotoproduto">
            <img src="/images/tenis.png" alt="tenis" className="tenis" />
          </div>
          <div className="infos">
            <div className="descritivo">
              <div className="nomeproduto">{produtos}</div>
              <div className="detalhes">{tamanho}</div>
            </div>
            <aside className="preços">
              <div className="preço1">{preço1}</div>
              <div className="preço2">{preço2}</div>
            </aside>
            <div className="deletebutton">
              <IconButton aria-label="delete">
                {/* <DeleteIcon /> */}
              </IconButton>
            </div>
          </div>
        </div>
        <aside className="finalização">
          {" "}
          {/* div para o botão finalizar retirado de: https://www.fabriziovanmarciano.com/button-styles/  Button Style E*/}
          <div class="button_cont" align="center">
            <a
              class="botaosty"
              href="pagamento"
              target="_blank"
              rel="nofollow noopener" /* href é o redirecionamento, tem que criar uma página para pagamento */
            >
              FINALIZAR COMPRA
            </a>
          </div>
        </aside>
        <div className="resumo">
          {/* div para o resumo dos produtos: soma dos valores, desconto, valor entrega etc */}
        </div>
      </div>
      <form className="cep">
        {cep}
        <div>
          <TextField
            id="CEP"
            label="Digite seu CEP"
            variant="outlined"
          ></TextField>
          <Button variant="contained" color="primary" size="medium">
            Calcular
          </Button>
        </div>
      </form>
    </>
  );
}
