import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  handleNameChange,
  handlePriceChange,
  handleCategoryChange,
  addProduct,
  handleIsEditing,
  updateProduct,
} from "../../store";
import { useState } from "react";

function Form() {
  const [isName, setIsName] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isCategory, setIsCategory] = useState(false);

  const dispatch = useDispatch();

  const { name, price, category, isEditing, editID } = useSelector(
    (state) => state.form
  );

  const handleCancel = (e) => {
    e.preventDefault();

    dispatch(handleNameChange(""));
    dispatch(handlePriceChange(""));
    dispatch(handleCategoryChange(""));

    dispatch(handleIsEditing(false));

    dispatch(closeModal());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name &&
      price &&
      +price > 0 &&
      category &&
      category !== "-1" &&
      !isEditing
    ) {
      dispatch(
        addProduct({
          name,
          price,
          category,
        })
      );

      dispatch(handleNameChange(""));
      dispatch(handlePriceChange(""));
      dispatch(handleCategoryChange(""));

      dispatch(closeModal());
    } else if (
      name &&
      price &&
      +price > 0 &&
      category &&
      category !== "-1" &&
      isEditing
    ) {
      dispatch(
        updateProduct({
          id: editID,
          name,
          price,
          category,
        })
      );

      dispatch(handleNameChange(""));
      dispatch(handlePriceChange(""));
      dispatch(handleCategoryChange(""));

      dispatch(handleIsEditing(false));

      dispatch(closeModal());
    } else {
      setIsName(true);
      setIsPrice(true);
      setIsCategory(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className=" form-label">Name</label>
        <input
          className="form-control mt-2"
          type="text"
          name="name"
          placeholder="product Name"
          value={name}
          onChange={(e) => dispatch(handleNameChange(e.target.value))}
        />
        {isName && !name && (
          <span className="text-danger">Product Name required</span>
        )}
      </div>
      <div className="form-group mb-3">
        <label className=" form-label">Price</label>
        <input
          className="form-control mt-2"
          type="number"
          name="price"
          placeholder="product price"
          value={price}
          onChange={(e) => dispatch(handlePriceChange(e.target.value))}
        />
        {isPrice && !price && (
          <span className="text-danger">Product Price required</span>
        )}
      </div>
      <div className="form-group">
        <label className=" form-label">Category</label>
        <select
          className="form-select form-select-sm"
          name="category"
          onChange={(e) => dispatch(handleCategoryChange(e.target.value))}
          value={category}
        >
          <option value="-1"></option>
          <option value="mobiles">Mobiles</option>
          <option value="laptops">Laptops</option>
          <option value="tv">TV&apos;s</option>
        </select>
        {isCategory && (!category || category === "-1") && (
          <span className="text-danger">Product Category required</span>
        )}
      </div>
      <button className="btn btn-primary">Send</button>
      <button className="btn btn-danger" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default Form;
