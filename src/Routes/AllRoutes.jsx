import { Route, Routes } from "react-router-dom"
import {HomePage} from "../Pages/HomePage"
import { LoanPage } from "../Pages/LoanPage"
import { CompanyPage } from "../Pages/CompanyPage"
import { PaymentPage } from "../Pages/PaymentPage"
import { SupportPage } from "../Pages/SupportPage"
import { ApplicationForm } from "../Pages/DetailsPage"
import { PrivateRoute } from "./privateRoute";
import EmiCalculator from "../Pages/Calculator"
import {Login} from "../Pages/Login"
export const  AllRoutes = () => {
    return (
     <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="signup" element={<Register/>}></Route> */}
        <Route path="/company" element={<CompanyPage />}/>
        <Route path="/support" element={<SupportPage />}/>
        <Route path="/calculator" element={<EmiCalculator/>}/>
        <Route path="/loan" element={
            <PrivateRoute>
            <LoanPage />
          </PrivateRoute>
        }/>
        <Route path="/payment" element={
            <PrivateRoute>
            <PaymentPage />
            </PrivateRoute>
        }/>
        <Route path="/details" element={
            <PrivateRoute>
            <ApplicationForm />
            </PrivateRoute>
        }/>
     </Routes>
    );
};