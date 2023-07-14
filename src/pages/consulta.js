import React, { useState, useEffect } from "react";
import axios from "axios";

function consulta() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get("https://reqres.in/api/users");
    setData(response.data.data);
    //console.log(response.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p>
          {item.first_name} {item.last_name} <br />
          <img src={item.avatar} />
        </p>
      ))}
    </div>
  );
}

export default consulta;
