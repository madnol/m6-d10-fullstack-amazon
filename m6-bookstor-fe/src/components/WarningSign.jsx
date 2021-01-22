import React from "react";
import { Alert} from "react-bootstrap";





const WarningSign = (prop) => {
  return (
       <>
       <Alert variant={"danger"}>
        {prop.text}
    </Alert>
       </>
      );
    }
  
  
  export default WarningSign;
  