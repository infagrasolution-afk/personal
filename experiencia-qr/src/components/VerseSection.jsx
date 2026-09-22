import React from 'react';
import { motion } from 'framer-motion';

const VerseSection = ({ verse, reference, reflection }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{
        maxWidth: '700px',
        margin: '6rem auto',
        padding: '2rem',
        textAlign: 'center',
        background: 'rgba(20, 15, 30, 0.5)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        border: '1px solid rgba(212, 175, 55, 0.3)', // Borde sutilmente dorado
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)'
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '1.4rem', 
          fontStyle: 'italic',
          color: '#d4af37', // Dorado
          lineHeight: '1.6'
        }}>
          "{verse}"
        </p>
        <p style={{
          marginTop: '0.8rem',
          fontWeight: 'bold',
          color: '#e2e8f0',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontSize: '0.9rem'
        }}>
          — {reference}
        </p>
      </div>

      <div style={{
        width: '50px',
        height: '2px',
        background: '#d4af37',
        margin: '0 auto 1.5rem auto',
        opacity: 0.5
      }} />

      <p className="letter-text" style={{ fontSize: '1.1rem', color: '#f8fafc' }}>
        {reflection}
      </p>

      {/* Girasol decorativo flotante en el versículo */}
      <div style={{ position: 'absolute', bottom: '-20px', right: '-15px', fontSize: '3rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))' }}>
        🌻
      </div>
    </motion.div>
  );
};

export default VerseSection;
