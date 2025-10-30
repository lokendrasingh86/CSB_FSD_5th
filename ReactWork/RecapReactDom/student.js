const parent = document.getElementById("parent");
//console.log(parent);
const Root = ReactDOM.createRoot(parent);

//const h2 = React.createElement("h2",{style:{color:"browm",backgroundColor:"blue"}},"Hello");
const img = <img src="https://picsum.photos/200/200"></img>;
const myname = "Lokendra Singh";
const Branch = "Computer Science";
const section = "B";
const college = "ABES Engineering College";

// const wrapper = React.createElement("div",{style:{backgroundColor:"grey" , width:"19%"}}, img,myname,Branch,section,college)
const container = (
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #e0e0e0",
      padding: "20px",
      margin: "20px auto",
      maxWidth: "300px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
  >
    {img}
    <div style={{ marginTop: "15px", fontSize: "16px", color: "#333" }}>
      <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
        Name: {myname}
      </div>
      <div style={{ marginBottom: "8px" }}>Branch: {Branch}</div>
      <div style={{ marginBottom: "8px" }}>Section: {section}</div>
      <div style={{ marginBottom: "8px" }}>College: {college}</div>
    </div>
  </div>
);
Root.render(container);
