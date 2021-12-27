import React from "react";
import { Row, Col, Table, Button, FormGroup, Label, Input } from "reactstrap";

const Hero = () => (
  <div className="table">
  <Table
  bordered
  responsive
  >
  <thead>
  <tr>
  <th>
  <FormGroup
  check
  >
  <Input type="checkbox" />
  <Label check>
  Select all
  </Label>
  </FormGroup>
  </th>
  <th>
  Id
  </th>
  <th>
  Name
  </th>
  <th>
  Username
  </th>
  <th>
  Email
  </th>
  <th>
  Registration date
  </th>
  <th>
  Last online
  </th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <th scope="row">
  <FormGroup
  check
  class = "tableCheckBox"
  >
  <Input type="checkbox" />
  <Label check>
  Select
  </Label>
  </FormGroup>
  </th>
  <td>
  1
  </td>
  <td>
  Ivan Ivanov
  </td>
  <td>
  TestUser1
  </td>
  <td>
  TestUser1@example.com
  </td>
  <td>
  20.02.2020
  </td>
  <td>
  12.12.2021
  </td>
  </tr>
  <tr>
  <th scope="row">
  <FormGroup
  check
  class = "tableCheckBox"
  >
  <Input type="checkbox" />
  <Label check>
  Select
  </Label>
  </FormGroup>
  </th>
  <td>
  2
  </td>
  <td>
  Petr Petrov
  </td>
  <td>
  TestUser2
  </td>
  <td>
  TestUser2@example.com
  </td>
  <td>
  20.12.2020
  </td>
  <td>
  21.12.2021
  </td>
  </tr>
  <tr>
  <th scope="row">
  <FormGroup
  check
  class = "tableCheckBox"
  >
  <Input type="checkbox" />
  <Label check>
  Select
  </Label>
  </FormGroup>
  </th>
  <td>
  3
  </td>
  <td>
  Pavel Pavlov
  </td>
  <td>
  TestUser3
  </td>
  <td>
  TestUser3@example.com
  </td>
  <td>
  10.04.2020
  </td>
  <td>
  02.12.2021
  </td>
  </tr>
  </tbody>
  </Table>
  </div>
);

export default Hero;
