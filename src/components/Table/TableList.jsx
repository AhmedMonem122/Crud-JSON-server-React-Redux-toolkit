import TableItem from "./TableItem";

function TableList({ ...product }) {
  return <TableItem {...product} />;
}

export default TableList;
