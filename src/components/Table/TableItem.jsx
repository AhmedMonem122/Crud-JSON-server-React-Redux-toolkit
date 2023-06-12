import { useDispatch } from "react-redux";
import {
  deleteProduct,
  openModal,
  handleEditID,
  handleNameChange,
  handlePriceChange,
  handleCategoryChange,
  handleIsEditing,
} from "../../store";

function TableItem({ id, name, price, category }) {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(openModal());
    dispatch(handleEditID(id));
    dispatch(handleNameChange(name));
    dispatch(handlePriceChange(price));
    dispatch(handleCategoryChange(category));
    dispatch(handleIsEditing(true));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <button className="btn btn-sm btn-success m-1" onClick={handleUpdate}>
          Update
        </button>
      </td>
      <td>
        <button
          className=" btn btn-sm btn-danger m-1"
          onClick={() => dispatch(deleteProduct(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
