import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

function App() {
  const [inputs, setInputs] = useState({});
  const [listUsers, setListUsers] = useState([]);

  console.log(listUsers);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(listUsers);
    setListUsers([...listUsers, inputs]);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={inputs}
          />
        </div>
        <div className="col-12">
          <Table listUsers={listUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
