import React, { useState } from 'react';
import './App.css';

function App() {
  const [salary, setSalary] = useState(''); 
  const [taxSlab, setTaxSlab] = useState({
    monthlyTax: 0,
    monthlySalary: 0,
    yearlyTax: 0,
    yearlySalary: 0,
    taxSlab: "",
  });

  const handleChangeSalary = (event) => {
    const salaryValue = event.target.value; 
    setSalary(salaryValue); 

    if (salaryValue === '') {
      setTaxSlab({
        monthlyTax: 0,
        monthlySalary: 0,
        yearlyTax: 0,
        yearlySalary: 0,
        taxSlab: "",
      });
    } else {
  
      calculateTax(Number(salaryValue));
    }
  };

  const calculateTax = (salaryValue) => {
    if (salaryValue < 50000) {
      setTaxSlab({
        monthlyTax: 0,
        monthlySalary: 0,
        yearlyTax: 0,
        yearlySalary: 0,
        taxSlab: ""
      });
    } else if (salaryValue <= 100000) {
      const tax = (salaryValue - 50000) * 0.025;
      updateTaxSlab(tax, salaryValue, "0 + 2.5%");
    } else if (salaryValue <= 200000) {
      const tax = (salaryValue - 100000) * 0.125 + 1250;
      updateTaxSlab(tax, salaryValue, "1250 + 12.5%");
    } else if (salaryValue <= 300000) {
      const tax = (salaryValue - 200000) * 0.25 + 13750;
      updateTaxSlab(tax, salaryValue, "13750 + 20%");
    } else if (salaryValue <= 500000) {
      const tax = (salaryValue - 300000) * 0.25 + 33750;
      updateTaxSlab(tax, salaryValue, "33750 + 25%");
    } else if (salaryValue <= 1000000) {
      const tax = (salaryValue - 500000) * 0.325 + 85000;
      updateTaxSlab(tax, salaryValue, "83750 + 32.5%");
    } else {
      const tax = (salaryValue - 1000000) * 0.35 + 247500;
      updateTaxSlab(tax, salaryValue, "246250 + 35%");
    }
  };

  const updateTaxSlab = (tax, salaryValue, slab) => {
    const monthlySalary = salaryValue - tax;
    const yearlyTax = tax * 12;
    const yearlySalary = monthlySalary * 12;
    
    setTaxSlab({
      monthlyTax: tax,
      monthlySalary: monthlySalary,
      yearlyTax: yearlyTax,
      yearlySalary: yearlySalary,
      taxSlab: slab
    });
  };

  return (
    <div className="App">
      <h1>Salary Calculator</h1>
      <input
        type='number'
        value={salary}
        onChange={handleChangeSalary}
        placeholder="Enter your salary"
      />
      <div className='d-flex'>
        <table>
          <thead>
            <tr>
              <th>Monthly Tax</th>
              <th>Monthly Salary</th>
              <th>Yearly Tax</th>
              <th>Yearly Salary</th>
              <th>Base Tax + Slabs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{taxSlab.monthlyTax.toFixed(2)}</td>
              <td>{taxSlab.monthlySalary.toFixed(2)}</td>
              <td>{taxSlab.yearlyTax.toFixed(2)}</td>
              <td>{taxSlab.yearlySalary.toFixed(2)}</td>
              <td>{taxSlab.taxSlab}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
