import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) {
          throw Error("Did not get data");
        }
        const data = await response.json();
        console.log(data)
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <List items={items}/>
    </div>
  );
}

export default App;
