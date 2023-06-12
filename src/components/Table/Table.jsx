import { useDispatch, useSelector } from "react-redux";
import TableList from "./TableList";
import { useEffect } from "react";
import { fetchProducts } from "../../store";

function Table() {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <table className="table table-dark table-hover text-center my-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <TableList key={product.id} {...product} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
