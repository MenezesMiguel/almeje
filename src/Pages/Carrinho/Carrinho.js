import React, { useState } from "react";
import "./Carrinho.css";
import { IconContext } from "react-icons/lib";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
       
export default function Carrinho() {
    const [quantity1, setQuantity1] = useState(0);
    const preco1 = 40;
    const [quantity2, setQuantity2] = useState(0);
    const preco2 = 60;
    const [quantity3, setQuantity3] = useState(0);
    const preco3 = 190;
    const [total, setTotal] = useState(0);

    function handlePlus1() {
        let qntd = quantity1;
        qntd = qntd + 1;
        setQuantity1(qntd);
        setTotal(total + preco1);
    }
    function handlePlus2() {
        let qntd = quantity2;
        qntd = qntd + 1;
        setQuantity2(qntd);
        setTotal(total + preco2);
    }
    function handlePlus3() {
        let qntd = quantity3;
        qntd = qntd + 1;
        setQuantity3(qntd);
        setTotal(total + preco3);
    }

    function handleMinus1() {
        let qntd = quantity1;
        if(qntd>0){
            qntd = qntd - 1;
            setTotal(total - preco1);
        }
        setQuantity1(qntd);
    }
    function handleMinus2() {
        let qntd = quantity2;
        if(qntd>0){
            qntd = qntd - 1;
            setTotal(total - preco2);
        }
        setQuantity2(qntd);
    }
    function handleMinus3() {
        let qntd = quantity3;
        if(qntd>0){
            qntd = qntd - 1;
            setTotal(total - preco3);
        }
        setQuantity3(qntd);
    }

    return (
        <div className="carrinho">
            <div className="tituloCarrinho">Carrinho</div>
            <div className="produtosCarrinho">
                <img src="/images/CamisaDestaque.png" alt="produto" className="imgProduto"/>
                <div className="anuncioProduto">
                    <div className="tituloProduto">
                        Camisa clássica do Morro do Filó
                    </div>
                    <div className="sobreProduto">
                        <div className="qntdProduto">
                            <div className="qntdIcon" onClick={handleMinus1}>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                            </div>
                            <div className="qntd">{quantity1}</div>
                            <div className="qntdIcon" onClick={handlePlus1}>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="precoProduto">R$40</div> 
                    </div>
                </div>
            </div>
            <div className="produtosCarrinho">
                <img src="/images/short1.jpg" alt="produto" className="imgProduto"/>
                <div className="anuncioProduto">
                    <div className="tituloProduto">
                        Short para treino da Comunidade Helipa
                    </div>
                    <div className="sobreProduto">
                        <div className="qntdProduto">
                            <div className="qntdIcon" onClick={handleMinus2}>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                            </div>
                            <div className="qntd">{quantity2}</div>
                            <div className="qntdIcon" onClick={handlePlus2}>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="precoProduto">R$60</div> 
                    </div>
                </div>
            </div>
            <div className="produtosCarrinho">
                <img src="/images/tenis1.jpg" alt="produto" className="imgProduto"/>
                <div className="anuncioProduto">
                    <div className="tituloProduto">
                        Tenis da Comunidade da Serra
                    </div>
                    <div className="sobreProduto">
                        <div className="qntdProduto">
                            <div className="qntdIcon" onClick={handleMinus3}>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsDashSquare />
                                </IconContext.Provider>
                            </div>
                            <div className="qntd">{quantity3}</div>
                            <div className="qntdIcon" onClick={handlePlus3}>
                                <IconContext.Provider value={{ color: "#343434", size: "26px", className: "bigIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                                <IconContext.Provider value={{ color: "#343434", size: "14px", className: "littleIcon"}}>
                                    <BsPlusSquare />
                                </IconContext.Provider>
                            </div>
                        </div>
                        <div className="precoProduto">R$190</div> 
                    </div>
                </div>
            </div>
            <div className="finalizacao">
                <a className="finalButton" href="home" onClick={()=>alert("Compra realizada com sucesso!!")}>FINALIZAR COMPRA</a>
                <div className="total">Total: R${total}</div>
            </div>
        </div>
    );
}