import Hero from "./components/Hero";
import Navigation from "./components/nav";
import { Global } from "./styles/Global";

const App = () => {
  return (
    <>
      <Global />
      <div className="App">
        <Navigation />
        <Hero />
      </div>
    </>
  );
};

export default App;
