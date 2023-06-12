import { useDispatch } from "react-redux";
import { openModal } from "../../store";

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h2 className="text-primary">Crud Operations</h2>
      <button className="btn btn-primary" onClick={() => dispatch(openModal())}>
        Add Product
      </button>
    </div>
  );
}

export default Header;
