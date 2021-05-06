import React from "react";
import SwipeableTextMobileStepper from "../../Components/Carrossel/CarrosselEventos";
import "./Home.css"


function Home(){
    
    return (
        <div className="home">
                <p className="pageTitle">Home</p>
            <SwipeableTextMobileStepper />
            <div className="destaques">
                <div className="produtoDestaque">
                    <div className="tituloDestaque">
                        <img src="/images/CamisaDestaque.png" alt="produto" className="imgproduto"/>
                        <p className="anuncioProduto">Conheça a nova camisa do Morro do Filó</p>
                    </div>
                    <p className="descricao">
                        O tênis foi elaborado pela família do Roberto, na Vila França. 
                        A produção foi feita por eles e pela família da Jussara, do Adalberto e da Eliana,
                        e passou por testes rigorosos de qualidade e conforto. Vem conhecer mais sobre esse produto e o
                        impacto dele para essas pessoas.
                    </p>
                </div>
                <div className="produtoDestaque">
                    <div className="tituloDestaque">
                        <img src="/images/TenisDestaque.png" alt="produto" className="imgproduto"/>
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
            <div className="promocoes">
            <SwipeableTextMobileStepper />
            </div>
        </div>
    );
}

export default Home;