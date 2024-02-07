import axios from "axios";

const Datas = ({ datas }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5500/delete/" + id);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAll = async () => {
    try {
      await axios.delete("http://localhost:5500/delete");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="table-wrap">
      {datas.map((item) => {
        return (
          <div key={item.id} className="table-row">
            <div className="border">
              <p>
                honnan:<span>{item.honnan}</span>
              </p>
              <p>
                hova:<span>{item.hova}</span>
              </p>
              <p>
                sebesseg:<span>{item.sebesseg}</span>
              </p>
              <p>
                tavolsag:<span>{item.tavolsag}</span>
              </p>
              <p>
                utido:<span>{(item.utido * 60).toFixed()}</span>
              </p>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={deleteAll}>delete all</button>
    </div>
  );
};
export default Datas;
