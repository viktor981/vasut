import axios from "axios";
import { useState } from "react";

const Inputs = () => {
  const [inputs, setInputs] = useState({
    honnan: "",
    hova: "",
    tavolsag: "",
    sebesseg: "",
    utido: null,
  });

  const postData = async () => {
    try {
      if (Object.values(inputs).includes("")) {
        alert("missing input(s)");
        return;
      } else if (!isFinite(inputs.sebesseg) || !isFinite(inputs.sebesseg)) {
        alert("wrong input");
        return;
      }
      await axios.post("http://localhost:5500/vonatok", inputs);
      setInputs({
        honnan: "",
        hova: "",
        tavolsag: "",
        sebesseg: "",
        utido: "",
      });
      console.log(inputs);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="wrap">
      <form className="">
        <label htmlFor="honnan">honnan</label>
        <input
          value={inputs.honnan}
          type="text"
          id="honnan"
          name="honnan"
          placeholder="honnan"
          onChange={(e) => setInputs({ ...inputs, honnan: e.target.value })}
        ></input>
        <label htmlFor="hova">hova</label>
        <input
          value={inputs.hova}
          type="text"
          id="hova"
          name="hova"
          placeholder="hova"
          onChange={(e) => setInputs({ ...inputs, hova: e.target.value })}
        ></input>
        <label htmlFor="tavolsag">tavolsag</label>
        <input
          value={inputs.tavolsag}
          type="text"
          id="tavolsag"
          name="tavolsag"
          placeholder="tavolsag"
          onChange={(e) => setInputs({ ...inputs, tavolsag: e.target.value })}
        ></input>
        <input
          value={inputs.sebesseg}
          type="text"
          id="honnan"
          name="sebesseg"
          placeholder="sebesseg"
          onChange={(e) => setInputs({ ...inputs, sebesseg: e.target.value })}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            postData();
          }}
        >
          szamol
        </button>
      </form>
    </div>
  );
};
export default Inputs;
