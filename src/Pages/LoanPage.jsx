import axios from "axios"
import SliderComponent from "../Components/SliderComponent"
import styles from "../Styles/LoanPage.module.css"
import React, { useEffect, useState } from 'react'
import { LoanCard } from "../Components/LoanCard";
const BaseUrl=`https://thankful-lion-sun-hat.cyclic.app/loans`;
export const  LoanPage = () => {
const[filter,setFilter] = useState("")
const[sort,setSort] = useState("")
const [data,setData] = useState([])
const [minValue, setMinValue] = useState(10000);
const [maxValue, setMaxValue] = useState(1000000) 
const [sliderValue, setSliderValue] = useState(minValue);
const [newData, setNewData] = useState(data)


  const getData = async(url)=>{
    try {
      const res = await axios.get(url)
      setData(res.data);
      let min = 100000000;
      let max = 0;
      res.data.forEach((e)=>{
            max = Math.max(max,e.amount)
            min = Math.min(min,e.amount)
      })
      setMinValue(min);
      setMaxValue(max)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    let query ={}
      if(filter){
  query.category = filter;
}
if(sort){
  query._sort = "tenure"
  query._order = sort
}
let Query = new URLSearchParams(query).toString();
let newUrl = BaseUrl + (Query? "?"+ Query: "");
//console.log(newUrl)
getData(newUrl)
  },[filter,sort])


  useEffect(()=>{
      let arr = data.filter((e)=>{
        if(sliderValue<=e.amount){
          return e;
        }
      })
      setNewData(arr)
  },[sliderValue ,sort ,filter,data])

// console.log(newData)

  return (
  <div id={styles.LoanPage}>
    {/* top sort and filter part */}
    <div id={styles.top_part}>
      <div>
        <select id={styles.top_part_loan_type} value={filter} onChange={(e)=>{setFilter(e.target.value)}} autoFocus>
          <optgroup label="Type Of Loans">
          <option>Type Of Loan :</option>
          <option value="home">Home Loan</option>
          <option value="personal">Personal Loan</option>
          <option value="education">Educational Loan</option>
          <option value="business">Business Loan</option>
          <option value="car">Car Loan</option>
          </optgroup>
        </select>
        <select id={styles.top_part_loan_tenure}value={sort} onChange={(e)=>setSort(e.target.value)} >
          <optgroup label="Tenure" >
          <option>Tenure :</option>
          <option value='asc'>Tenure - Low To High</option>
          <option value='desc'>Tenure - High To Low</option>
          </optgroup>
        </select>
      </div>
      <div id={styles.top_part_loan_amount}>
        <SliderComponent minValue={minValue} maxValue = {maxValue} setSliderValue={setSliderValue} sliderValue = {sliderValue}/>
      </div>
    </div>
    <div id={styles.product_section}>
      <div id={styles.product_section_card}>
      {
          newData.map((e) => {
            return (
              <LoanCard e={e} key={e.id} />
            )
          })
        }
      </div>
    </div>

    {/* --------- top sort and filter part ends -------------*/}
  </div>
  )
}
