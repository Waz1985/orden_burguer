import React, { useState } from "react";

import Orden from "./Order/Order";
import OrdenLista from "./OrdenLista/OrdenLista";

function App() {
  const [orden, setOrden] = useState({
    pepinillo: false,
    lechuga: false,
    tomate: false,
    salsas: false,
    torta: 1,
    queso: 0,
  });
 
  const [ordenLista, setOrdenLista] = useState(false);
  return (
    <div>
      {ordenLista? <OrdenLista ordenLista={orden}/> : <Orden pedido={orden} setPedido={setOrden} setOrdenLista={setOrdenLista}/>}
    </div>
  );
}

export default App;
