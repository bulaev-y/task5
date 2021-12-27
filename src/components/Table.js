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
  Mark
  </td>
  <td>
  Otto
  </td>
  <td>
  @mdo
  </td>
  </tr>
  <tr>
  <th scope="row">
  <FormGroup
  check
  >
  <Input type="checkbox" />
  <Label check>
  Select
  </Label>
  </FormGroup>
  </th>
  <td>
  Jacob
  </td>
  <td>
  Thornton
  </td>
  <td>
  @fat
  </td>
  </tr>
  <tr>
  <th scope="row">
  <FormGroup
  check
  >
  <Input type="checkbox" />
  <Label check>
  Select
  </Label>
  </FormGroup>
  </th>
  <td>
  Larry
  </td>
  <td>
  the Bird
  </td>
  <td>
  @twitter
  </td>
  </tr>
  </tbody>
  </Table>
  </div>
);

export default Hero;
