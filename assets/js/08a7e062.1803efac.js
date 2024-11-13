"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6532],{6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(4848),r=n(8453);const s={sidebar_label:"Database Library",title:"Database Library"},a=void 0,i={id:"different_libraries/database",title:"Database Library",description:"Database Library is a Robot Framework library that provides keywords for interacting with databases.",source:"@site/docs/different_libraries/database.md",sourceDirName:"different_libraries",slug:"/different_libraries/database",permalink:"/docs/different_libraries/database",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/different_libraries/database.md",tags:[],version:"current",frontMatter:{sidebar_label:"Database Library",title:"Database Library"},sidebar:"tutorialSidebar",previous:{title:"Browser Library",permalink:"/docs/different_libraries/browser"},next:{title:"Requests Library",permalink:"/docs/different_libraries/requests"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Install from PyPI",id:"install-from-pypi",level:3},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Database Library"})," is a ",(0,o.jsx)(t.a,{href:"https://robotframework.org/",children:"Robot Framework"})," library that provides keywords for interacting with databases.",(0,o.jsx)(t.br,{}),"\n","It offers keywords to e.g."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"connect to a database"}),"\n",(0,o.jsx)(t.li,{children:"execute SQL queries"}),"\n",(0,o.jsx)(t.li,{children:"fetch results from the database"}),"\n",(0,o.jsx)(t.li,{children:"assert table contents and result sets"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.h3,{id:"install-from-pypi",children:"Install from PyPI"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pip install robotframework-databaselibrary\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To connect to a database, you also need to install a Python Module adhearing to the ",(0,o.jsx)(t.a,{href:"https://www.python.org/dev/peps/pep-0249/",children:"Python Database API Specification v2.0"}),".",(0,o.jsx)(t.br,{}),"\n","You can find a list of supported database modules ",(0,o.jsx)(t.a,{href:"https://wiki.python.org/moin/DatabaseInterfaces",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Examples are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/psycopg2/",children:"psycopg2"})," for PostgreSQL"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/cx-Oracle/",children:"cx_Oracle"})," for Oracle"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/PyMySQL/",children:"pymysql"})," for MySQL"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://pypi.org/project/pyodbc/",children:"pyodbc"})," for Microsoft SQL Server"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(t.p,{children:["Check out the ",(0,o.jsx)(t.a,{href:"https://github.com/franz-see/Robotframework-Database-Library/tree/master/test",children:"tests"})," folder in the repository for examples."]}),"\n",(0,o.jsx)(t.p,{children:"Example for a PostgreSQL database:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-robotframework",children:"*** Settings ***\nSuite Setup       Connect To Database    psycopg2    ${DBName}    ${DBUser}    ${DBPass}    ${DBHost}    ${DBPort}\nSuite Teardown    Disconnect From Database\nLibrary           DatabaseLibrary\nLibrary           OperatingSystem\nLibrary           Collections\n\n*** Variables ***\n${DBHost}         localhost\n${DBName}         travis_ci_test\n${DBPass}         \"\"\n${DBPort}         5432\n${DBUser}         postgres\n\n*** Test Cases ***\nCreate person table\n    ${output} =    Execute SQL String    CREATE TABLE person (id integer unique,first_name varchar,last_name varchar);\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nExecute SQL Script - Insert Data person table\n    Comment    ${output} =    Execute SQL Script    ./${DBName}_insertData.sql\n    ${output} =    Execute SQL Script    ./my_db_test_insertData.sql\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nExecute SQL String - Create Table\n    ${output} =    Execute SQL String    create table foobar (id integer primary key, firstname varchar unique)\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nCheck If Exists In DB - Franz Allan\n    Check If Exists In Database    SELECT id FROM person WHERE first_name = 'Franz Allan';\n\nCheck If Not Exists In DB - Joe\n    Check If Not Exists In Database    SELECT id FROM person WHERE first_name = 'Joe';\n\nTable Must Exist - person\n    Table Must Exist    person\n\nVerify Row Count is 0\n    Row Count is 0    SELECT * FROM person WHERE first_name = 'NotHere';\n\nVerify Row Count is Equal to X\n    Row Count is Equal to X    SELECT id FROM person;    2\n\nVerify Row Count is Less Than X\n    Row Count is Less Than X    SELECT id FROM person;    3\n\nVerify Row Count is Greater Than X\n    Row Count is Greater Than X    SELECT * FROM person;    1\n\nRetrieve Row Count\n    ${output} =    Row Count    SELECT id FROM person;\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    2\n\nRetrieve records from person table\n    ${output} =    Execute SQL String    SELECT * FROM person;\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nVerify person Description\n    [Tags]    db    smoke\n    Comment    Query db for table column descriptions\n    @{queryResults} =    Description    SELECT * FROM person LIMIT 1;\n    Log Many    @{queryResults}\n    ${output} =    Set Variable    ${queryResults[0]}\n    Should Be Equal As Strings    ${output}    Column(name='id', type_code=23, display_size=None, internal_size=4, precision=None, scale=None, null_ok=None)\n    ${output} =    Set Variable    ${queryResults[1]}\n    Should Be Equal As Strings    ${output}    Column(name='first_name', type_code=1043, display_size=None, internal_size=-1, precision=None, scale=None, null_ok=None)\n    ${output} =    Set Variable    ${queryResults[2]}\n    Should Be Equal As Strings    ${output}    Column(name='last_name', type_code=1043, display_size=None, internal_size=-1, precision=None, scale=None, null_ok=None)\n    ${NumColumns} =    Get Length    ${queryResults}\n    Should Be Equal As Integers    ${NumColumns}    3\n\nVerify foobar Description\n    [Tags]    db    smoke\n    Comment    Query db for table column descriptions\n    @{queryResults} =    Description    SELECT * FROM foobar LIMIT 1;\n    Log Many    @{queryResults}\n    ${output} =    Set Variable    ${queryResults[0]}\n    Should Be Equal As Strings    ${output}    Column(name='id', type_code=23, display_size=None, internal_size=4, precision=None, scale=None, null_ok=None)\n    ${output} =    Set Variable    ${queryResults[1]}\n    Should Be Equal As Strings    ${output}    Column(name='firstname', type_code=1043, display_size=None, internal_size=-1, precision=None, scale=None, null_ok=None)\n    ${NumColumns} =    Get Length    ${queryResults}\n    Should Be Equal As Integers    ${NumColumns}    2\n\nVerify Query - Row Count person table\n    ${output} =    Query    SELECT COUNT(*) FROM person;\n    Log    ${output}\n    ${val}=    Get from list    ${output}    0\n    ${val}=    Convert to list    ${val}\n    ${val}=    Get from list    ${val}    0\n    Should be equal as Integers    ${val}    2\n\nVerify Query - Row Count foobar table\n    ${output} =    Query    SELECT COUNT(*) FROM foobar;\n    Log    ${output}\n    ${val}=    Get from list    ${output}    0\n    ${val}=    Convert to list    ${val}\n    ${val}=    Get from list    ${val}    0\n    Should be equal as Integers    ${val}    0\n\nVerify Query - Get results as a list of dictionaries\n    [Tags]    db    smoke\n    ${output} =    Query    SELECT * FROM person;    \\    True\n    Log    ${output}\n    Should Be Equal As Strings    &{output[0]}[first_name]    Franz Allan\n    Should Be Equal As Strings    &{output[1]}[first_name]    Jerry\n\nVerify Execute SQL String - Row Count person table\n    ${output} =    Execute SQL String    SELECT COUNT(*) FROM person;\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nVerify Execute SQL String - Row Count foobar table\n    ${output} =    Execute SQL String    SELECT COUNT(*) FROM foobar;\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nInsert Data Into Table foobar\n    ${output} =    Execute SQL String    INSERT INTO foobar VALUES(1,'Jerry');\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n\nVerify Query - Row Count foobar table 1 row\n    ${output} =    Query    SELECT COUNT(*) FROM foobar;\n    Log    ${output}\n    ${val}=    Get from list    ${output}    0\n    ${val}=    Convert to list    ${val}\n    ${val}=    Get from list    ${val}    0\n    Should be equal as Integers    ${val}    1\n\nVerify Delete All Rows From Table - foobar\n    Delete All Rows From Table    foobar\n    Comment    Sleep    2s\n\nVerify Query - Row Count foobar table 0 row\n    Row Count Is 0    SELECT * FROM foobar;\n    Comment    ${output} =    Query    SELECT COUNT(*) FROM foobar;\n    Comment    Log    ${output}\n    Comment    Should Be Equal As Strings    ${output}    [(0,)]\n\nDrop person and foobar tables\n    ${output} =    Execute SQL String    DROP TABLE IF EXISTS person,foobar;\n    Log    ${output}\n    Should Be Equal As Strings    ${output}    None\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var o=n(6540);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);