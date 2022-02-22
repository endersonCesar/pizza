import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Pizza from "../../Logo/pizza.png";
import { Link } from "react-router-dom";
export default function Home() {

  return (
    <Container>
      <Row xs="12">
        <Col sm={8} md={8} lg={8} style={{ padding: "30px" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "600" }}>
            Peça a sua Pizza
          </h1>
          <Col sm={8} md={8} lg={8} style={{ marginTop: "20%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link 
   
                class="btn btn-light"
                style={{
                  fontSize: "30px",
                }}
                to="/MontarPedido"
              >
                Montar pedido
              </Link >
            </div>
            <div>
              <hr></hr>
            </div>
          </Col>
          <Col sm={8} md={8} lg={8} style={{ marginTop: "10%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                class="btn btn-light"
                style={{
                  fontSize: "30px",
                }}
              >
                Pedir pizza do dia
              </button>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
              <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                marguerita
              </h1>
              <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                tamanho médio
              </h1>
              <h1 style={{ display: "flex", justifyContent: "flex-end" }}>
                massa fina
              </h1>
            </div>
          </Col>
        </Col>
        <Col sm={4} md={4} lg={4}>
          <img src={Pizza} alt="Pizza" style={{ height: "70%" }}></img>
        </Col>
      </Row>
    </Container>
  );
}
