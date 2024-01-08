import styles from "../Styles/DetailsPage.module.css"
import React, { useCallback, useState } from 'react';
import useRazorpay from "react-razorpay";
import { useNavigate } from "react-router-dom";

export const ApplicationForm = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  // const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_yswl3N40ETtM35", // Replace with your actual API Key
      amount: 150*100,
      currency: "INR",
      name: "SyLoan",
      description: "Test Transaction",
      // image: logo,
      // order_id: 1, // Pass the order ID obtained from createOrder
      handler: (res) => {
        // setShowThankYou(true);

        setTimeout(() => {
          // setShowThankYou(false);
          navigate("/");
        }, 2000);
      },
      prefill: {
        name: "Rahul Yadav",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    panCardNumber: '',
    city: '',
    state: '',
    amount: '',
    purpose: '',
    creditScore: '',
    married: false,
    sourceOfIncome: '',
  });

  const [amountError, setAmountError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate amount
    const amountLimit = 1000000; // Set your desired amount limit
    const enteredAmount = parseFloat(formData.amount);

    if (isNaN(enteredAmount) || enteredAmount > amountLimit) {
      setAmountError('Amount must be a number and cannot exceed ' + amountLimit);
    } else {
      setAmountError('');

      // Submit the form data or perform further actions
      handlePayment();
      // console.log(formData);
      // navigate(`/payment`)

    }
  };

  return (
    <form id={styles.formContainer} onSubmit={handleSubmit} on>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>

      <label>
        Address:
      <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
      </label>

      <label>
        Email ID:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </label>

      <label>
        Pan Number:
        <input type="text" name="panCardNumber" value={formData.panCardNumber} onChange={handleInputChange} required />
      </label>

      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
      </label>

      <label>
        State:
        <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
      </label>

      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />
        {amountError && <p className="error">{amountError}</p>}
      </label>

      <label>
        Purpose:
        <input type="text" name="purpose" value={formData.purpose} onChange={handleInputChange} required />
      </label>

      <label>
        Credit Score:
        
        <input placeholder="Credit Score" type="text" name="creditScore" value={formData.creditScore} onChange={handleInputChange} required />
      </label>

      <label >
        Married:
        <input
        placeholder="Yes or No"
          type="text"
          name="married"
          checked={formData.married}
          onChange={() => setFormData({ ...formData, married: !formData.married })}
        />
      </label>

      <label>
        Income Source:
        <input type="text" name="sourceOfIncome" value={formData.sourceOfIncome} onChange={handleInputChange} required />
      </label>

      <button  type="submit">Submit</button>
    </form>
  );
};

