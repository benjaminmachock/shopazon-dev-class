import { Container, Menu } from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            Shopazon
          </Menu.Item>
        </Container>
      </Menu>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
