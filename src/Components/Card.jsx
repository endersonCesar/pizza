import { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
export default function Carde({ Imagem, Igrediente, Nome, preco,setMassa,setTamano,setValor,setPizza}) {
  const [mudaCor, setMudaCor] = useState(false);

  const escolher = (event) => {
    setPizza(event.id)
    setValor(event.value)
    setMudaCor(!mudaCor);
  };
  return (
    <div
      className="card carde"
      style={
        mudaCor === false
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#D3D3D3" }
      }
      id={Nome}
    >
      <div className="card-body">
        <Row className="justify-content-between align-items-center">
          <Col sm={3} md={3} lg={3}>
            <img
              src={Imagem}
              alt="Pizza"
              style={{ height: "110px", width: "110px" }}
            ></img>
          </Col>

          <Col sm={9} md={9} lg={9}>
            <Row className="justify-content-between align-items-center flex-column">
              <Col sm={12} md={12} lg={12} style={{ textAlign: "center" }}>
                <Row xs="12">
                  <Col sm={12} md={12} lg={12} l>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {Nome}
                    </span>
                  </Col>
                  <Col sm={9} md={9} lg={9} l>
                    <hr style={{ marginBottom: "20px", width: "22vw" }}></hr>
                  </Col>

                  <Col sm={3} md={3} lg={3} l>
                    <span>R$ {preco}</span>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} md={12} lg={12} style={{ textAlign: "center" }}>
                <span>{Igrediente}</span>
              </Col>
              <Col sm={12} md={12} lg={12}>
                <div
                  className="form-check"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={preco}
                    id={Nome}
                    onClick={(e) => escolher(e.target)}
                  ></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Escolher
                  </label>
                </div>
              </Col>

              {mudaCor === true && (
                <>
                  <Col sm={12} md={12} lg={12}>
                    <span>Tipo da massa</span>
                  </Col>
                  <Col sm={12} md={12} lg={12} style={{ display: "flex" }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Massa"
                        id="Massa Grossa"
                        value={'Massa Grossa'}
                        onClick={(e) => setMassa(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Grossa
                      </label>
                    </div>
                    <div className="form-check" style={{marginLeft:'10px'}}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Massa"
                        value={'Massa Média'}
                        id={'Massa Média'}
                        onClick={(e) => setMassa(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                      Média
                      </label>
                    </div>


                    <div className="form-check" style={{marginLeft:'10px'}}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Massa"
                        value={'Massa Fina'}
                        id={'Massa Fina'}
                        onClick={(e) => setMassa(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                      Fina
                      </label>
                    </div>
                  </Col>
                  <hr></hr>
                 <Col sm={12} md={12} lg={12}>
                    <span>Tamanho da Pizza</span>
                  </Col>

                  <Col sm={12} md={12} lg={12} style={{display:'flex'}}>
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tamanho"
                        id="Grande"
                        value={'Grande'}
                        onClick={(e) => setTamano(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Grande
                      </label>
                    </div>
                    <div className="form-check" style={{marginLeft:'10px'}}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tamanho"
                        value={'Média'}
                        id={'Média'}
                        onClick={(e) => setTamano(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                      Média
                      </label>
                    </div>


                    <div className="form-check" style={{marginLeft:'10px'}}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tamanho"
                        value={'Fina'}
                        id={'Fina'}
                        onClick={(e) => setTamano(e.target.value)}
                      ></input>
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                      Pequena
                      </label>
                    </div>
                  </Col> 
                </>
              )}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
