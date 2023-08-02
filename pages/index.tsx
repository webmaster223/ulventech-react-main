import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/material";
import Header from "@/src/components/Header/Header";
import DynamicForm from "@/src/components/DynamicForm/DynamicForm";
import { HttpService } from "@/src/utils/apiFetch";

export default function Home(props: any) {
  console.log("props =>", props.data.data);
  const [data, setData] = useState<any>([]);
  const [initialValues, setInitialValues] = useState({});
  const getData = async () => {
    setData(props.data.data);
    if (props.data.data.length > 0) {
      const value = [...props.data.data];
      const valueObj = value.reduce(
        (a, v: any) => ({ ...a, [v.fieldName]: v.value }),
        {}
      );
      setInitialValues(valueObj);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box className={`${styles.main}`}>
      <Header />
      <DynamicForm data={data} initialValues={initialValues} />
    </Box>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://ulventech-react-exam.netlify.app/api/form`);
  const data = await res.json();
  return { props: { data } };
};
