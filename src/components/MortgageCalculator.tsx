
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, ArrowRight } from 'lucide-react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(4.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate monthly payment when inputs change
  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (principal > 0 && monthlyRate > 0) {
      const payment = principal * (
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      );
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(0);
    }
  }, [homePrice, downPayment, loanTerm, interestRate]);

  // Sync down payment and percentage
  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPayment(Math.round(value * downPaymentPercent / 100));
  };

  const handleDownPaymentChange = (value: number) => {
    setDownPayment(value);
    setDownPaymentPercent(Math.round((value / homePrice) * 100));
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment(Math.round(homePrice * value / 100));
  };

  return (
    <section className="py-16 bg-brand-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              MORTGAGE <span className="text-brand-red">CALCULATOR</span>
            </h2>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Plan your home purchase with our easy-to-use mortgage calculator. Estimate your monthly 
              payments and see what you can afford based on current interest rates. Adjust the home price, 
              down payment, loan term, and interest rate to see how they affect your monthly payment.
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Get pre-approved today to make your home buying process smoother and increase your buying power in the market.
            </p>
            <Link 
              to="/mortgage" 
              className="inline-flex items-center bg-brand-red text-white px-6 py-3 rounded-md font-bold 
              hover:bg-opacity-90 transition-all duration-300 group"
            >
              GET PRE-APPROVED
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center justify-center mb-6 text-brand-navy">
              <Calculator size={24} className="mr-2" />
              <h3 className="text-xl font-bold">Payment Calculator</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price: ${homePrice.toLocaleString()}
                </label>
                <input 
                  type="range" 
                  min="100000" 
                  max="2000000" 
                  step="10000" 
                  value={homePrice}
                  onChange={(e) => handleHomePriceChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment: ${downPayment.toLocaleString()}
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max={homePrice} 
                    step="5000" 
                    value={downPayment}
                    onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment: {downPaymentPercent}%
                  </label>
                  <input 
                    type="range" 
                    min="0" 
                    max="50" 
                    step="1" 
                    value={downPaymentPercent}
                    onChange={(e) => handleDownPaymentPercentChange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term: {loanTerm} years
                  </label>
                  <select 
                    value={loanTerm} 
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="30">30 Years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input 
                    type="range" 
                    min="2" 
                    max="10" 
                    step="0.1" 
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="bg-brand-light-gray rounded-lg p-4 mt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Estimated Monthly Payment</p>
                  <div className="flex items-center justify-center text-brand-navy">
                    <DollarSign size={20} />
                    <span className="text-3xl font-bold">{monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Principal & Interest only. Taxes and insurance not included.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/get-pre-approved" 
                  className="w-full bg-brand-blue hover:bg-opacity-90 text-white py-3 rounded-md font-medium flex items-center justify-center"
                >
                  Get Pre-Approval Letter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculator;
