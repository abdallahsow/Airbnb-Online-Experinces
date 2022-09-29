import data from "./components/data";
import { Navbar, Pictures, Advertisement } from "./components/HeroSection";
import Card from "./components/Card";
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
