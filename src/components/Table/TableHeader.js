import "./TableHeader.scss";
import { useState } from "react";
import HeaderItem from "./HeaderItem";

const TableHeader = () => {
  const [sortField, setSortField] = useState("Customer Id");

  return (
    <thead className="table-header">
      <tr>
        <HeaderItem
          field="Customer Id"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Name"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Email"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Gender"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Country"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="City"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Street"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Phone"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Total Price"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Currency"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Credit Card Type"
          sortField={sortField}
          setSortField={setSortField}
        />
        <HeaderItem
          field="Credit Card Number"
          sortField={sortField}
          setSortField={setSortField}
        />
      </tr>
    </thead>
  );
};

export default TableHeader;
