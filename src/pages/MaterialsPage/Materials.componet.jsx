import React from 'react';
import './Materials.styles.scss';

const suppliers = [
  {
    category: 'Contractor',
    name: 'Vardhman Traders and Kamdar Sanitary',
    contact: '9351769205',
    experience: '24 years',
    address: 'Kumbha marg, sector 9, Partap nagar, Jaipur, Rajasthan- 302033'
  },
  {
    category: 'Contractor',
    name: 'Choudhary Building Materials Suppliers',
    contact: '9887228307',
    experience: '15 years',
    address: 'Near bambala bridge, Bazari mandi, Tonk road, Kumbha marg, Partap nagar, Jaipur,Rajasthan- 302033'
  },
  {
    category: 'Contractor',
    name: 'Vikas Traders and Builders',
    contact: '9928737175',
    experience: '5 years',
    address: 'Near lal bag bilwa, Tonk road, Shyam nagar, Jaipur, Rajasthan- 302022'
  },
  {
    category: 'Contractor',
    name: 'Pooja Traders and Properties',
    contact: '9799609304',
    experience: '9 years',
    address: 'Murlipura at mishra ka bagh, Beelwa, Jaipur, Rajastha-303905'
  },
  {
    category: 'Contractor',
    name: 'Agarwal Building Material Suppliers',
    contact: '8946747939',
    experience: '7 years',
    address: '7 no. chouraha, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Contractor',
    name: 'Jay Shree Building Material',
    contact: '9214851425',
    experience: '20 years',
    address: 'Near getor railway station, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Contractor',
    name: 'Ameriya Building Material Suppliers',
    contact: '9960389558',
    experience: '32 years',
    address: 'Sanganer road, Near bus stand, Jagatpua, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Contractor',
    name: 'Dua and Company',
    contact: '9829091818',
    experience: '10 years',
    address: '60, Vivek vihar, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Balaji Tiles Gallery',
    contact: '9782539025',
    experience: '9 years',
    address: 'Plot no. 4, Near 7 no. chouraha, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'The Tile Studio',
    contact: '9717407153',
    experience: '15 years',
    address: 'Plot no. 1 Mahalroad, Nri circle, Near mathura misthan, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Zara Tiles and Bathware',
    contact: '8058204444',
    experience: '20 years',
    address: 'B- 57-58, Centeral spineyojna, Near akashya patra chouraha, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Shree Balaji Marbles and Graintes',
    contact: '8432198970',
    experience: '1 years',
    address: 'Near akshya patra temple, Marble mandi, Jagatpua, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Khandelwal Granite and Marble',
    contact: '9414068648',
    experience: '18 years',
    address: 'Shop no. 773, Nahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Mangle Bhavan Marbles',
    contact: '8000890194',
    experience: '5 years',
    address: 'Central spine yojna, Mahal road, Opp. Akshya patra temple, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Shree Mahadev Marbles and Granite',
    contact: '9166221548',
    experience: '3 years',
    address: 'New mandi, Akshya patra temple, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Shree Vinayaka Marble and Granite',
    contact: '8618210837',
    experience: '3 years',
    address: 'Marble mandi, Opp. Akshya patra, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'D.R.D Marble Traders',
    contact: '9462029501',
    experience: '3 years',
    address: 'Marble mandi, Opp. Akshya patra, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Shree Hari Granite and Stone',
    contact: '67726-996-666',
    experience: '5 years',
    address: 'Opp. akshya patra temple, Marble mandi, Jagatpua, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Taysha Stone and Infrastructure',
    contact: '8905945658',
    experience: '8 years',
    address: 'Vigyan nagar, Near 7 no. bus stand, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Deepika Marble and Granite',
    contact: '7878871659',
    experience: '3 years',
    address: 'Plot no. B-4, Vigyan nagar, Near 7 no. bus stand, Mahal road, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Marbles and Granites',
    name: 'Shree Aadinath Marble and Granite',
    contact: '7976532713',
    experience: '5 years',
    address: '7 no. bus stand, Near ICICI bank, Jagatpura, Jaipur, Rajasthan'
  },
  {
    category: 'Marbles and Granites',
    name: 'Pooja Marbles',
    contact: '9414044861',
    experience: '35 years',
    address: 'B- 39 ashish vihar colony, Opp. Shyam baba mandir, Mahal road, Jagatpura, Jaipur, Rajasthan-302017'
  },
  {
    category: 'Cement',
    name: 'Ahuja Cement Agency',
    contact: '9314501909',
    experience: '5 years',
    address: 'Shop no. 113, Usha colony, Malviya nagar, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Cement',
    name: 'Surya Cement',
    contact: '9314506524',
    experience: '8 years',
    address: 'Usha colony, Sector 1, Malviya nagar, Jaipur, Rajasthn- 302017'
  },
  {
    category: 'Cement',
    name: 'Saurbh Traders',
    contact: '9167554591',
    experience: '5 years',
    address: '6, Builders and suppliers, Vishnu puri, Jagatpur road, Near dak colony, Jagatpura, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Cement',
    name: 'Rawat Traders',
    contact: '8291473174',
    experience: '6 years',
    address: 'Tonk road chakshu, Mod. Near padampura, Jaipur, Rajasthan- 303901'
  },
  {
    category: 'Cement',
    name: 'Ultratech Cement Limited',
    contact: '18002103311',
    experience: '10 years',
    address: 'Lane no. 4, Mahaveer nagar 2, Gaytri nagar B, Durgapura, Jaipur, Rajasthan- 302020'
  },
  {
    category: 'Cement',
    name: 'Gupata Treading Company',
    contact: '9829560072',
    experience: '8 years',
    address: 'RRW6+CXX, Siddharth nagar, Sector 10, Malviya nagar, Jaipur, Rajsthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Orientbell Tiles Boutique',
    contact: '9167342598',
    experience: '4 years',
    address: 'No. 23/B, Krishna Puri, Sector 1, Malviya Nagar, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Laxmi Narayan Sanitary and Tiles',
    contact: '9782508920',
    experience: '7 years',
    address: '17, Krishna puri, Sector 1 sant kheteshware marg malviya nagar haldiya, Near om agency, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Kostuba Tiles and Sanitary',
    contact: '0141 396 9987',
    experience: '5 years',
    address: 'Shop no. 888, Siddhart nagar, Sector 10, Malviya nagar, Jaipur, Rajasthan- 302017'
  },
  {
    category: 'Tiles',
    name: 'Girraj Taps and Tiles',
    address: 'Shop no. 26-27, Near BSNL office, Opposite SBI bank, Chandrakala Colony, Durgapura, Jaipur, Rajsthan- 302018'
  },
  {
    category: 'Tiles',
    name: 'Jio Tiles Gallary',
    contact: '7383554245',
    experience: '7 years',
    address: 'Office- A- 05A, Laxmi nagar, Mansarover, Jaipur, Rajsthan'
  },
  {
    category: 'Tiles',
    name: 'Udharv Tiles and Sanitary Wares',
    contact: '7041785598',
    experience: '17 years',
    address: 'Near aatish market, Mansarover, Jaipur, Rajsthan'
  },
  {
    category: 'Tiles',
    name: 'The Tile World',
    contact: '7041640547',
    experience: '15 years',
    address: 'Shop no. 34, Near aatish market, Mansarover, Jaipur, Rajasthan'
  },
  {
    category: 'Tiles',
    name: 'Aashiyana Décor',
    contact: '9724602961',
    experience: '2 years',
    address: 'Plot No. 8, Rajiv vihar, Gopalpura Bypass, Mansarover, Jaipur, Rajastahn- 302020'
  }
];

function MaterialsPage() {
    // Group suppliers by category
    const groupedSuppliers = suppliers.reduce((acc, supplier) => {
      if (!acc[supplier.category]) {
        acc[supplier.category] = [];
      }
      acc[supplier.category].push(supplier);
      return acc;
    }, {});
  
    return (
      <div className="container">
        <h1>Suppliers List</h1>
        <div className="suppliers">
          {Object.entries(groupedSuppliers).map(([category, categorySuppliers]) => (
            <div className="category" key={category}>
              <h2>{category}</h2>
              {categorySuppliers.map((supplier, index) => (
                <div className="supplier" key={index}>
                  <p><strong>Name:</strong> {supplier.name}</p>
                  <p><strong>Contact:</strong> {supplier.contact}</p>
                  <p><strong>Experience:</strong> {supplier.experience}</p>
                  <p><strong>Address:</strong> {supplier.address}</p>
                  {index !== categorySuppliers.length && <hr />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default MaterialsPage;
