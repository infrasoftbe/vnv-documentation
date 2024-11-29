# ActionButton

`ActionButton` is a React component that displays a list of dynamic buttons based on an array of `ButtonContext` objects. Each button shows an icon (`logo` component), a label, and can handle an `onClick` event.

## Props

### `buttonContext` (type: `ButtonContext[]`)

`buttonContext` is an array of objects containing the information needed to display each button. Each object in the array should have the following properties:

- **label** (`string`): The button's label.
- **logo** (`React.ComponentType<{ color: string; size: number }>`): A React component representing the button's icon.
- **onClick** (`function (event: React.MouseEvent<HTMLLIElement, MouseEvent>)` | `undefined`): A function that is triggered when the user clicks the button. If `onClick` is not provided, the button will be displayed but will have no action on click.

## Example Usage

```tsx
import React from "react";
import { ActionButton } from "./ActionButton";
import { ButtonContext } from "./model";
import { FaHome, FaUser } from "react-icons/fa"; // Example icons from react-icons

const buttonData: ButtonContext[] = [
  {
    label: "Home",
    logo: FaHome,
    onClick: () => alert("Home clicked!"),
  },
  {
    label: "Profile",
    logo: FaUser,
    onClick: () => alert("Profile clicked!"),
  },
  {
    label: "Settings",
    logo: FaCog,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <ActionButton buttonContext={buttonData} />
    </div>
  );
};

export default App;
