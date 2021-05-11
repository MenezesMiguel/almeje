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
        <div className="home">
            <p className="pageTitle">Home</p>
                <Carousel interval={10000} className="carrossel" nextIcon={<span className="carousel-control-next-icon"/>}>
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
                        src="\images\dia_das_maesG.png"
                        alt="Third slide"
                        onClick={()=>handleClick("/login")}
                        />
                        <img
                        className="carrosselImageP"
                        src="\images\ComunidadesG.png"
                        alt="First slide"
                        onClick={()=>handleClick("/login")}
                        />
                        <Carousel.Caption>
                        <h3 className="carrosselTitle">Faça seu login e compre na melhor loja do Brasil.</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <p className="subtitle">Lançamentos</p>
            <div className="topicos">
                <div className="produto">
                    <div className="titulo">
                        <img src="/images/CamisaDestaque.png" alt="produto" className="imgProduto"/>
                        <p className="anuncioProduto">Conheça a nova camisa do Morro do Filó</p>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
                <div className="produto">
                    <div className="titulo">
                        <img src="/images/TenisDestaque.png" alt="produto" className="imgProduto"/>
                        <p className="anuncioProduto">Conheça o novo tênis da Vila França</p>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
            </div>
            <p className="subtitle">Mais procurados</p>
            <div className="topicos">
                <div className="produto">
                    <div className="titulo">
                        <img src="/images/CamisaDestaque.png" alt="produto" className="imgProduto"/>
                        <p className="anuncioProduto">Conheça a nova camisa do Morro do Filó</p>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
                <div className="produto">
                    <div className="titulo">
                        <img src="/images/TenisDestaque.png" alt="produto" className="imgProduto"/>
                        <p className="anuncioProduto">Conheça o novo tênis da Vila França</p>
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