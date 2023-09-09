import TableCell from "../TableCell";

const TableRow = ({ data, columns }) => {
  return (
    <>
      {data.map((row, index) => {
        return (
          <tr key={index}>
            {columns.map((col, index) => {
              return <TableCell key={index} row={row} col={col} />;
            })}
          </tr>
        );
      })}
    </>
  );
};
export default TableRow;
