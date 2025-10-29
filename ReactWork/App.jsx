const parent = document.getElementById("parent");
// console.log(parent)
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement(
//   "h2",
//   { style: { color: "red", backgroundColor: "skyBlue" } },
//   "Welcome To React App"
// );
// const li1 = React.createElement("li", {}, "Java");
// const li2 = React.createElement("li", {}, "Python");
// const li3 = React.createElement("li", {}, "React");
// const ul = React.createElement(
//   "ul",
//   { style: { color: "red", backgroundColor: "pink" } },
//   li1,
//   li2,
//   li3
// );

// const pic = React.createElement("img", {
//   src: "https://picsum.photos/200/200",
//   style: { width: "200px", height: "200px" , borderRadius:"50%"},
// });

// const myname = React.createElement("h2", {}, "Lokendra Singh");

// const add = React.createElement("div",{style:{display:"flex",gap:"25%"}},pic,myname);

// const wrapper = React.createElement("div", {}, h2, add, ul);

const h2 = <h2>Hello Using JSX</h2>;
const li1 = <li>React</li>;
const li2 = <li>Java</li>;
const ul = (
  <ul>
    {li1}
    {li2}
  </ul>
);

const container = (
  <>
    {h2},{ul}
  </>
);
root.render(container);
