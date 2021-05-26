import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useHistory } from "react-router";
import "./Home.css";


function Home(){

    const history = useHistory();

    function handleClick(pathName){
        history.push(pathName);
    }
    
    return (
        <div className="home" >
                <Carousel interval={10000} id="carrossel" className="carrossel" nextIcon={<span className="carousel-control-next-icon"/>}>
                    <Carousel.Item>
                        <img
                        className="carrosselImageG"
                        src="\images\dia_das_maesG.png"
                        alt="First slide"
                        onClick={()=>handleClick("/produtos")}
                        />
                        <img
                        className="carrosselImageP"
                        src="\images\dia_das_maesP.png"
                        alt="First slide"
                        onClick={()=>handleClick("/produtos")}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carrosselImageG"
                        src="\images\ComunidadesG.png"
                        alt="Second slide"
                        onClick={()=>handleClick("/bio")}
                        />
                        <img
                        className="carrosselImageP"
                        src="\images\ComunidadesP.png"
                        alt="First slide"
                        onClick={()=>handleClick("/bio")}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carrosselImageG"
                        src="\images\loginG.png"
                        alt="Third slide"
                        onClick={()=>handleClick("/login")}
                        />
                        <img
                        className="carrosselImageP"
                        src="\images\loginP.png"
                        alt="First slide"
                        onClick={()=>handleClick("/login")}
                        />
                    </Carousel.Item>
                </Carousel>
            <p className="subtitle">LANÇAMENTOS</p>
            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/calça1.png" alt="produto" className="imgProduto"/>
                        <div>
                        <p className="tituloAnuncio">CONHEÇA A NOVA CALÇA DA COMUNIDADE DA SERRA</p>
                        <p className="preco">Valor  R$100</p>
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
                        <div>
                        <p className="tituloAnuncio">CONHEÇA O NOVO TÊNIS DA COMUNIDADE DA SERRA</p>
                        <p className="preco">Valor R$190</p>
                        </div>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado por atistas locais em parceria com a empresa de modo que entregasse o melhor de tecnologia para as práticas urbanas e, ao mesmo tempo, estampasse a cultura da comunidade. 
                        Venha conhecer mais sobre esse produto e o impacto dele para essas pessoas.
                    </p>
                </div>
            </div>
            <p className="subtitle">MAIS PROCURADOS</p>
            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/short1.jpg" alt="produto" className="imgProduto"/>
                        <div>
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
                        <div>
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
            <p className="subtitle">PROMOÇÕES</p>
            <div className="topicos">
                <div className="produto" onClick={()=>handleClick("/carrinho")}>
                    <div className="titulo">
                        <img src="/images/CamisaDestaque.png" alt="produto" className="imgProduto"/>
                        <div>
                        <p className="tituloAnuncio">CAMISA CLÁSSICA DO MORRO DO FILÓ</p>
                        <p className="preco">De R$110<br />Por apenas R$40</p>
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
                        <div>
                        <p className="tituloAnuncio">CAMISA CLÁSSICA DA VILA FRANÇA</p>
                        <p className="preco">De R$160<br />Por apenas R$100</p>
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
        </div>
    );
}

export default Home;