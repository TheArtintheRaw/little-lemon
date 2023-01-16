import React, { useState } from "react";

// Reserve a Table component
const ReserveATable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (values, {setSubmitting, setFieldError}) => {
    // Perform form submission logic here
    // Example:
    fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Form submitted successfully');
        } else {
            setFieldError('general', data.message);
        }
    })
    .catch(error => {
        console.error(error);
        setFieldError('general', 'Failed to submit form');
    })
    .finally(() => setSubmitting(false));
};

  return (
    <section className="reserve-table">
      <h2 className="reserve-table__title">Reserve a Table</h2>
      <form className="reserve-table__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Time:
          <select
            id="res-time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Occasion:
          <select
            id="res-occasion"
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            required
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </label>
        <button type="submit" value="Make Your Reservation">
          Make Your Reservation
        </button>
      </form>
    </section>
  );
};

export default ReserveATable;
