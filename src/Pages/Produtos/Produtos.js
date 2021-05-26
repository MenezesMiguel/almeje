import React from "react"
import { useHistory } from "react-router";
import "./Produtos.css";


function Produtos(){

    const history = useHistory();

    function handleClick(pathName){
        history.push(pathName);
    }
    

    return(
        <div classname="baseProdutos">
          <div className="headerLocal">
              <p>LANÇAMENTOS 2021</p>
          </div>   
                <div className="topicos">
                    <div className="produto" onClick={()=>handleClick("/carrinho")}>
                        <div className="titulo">
                            <img src="/images/calça1.png" alt="produto" className="imgProduto"/>
                            <div className="anuncioProduto">
                            <p className="tituloAnuncio">CONHEÇA A NOVA CALÇA DA COMUNIDADE DA SERRA</p>
                            <p className="preco">Valor  R$99,99</p>
                            </div>
                        </div>
                        <p className="descricao">
                            A calça foi elaborada pela artista Roberto Silva, da comunidade da Serra. 
                            O design feito por ele passou por testes rigorosos de qualidade e conforto. Venha conhecer mais sobre esse produto e o
                            impacto dele para essas pessoas.
                        </p>
                    </div>
                    <div className="produto" onClick={()=>handleClick("/carrinho")}>
                        <div className="titulo">
                            <img src="/images/tenis1.jpg" alt="produto" className="imgProduto"/>
                            <div className="anuncioProduto">
                            <p className="tituloAnuncio">CONHEÇA O NOVO TÊNIS DA COMUNIDADE DA SERRA</p>
                            <p className="preco">Valor R$189,99</p>
                            </div>
                        </div>
                        <p className="descricao">
                            O tênis foi elaborado por atistas locais em parceria com a empresa de modo que entregasse o melhor de tecnologia para as práticas urbanas e, ao mesmo tempo, estampasse a cultura da comunidade. 
                            Venha conhecer mais sobre esse produto e o impacto dele para essas pessoas.
                        </p>
                    </div>
            </div>
        
            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/short1.jpg" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">SHORTS PARA TREINO DA COMUNIDADE HELIPA</p>
                        <p className="preco">Por apenas R$60</p>
                        </div>
                    </div>
                    <p className="descricao">
                        O produto foi sugerido por um grupo de moradoras locais que pediam por mais estilo e praticidade para treinos ao ar livre.
                        
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/tenis2.jpg" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">TÊNIS 12 MOLAS DA COMUNIDADE ROCINHA</p>
                        <p className="preco">valor R$190</p>
                        </div>
                    </div>
                    <p className="descricao">
                        Um dos itens mais clássicos da cultura entre os jovens da comunidade. o 12 molas volta em uma nova cor para mais
                        estilo e ostentação durante os bailes, mas também servindo para melhorar os desempenhos no treino.
                    </p>
                </div>
            </div>

            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/CamisaDestaque.png" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">CAMISA CLÁSSICA DO MORRO DO FILÓ</p>
                        <p className="preco">De R$109,99<br />Por apenas R$40</p>
                        </div>
                    </div>
                    <p className="descricao">
                        Pode parecer uma camisa qualquer, mas carrega consigo uma história de superação. Seu idealizador procurou a Atlas
                        pedindo ajuda na comunidade. Ao longo do trabalho, José se mostrou um ótimo product designer desenvolveu o projeto da camisa.
                    </p>
                </div>
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/TenisDestaque.png" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">CAMISA CLÁSSICA DA VILA FRANÇA</p>
                        <p className="preco">De R$159,99<br />Por apenas R$99,99</p>
                        </div>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
            </div>
            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/bolsa1.jpg" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">CAMISA CLÁSSICA DO MORRO DO FILÓ</p>
                        <p className="preco">De R$109,99<br />Por apenas R$40</p>
                        </div>
                    </div>
                    <p className="descricao">
                        Pode parecer uma camisa qualquer, mas carrega consigo uma história de superação. Seu idealizador procurou a Atlas
                        pedindo ajuda na comunidade. Ao longo do trabalho, José se mostrou um ótimo product designer desenvolveu o projeto da camisa.
                    </p>
                </div>
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/bone1.jpg" alt="produto" className="imgProduto"/>
                        <div className="anuncioProduto">
                        <p className="tituloAnuncio">BONÉ CLASSICO DA VILA FRANÇA</p>
                        <p className="preco">De R$159,99<br />Por apenas R$99,99</p>
                        </div>
                    </div>
                    <p className="descricao">
                        O boné foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Produtos;