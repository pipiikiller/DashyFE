import "antd/dist/reset.css";
import "./App.css";
import { AppMenu } from "./Components/Menu";
import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />
      <div
        className="App"
        style={{ display: "flex", flexDirection: "row", flex: 1 }}
      >
        <AppMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
