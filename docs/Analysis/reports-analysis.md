# Project Reports Needs Analysis

## 1. Expected Reports

### 1.1. Project activities (history, timeline)

- Report is needed in 'regulier overleg' meeting
- Report is needed in meeting with 'leidende ambtenaar'

### 1.2. Project budget/invoicing

- Report is needed in 'regulier overleg' meeting
- Report is needed in internal Infrasoft planning meeting

### 1.3. Project files (missing, present, history, timeline)

- Report is needed in 'regulier overleg' meeting
- Report is needed in meeting with 'leidende ambtenaar'

### 1.4. Project planning (timeline)

- Report is needed in 'regulier overleg' meeting
- Report is needed in internal Infrasoft planning meeting

### 1.5. Project registers (history, timeline, type)

- Report is needed in 'regulier overleg' meeting
- Report is needed in meeting with 'leidende ambtenaar'

### 1.6. Project status

- Report is needed in 'regulier overleg' meeting
- Report is needed in meeting with 'leidende ambtenaar'
- Report is needed in internal Infrasoft planning meeting

---

## 2. Project Validation Report

### 2.1. Purpose

- Actual deliverable for the client (DVW)
- Based on current validation data (until now typed manually)
- Output is currently an Excel table

### 2.2. Report Structure

- The table combines the following items:

  - PROJECT
  - REQUIREMENT
  - TESTCASE
  - TESTCASE_EXECUTION
  - ORDER
  - FILE

- Customer summary is a Word document produced manually, describing the test execution results, highlighting failed test executions and actions to be taken by the project leader. The project validation report is attached to this document.

### 2.3. Example report definition

```json
{
  "id": "",
  "token": "RPT-PRJ-VAL",
  "type": "REPORT",
  "name": "project validation report",
  "meta": {
    "description": "The Project validation report gives the test_execution results within iteration nr the requirements in project",
    "items": [
      { "prj": "PROJECT" },
      { "req": "REQUIREMENT" },
      { "tcas": "TESTCASE" },
      { "tcex": "TESTCASE_EXECUTION" },
      { "ord": "ORDER" },
      { "fil": "FILE" }
    ],
    "query": "MATCH (ord:ORDER)<-[HAS_ORDER]-(prj:PROJECT)-[HAS_REQUIREMENT]->(req:REQUIREMENT)-[HAS_TESTCASE]->(tcas:TESTCASE)-[HAS_TESTCASE_EXECUTION]->(tcex:TESTCASE_EXECUTION)-[HAS_ATTACHMENT]->(fil:FILE) ${where_clause} ${order_clause} RETURN ${fields_clause};",
    "where_params": [
      { "prj.token": "PR2025-004" },
      { "ord.token": "ORD2025-004-001" },
      { "tcex.meta.exec_nr": 1 }
    ],
    "order_params": [
      "req.token"
    ],
    "field_params": [
      { "prj.token": "header describing prj.token" },
      "prj.description",
      "ord.meta.ref_extern",
      "fil.name",
      "req.token",
      "req.meta.description_text",
      "tcas.meta.description_text",
      "tcex.meta.exec_nr",
      "tcex.meta.exec_data",
      "tcex.meta.exec_text",
      "tcex.meta.exec_result",
      "tcex.meta.exec_file_ref"
    ]
  }
}
```

### 2.4. Access Endpoints

- **Report definition:**
  - `GET /reports/:id` (by report id)
  - `GET /reports?n_token=RPT-PRJ-VAL` (by report token)
- **Report generation:**
  - `GET /reports/:id/generate` (same syntax as `GET /db/projects/:id/children`)

### 2.5. Query construction

- Example Cypher query:

```cypher
MATCH (ord:ORDER)<-[HAS_ORDER]-(prj:PROJECT)-[HAS_REQUIREMENT]->(req:REQUIREMENT)-[HAS_TESTCASE]->(tcas:TESTCASE)-[HAS_TESTCASE_EXECUTION]->(tcex:TESTCASE_EXECUTION)
${where_clause}
${order_clause}
RETURN ${fields_clause};
```

- **where_clause**: `WHERE prj.token = 'PR2025-004' AND tcex.meta.exec_nr = '1'`
- **order_clause**: `ORDER BY req.token`
- **fields_clause**: `prj.token, prj.description, ord.meta.ref_extern, req.token, req.meta.description_text, tcas.meta.description_text, tcex.meta.exec_nr, tcex.meta.exec_data, tcex.meta.exec_text, tcex.meta.exec_result`

### 2.6. Response format

- The JSON response contains one or more objects, each containing the selected fields:

```json
{
  "prj.token": "",
  "prj.description": "",
  "ord.meta.ref_extern": "",
  "fil.name": "",
  "req.token": "",
  "req.name": "",
  "req.meta.description_text": "",
  "tcas.meta.description_text": "",
  "tcex.meta.exec_nr": "",
  "tcex.meta.exec_data": "",
  "tcex.meta.exec_text": "",
  "tcex.meta.exec_result": ""
}
```

### 2.7. Excel export

- The selected fields become the Excel column headers.
- Each JSON object becomes a new row in the Excel file.
- The order of the rows is defined by the `order_clause` (e.g. `req.token`).
- The file name, extension (`.xlsx`), headers, rows, and tags are passed in the call.
- The document library where the file will be saved is selected based on the user's `user_group`.
- Access rights are checked by middleware (rights on the report and on the items, fields for which the user has no rights are removed).

---

## 3. Project Verification Report

### 3.1. Purpose

- Actual deliverable for the client (DVW)
- Based on current verification data
- Output is currently an Excel table

### 3.2. Report structure

- The table combines: verification requirements → testcases → testcase-executions for a given iteration number and result: conform | fail

### 3.3. Customer summary

- Currently a mail produced manually
- Describes overall conformity, highlights non-conformities and actions to be taken
- The project verification report is attached to this document
- Le rapport de vérification projet est joint à ce document
