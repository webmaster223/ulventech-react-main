import { Box, Button, Container, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import Input from "../Input/Input";
import { Formik } from "formik";
import { HttpService } from "@/src/utils/apiFetch";
import Swal from "sweetalert2";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

function DynamicForm({ data, initialValues }: any) {
  const [loading, isLoading] = useState(false);
  const handleSubmitForm = async (values: any) => {
    try {
      const repsonse = await HttpService.postFormData(values);
      Swal.fire("Success", repsonse.data.message, "success");
      isLoading(false);
    } catch (e: any) {
      Swal.fire("Fail", e.response.data.message, "error");
      isLoading(false); 
    }
  };
  return (
    <Container>
      <Typography variant="h5" fontWeight={500}>
        Dynamic Form
      </Typography>
      {data.length > 0 && (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            isLoading(true);
            handleSubmitForm(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box pt={3}>
                {data.map((item: any, index: any) => (
                  <Box key={index} pb={1.5}>
                    <Input handleChange={handleChange} item={item} />
                  </Box>
                ))}
              </Box>
              <Box textAlign={"center"} pt={2}>
                <LoadingButton
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  type="submit"
                >
                  <span>Submit</span>
                </LoadingButton>
              </Box>
            </form>
          )}
        </Formik>
      )}
    </Container>
  );
}

export default DynamicForm;
