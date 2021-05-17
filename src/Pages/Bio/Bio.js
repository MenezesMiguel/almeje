import React from "react"
import "./Bio.css";


function Bio(){
    return (
        
        <div className="baseBio">
            <div className="QSTitle">
                <h1 className="QSTitle1">QUEM SOMOS</h1> 
            </div>
            <div className="QSBaixo">
                
                    <img className="QSFoto" src={"/images/Equipe.png"} alt="Quem somos"></img>
                
                <div className="QSTextos">
                        {/* <h1 className="titles">Sucessos dos Parceiros</h1> */}
                        <p className="textos">
                            De um grupo de estudantes em um desafio na faculdade surgiu uma paixão 
                            e um modelo de negócio que não para de crescer. Somos um grupo diverso 
                            de alunos da UFMG, apaixonados por esportes e que entendeu que é possível 
                            mudar a realidade das pessoas através dele.<br/>
                            Durante todo esse tempo então nos consolidamos como uma empresa que tem como principal objetivo dar visibilidade 
                            e empoderar o trabalho feito nas periferias. Para isso, construimos 
                            diversas parcerias com comunidades carentes, nas quais capacitamos  
                            famílias para trabalharem com artigos esportivos.
                        </p>
                </div>
            </div>
            <p className="comunidadesTitle">
                COMUNIDADES ABRAÇADAS
            </p>
            
            <div className="comunidadesBase">
                <div className="comunidades">
                    <div className="comunidadesInfo">
                        <p className="comunidadesName">Serra - Belo Horizonte/MG</p>
                        <p className="comunidadesSobre">
                            O Aglomerado da Serra é a maior favela de Minas Gerais,
                            localizada em Belo Horizonte, mais precisamente na zona sul da capital.
                            É classificada como a 3º maior favela do Brasil (atrás apenas da Rocinha,
                            bairro da Zona Sul do Rio de Janeiro, e da Favela do Sol Nascente em Ceilândia no DF)
                            e se divide em oito vilas: Nossa Senhora da Conceição . Nossa Senhora de Fátima,
                            Nossa Senhora Aparecida, Santana do Cafezal, Novo São Lucas, Fazendinha, Chácara,
                            e Marçola. É a maior favela de Minas com 46 mil habitantes na fonte anexa.
                            Embora os dados do BNDES deem conta de 46 mil habitantes,
                            é possível encontrar diferentes apontamentos. O site da Prefeitura de Belo Horizonte (PBH),
                            por exemplo, contém páginas que relatam a população de 34 mil e outras que citam 50 mil
                            moradores.O Aglomerado da Serra possui economia diversificada e em evolução contínua.
                            Uma das áreas mais movimentadas, o cruzamento entre as ruas Bandonion, Nossa Senhora
                            de Fátima, Serenata e São Sebastião, reúne lojas de roupas femininas, padaria, sorveterias,
                            supermercado, mercearias, sacolão, drogarias, salões de beleza, mecânica de motos,
                            consultórios odontológicos, entre outras formas de comércio e prestação de serviço.
                            O local, conhecido como "Volta", tem movimentação intensa de pessoas, carros, motos, ônibus e caminhões.
                        </p>
                    </div>
                    <div className="comunidadesImg">
                        <img className="comunidadesFotos" src={"/images/Serra.jpg"} alt="Serra"></img>
                    </div>  
                </div>
                <div className="comunidades1">
                    <div>
                        <img className="comunidadesFotos" src={"/images/Rocinha.jpg"} alt="Rocinha"></img>
                    </div>
                    <div classname="rocinhaTxt">
                        <p className="comunidadesName">
                            Rocinha - Rio de Janeiro/RJ
                        </p>
                        
                        <p className="comunidadesSobre">
                            A Rocinha é uma favela localizada na Zona Sul do município do Rio de Janeiro,
                            no Brasil. Destaca-se por ser a maior favela do país, contando com cerca de 100
                            mil habitantes. A região passou a ser considerada um bairro e foi delimitada pela
                            Lei Nº 1 995 de 18 de junho de 1993, com alterações nos limites dos bairros da Gávea,
                            Vidigal e São Conrado. O nome advém de uma fazenda, uma "roça" que na década de 1920
                            foi tomada pela expansão da mancha urbana. Em 1927 foi loteada por Castro Guidas & Cia,
                            paralisado pela prefeitura, a Rocinha foi crescendo sem nenhuma regularização dos terrenos.
                            Em 1970, a favela possuía 130 mil habitantes segundo o IBGE. Sendo apelidada como a maior
                            comunidade sul-americana.
                        </p>
                    </div>
                </div>
                <div className="comunidades">
                    <div className="comunidadesInfo">
                        <p className="comunidadesName">
                            Helipa - São Paulo/SP
                        </p>
                        <p className="comunidadesSobre">
                            Heliópolis é um bairro com uma vila de mesmo nome localizado no distrito
                            de Sacomã, na Zona Sul da cidade de São Paulo, no Brasil. Composto por catorze
                            glebas, possui mais de 100.000 habitantes em uma área de quase um milhão de
                            metros quadrados, é destacada por ser a maior favela da cidade.
                            Seus limites são a Avenida Juntas Provisórias e se estende até a divisa
                            com São Caetano do Sul (delimitada pelo rio Tamanduateí) e a Avenida
                            Guido Aliberti. O transporte público não entra em algumas ruas da favela,
                            pois as mesmas são estreitas, então as pessoas se deslocam até as vias
                            principais, como a Estrada das Lágrimas, Avenida Almirante Delamare,
                            Rua Coronel Silva Castro e Rua Cônego Xavier (Hospital Heliópolis),
                            onde estão localizados os pontos de ônibus.Heliópolis também fica próxima
                            à linha verde do metrô (Estação Sacomã) e às principais vias de acesso de
                            São Paulo, como a Rodovia Anchieta e Avenida do Estado. Dista apenas
                            8 km do centro de São Paulo. Esses fatores contribuíram para seu rápido
                            crescimento populacional.
                        </p>
                    </div>
                    <div>
                        <img className="comunidadesFotos"src={"/images/Heliópolis.jpg"} alt="Heliópolis"></img>
                    </div>
                </div>
            </div>

        </div>
    
    );
}

export default Bio;

