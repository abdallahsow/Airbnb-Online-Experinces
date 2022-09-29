import Navbar from "./components/Navbar";
import Pictures from "./components/Pictures";
import Advertisement from "./components/Advertisement";
import Card from "./components/Card";
import data from "./components/data";
import "./App.css";

const App = () => (
  <main className="app">
    <Navbar />
    <div className="experiences">
      <Pictures />
      <Advertisement />
      <div className="cards-data">
        {data.map(item => (
          <Card
            key={item.id}
            {... item}
          />
        ))}
      </div>
    </div>
  </main>
);

export default App;
