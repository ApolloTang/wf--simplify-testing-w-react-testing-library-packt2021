import React from "react";
import { Helmet } from "react-helmet";
import Table from "./Table";

const employees = [
  {
    id: 1,
    name: 'John Smith',
    department: 'Sales',
    title: 'Senior Sales Agent'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    department: 'Engineering',
    title: 'Senior Full-Stack Engineer'
  },
  { id: 3, name: 'Tim Reynolds', department: 'Design', title: 'Designer' }
]

const App = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React App</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      ></link>
    </Helmet>
    <Table employees={employees} />
  </>
);

export { App };
