

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Menu, X, Star, Coffee, ArrowRight, Heart, Music, Wifi, Zap, Award, Sparkles, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Users, Smile, Coffee as CoffeeIcon, Cake } from 'lucide-react';
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const videoRef = useRef(null);
  const [likedItems, setLikedItems] = useState({});

  // Handle scroll for navbar glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cafeDetails = {
    name: "Zephyr Cafe & Bistro",
    tagline: "Where stories brew & memories steep",
    phone: "+91 98765 43210",
    hours: "7:00 AM - 11:00 PM (Sab din maza ka din)",
    location: "Urban Square, MG Road, Delhi",
    instagram: "zephyr_cafe_delhi",
    vibe: "Calm Chaos, Happy Noise"
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  const toggleLike = (itemId) => {
    setLikedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const menuCategories = [
    {
      title: "Chai Therapy ☕",
      items: [
        { id: 1, name: "Adrak Wali Masala Chai", price: "₹80", desc: "Ghar jaisi feeling, par better ☕", popular: true, insta: true, likes: 142 },
        { id: 2, name: "Kashmiri Kahwa", price: "₹120", desc: "Saffron wali garmi for your soul", popular: true, insta: false, likes: 89 },
        { id: 3, name: "Rose Cardamom Chai", price: "₹95", desc: "Flowers in your cup, love in every sip", popular: false, insta: true, likes: 67 },
        { id: 4, name: "Butter Scotch Cold Coffee", price: "₹180", desc: "Summer ki savior, Insta ki hero", popular: true, insta: true, likes: 156 }
      ]
    },
    {
      title: "Snack Attack 🍟",
      items: [
        { id: 5, name: "Pizza Paratha (Our Secret)", price: "₹220", desc: "Italian meets Delhi, mast combo!", popular: true, insta: true, likes: 203 },
        { id: 6, name: "Loaded Fries with Chutney", price: "₹190", desc: "Crispy, spicy, oh-so-nicey!", popular: true, insta: false, likes: 98 },
        { id: 7, name: "Paneer Tikka Toasties", price: "₹250", desc: "Cheese pull guaranteed, camera ready", popular: false, insta: true, likes: 112 },
        { id: 8, name: "Chocolate Waffles with Berries", price: "₹280", desc: "Breakfast, dessert, or just because", popular: true, insta: true, likes: 187 }
      ]
    },
    {
      title: "Sweet Escapes 🍰",
      items: [
        { id: 9, name: "Red Velvet Cake", price: "₹320", desc: "As red as your ex's flags, but sweeter", popular: true, insta: true, likes: 245 },
        { id: 10, name: "Gulab Jamun Cheesecake", price: "₹280", desc: "Desi meets classy, perfect combo", popular: true, insta: false, likes: 134 },
        { id: 11, name: "Brownie with Ice Cream", price: "₹240", desc: "Warm, gooey, and totally unnecessary (but needed)", popular: false, insta: true, likes: 178 }
      ]
    }
  ];

const videos = [
  {
    id: 1,
    title: "Morning Brew Vibes",
    desc: "7 AM chai sessions with golden hour",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: 2,
    title: "Cafe Chronicles",
    desc: "Weekend hustle and happy chatter",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Baking Magic",
    desc: "Fresh from oven to your table",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  }
];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Tea Artistry",
      desc: "Every cup tells a story"
    },
    {
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Evening Conversations",
      desc: "Where ideas brew"
    },
    {
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Coffee Rituals",
      desc: "Perfecting the pour"
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Fresh Bakes",
      desc: "Morning happiness"
    },
    {
      url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      title: "Reading Nook",
      desc: "Books & brews"
    }
  ];

  const reviews = [
    { 
      name: "Riya Sharma", 
      rating: 5, 
      text: "Yaha ki adrak chai ne meri Monday blues ka ilaaj kar diya! WiFi bhi zabardast, pura presentation yaha finish kiya 😎", 
      date: "3 days ago",
      order: "Adrak Chai + Brownie"
    },
    { 
      name: "Arjun Mehta", 
      rating: 5, 
      text: "Cafe ka vibe alag hai yaar! Perfect for working alone or gossiping with friends. Pizza Paratha must try! 🍕", 
      date: "1 week ago",
      order: "Pizza Paratha x2"
    },
    { 
      name: "Neha Kapoor", 
      rating: 4, 
      text: "Photography ke liye perfect lighting! Every corner is Instagrammable. Coffee art bhi zabardast! 📸", 
      date: "2 weeks ago",
      order: "Latte Art Coffee"
    },
    { 
      name: "Vikram Singh", 
      rating: 5, 
      text: "Board games available! Friends ke saath 4 ghante baithe, kisi ne kuch nahi kaha. True customer love! ♥️", 
      date: "Yesterday",
      order: "Snacks Platter"
    }
  ];

  const stats = [
    { icon: CoffeeIcon, value: "5000+", label: "Cups Served Weekly" },
    { icon: Users, value: "200+", label: "Happy Souls Daily" },
    { icon: Smile, value: "4.8", label: "Google Rating" },
    { icon: Cake, value: "50+", label: "Menu Items" }
  ];

  const getMenuImage = (categoryTitle, itemIndex) => {
  const images = {
    "Chai Therapy": [
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600",
      "https://images.unsplash.com/photo-1561047029-3000c68339ca?w-600",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w-600",
      "https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?w=600"
    ],
    "Snack Attack": [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600",
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600"
    ],
    "Sweet Escapes": [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600",
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600"
    ]
  };
  
  const categoryKey = Object.keys(images).find(key => categoryTitle.includes(key));
  return images[categoryKey]?.[itemIndex] || "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600";
};

  return (
    <div className="app">
      {/* Video Background */}
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="bg-video"
        >
          {/* <source src="https://www.pexels.com/download/video/1776352/" type="video/mp4" />
           */}
           <source src="../public/cafe-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="video-controls">
          <button className="video-btn" onClick={toggleVideo}>
            {playing ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="video-btn" onClick={toggleMute}>
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <div className="logo">
            ZEPHYR <span className="logo-dot">.</span>
            <span className="logo-sub">Cafe & Bistro</span>
          </div>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}><Sparkles size={16} /> Home</a>
          <a href="#videos" onClick={() => setIsMenuOpen(false)}><Play size={16} /> Videos</a>
          <a href="#menu" onClick={() => setIsMenuOpen(false)}><Coffee size={16} /> Menu</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}><Award size={16} /> Gallery</a>
          <a href="#story" onClick={() => setIsMenuOpen(false)}><Users size={16} /> Story</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}><MapPin size={16} /> Visit</a>
        </div>

        <div className="nav-actions">
          <button className="btn-reserve">Book Table</button>
          <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} /> Since 2018 • Delhi's Favorite Hangout
          </div>
          
          <h1 className="hero-title">
            Fresh Brews &<br />
            <span className="hero-highlight">Good News</span>
          </h1>
          
          <p className="hero-tagline">
            Where every cup is brewed with love, every snack served with a smile, 
            and every conversation feels like home. <span className="hinglish">Chai pe charcha guaranteed! ☕</span>
          </p>
          
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon className="stat-icon" size={20} />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="hero-cta">
            <button className="btn-primary">
              Explore Menu <ArrowRight size={20} />
            </button>
            <a href="#videos" className="btn-secondary">
              <Play size={18} /> Watch Our Story
            </a>
          </div>
        </div>

        {/* Floating Image Cards */}
        <div className="floating-images">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Burger" 
            className="floating-img img-1"
          />
          <img 
            src="https://images.unsplash.com/photo-1575865980857-59d3d5c48c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80" 
            alt="Coffee" 
            className="floating-img img-2"
          />
          <img 
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
            alt="Salad" 
            className="floating-img img-3"
          />
        </div>
      </section>

      {/* Video Showcase */}
      <section id="videos" className="video-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Behind the Scenes</span>
            <h2>Cafe Life in 4K 🎥</h2>
            <p className="section-desc">See what makes our mornings special</p>
          </div>
          
          <div className="video-player-container">
            <div className="video-main">
              <video 
                controls
                autoPlay
                muted={muted}
                className="featured-video"
              >
                <source src={videos[activeVideo].url} type="video/mp4" />
              </video>
              <div className="video-info">
                <h3>{videos[activeVideo].title}</h3>
                <p>{videos[activeVideo].desc}</p>
              </div>
            </div>
            
            <div className="video-thumbnails">
              {videos.map((video, index) => (
                <div 
                  key={video.id}
                  className={`thumbnail ${activeVideo === index ? 'active' : ''}`}
                  onClick={() => setActiveVideo(index)}
                >
                  <div className="thumbnail-overlay">
                    <Play size={20} />
                  </div>
                  <div className="thumbnail-label">Video {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Food that speaks to your soul</span>
            <h2>Menu Magic ✨</h2>
            <p className="section-desc hinglish">Khaane peene ka alag hi mahaul hai!</p>
          </div>
          
          <div className="menu-tabs">
            {menuCategories.map((category, index) => (
              <button 
                key={index}
                className="menu-tab"
                onClick={() => document.getElementById(`category-${index}`).scrollIntoView({ behavior: 'smooth' })}
              >
                {category.title}
              </button>
            ))}
          </div>
          
          {menuCategories.map((category, catIndex) => (
            <div key={catIndex} id={`category-${catIndex}`} className="menu-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="menu-grid">
   {category.items.map((item, itemIndex) => (
  <div key={item.id} className="menu-item-card">
    <div className="menu-item-image">
      {/* Replace the broken URL with the getMenuImage function */}
      <img 
        src={getMenuImage(category.title, itemIndex)} 
        alt={item.name}
      />
      
      <div className="item-badges">
        {item.popular && <span className="badge popular">🔥 Popular</span>}
        {item.insta && <span className="badge insta">📸 Instagrammable</span>}
      </div>
      <button 
        className="like-btn"
        onClick={() => toggleLike(item.id)}
      >
        <Heart 
          size={20} 
          fill={likedItems[item.id] ? "#ff4757" : "none"}
          stroke={likedItems[item.id] ? "#ff4757" : "#fff"}
        />
        <span className="like-count">{item.likes + (likedItems[item.id] ? 1 : 0)}</span>
      </button>
    </div>
    
    <div className="menu-item-content">
      <div className="item-header">
        <h4>{item.name}</h4>
        <span className="item-price">{item.price}</span>
      </div>
      <p className="item-desc">{item.desc}</p>
      <div className="item-footer">
        <button className="add-to-cart">+ Add to Order</button>
        <button className="customize-btn">Customize</button>
      </div>
    </div>
  </div>
))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Visual Feast</span>
            <h2>Our Aesthetic World 📸</h2>
            <p className="section-desc">Every corner tells a story, every table has memories</p>
          </div>
          
          <div className="gallery-main">
            <img 
              src={galleryImages[activeGallery].url} 
              alt={galleryImages[activeGallery].title}
              className="gallery-featured"
            />
            <div className="gallery-info">
              <h3>{galleryImages[activeGallery].title}</h3>
              <p>{galleryImages[activeGallery].desc}</p>
              <div className="gallery-nav">
                <button 
                  className="nav-btn"
                  onClick={() => setActiveGallery((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="gallery-dots">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${activeGallery === index ? 'active' : ''}`}
                      onClick={() => setActiveGallery(index)}
                    />
                  ))}
                </div>
                <button 
                  className="nav-btn"
                  onClick={() => setActiveGallery((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.slice(0, 4).map((img, index) => (
              <div 
                key={index}
                className="gallery-thumb"
                onClick={() => setActiveGallery(index)}
              >
                <img src={img.url} alt={img.title} />
                <div className="thumb-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Real People, Real Stories</span>
            <h2>Customer Love 💌</h2>
            <p className="section-desc hinglish">Log kya kehte hain, aap bhi suniye!</p>
          </div>
          
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <div className="review-stars">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <div className="review-order">
                    <Coffee size={14} />
                    <span>{review.order}</span>
                  </div>
                </div>
                
                <p className="review-text">"{review.text}"</p>
                
                <div className="review-footer">
                  <span className="review-date">{review.date}</span>
                  <div className="review-actions">
                    <button className="action-btn">Helpful</button>
                    <button className="action-btn">Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h2>ZEPHYR.</h2>
                <p className="footer-tagline">{cafeDetails.tagline}</p>
                <p className="footer-desc">
                  A place where time slows down, conversations flow freely, 
                  and every sip brings comfort. Come, be part of our story.
                </p>
                
                <div className="social-links">
                  <a href="#" className="social-link">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-link">
                    <span className="social-icon">📘</span>
                  </a>
                  <a href="#" className="social-link">
                    <span className="social-icon">🐦</span>
                  </a>
                  <a href="#" className="social-link">
                    <span className="social-icon">📌</span>
                  </a>
                </div>
              </div>
              
              <div className="footer-links">
                <div className="link-group">
                  <h4>Quick Links</h4>
                  <a href="#menu">Menu</a>
                  <a href="#gallery">Gallery</a>
                  <a href="#story">Our Story</a>
                  <a href="#contact">Locations</a>
                </div>
                
                <div className="link-group">
                  <h4>Information</h4>
                  <a href="#">Careers</a>
                  <a href="#">Events</a>
                  <a href="#">Blog</a>
                  <a href="#">Franchise</a>
                </div>
              </div>
              
              <div className="footer-contact">
                <h4>Visit Us</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin size={18} />
                    <span>{cafeDetails.location}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} />
                    <span>{cafeDetails.phone}</span>
                  </div>
                  <div className="contact-item">
                    <Clock size={18} />
                    <span>{cafeDetails.hours}</span>
                  </div>
                </div>
                
                <div className="newsletter">
                  <h5>Stay Updated</h5>
                  <div className="newsletter-input">
                    <input type="email" placeholder="Your email address" />
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>© 2024 Zephyr Cafe & Bistro. All rights reserved. Made with ❤️ in Delhi</p>
              <div className="footer-extra">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;