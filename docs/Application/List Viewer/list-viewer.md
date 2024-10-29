# Documentation for `ListViewer3` Component

The `ListViewer3` component is a customizable table built with the PatternFly library. It accepts a data configuration (`tableData`) as a prop to display a table with dynamic columns, actions, and specific buttons within certain columns. This table is designed to be used within a scrollable container.

---

### **Component**: `ListViewer3`

The `ListViewer3` component is a customizable table that uses data passed in the `tableData` prop to display columns, rows, and action buttons. It includes options for general actions, column-specific actions, and customizable column widths. 

#### **Props**
- **tableData**: An object of type `TableData` defining the columns, rows, actions, and display options for each table column.

#### **Structure of `tableData`**

- **columns** (`{ [key: string]: Column }`): Defines the table columns, with each column having a unique key.
  - **title** (`string`): The display title of the column.
  - **width** (`number`): The width of the column as a percentage.

- **rows** (`Array<{ [key: string]: string | JSX.Element | null }>`): A list of data objects where each object represents a row in the table. Each key in the row object should match one of the keys defined in `columns`.

- **hasActions** (`boolean`): If `true`, an "Actions" column is added to display action buttons for each row.

- **actions** (`Array<(row: RowData) => JSX.Element>`): A list of action functions to generate buttons displayed in the "Actions" column.

- **actionInColumn** (`{ columnKey: string, action: (row: RowData) => JSX.Element }`): Adds a specific button in a selected column, using `columnKey` to target the column and `action` to specify the button component.

#### **`ListViewer3` Component**

```typescript
import React from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemProps,
  Button,
} from "@patternfly/react-core";
import {
  Table,
  Caption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ActionsColumn,
  OuterScrollContainer,
  InnerScrollContainer,
} from "@patternfly/react-table";

interface ListViewerDataProps {
  tableData: TableData;
}

export const ListViewer3: React.FC<ListViewerDataProps> = ({ tableData }) => {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "16px 16px 16px 16px",
          height: "100vh",
        }}
      >
        <div style={{ height: "80%" }}>
          <OuterScrollContainer>
            <InnerScrollContainer>
              <Table aria-label="Dynamically generated table">
                <Thead>
                  <Tr>
                    {Object.entries(tableData.columns).map(
                      ([colKey, colProps]) => (
                        <Th key={colKey} width={colProps.width}>
                          {colProps.title}
                        </Th>
                      )
                    )}
                    {tableData.hasActions && <Th width={60}>Actions</Th>}
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <Tr key={rowIndex}>
                      {Object.keys(tableData.columns).map((colKey) => (
                        <Td
                          key={colKey}
                          dataLabel={tableData.columns[colKey].title}
                        >
                          {colKey === "name" && row.logo ? row.logo : null}
                          {"  "}
                          {row[colKey as keyof typeof row]}
                          {tableData.actionInColumn &&
                            tableData.actionInColumn.columnKey === colKey && (
                              <span style={{ marginLeft: "8px" }}>
                                {tableData.actionInColumn.action(row)}
                              </span>
                            )}
                        </Td>
                      ))}
                      {tableData.hasActions && (
                        <Td>
                          {tableData.actions?.map((action, actionIndex) => (
                            <React.Fragment key={actionIndex}>
                              {action(row)}
                            </React.Fragment>
                          ))}
                        </Td>
                      )}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </InnerScrollContainer>
          </OuterScrollContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

### Example of `tableData` Object

The example below shows how to configure `tableData` to feed data into the `ListViewer3` component. Columns, rows, actions, and conditional actions within a column are configured in this object.

```typescript
const tableData: TableData = {
  columns: {
    name: { title: "Name", width: 15 },
    mail: { title: "Mail", width: 10 },
    group: { title: "Group", width: 10 },
    project: { title: "Project", width: 10 },
    token: { title: "Token", width: 10 },
    tokenstatus: { title: "Token Status", width: 10 },
    creation: { title: "Creation", width: 10 },
    expiration: { title: "Expiration", width: 10 },
  },
  rows: [
    {
      name: "John Doe",
      mail: "johndoe@example.com",
      group: "Admin",
      project: "Project X",
      token: "123ABC",
      tokenstatus: "Active",
      creation: "2023-01-01",
      expiration: "2023-12-31",
    },
    // Other rows...
  ],
  hasActions: true,
  actions: [
    (row) => (
      <Button
        variant="secondary"
        ouiaId="Secondary"
        style={{ marginRight: "4px" }}
        onClick={() => alert(`Edit ${row.name}`)}
      >
        Edit
      </Button>
    ),
    (row) => (
      <Button
        variant="tertiary"
        ouiaId="Tertiary"
        style={{ marginRight: "4px" }}
        onClick={() => alert(`Activate ${row.name}`)}
      >
        Activate
      </Button>
    ),
    (row) => (
      <Button
        variant="danger"
        ouiaId="Danger"
        onClick={() => alert(`Deleting ${row.name}`)}
      >
        Delete
      </Button>
    ),
  ],
  actionInColumn: {
    columnKey: "tokenstatus",
    action: (row) => (
      <ActionsColumn
        onClick={() => alert(`Action for ${row.tokenstatus}`)}
        items={[
          { title: "Revoke", onClick: () => alert(`Revoke ${row.token}`) },
          { title: "Renew", onClick: () => alert(`Renew ${row.token}`) },
        ]}
      />
    ),
  },
};
