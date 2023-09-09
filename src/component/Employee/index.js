import { useEffect, useState } from "react";
import MyTable from "../MyTable";
import DeleteStudent from "../../modals/DeleteStudent";
import UpdateStudent from "../../modals/UpdateStudent";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Employee = () => {
  const myData = [
    {
      id: 1,
      fullName: "Nguyen Van A",
      birthYear: 2000,
      address: "Nha Be",
      gender: 1,
    },
    {
      id: 2,
      fullName: "Nguyen Van B",
      birthYear: 2001,
      address: "Nha Be",
      gender: 1,
    },
    {
      id: 3,
      fullName: "Nguyen Van C",
      birthYear: 1999,
      address: "Nha Be",
      gender: 2,
    },
    {
      id: 4,
      fullName: "Nguyen Van D",
      birthYear: 1992,
      address: "Nha Be",
      gender: 2,
    },
    {
      id: 5,
      fullName: "Nguyen Van E",
      birthYear: 1997,
      address: "Nha Be",
      gender: 1,
    },
  ];

  const columns = [
    {
      title: "ID",
      keyData: "id",
      sortable: true,
    },
    {
      title: "FullName",
      keyData: "fullName",
      sortable: true,
      render: function (_, value) {
        return <b>{value}</b>;
      },
    },
    {
      title: "BirthYear",
      keyData: "birthYear",
      sortable: false,
      render: function (_, value) {
        const yearNow = new Date().getFullYear();
        return <span>{yearNow - value}</span>;
      },
    },
    {
      title: "Address",
      keyData: "address",
      sortable: false,
    },
    {
      title: "Sex",
      keyData: "gender",
      sortable: false,
      render: function (_, value) {
        return value === 1 ? (
          <div style={{ color: "#009879" }}>Nam</div>
        ) : (
          <div style={{ color: "#8f00ff" }}>Nữ</div>
        );
      },
    },
    {
      title: "Operation",
      keyData: "oper",
      sortable: false,
      render: function (row, value, index) {
        console.log("Emoployeee----->", row);
        return (
          <>
            <div className="listBtn">
              <UpdateStudent btnEditStudent={btnEditStudent} row={row} />
              <DeleteStudent btnDeleteStudent={btnDeleteStudent} row={row} />
            </div>
          </>
        );
      },
    },
  ];

  const [listStudent, setListStudent] = useState(myData);
  const [clickSort, setClickSort] = useState("asc");

  const btnAddStudent = (obj) => {
    const list = [...listStudent];

    setListStudent([...list, obj]);
  };

  const btnDeleteStudent = (id) => {
    const list = [...listStudent];
    setListStudent(list.filter((item) => item.id !== id));
    // list.splice(index, 1);
    // setListStudent(list);
  };

  const btnEditStudent = (studentEdit) => {
    const list = [...listStudent];
    const listNew = list.map(
      (item) => (item = item.id === studentEdit.id ? studentEdit : item)
    );
    setListStudent(listNew);
  };

  const btnSortStudent = (column, order) => {
    const list = [...listStudent];
    if (column) {
      const listSort = list.sort((a, b) => {
        return (
          a[column].toString().localeCompare(b[column].toString(), "vi") *
          (order === "asc" ? 1 : -1)
        );
      });

      setListStudent(listSort);
      return;
    }
    setListStudent(list);
  };

  return (
    <>
      <MyTable
        btnAddStudent={btnAddStudent}
        data={listStudent}
        columns={columns}
        btnSortStudent={btnSortStudent}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};
export default Employee;
