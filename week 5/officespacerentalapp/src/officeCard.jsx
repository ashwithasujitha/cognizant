import React from 'react';


function OfficeCard({ office }) {
    
    const rentColor = office.rent < 60000 ? '#dc3545' : '#28a745';
   

    return (
        <div className="office-card">
           
            <img 
                src={office.image} 
                alt={office.name}
                className="office-image"
            />
            
            <div className="office-details">
               
                <h3 className="office-name">{office.name}</h3>
                
               
                <p className="office-address">📍 {office.address}</p>
              
                <p 
                    className="office-rent"
                    style={{ color: rentColor }} 
                >
                    💰 ₹{office.rent.toLocaleString()} / month
                </p>
            </div>
        </div>
    );
}

export default OfficeCard;