const OrdenLista = ({ordenLista}) =>{
    return(
        <div>
            <h1>Su Pedido esta listo</h1>
            <h3>Con los siguientes Ingredientes</h3>
            <ul>
            {ordenLista.pepinillo === "true"? <li>Pepinillo</li>: null }
            {ordenLista.lechuga === "true"? <li>Lechuga</li>: null }
            {ordenLista.tomate === "true"? <li>Tomate</li>: null }
            {ordenLista.salsas === "true"? <li>Salsas</li>: null }
            <li>Torta: {ordenLista.torta}</li>
            <li>Queso: {ordenLista.queso}</li>
            </ul>
        </div>
    );
}

export default OrdenLista;