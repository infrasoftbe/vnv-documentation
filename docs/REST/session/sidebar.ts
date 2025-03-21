import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rest/session/infrasoft-vnv-proxy-server",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "rest/session/project-structures-get-all-structures",
          label: "Project.Structures.getAllStructures",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-create-one-structure",
          label: "Project.Structures.createOneStructure",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-get-one-structure",
          label: "Project.Structures.getOneStructure",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-update-one-structure",
          label: "Project.Structures.updateOneStructure",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-delete-one-structure",
          label: "Project.Structures.deleteOneStructure",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-get-all-structure-childs",
          label: "Project.Structures.getAllStructureChilds",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-create-one-structure-child",
          label: "Project.Structures.createOneStructureChild",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-update-one-structure-child",
          label: "Project.Structures.updateOneStructureChild",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-delete-one-structure-child",
          label: "Project.Structures.deleteOneStructureChild",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-get-one-structure-child",
          label: "Project.Structures.getOneStructureChild",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-structures-export-one-structure",
          label: "Project.Structures.exportOneStructure",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/sessions-get-all-sessions",
          label: "Sessions.getAllSessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/sessions-create-one-session",
          label: "Sessions.createOneSession",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/sessions-get-one-session",
          label: "Sessions.getOneSession",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/sessions-update-one-session",
          label: "Sessions.updateOneSession",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/sessions-delete-one-session",
          label: "Sessions.deleteOneSession",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/sessions-pull-one-session-project",
          label: "Sessions.pullOneSessionProject",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-relations-get-all-relations",
          label: "Project.Relations.getAllRelations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-relations-create-one-relation",
          label: "Project.Relations.createOneRelation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/ses-project-proj-relations-get-one-relation",
          label: "SesProjectProj.Relations.getOneRelation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-relations-update-one-relation",
          label: "Project.Relations.updateOneRelation",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-relations-delete-one-relation",
          label: "Project.Relations.deleteOneRelation",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/project-get-project",
          label: "Project.getProject",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-set-project",
          label: "Project.setProject",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-remove-project",
          label: "Project.removeProject",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/project-get-configuration",
          label: "Project.getConfiguration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-export-as-xls",
          label: "Project.exportAsXLS",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-export-as-zip",
          label: "Project.exportAsZIP",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-import-structure-from-xls",
          label: "Project.importStructureFromXLS",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-get-all-nodes",
          label: "Project.Nodes.getAllNodes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-create-one-node",
          label: "Project.Nodes.createOneNode",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-get-one-node",
          label: "Project.Nodes.getOneNode",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-update-one-node",
          label: "Project.Nodes.updateOneNode",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-delete-one-node",
          label: "Project.Nodes.deleteOneNode",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/project-nodes-get-one-node-details",
          label: "Project.Nodes.getOneNodeDetails",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-metadatas-get-all-metadatas",
          label: "Project.Metadatas.getAllMetadatas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-metadatas-create-one-metadata",
          label: "Project.Metadatas.createOneMetadata",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/project-metadatas-get-one-metadata",
          label: "Project.Metadatas.getOneMetadata",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-metadatas-update-one-metadata",
          label: "Project.Metadatas.updateOneMetadata",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "rest/session/project-metadatas-delete-one-metadata",
          label: "Project.Metadatas.deleteOneMetadata",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "rest/session/session-import-project-from-xls",
          label: "Session.importProjectFromXLS",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/session-import-project-from-zip",
          label: "Session.importProjectFromZIP",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rest/session/session-get-all-files",
          label: "Session.getAllFiles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/session-get-one-file",
          label: "Session.getOneFile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/session-download-one-file",
          label: "Session.downloadOneFile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "rest/session/project-commit-project",
          label: "Project.commitProject",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
