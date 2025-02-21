import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rest/database/vnv-documentation",
    },
    {
      type: "category",
      label: "Database",
      items: [
        {
          type: "doc",
          id: "rest/database/get-database",
          label: "GetDatabase",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
