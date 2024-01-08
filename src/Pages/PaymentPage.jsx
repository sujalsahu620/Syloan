import { useNavigate } from "react-router-dom";
import Paynow from "./Login"
import styles from "../Styles/PaymentPage.module.css"
import React, { useCallback } from 'react'
import useRazorpay from "react-razorpay";

export const PaymentPage = () => {
  const [Razorpay, isLoaded] = useRazorpay();
  // const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();
  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_yswl3N40ETtM35", // Replace with your actual API Key
      amount: 150,
      currency: "INR",
      name: "WOOD FANS",
      description: "Test Transaction",
      // image: logo,
      // order_id: 1, // Pass the order ID obtained from createOrder
      handler: (res) => {
        // setShowThankYou(true);

        setTimeout(() => {
          // setShowThankYou(false);
          navigate("/");
        }, 5000);
      },
      prefill: {
        name: "Ashutosh Verma",
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
  return (
    <div id={styles.PaymentPage}>
      {/* <Paynow/> */}
    </div>
  )
}