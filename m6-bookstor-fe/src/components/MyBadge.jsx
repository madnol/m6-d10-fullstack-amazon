import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = prop => {
  return (
    <>
      <Badge className="mb-2" variant={prop.color}>
        {prop.text}
      </Badge>
    </>
  );
};

export default MyBadge;
