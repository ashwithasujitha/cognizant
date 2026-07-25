import React from 'react';
import OfficeCard from './officeCard';

function OfficeList() {
    const offices = [
        {
            id: 1,
            name: "Tech Hub Co-working",
            address: "Banjara Hills, Hyderabad",
            rent: 45000,
            image: "https://picsum.photos/seed/1/400/300"
        },
        {
            id: 2,
            name: "Business Tower",
            address: "MG Road, Pune",
            rent: 85000,
            image: "https://picsum.photos/seed/2/400/300"
        },
        {
            id: 3,
            name: "Startup Spaces",
            address: "Indiranagar, Bangalore",
            rent: 35000,
            image: "https://picsum.photos/seed/3/400/300"
        },
        {
            id: 4,
            name: "Corporate Plaza",
            address: "Andheri East, Mumbai",
            rent: 95000,
            image: "https://picsum.photos/seed/4/400/300"
        },
        {
            id: 5,
            name: "Green Leaf Office",
            address: "Koramangala, Bangalore",
            rent: 55000,
            image: "https://picsum.photos/seed/5/400/300"
        }
    ];

    return (
        <div className="office-list">
            <h2 className="office-list-title">
                🏢 Available Office Spaces
            </h2>
            <div className="office-grid">
                {offices.map((office) => (
                    <OfficeCard 
                        key={office.id}
                        office={office}
                    />
                ))}
            </div>
        </div>
    );
}

export default OfficeList;