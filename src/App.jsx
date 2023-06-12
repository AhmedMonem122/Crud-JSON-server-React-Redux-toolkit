import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import ModalComponent from "./components/Modal/ModalComponent";
import Table from "./components/Table/Table";

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="table-width my-5 w-75 mx-auto">
      <div className="container">
        <Header />
        <Table />
        {isOpen && <ModalComponent />}
      </div>
    </div>
  );
}

export default App;
