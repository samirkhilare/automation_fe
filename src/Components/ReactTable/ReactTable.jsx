import React from "react";
import DataTable, {
  createTheme,
  ExpanderComponentProps,
} from "react-data-table-component";

import { BASE_URL } from "../../services/httpRequest";

const ReactTable = ({ columns, data, pending, handleRowClick }) => {
  createTheme("custom", {
    background: {
      default: "#263043",
    },
  });
  const customeStyle = {
    head: {
      style: {
        color: "white",
        fontWeight: "bold",
        fontSize: "15px",
      },
    },
    rows: {
      style: {
        color: "white",
      },
    },
    pagination: {
      style: {
        color: "white",
        button: {
          background: "white",
          margin: "5px",
          width: "40px",
          height: "40px",
          fontSize: "10px",
        },
      },
    },
  };

  const subColumn = [
    {
      name: "Part Code",
      selector: (row) => row.partCode,
    },
    {
      name: "Part Name",
      selector: (row) => row.partName,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={BASE_URL + "/uploads" + row?.image} // Assuming 'image' contains the URL of the image
          alt="Part Image"
          width={60}
        />
      ),
    },
    {
      name: "Date and Time",
      selector: (row) => row.dateAndTime,
      right: true,
    },
  ];

  return (
    <div>
      <DataTable
        theme="custom"
        pagination
        columns={columns}
        data={data}
        expandableRows
        expandOnRowClicked
        expandableRowsComponent={(row) => {
          console.log("row : ", row.data);
          return (
            <>
              <DataTable
                columns={subColumn}
                data={row?.data?.partsSelection?.filter(
                  (item) => item?.partCode
                )}
                theme="custom"
                customStyles={customeStyle}
              />
            </>
          );
        }}
        customStyles={customeStyle}
        progressPending={pending}
        className="pagination"
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

export default ReactTable;
