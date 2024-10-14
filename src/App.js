import React, { useState } from 'react';
import './App.css';

function App() {
  const [salary, setsalary] = useState('');
  const [taxSlab, settaxSlab] = useState({
    monthlyTax: 0,
    monthlySalary: 0,
    yearlyTax: 0,
    yearlySalary: 0,
    taxSlab: ""
  });

  function handleChangeSalary(event) {
    const salaryValue = Number(event.target.value); // Convert input to number
    setsalary(salaryValue);

    if (salaryValue < 50000) {
      settaxSlab({
        monthlyTax: 0,
        monthlySalary: 0,
        yearlyTax: 0,
        yearlySalary: 0,
        taxSlab: ""
      });
    } else if (salaryValue > 50000 && salaryValue <= 100000) {
      const tax = (salaryValue - 50000) * 0.025;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "0 + 2.5%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    } else if (salaryValue > 100000 && salaryValue <= 200000) {
      const baseTax = 1250;
      const taxableAmount = salaryValue - 100000;
      const tax = (taxableAmount * 0.125) + baseTax;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "1250 + 12.5%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    } else if (salaryValue > 200000 && salaryValue <= 300000) {
      const baseTax = 15000 - 1250;
      const taxableAmount = salaryValue - 200000;
      const tax = (taxableAmount * 0.25) + baseTax;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "13750 + 20%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    } else if (salaryValue > 300000 && salaryValue <= 500000) {
      const baseTax = 35000 - 1250;
      const taxableAmount = salaryValue - 300000;
      const tax = (taxableAmount * 0.25) + baseTax;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "33750 + 25%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    } else if (salaryValue > 500000 && salaryValue <= 1000000) {
      const baseTax = 85000 - 1250;
      const taxableAmount = salaryValue - 500000;
      const tax = (taxableAmount * 0.325) + baseTax;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "83750 + 32.5%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    } else {
      const baseTax = 247500 - 1250;
      const taxableAmount = salaryValue - 1000000;
      const tax = (taxableAmount * 0.35) + baseTax;
      const mSalary = salaryValue - tax;
      const yTax = tax * 12;
      const ySalary = mSalary * 12;
      const slab = "246250 + 35%";
      settaxSlab({ monthlyTax: tax, monthlySalary: mSalary, yearlyTax: yTax, yearlySalary: ySalary, taxSlab: slab });
    }
  };

  return (
    <div className="App">
      <h1>Salary Calculator</h1>
      <input type='number' value={salary} onChange={handleChangeSalary} placeholder="Enter your salary" />
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
