import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const photos = [
  // Puedes cambiar estas rutas por las fotos reales que agregues a la carpeta public/fotos
  // Por ejemplo: '/fotos/foto1.jpg'
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop'
];

const PhotoGallery = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}
    >
      {photos.map((src, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05 }}
          style={{
            position: 'relative',
            width: '280px',
            height: '350px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Margarita Decorativa Esquina Superior */}
          <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, color: '#fefefe' }}>
            <Flower2 size={28} strokeWidth={1.5} />
          </div>
          
          <img 
            src={src} 
            alt={`Momento ${index + 1}`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          
          {/* Margarita Decorativa Esquina Inferior */}
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: 10, color: '#fefefe' }}>
            <Flower2 size={28} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PhotoGallery;
