# formatting excel input file

# 1. Tab excel sheet nomanclature - case sensitive

## 1.1 Project

**#[node type]**

- #Project

## 1.2 Items

**#[node type]#[item type]**

- #Itm#Test_project
- #Itm#Test_build
- #Itm#Test_plan
- #Itm#Test_suite
- #Itm#Test_case
- #Itm#Requirement
- #Itm#Test_case_execution
- #Itm#Structures
- #Itm#Deliverables
- #Itm#Works
- #Itm#Orders
- #Itm#Lists
- #Itm#Files

## 1.3 Structures

**#[node type]#[Structure type]**

- #Str#DOSSIER
- #Str#WBS

## 1.4 Lists

**#[node type]#[List type]**

- #Lst#ToDoList

## 1.5 Relations

**#[node type]#HAS_[Link type]**

- #Rel#HAS_TEST_PROJECT
- #Rel#HAS_TEST_BUILD
- #Rel#HAS_TEST_PLAN
- #Rel#HAS_TEST_SUITE
- #Rel#HAS_TEST_CASE
- #Rel#HAS_TEST_CASE_EXECUTION
- #Rel#HAS_REQUIREMENT
- #Rel#HAS_DELIVERABLE
- #Rel#HAS_ORDER
- #Rel#HAS_WORK
- #Rel#HAS_STRUCTURE
- #Rel#HAS_LIST
- #Rel#HAS_LINK
- #Rel#IS_REQUIREMENT_FOR

# 2. Column label excel sheet nomanclature - case sensitive

## 2.1 Columns Label Project - #Project

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Project’s name  - Mandatory
- **Token** : PR[Project year][Project Number] - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type** : node type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the project
- **@meta.status** : Project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.teslink.id** : teslink id reference
- **@meta.external.teslink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference

## 2.2 Columns Label Test Items - #Itm#[Test]

### Test-project/Test-build/Test-plan/Test-suits items

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-project’s name  - Mandatory
- **Token** : internal reference token of the test - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the project
- **@meta.status** : Test-project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft Test-project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.testlink.id** : teslink id reference
- **@meta.external.testlink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.author :** author item
- **@meta.type :** to define
- **@meta.validationType :** type of validation
- **@meta.content :** content of the test-project
- **@meta.remark :** remark on the test-project

## 2.3 Columns Label Requirement Items - #Itm#Requirement

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Requirement’s name  - Mandatory
- **Token** :  internal reference token of the requirement - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of therequirement
- **@meta.status** : Requirement’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft requirement external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.testlink.id** : teslink id reference
- **@meta.external.testlink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.author :** author item
- **@meta.type :** to define
- **@meta.content :** content of the test-project
- **@meta.dataQuality :** remark on the test-project
- **@meta.consistency : to define**
- **@meta.completeness**
- **@meta.correctness**
- **@meta.rat.qualityLevel**
- **@meta.rat.numericQuality**
- **@meta.rat.qualityDate**
- **@meta.rat.qualitySummary**

## 2.4 Columns Label Test-case-execution Items - #Itm#Test_case_execution

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-case’s name  - Mandatory
- **Token** : internal reference token of the test case execution - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type  - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the test case execution
- **@meta.status** : Test-case-execution project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft Test-case-execution project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.testlink.id** : teslink id reference
- **@meta.external.testlink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.author :** author item
- **@meta.type :** to define
- **@meta.validationType :** type of validation
- **@meta.content :** content of the test-case execution
- **@meta.remark :** remark on the test-case-execution
- **@meta.note**
- **@meta.doc**
- **@meta.doc_ref**
- **@meta.result**
- **@meta.date**

## 2.5 Columns Label Structures Items - #Itm#Structures

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Structure’s name  - Mandatory
- **Token** :  internal reference token of the structure - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the structure
- **@meta.type**

## 2.6 Columns Label Deliverables Items - #Itm#Deliverables

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-case’s name  - Mandatory
- **Token** : internal reference token of the test case execution - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the test case execution
- **@meta.status** : Test-case-execution project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft Test-case-execution project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.teslink.id** : teslink id reference
- **@meta.external.teslink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.estimateTime**
- **@meta.estimateCost**

## 2.7 Columns Label Works Items - #Itm#Works

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-case’s name  - Mandatory
- **Token** : internal reference token of the test case execution - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the test case execution
- **@meta.status** : Test-case-execution project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft Test-case-execution project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.teslink.id** : teslink id reference
- **@meta.external.teslink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.estimateTime:**
- **@meta.estimateCost :**

## 2.7 Columns Label Orders Items - #Itm#Orders

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-case’s name  - Mandatory
- **Token** : internal reference token of the test case execution - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type  - Optional

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the Orders
- **@meta.status** : Orders project’s status (new, on going, blocked,…)
- **@meta.ref_extern** : Infrasoft Orders project external reference
- **@meta.external.excel.token** : excel token reference
- **@meta.external.jira.id** : jiral id reference
- **@meta.external.jira.url** : jira url reference
- **@meta.external.relatics.id** : relatics id reference
- **@meta.external.relatics.url** : relatics url reference
- **@meta.external.teslink.id** : teslink id reference
- **@meta.external.teslink.url** : teslink url reference
- **@meta.external.sharepoint.id** : sharepoint id reference
- **@meta.external.sharepoint.type** : sharepoint type reference
- **@meta.startDate :**
- **@meta.endDate :**
- **@meta.estimateTime :**
- **@meta.estimateCost :**
- **@meta.budgetYear :**
- **@meta.content :**

## 2.7 Columns Label Lists Items - #Itm#Lists

- **id** : Id generate by Neo4j after commit - Optional
- **name** : Test-case’s name  - Mandatory
- **Token** : internal reference token of the test case execution - Mandatory
- **create_dt** : Date of creation - Optional
- **update_dt** : Date of update - Optional
- **type :**  item type

**Meta’s - @meta.[meta key] - Optional**

- **@meta.description** : description of the test case execution

## 2.8 Columns Label Strucural node list - #Lst#ToDoList

- **id** : Id generate by Neo4j after commit - Optional
- **name** : list name  - Mandatory
- **Token** : internal reference token of the list - Mandatory
- **type :**   item type  - Optional
- **Child :** structured dot notation

## 2.9 Columns Label Strucural node list - #Str#DOSSIER

- **id** : Id generate by Neo4j after commit - Optional
- **name** : dossier name  - Mandatory
- **Token** : internal reference token of the list - Mandatory
- **type :**   item type  - Optional
- **Child :** structured dot notation

## 2.10 Columns Label Strucural node list - #Str#[structure type]

- **id** : Id generate by Neo4j after commit - Optional
- **name** : structural node name  - Mandatory
- **Token** : internal reference token of strucural node - Mandatory
- **type :**   item type  - Optional
- **Child :** structured dot notation

## 2.10 Columns Label relation type - #Rel#HAS_[relation type]

- **from_type** : type of the node start point - Mandatory
- **from_token** : token of the node start point - Mandatory
- **to_type** : type of the node end point - Mandatory
- **to_token :**   token of the node end point  - Mandatory