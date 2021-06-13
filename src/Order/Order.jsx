const Orden = ({ pedido, setPedido, setOrdenLista }) => {
  const addPepinilloHandler = (event) => {
    console.log(event);
    setPedido((ordenViejo) => ({
      ...ordenViejo,
      pepinillo: event.target.value,
    }));
  };
  const addLechugaHandler = (event) => {
    setPedido((ordenViejo) => ({
      ...ordenViejo,
      lechuga: event.target.value,
    }));
  };
  const addTomateHandler = (event) => {
    setPedido((ordenViejo) => ({
      ...ordenViejo,
      tomate: event.target.value,
    }));
  };
  const addSalsasHandler = (event) => {
    setPedido((ordenViejo) => ({
      ...ordenViejo,
      salsas: event.target.value,
    }));
  };
  const addTortaHandler = (event) => {
    setPedido((ordenViejo) => ({ ...ordenViejo, torta: event.target.value }));
  };
  const addQuesoHandler = (event) => {
    setPedido((ordenViejo) => ({ ...ordenViejo, queso: event.target.value }));
  };
  const validateOrden = (event) => {
    const pepinilloSi = document.getElementById("pepinillo-si");
    const pepinilloNo = document.getElementById("pepinillo-no");
    const lechugaSi = document.getElementById("lechuga-si");
    const lechugaNo = document.getElementById("lechuga-no");
    const tomateSi = document.getElementById("tomate-si");
    const tomateNo = document.getElementById("tomate-no");
    const salsasSi = document.getElementById("salsas-si");
    const salsasNo = document.getElementById("salsas-no");
    const torta = document.getElementById("torta");
    const queso = document.getElementById("queso");
    if (!pepinilloSi.checked && !pepinilloNo.checked) {
      console.log("pepinillos");
      return false;
    }
    if (!lechugaSi.checked && !lechugaNo.checked) {
      console.log("lechuga");

      return false;
    }
    if (!tomateSi.checked && !tomateNo.checked) {
      console.log("tomate");

      return false;
    }
    if (!salsasSi.checked && !salsasNo.checked) {
      console.log("salsas");

      return false;
    }
    if (torta.value === "" || torta.value >3 || torta.value<1) {
      console.log("torta");

      return false;
    }
    if (queso.value === ""|| torta.value >3 || torta.value<0) {
      console.log("queso");

      return false;
    }
    return true;
  };
  return (
    <div>
      <div>
        <h1>Hamburguesas</h1>
        <h2>Arma tu propia Hamburguesa</h2>
        <h2>Elije tus Ingredientes</h2>
        <h3>Pepinillo</h3>
        <input
          id="pepinillo-si"
          type="radio"
          name="pepinillo"
          value={true}
          onChange={addPepinilloHandler}
        />
        <label>Si</label>
        <input
          id="pepinillo-no"
          type="radio"
          name="pepinillo"
          value={false}
          onChange={addPepinilloHandler}
        />
        <label>No</label>
        <br />
        <h3>Lechuga</h3>
        <input
          id="lechuga-no"
          type="radio"
          name="lechuga"
          value={true}
          onChange={addLechugaHandler}
        />
        <label>Si</label>
        <input
          id="lechuga-si"
          type="radio"
          name="lechuga"
          value={false}
          onChange={addLechugaHandler}
        />
        <label>No</label>
        <br />
        <h3>Tomate</h3>
        <input
          id="tomate-no"
          type="radio"
          name="tomate"
          value={true}
          onChange={addTomateHandler}
        />
        <label>Si</label>
        <input
          id="tomate-si"
          type="radio"
          name="tomate"
          value={false}
          onChange={addTomateHandler}
        />
        <label>No</label>
        <br />
        <h3>Salsas</h3>
        <input
          id="salsas-no"
          type="radio"
          name="salsas"
          value={true}
          onChange={addSalsasHandler}
        />
        <label>Si</label>
        <input
          id="salsas-si"
          type="radio"
          name="salsas"
          value={false}
          onChange={addSalsasHandler}
        />
        <label>No</label>
        <br />
        <h3>Torta</h3>
        <label>Cant</label>
        <input
          id="torta"
          type="number"
          name="torta"
          onChange={addTortaHandler}
          min={1}
          max={3}
        />
        <label>Max 3</label>
        <br />
        <h3>Queso</h3>
        <label>Cant</label>
        <input
          id="queso"
          type="number"
          name="queso"
          onChange={addQuesoHandler}
          min={0}
          max={3}
        />
        <label>Max 3</label>
        <br />
        <input
          //   disabled={validateOrden()?true:false}
          type="button"
          value="Preparar"
          onClick={() => {
            if (validateOrden()) {
              setOrdenLista(true);
            } else {
              alert("Falta seleccionar Ingredientes");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Orden;
