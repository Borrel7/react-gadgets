import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (items: string) => {
    console.log(items);
  };

  return (
    <div>
      <Alert children="Borrels for sale" />
      <Button onClick={() => console.log("Clicked")}>Purchase</Button>
    </div>
  );
}

export default App;
