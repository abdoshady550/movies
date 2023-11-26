import CardsList from "./componant/CardsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./componant/NavBar";
import Container from "react-bootstrap/Container";
import MovieDetiles from "./componant/MovieDetiles";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CardsList />} />
            <Route path="/movie/:id" element={<MovieDetiles />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
