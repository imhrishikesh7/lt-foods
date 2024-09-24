import React from 'react';

const CorporateInfo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#F27507] mb-10">Corporate Information</h1>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Board of Directors */}
        <div>
          <h2 className="text-xl font-bold mb-6">BOARD OF DIRECTORS</h2>
          <ul className="space-y-4">
            <li><strong>Vijay Kumar Arora</strong> <br />Chairman and Managing Director</li>
            <li><strong>Abhiram Seth</strong> <br />Lead Independent Director</li>
            <li><strong>Ashwani Kumar Arora</strong> <br />Managing Director and CEO</li>
            <li><strong>Surinder Kumar Arora</strong> <br />Managing Director</li>
            <li><strong>Alrumaih Sulaiman Abdulrahman S</strong> <br />Non-Executive Non-Independent Director</li>
            <li><strong>Neeru Singh</strong> <br />Independent Director</li>
            <li><strong>Ambika Sharma</strong> <br />Independent Director</li>
            <li><strong>Raju Lal</strong> <br />Independent Director</li>
            <li><strong>Satish Chander Gupta</strong> <br />Independent Director</li>
          </ul>
        </div>

        {/* Column 2: Key Management Team */}
        <div>
          <h2 className="text-xl font-bold mb-6">KEY MANAGEMENT TEAM</h2>
          <h3 className="font-bold mb-2">INDIA</h3>
          <ul className="space-y-4">
            <li><strong>Ritesh Arora</strong> <br />CEO - India and Far East Business</li>
            <li><strong>Sachin Gupta</strong> <br />Chief Financial Officer</li>
            <li><strong>Palash Aggarwal</strong> <br />Chief Human Resource Officer</li>
            <li><strong>Varun Sharma</strong> <br />Chief Digital Officer</li>
            <li><strong>Sanjeev Uppal</strong> <br />Vice President and Head of Product Delivery</li>
            <li><strong>Manoj Chugh</strong> <br />Vice President and Head of Raw Material Procurement</li>
            <li><strong>Amit Mehta</strong> <br />Vice President and Head of Food Business</li>
            <li><strong>Monika Chawla Jagga</strong> <br />Vice President – Finance and Strategy, Company Secretary and Compliance Officer</li>
            <li><strong>K. Ganapathy Subramanian</strong> <br />Vice President and Head of Marketing</li>
            <li><strong>Namit Mehra</strong> <br />Vice President and Head of Ocean Freight Buying</li>
            <li><strong>Anu Sharma</strong> <br />AVP and Head of Legal Affairs</li>
            <li><strong>Arvind Kumar Yadav</strong> <br />AVP and Head - IT</li>
            <li><strong>Rajinder Wadhawan</strong> <br />President - MP Operations</li>
          </ul>
        </div>

        {/* Column 3: LT Foods Americas */}
        <div>
          <h2 className="text-xl font-bold mb-6">LT FOODS - AMERICAS</h2>
          <ul className="space-y-4">
            <li><strong>Abhinav Arora</strong> <br />President</li>
            <li><strong>Mukesh Agrawal</strong> <br />Chief Financial Officer</li>
            <li><strong>Andrew W. Cops</strong> <br />Senior VP – Market, Sales and Strategy</li>
            <li><strong>Shankar Satappagol</strong> <br />Senior VP – Sales, International and Food Service</li>
            <li><strong>Snehedeep Brar</strong> <br />VP – Commercialisation</li>
            <li><strong>Shea Levitch</strong> <br />VP - Human Resources</li>
            <li><strong>Amol Deshpande</strong> <br />VP – Supply Chain</li>
            <li><strong>Dhananjay Nair</strong> <br />Director - Manufacturing and Engineering</li>
            <li><strong>David Mackenzie</strong> <br />Director Procurement</li>
          </ul>
        </div>

      </div>

      {/* Additional Three Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {/* LT FOODS Europe/UK */}
        <div>
          <h2 className="text-xl font-bold mb-6">LT FOODS - EUROPE/UK</h2>
          <ul className="space-y-4">
            <li><strong>Vikas Magoon</strong> <br />Director</li>
            <li><strong>Aditya Arora</strong> <br />Director</li>
            <li><strong>Anmol Arora</strong> <br />Director</li>
            <li><strong>Anubha Bajaj</strong> <br />Director</li>
            <li><strong>Kamal Poplai</strong> <br />Associate Director - Quality and Assurance</li>
            <li><strong>Mirna Duskan</strong> <br />Human Resources</li>
            <li><strong>Vishal Aggarwal</strong> <br />Finance Controller</li>
            <li><strong>Vaibhav Srivastava</strong> <br />Finance Controller</li>
            <li><strong>Mohit Gupta</strong> <br />Operations</li>
            <li><strong>Oyeyemi Bamisaiye</strong> <br />Quality</li>
          </ul>
        </div>

        {/* LT FOODS Middle East */}
        <div>
          <h2 className="text-xl font-bold mb-6">LT FOODS - MIDDLE EAST</h2>
          <ul className="space-y-4">
            <li><strong>Gursajan Arora</strong> <br />CEO - Middle East Business</li>
            <li><strong>Bouchra Farah</strong> <br />Assistant VP - Marketing</li>
            <li><strong>Vivek Kumar</strong> <br />General Manager - Sales and <br /> Business Development</li>
          </ul>
        </div>

        {/* Nature Bio Foods Limited */}
        <div>
          <h2 className="text-xl font-bold mb-6">NATURE BIO FOODS LIMITED</h2>
          <ul className="space-y-4">
            <li><strong>Rohan Grover</strong> <br />Director</li>
            <li><strong>Rajesh Jaswal</strong> <br />Vice President - Operations</li>
            <li><strong>Christiane Bell</strong> <br />Director - Sales</li>
            <li><strong>Alok Kumar</strong> <br />Head – Africa Business</li>
            <li><strong>Krishnendu Chattopadhyay</strong> <br />VP Agri Projects</li>
            <li><strong>Dr. Saroj Kumar</strong> <br />GM - Certifications</li>
          </ul>
        </div>
      </div>

      {/* Auditors & Bankers Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        <div>
          <h2 className="text-xl font-bold mb-6">Statutory Auditors</h2>
          <p>MSKA & Associates</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">Internal Auditors</h2>
          <p>Protiviti India Member Private Limited</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">Bankers To The Company</h2>
          <ul className="space-y-2">
            <li>Punjab National Bank (Lead Bank)</li>
            <li>State Bank of India</li>
            <li>ICICI Bank Ltd.</li>
            <li>IndusInd Bank</li>
            <li>HDFC Bank Ltd.</li>
            <li>Bank of Baroda</li>
            <li>Qatar National Bank Q.P.S.C.</li>
            <li>QCTBC Bank Co. Ltd.</li>
            <li>Doha Bank Q.P.S.C</li>
            <li>Union Bank of India</li>
            <li>SBM Bank (India) Ltd.</li>
            <li>Federal Bank Ltd.</li>
            <li>Bank of Baroda</li>
            <li>Mashreq Bank</li>
            <li>Rabobank</li>
            <li>Cooperative Rabo Bank U.A.</li>
            <li>Mechanics Bank</li>
            <li>JP Morgan Bank</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporateInfo;
