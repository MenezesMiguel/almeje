import React from "react"
import "./Bio.css";

function Bio(){
    return (
        <div className="baseBio">
            <h1>Quem nós somos</h1>
            <div className="bioBaixo">
                <div className="foto">
                    <img src={"/images/Quem_somos.jpg"} alt="Quem somos"></img>
                </div>
                <div className="textos">
                    <div>
                    <h1>Sucessos dos Parceiros</h1>
                    <text>Somos uma empresa que tem como principal objetivo dar visibilidade e empoderar o trabalho feito nas periferias. Para isso, construimos diversas parcerias com comunidades carentes, nas quais capacitamos  famílias para trabalharem com artigos esportivos.</text>
                    </div>
                    <div>
                    <h1>De onde Viemos</h1>
                    <text>De um grupo de estudantes em um desafio na faculdade surgiu uma paixão e um modelo de negócio que não para de crescer. Somos um grupo diverso de alunos da UFMG, apaixonados por esportes e que entendeu que é possível mudar a realidade das pessoas através dele.</text>
                    </div>
                </div>
            </div>
            <div>
                <h1>comunidades</h1>
                <div className="serra">
                    <div>
                    <div>
                        <h1>Serra</h1>
                    </div>
                    <img src={"/images/Serra.jpeg"} alt="Serra"></img>
                    </div>  
                </div>
                <div className="Rocinha">
                <div>
                    <div>
                        <h1>Rocinha</h1>
                    </div>
                    <img src={"/images/Rocinha.jpg"} alt="Rocinha"></img>
                    </div>
                    
                </div>
                <div className="Heliópolis">
                <div>
                    <div>
                        <h1>Heliópolis</h1>
                    </div>
                    <img src={"/images/Heliópolis.jpg"} alt="Heliópolis"></img>
                    </div>
                    
                </div>
            </div>
        </div>
    
    );
}

export default Bio;