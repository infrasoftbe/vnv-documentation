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
          id: "rest/session/get-all-session",
          label: "getAllSession",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/get-one-session",
          label: "getOneSession",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
