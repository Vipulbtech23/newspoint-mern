import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Subscription = () => {
  const handleSubscribe = () => {
    // Abhi payment gateway nahi hai, isliye alert denge
    alert("Payment gateway integration is pending. You will be redirected to Razorpay later!");
  };

  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="breadcrumb"><Link to="/" style={{color:'#D32F2F'}}>HOME</Link> &gt; SUBSCRIPTION PLANS</div>
      </div>

      <div style={{maxWidth: '900px', margin: '40px auto', padding: '0 20px', textAlign: 'center'}}>
        
        <h1 style={{fontFamily:'Oswald', fontSize:'40px', color:'var(--text-dark)', margin:'0 0 10px 0'}}>
          Unlock Premium NewsPoint
        </h1>
        <p style={{color:'#666', fontSize:'18px', marginBottom:'50px'}}>
          Get unlimited access to exclusive journalism, in-depth analysis, and ad-free reading.
        </p>

        {/* Pricing Card */}
        <div className="admin-card" style={{maxWidth: '450px', margin: '0 auto', padding:'40px', position:'relative', overflow:'hidden'}}>
          
          {/* Popular Badge */}
          <div style={{position:'absolute', top:'20px', right:'-30px', background:'var(--brand-red)', color:'white', padding:'5px 40px', transform:'rotate(45deg)', fontSize:'12px', fontWeight:'bold'}}>
            MOST POPULAR
          </div>

          <h2 style={{fontFamily:'Oswald', margin:'20px 0 10px 0', color:'var(--text-dark)'}}>Whole Package</h2>
          <p style={{color:'#888', fontSize:'14px', marginBottom:'20px'}}>Best value for true news lovers</p>
          
          <div style={{marginBottom:'30px'}}>
            <span style={{fontSize:'50px', fontWeight:'bold', color:'var(--brand-red)'}}>₹599</span>
            <span style={{fontSize:'18px', color:'#666'}}> / year</span>
          </div>

          {/* Benefits List */}
          <div style={{textAlign:'left', marginBottom:'30px', lineHeight:'2.2'}}>
            <p>✅ Ad-Free Reading Experience</p>
            <p>✅ Access to Exclusive Premium Articles</p>
            <p>✅ Early Access to Breaking News Alerts</p>
            <p>✅ Daily E-Paper PDF Download</p>
            <p>✅ Access to Historical News Archives</p>
            <p>✅ Special Editorials & Expert Opinions</p>
          </div>

          <button 
            onClick={handleSubscribe} 
            className="btn-publish" 
            style={{width:'100%', padding:'16px', fontSize:'18px', borderRadius:'8px'}}
          >
            Subscribe Now - ₹599
          </button>
          
          <p style={{fontSize:'12px', color:'#999', marginTop:'15px'}}>
            *Secure payment powered by Razorpay. Auto-renews yearly.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Subscription;