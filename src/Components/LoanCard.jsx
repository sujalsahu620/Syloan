import styles from "../Styles/LoanCard.module.css"
import React from 'react';
import hdfc from "../Images/Loan_Page_Images/HDFC-Bank.png"
import { useNavigate } from "react-router-dom";
export const LoanCard = ({e}) => {

    const navigate = useNavigate();
    return(
    <div>
         <div id={styles.LoanCard} >
            <table>
                <tr>
                    <td id={styles.td_grey}>Bank</td>
                    <td >{e.bank.toUpperCase()}</td>
                </tr>
                <tr>
                    <td id={styles.td_grey}>Type Of Loan </td>
                    <td>{e.category[0].toUpperCase()+e.category.substring(1)}</td>
                </tr>
                <tr>
                    <td id={styles.td_grey}>Max Tenure </td>
                    <td>{e.tenure} Years</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td id={styles.td_grey}>Interest Rate </td>
                    <td>{e.interest} %</td>
                </tr>
                <tr>
                    <td id={styles.td_grey}>Amount</td>
                    <td>₹ {Intl.NumberFormat("en-IN").format(e.amount)}</td>
                </tr>
                <tr>
                    <td id={styles.td_grey}>Direct Payout </td>
                    <td>Around The Clock</td>
                </tr>
            </table>
            <button onClick={() =>
    navigate(`/details`)}>Apply Now</button>
        </div>

    </div>
    )
}
