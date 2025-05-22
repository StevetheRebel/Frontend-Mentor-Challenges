import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards/Cards";
import axios from "axios";

function App() {
  const [productNames, setProductNames] = useState([]);
  const [productCategory, setProductCategory] = useState([])

  useEffect(() => {
    axios
      .get("./../../../data.json")
      .then(
        res => {
          const names = res.data.map(product => product.name)
          const category = res.data.map(cat => cat.name)
          setProductCategory(category)
          setProductNames(names)
        }
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Cards productNames={productNames} productCategory={productCategory} />
    </div>
  );
}

export default App;
