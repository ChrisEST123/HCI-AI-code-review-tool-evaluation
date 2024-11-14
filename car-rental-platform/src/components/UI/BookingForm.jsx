import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";

const BookingForm = (props) => {
  const [firstname, setfirstname] = useState("First Name");
  const [lastname, setlastname] = useState("Last Name");
  const [email, setemail] = useState("Email@abc.com");
  const [phoneno, setphoneno] = useState("9999999999");
  const [description, setdescription] = useState("Inquire To Owner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Payment method is required!");
      return;
    }

    setIsSubmitting(true);
    axios.post(`${process.env.REACT_APP_API_URL}/customer/email`, {
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "phoneno": phoneno,
      "description": description,
      "to": props.to,
      "subject": "Inquiry Of Car",
      "carName": props.carname,
      "paymentMethod": paymentMethod,
    }, {
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsSubmitting(false);
        alert(res.data);
      }).catch((err) => {
        setIsSubmitting(false);
        console.log(err);
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" value={phoneno} onChange={(e) => setphoneno(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={4}
          type="textarea"
          className="textarea"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        ></textarea>
      </FormGroup>

      <FormGroup>
        <label>Payment Method</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </FormGroup>

      <div className="payment text-end mt-5">
        <button disabled={isSubmitting}>Send</button>
      </div>
    </Form>
  );
};

export default BookingForm;
