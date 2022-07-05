import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));
let user = "Anti";

const Welcome = (props) => {
  return(
    <div>
      <h1>Selamat datang {props.user}</h1>
    </div>
  );
}

const App = () => {
  if (user === ""){
    return <button>Login</button>;
  }
  else{
    return <Welcome user = {user}/>;
  }
}

root.render(<App />);