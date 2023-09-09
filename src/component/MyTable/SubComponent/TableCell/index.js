const TableCell = ({ row, col }) => {
  return (
    <>
      <td>
        {col.render ? col.render(row, row[col.keyData]) : row[col.keyData]}
      </td>
    </>
  );
};
export default TableCell;
