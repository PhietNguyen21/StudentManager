import CreateStudent from "../../modals/CreateStudent";
import TableHead from "./SubComponent/TableHead";
import TableRow from "./SubComponent/TableRow";
import "./style.css";
const MyTable = ({ data, columns, btnAddStudent, btnSortStudent }) => {
  return (
    <div
      className="
    divTable"
    >
      <h1>MANAGER STUDENT</h1>
      <CreateStudent data={data} btnAddStudent={btnAddStudent} />
      <table className="styled-table">
        <thead className="TbHead">
          <TableHead columns={columns} btnSortStudent={btnSortStudent} />
        </thead>
        <tbody>
          <TableRow data={data} columns={columns} />
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
