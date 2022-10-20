import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState();

  const getName = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  useEffect(() => {
    getName();
  }, []);

  return <div>My name is {userName}</div>;
}

export default App;
