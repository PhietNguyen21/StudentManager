import { useState } from "react";
import { ArrowDown, ArrowUp } from "iconsax-react";
const TableHead = ({ columns, btnSortStudent }) => {
  const [field, setField] = useState(null);
  const [order, setOrder] = useState("asc");

  const handleClick = (keyData) => {
    const newOrder = keyData === field && order === "asc" ? "desc" : "asc";

    setField(keyData);
    setOrder(newOrder);
    btnSortStudent(keyData, newOrder);
  };
  return (
    <tr>
      {columns.map((item, index) => (
        <th
          onClick={() => {
            item.sortable && handleClick(item.keyData);
          }}
          key={index}
        >
          {item.title === "FullName" || item.title === "ID" ? (
            <>
              {item.title}
              {field === item.keyData && (
                <span>
                  {order === "asc" ? (
                    <ArrowUp size="16" color="#FF8A65" />
                  ) : (
                    <ArrowDown size="16" color="#FF8A65" />
                  )}
                </span>
              )}
            </>
          ) : (
            item.title
          )}
        </th>
      ))}
    </tr>
  );
};
export default TableHead;
