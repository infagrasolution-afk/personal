import React from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const PhotoSection = ({ images = [] }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      margin: '6rem 0',
      padding: '0 1rem'
    }}>
      {images.map((src, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: index * 0.3, ease: "easeOut" }}
          style={{
            position: 'relative',
            width: '280px',
            height: '350px',
            borderRadius: '16px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Girasol Decorativo Esquina Superior */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
            🌻
          </div>
          
          <img 
            src={src} 
            alt={`Momento ${index + 1}`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          
          {/* Girasol Decorativo Esquina Inferior */}
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 10, fontSize: '2rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
            🌻
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoSection;
