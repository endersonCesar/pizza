import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useEffect, useState } from "react";
import Pizza from "../../Logo/pizza.png";
import { Link } from "react-router-dom";
import Calabresa from "../../Logo/Calabresa.png";
import Portuguesa from "../../Logo/portuguesa.png";
import "./style.css";
import Carde from "../../Components/Card";

import Swal from "sweetalert2";
export default function PizzaP() {
  const [massa, setMassa] = useState([]);
  const [tamanho, setTamano] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [valor, setValor] = useState([]);
  const [chamaDados, setChamaDados] = useState(1);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    if (valor.length > 0) {
      let valorAux = parseInt(valorTotal, 10) + parseInt(valor, 10);

      setValorTotal(valorAux);
    }
  }, [valor]);

  const pedidoFinalizado = () => {
    Swal.fire(
      "Pedido Finaizado com sucesso",
      "Seu pedido já foi encaminhado para cozinha",
      "success"
    );
  };

  const chamarDados =(valor)=>{
  
    if(valor===2){
      if (pizza.length>0 && tamanho.length>0 && massa.length>0){
         setChamaDados(2)
      }else{
        Swal.fire(
          'Escolha os item: Sabor, tipo da massa e tamanho da pizza para continuar',
          'Verifique todos os itens!',
          'info'
        )
      }
    }else{
      setChamaDados(1)
    }
  }
  return (

    <>
    <nav aria-label="breadcrumb" style={{marginLeft:'40px',marginTop:'20px'}}>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Monte sua Pizza</li>
  </ol>
</nav>
<Container>
      <Row xs="12">
        <Col sm={6} md={6} lg={6} style={{ padding: "30px" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "600" }}>
          {chamaDados===1?'Monte sua Pizza':'Finalizar Pedido'}
          </h1>
          <Col sm={8} md={8} lg={8} style={{ marginTop: "20%" }}>
            <div className="menu-bar">
              <ul
                className="list-group list-group-flush"
                style={{ fontSize: "24px" }}
              >
                <li
                  className="list-group-item"
                  onClick={() => chamarDados(1)}
                >
                  Sabor
                </li>
                <li
                  className="list-group-item"
                  onClick={() => chamarDados(2)}
                >
                  Dados
                </li>
              </ul>
            </div>
          </Col>
        </Col>
        <Col sm={6} md={6} lg={6} style={{ marginTop: "10vh" }}>
          {chamaDados === 1 ? (
            <Col sm={12} md={12} lg={12}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Carde
                  Imagem={Pizza}
                  Igrediente={"Molho, mussarela, tomate, majericão."}
                  Nome={"Marguerita"}
                  preco={"80,00"}
                  setMassa={setMassa}
                  setTamano={setTamano}
                  setValor={setValor}
                  setPizza={setPizza}
                ></Carde>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Carde
                  Imagem={Calabresa}
                  Igrediente={"Molho, mussarela, calabresa, cebola, orégano."}
                  Nome={"Calabresa"}
                  preco={"70,00"}
                  setMassa={setMassa}
                  setTamano={setTamano}
                  setValor={setValor}
                  setPizza={setPizza}
                ></Carde>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >
                <Carde
                  Imagem={Portuguesa}
                  Igrediente={"Molho, mussarela, presunto, tomate, azeitona"}
                  Nome={"Portuguesa"}
                  preco={"70,00"}
                  setMassa={setMassa}
                  setTamano={setTamano}
                  setValor={setValor}
                  setPizza={setPizza}
                ></Carde>
              </div>
            </Col>
          ) : (
            <>
              <Row style={{ marginTop: "20%" }}>
                <Col sm={12} md={12} lg={12}>
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Nome Completo"
                      className="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)"
                    ></input>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={12} style={{ marginTop: "30px" }}>
                  <div class="input-group">
                    <input
                      type="text"
                      placeholder="Endereço Completo"
                      className="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)"
                    ></input>
                  </div>
                </Col>

                <Col sm={6} md={6} lg={6} style={{ marginTop: "30px" }}>
                  <strong style={{ fontSize: "30px" }}>
                    Preço: 
                   
                  </strong>

                  <strong style={{ fontSize: "30px",marginLeft:'10px' }}>
                  {valorTotal.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                   
                  </strong>
                 
                </Col>

                <Col sm={6} md={6} lg={6} style={{ marginTop: "40px" }}>
                <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
  <label class="form-check-label" for="flexRadioDefault1">
    Dinheiro
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
   Cartão
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
  <label class="form-check-label" for="flexRadioDefault2">
   Pix
  </label>
</div>
                </Col>
                <Col sm={6} md={6} lg={6} style={{ marginTop: "40px" }}>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => pedidoFinalizado()}
                  >
                    Finalizar Pedido
                  </button>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
    </>
  
  );
}
