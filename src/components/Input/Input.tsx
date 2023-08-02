import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Input({ item, handleChange }: any) {
  return (
    <>
      {(item.type == "text" ||
        item.type == "number" ||
        item.type == "email") && (
        <TextField
          fullWidth
          label={item.fieldName.replace(/([A-Z])/g, " $1").trim()}
          type={item.type}
          required
          onChange={handleChange}
          name={item.fieldName}
          defaultValue={item.value}
        />
      )}
      {item.type == "select" && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {item.fieldName.replace(/([A-Z])/g, " $1").trim()}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={item.value}
            label={item.fieldName.replace(/([A-Z])/g, " $1").trim()}
            onChange={handleChange}
            name={item.fieldName}
          >
            {item.options.length > 0 &&
              item.options.map((value: any, i: any) => (
                <MenuItem key={i} value={value}>
                  {value}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
      {item.type == "multiline" && (
        <TextField
          fullWidth
          label={item.fieldName.replace(/([A-Z])/g, " $1").trim()}
          multiline
          rows={4}
          defaultValue={item.value}
          onChange={handleChange}
          name={item.fieldName}
        />
      )}
    </>
  );
}

export default Input;
