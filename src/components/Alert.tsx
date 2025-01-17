import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

interface AlertProps {
  children: React.ReactNode;
  type: "success" | "warning" | "info" | "error";
}

export default function TransitionAlerts(props: AlertProps) {
  const { children, type = "success" } = props;
  const [open, setOpen] = useState(true);

  setTimeout(() => {
    setOpen(false);
  }, 5000);

  return (
    <Alert
      className={`${
        open ? "scale-100" : "scale-0"
      } absolute bottom-10 right-4 w-64 transform transition-transform duration-300 ease-in-out`}
      severity={type}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      sx={{ mb: 2 }}
    >
      {children}
    </Alert>
  );
}
