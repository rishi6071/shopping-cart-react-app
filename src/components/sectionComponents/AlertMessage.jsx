import React, { useState, useEffect } from "react";
import "../css/style.css";

// Material-UI Components
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  // To Call AlertMessage's handleClick Function from Parent (Calling Component)
  useEffect(() => {
    props.alertFunc.current = handleClick;
  }, [props]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={8000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.alertContent.context}
          sx={{ width: "100%" }}
        >
          {props.alertContent.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertMessage;
// https://dilshankelsen.com/call-child-function-from-parent-component-in-react/#:~:text=One%20way%20to%20call%20a,function%20in%20the%20parent%20component.