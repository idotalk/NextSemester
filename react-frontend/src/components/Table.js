import React, { useMemo, useState,useEffect } from "react";
import axios from "axios";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from "react-table";
import { FaFilter, FaSort, FaSortUp, FaSortDown } from "react-icons/fa"; // Import the sorting and filter icons
import "./Table.css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const TWO_HUNDRED_MS = 200;

// Global Filter Component
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, TWO_HUNDRED_MS);

  return (
    <input
      className="search_input"
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`חפש שם קורס או מספר קורס`}
    />
  );
}

// Icon-Based Filter Component
const IconFilter = ({
  column: { filterValue, setFilter, preFilteredRows },
}) => {
  const [showFilter, setShowFilter] = useState(false);

  const options = useMemo(() => {
    const optionsSet = new Set();
    preFilteredRows.forEach((row) => {
      optionsSet.add(row.values.ctype);
    });
    return [...optionsSet];
  }, [preFilteredRows]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaFilter
        onClick={() => setShowFilter(!showFilter)}
        style={{ cursor: "pointer" }}
      />
      {showFilter && (
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <select
            value={filterValue || ""}
            onChange={(e) => {
              setFilter(e.target.value || undefined);
              setShowFilter(false);
            }}
          >
            <option value="">הכל</option>
            {options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

// Main Table Component
const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const RestfulApiUrl = process.env.REACT_APP_BACKURL;

  useEffect(() => {
    // Fetch data from Flask backend
    axios
      .get(RestfulApiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const columns = useMemo(
    () => [
      { Header: "מס' קורס", accessor: "course_id" },
      { Header: "שם הקורס", accessor: "course_name" },
      { Header: 'נק"ז', accessor: "points" },
      {
        Header: "סיווג",
        accessor: "ctype",
        disableSortBy: true,
        Filter: IconFilter,
        filter: "includes",
      },
      {
        Header: "ממוצע 3 סמסטרים",
        accessor: "avg3",
        Cell: (obj) => Number(obj.value).toFixed(2),
      },
      {
        Header: "ממוצע 5 סמסטרים",
        accessor: "avg5",
        Cell: (obj) => Number(obj.value).toFixed(2),
      },
      {
        Header: "ממוצע 10 סמסטרים",
        accessor: "avg10",
        Cell: (obj) => Number(obj.value).toFixed(2),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div dir="rtl" className="table-container">
      <header className="mobile_wrap">
        <div className="navi-btns">
          <span className="filter">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </span>
          <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
            קורסים בעמוד: &nbsp;
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              style={{ display: "inline-block", width: "45px", height: "20px" }}
            >
              {[10, 25, 50, 100, 155].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize === 155 ? "הכל" : pageSize}
                </option>
              ))}
              s
            </select>
            &nbsp; &nbsp;
          </span>
          <FaArrowCircleRight
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
            style={{ cursor: "pointer", display: "inline-block" }}
          />
          &nbsp;
          <span>
            עמוד{" "}
            <strong>
              {pageIndex + 1} מתוך {pageOptions.length}
            </strong>
          </span>
          &nbsp;
          <FaArrowCircleLeft
            disabled={!canNextPage}
            onClick={() => nextPage()}
            style={{ cursor: "pointer", display: "inline-block" }}
          />
        </div>
      </header>
      <table dir="rtl" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <span>
                    {!column.disableSortBy &&
                      (column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        <FaSort />
                      ))}
                  </span>

                  {column.canFilter && column.id === "ctype"
                    ? column.render("Filter")
                    : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="notice">הערה: סמסטרי קיץ לא נכנסו לשקלול הממוצע</div>
    </div>
  );
};


export default Table;
