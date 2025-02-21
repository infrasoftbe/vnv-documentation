import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rest/session/vnv-documentation",
    },
    {
      type: "category",
      label: "Session",
      items: [
        {
          type: "doc",
          id: "rest/session/get-session",
          label: "GetSession",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
