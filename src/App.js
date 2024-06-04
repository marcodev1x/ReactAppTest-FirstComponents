import "./App.css";
import Button from "./components/Button";
import React from "react";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <div className="topPage">
        <div className="text">
          <img
            alt="Teste"
            className="imgBurst"
            src="https://blog.superprofessor.com.br/wp-content/uploads/2022/08/Asset-5.png"
            width={200}
          />
          <h1>Super Professor</h1>
          <p>O maior banco de questões do Brasil!</p>
          <div className="buttonSaperator">
            <Button text="Ver planos" />
          </div>
        </div>
      </div>
      <div className="centerPromotion">
        <h1>Get started for as little as</h1>
        <h2>$7.99 PER SERVING</h2>
        <p>
          With high-quality ingredients packed into every box, these delicious
          recipes deliver on value. If you do the math, making these recipes is
          cheaper with us than doing it on your own.
        </p>

        <Button text="Ver planos" />
        <div className="alerts">
          <div className="textAlerts">
            <h3>Compre por isso!</h3>
            <p>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem
            </p>
          </div>
          <div className="textAlerts">
            <h3>Compre por isso!</h3>
            <p>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem
            </p>
          </div>
          <div className="textAlerts">
            <h3>Compre por isso!</h3>
            <p>
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem
            </p>
          </div>
        </div>
      </div>
      <div class="finalAlertx">
        <div className="finalAlert">
          <Info title="Teste titulo" value="Teste" />
        </div>
        <div className="finalAlert">
          <Info title="Teste titulo" value="Teste" />
        </div>
        <div className="finalAlert">
          <Info title="Teste titulo" value="Teste" />
        </div>
        <div className="finalAlert">
          <Info title="Teste titulo" value="Teste" />
        </div>
        <div className="finalAlert">
          <Info title="Teste titulo" value="Teste" />
        </div>
      </div>
    </div>
  );
}

export default App;
