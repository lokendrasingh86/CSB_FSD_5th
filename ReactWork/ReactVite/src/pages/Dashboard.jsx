import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const serverresponse = await fetch("https://fakestoreapi.com/products");
      const jsonResponse = await serverresponse.json();
      console.log(jsonResponse);
      setData(jsonResponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data.length === 0 ? (
        <h2>Data Could Not Fetch</h2>
      ) : (
        <div>
          {data.map((ele) => (
            <div
              key={ele.id}
              style={{
                display: "flex",
                border: "1px solid red",
                height: "300px",
                width: "400px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <img
                style={{ height: "100px", width: "100px" }}
                src={ele.image}
                alt=""
              />
              <div>
                {ele.title}
                <div>{ele.price}</div>
                <div>{ele.description}</div>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
