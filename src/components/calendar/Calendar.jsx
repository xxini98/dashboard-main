import React, { useState } from "react";
import Calendar from "react-calendar";
import "./dist/Calendar.css"; // css import
import "../../assets/css/MiniCalendar.css";
import { Card, CardBody } from "@chakra-ui/react";

function MiniCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Card>
      <CardBody>
        <Calendar onChange={onChange} value={value} />
      </CardBody>
    </Card>
  );
}

export default MiniCalendar;
