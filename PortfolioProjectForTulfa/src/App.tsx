// import styles from "./App.module.scss";
import { Introducing } from "./components/Introducing/Introducing";
import { ScrollVideo } from "./components/ScrollVideo/ScrollVideo";

function App() {
  return (
    <>
      <main>
          <ScrollVideo />
          <Introducing />
      </main>
    </>
  );
}

export default App;
