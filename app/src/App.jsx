import Inputs from "./inputs";
import Datas from "./datas";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:5500/");
        console.log(resp.data);
        setDatas(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="wrap">
        <h1>vasut vonalak</h1>
        <Inputs></Inputs>
        {datas.length ? <Datas datas={datas}></Datas> : <p>no items found</p>}
      </div>
    </>
  );
}

export default App;
