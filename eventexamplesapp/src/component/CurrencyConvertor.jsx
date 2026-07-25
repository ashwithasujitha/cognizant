import React, { useState } from 'react';    
function CurrencyConvertor()
{
    const [rupees,setRupees] = useState('');
    const [euros,setEuros]=useState('')
    const [result, setResult] = useState('');

      const EXCHANGE_RATE = 90;

       const handleConvert = () => {
     
        if (!rupees || isNaN(rupees) || parseFloat(rupees) <= 0) {
            alert('Please enter a valid amount in Rupees');
            return;
        }
        
        const rupeesValue = parseFloat(rupees);
        const euroValue = rupeesValue / EXCHANGE_RATE;
        setEuros(euroValue.toFixed(2));
        setResult(`₹${rupeesValue} = €${euroValue.toFixed(2)}`);
    };
    
const handleSubmit = (e) => {
        e.preventDefault();
        if (!rupees || isNaN(rupees) || parseFloat(rupees) <= 0) {
            alert('Please enter a valid amount in Rupees');
            return;
        }
        
        const rupeesValue = parseFloat(rupees);
        const euroValue = rupeesValue / EXCHANGE_RATE;
        setEuros(euroValue.toFixed(2));
        setResult(`₹${rupeesValue} = €${euroValue.toFixed(2)}`);
    };
      const handleInputChange = (e) => {
        setRupees(e.target.value);
    };

    const clearFields = () => {
        setRupees('');
        setEuros('');
        setResult('');
    };

    return (
        <div className="currency-convertor">
            <div className="converter-container">
                <h3>💱 Indian Rupees to Euro</h3>
                <p className="exchange-rate">
                    Exchange Rate: 1 Euro = ₹{EXCHANGE_RATE}
                </p>

                {/* Form with onSubmit event */}
                <form onSubmit={handleSubmit} className="converter-form">
                    <div className="form-group">
                        <label htmlFor="rupees">Amount in Rupees (₹):</label>
                        <input
                            type="number"
                            id="rupees"
                            value={rupees}
                            onChange={handleInputChange}
                            placeholder="Enter amount in Rupees"
                            className="form-input"
                            step="0.01"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="euros">Amount in Euro (€):</label>
                        <input
                            type="text"
                            id="euros"
                            value={euros}
                            readOnly
                            placeholder="Converted amount"
                            className="form-input result-input"
                        />
                    </div>

                    <div className="button-group">
                       
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handleConvert}
                        >
                            🔄 Convert (Click)
                        </button>
                        <button 
                            type="submit" 
                            className="btn btn-success"
                        >
                            📤 Convert (Submit)
                        </button>
                        
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={clearFields}
                        >
                            🗑️ Clear
                        </button>
                    </div>
                </form>
                {result && (
                    <div className="result-display">
                        <h4>Conversion Result:</h4>
                        <p className="result-text">{result}</p>
                    </div>
                )}

                <p className="hint">
                    💡 <strong>Click</strong> uses onClick event | <strong>Submit</strong> uses onSubmit event
                </p>
            </div>
        </div>
    );
}

export default CurrencyConvertor;
