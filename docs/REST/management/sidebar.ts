import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rest/management/vnv-documentation",
    },
    {
      type: "category",
      label: "Management",
      items: [
        {
          type: "doc",
          id: "rest/management/get-management",
          label: "GetManagement",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
