// EmiCalculator.jsx
import React, { useState } from 'react';
import styles from '../Styles/Calculator.module.css';

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEmi = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100); // Monthly interest rate
    const n = parseFloat(loanTenure) * 12; // Number of monthly installments

    const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className={styles.emiCalculator}>
      <h2>EMI Calculator</h2>

      <div className={styles.labelInputContainer}>
        <label>Principal Loan Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
        />
      </div>

      <div className={styles.labelInputContainer}>
        <label>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Enter annual interest rate"
        />
      </div>

      <div className={styles.labelInputContainer}>
        <label>Loan Tenure (in years):</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          placeholder="Enter loan tenure in years"
        />
      </div>

      <button onClick={calculateEmi}>Calculate EMI</button>

      {emi !== null && (
        <div className={styles.emiResult}>
          <h3>EMI: {emi} INR</h3>
        </div>
      )}
    </div>
  );
};

export default EmiCalculator;
