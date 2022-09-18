import React, { useState, useEffect, useCallback } from "react";
import "../css/style.css";

// Material-UI Components
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// Notification
import Notification from "../../media/audio/NotificationAndroid.mp3";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = (props) => {
  const { alertFunc, alertContent } = props;
  const [audio] = useState(new Audio(Notification));
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    audio.play();
    setOpen(true);
  }, [audio]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  // To Call AlertMessage's handleClick Function from Parent (Calling Component)
  useEffect(() => {
    alertFunc.current = handleClick;
  }, [alertFunc, handleClick]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={alertContent.context} sx={{ width: "100%" }}>
        {alertContent.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
// https://dilshankelsen.com/call-child-function-from-parent-component-in-react/#:~:text=One%20way%20to%20call%20a,function%20in%20the%20parent%20component.
