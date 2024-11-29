// CSS
import "./App.css";

// Hooks
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

// URL API
const urlApi = import.meta.env.VITE_API_URL;

// Components
import Loading from "./components/Loading";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const { loading, data, httpConfig } = useFetch(urlApi);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price: +price,
    };

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  const deleteData = (product_id) => {
    httpConfig(product_id, "DELETE");
  };

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <h2>Requisições HTTP</h2>
        {data.map((product) => (
          <div key={product.id}>
            <div className="product">
              <div>
                <strong>{product.name}: </strong>
                <span>R$ {product.price}</span>
              </div>

              <div className="delete" onClick={() => deleteData(product.id)}>
                X
              </div>
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <span>Preço: </span>
            <input
              type="text"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
          <button>Adicionar</button>
        </form>
      </div>
    </>
  );
}

export default App;
