import { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ReserveTable = () => {
  const [times, setTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [fieldValue, setFieldValue] = useState("");

  const fetchData = useCallback(async (date) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?date=${date}`
    );
    const data = await response.json();
    return data;
  }, []);

  const initializeTimes = useCallback(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchData(today).then((data) => setTimes(data));
  }, [fetchData, setTimes]);

  const updateTimes = useCallback(
    (date) => {
      setFieldValue(date);
      fetchData(date).then((data) => setTimes(data));
    },
    [setFieldValue, setTimes, fetchData]
  );

  useEffect(() => {
    initializeTimes();
  }, [initializeTimes]);

  const handleDateChange = (event) => {
    updateTimes(event.target.value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().when("date", {
      is: (date) => date === fieldValue,
      then: Yup.string().required("Time is required"),
    }),
    occasion: Yup.string().required("Occasion is required"),
    guests: Yup.number()
      .min(1)
      .max(10)
      .required("Number of guests is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const formData = await response.json();
      if (!response.ok) {
        throw new Error(formData.message);
      }
      alert("Reservation submitted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to submit reservation");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        time: "",
        occasion: "",
        guests: 1,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="email" name="email" placeholder="Email" />
          <Field
            type="date"
            name="date"
            placeholder="Date"
            onClick={handleDateChange}
            onChange={(e) => updateTimes(e.target.value)}
          />
          <Field as="select" name="times">
            {times.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </Field>
          <Field as="select" name="occasion" placeholder="Occasion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <Field type="number" name="guests" placeholder="Number of guests" />
          <button type="submit" disabled={isSubmitting}>
            Reserve
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReserveTable;
