import React from 'react';
import { motion } from 'framer-motion';

const Message = ({ children, delay = 0.5 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.5, ease: "easeOut", delay: delay }}
      style={{
        maxWidth: '700px',
        margin: '6rem auto',
        padding: '3rem',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Message;
