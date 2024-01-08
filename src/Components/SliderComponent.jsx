// SliderComponent.jsx
import React, { useEffect, useState } from 'react';
import styles from '../Styles/SliderComponent.module.css';

const SliderComponent = ({minValue,maxValue,sliderValue, setSliderValue}) => {
  console.log(sliderValue)

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    console.log(newValue);
  };
useEffect(()=>{
setSliderValue(minValue)
},[minValue,maxValue])

  console.log(minValue, maxValue)

  return (
    <div className={styles.container}>
      <p>Select Amount </p>
      <label>
        <input
          type="range"
          min={minValue}
          max={maxValue}
          step={1000000}
          value={sliderValue}
          onChange={handleSliderChange}
          className={styles.input}
        />
      </label>
      <p>₹ {Intl.NumberFormat("en-IN").format(sliderValue)}</p>
    </div>
  );
};

export default SliderComponent;
