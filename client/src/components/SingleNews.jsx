import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const SingleNews = () => {
  const { id } = useParams(); // URL se news ki ID lega
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/news/${id}`);
        setNews(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, [id]);

  if (!news) return <div className="main-content" style={{padding:'40px', textAlign:'center'}}><h2>Loading Article...</h2></div>;

 // Purana function hata do aur ye naya bana do
const getImage = (cat) => `https://picsum.photos/seed/${cat}${Math.random()}/1000/500`;
  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="breadcrumb"><Link to="/" style={{color:'#D32F2F'}}>HOME</Link> &gt; {news.category.toUpperCase()}</div>
      </div>

      <article style={{maxWidth:'800px', margin:'0 auto', padding:'40px 20px'}}>
        <div className="hero-cat" style={{fontSize:'16px', marginBottom:'10px'}}>{news.category}</div>
        
        <h1 style={{fontFamily:'Oswald', fontSize:'42px', lineHeight:'1.1', margin:'0 0 20px 0', color:'var(--text-dark)'}}>
          {news.title}
        </h1>
        
        <p style={{color:'#888', marginBottom:'30px', fontSize:'14px'}}>
          Published on {new Date(news.date).toLocaleDateString()} at {new Date(news.date).toLocaleTimeString()} | By NewsPoint Desk
        </p>

        <div style={{width:'100%', height:'450px', borderRadius:'10px', overflow:'hidden', marginBottom:'30px'}}>
         <img src={news.image || getImage(news.category)} alt={news.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
        </div>

        <div style={{fontSize:'18px', lineHeight:'1.8', color:'var(--text-dark)', textAlign:'justify'}}>
          {news.content}
        </div>

        <div style={{marginTop:'40px', padding:'20px', background:'var(--bg-light)', borderRadius:'8px', textAlign:'center'}}>
          <Link to="/" style={{color:'#D32F2F', fontWeight:'bold', fontSize:'18px'}}>⬅ BACK TO HOME</Link>
        </div>
      </article>
    </div>
  );
};

export default SingleNews;