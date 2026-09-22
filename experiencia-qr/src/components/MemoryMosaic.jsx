import React from 'react';
import { motion } from 'framer-motion';

const MemoryMosaic = ({ images = [] }) => {
  return (
    <div style={{ padding: '4rem 1rem', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.5rem',
          color: '#d4af37',
          textAlign: 'center',
          marginBottom: '3rem',
          fontWeight: 'normal'
        }}
      >
        Nuestra Historia, Nuestro Refugio
      </motion.h2>

      <div style={{
        columnCount: window.innerWidth > 800 ? 4 : window.innerWidth > 500 ? 2 : 1,
        columnGap: '1rem',
      }}>
        {images.map((filename, index) => {
          const src = `/fotos/images/${encodeURIComponent(filename)}`;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.2 }}
              style={{
                marginBottom: '1rem',
                breakInside: 'avoid',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <img 
                src={src} 
                alt={`Memoria ${index + 1}`} 
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryMosaic;
