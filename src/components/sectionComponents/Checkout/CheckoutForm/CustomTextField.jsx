import React from "react";

// Material-Ui Components
import { TextField, Grid } from "@mui/material";

// React-Hook-Form
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
        render={() => (
          <TextField fullWidth label={label} variant="standard" required />
        )}
      />
    </Grid>
  );
};

export default FormInput;
