import React from 'react';
import { motion } from 'framer-motion';
import Message from './components/Message';
import PhotoSection from './components/PhotoSection';
import VerseSection from './components/VerseSection';
import MemoryMosaic from './components/MemoryMosaic';
import { ChevronDown } from 'lucide-react';
import photosList from './photosList.json';
import './index.css';

// Helper para obtener URLs codificadas
const getPhotoUrls = (start, count) => {
  return photosList.slice(start, start + count).map(name => `/fotos/images/${encodeURIComponent(name)}`);
};

function App() {
  // Distribuimos las fotos
  const section1Photos = getPhotoUrls(0, 3);
  const section2Photos = getPhotoUrls(3, 3);
  const section3Photos = getPhotoUrls(6, 3);
  const section4Photos = getPhotoUrls(9, 3);
  const mosaicPhotos = photosList.slice(12); // El resto al mosaico final

  return (
    <>
      <div className="starry-night">
        <div className="star"></div>
        <div className="star2"></div>
      </div>
      <div className="moon"></div>
      
      <main style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem',
        overflowX: 'hidden'
      }}>
        
        {/* Intro */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <h1 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: '2.5rem', 
              color: '#d4af37', 
              textAlign: 'center',
              fontWeight: 'normal',
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Para mi amor incondicional
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ opacity: { duration: 2, delay: 2 }, y: { repeat: Infinity, duration: 2 } }}
            style={{ marginTop: '4rem', color: 'rgba(255,255,255,0.5)' }}
          >
            <ChevronDown size={40} strokeWidth={1} />
          </motion.div>
        </div>

        {/* Sección 1: El arrepentimiento y la luz */}
        <Message delay={0.2}>
          <p className="letter-text">
            Mi amor... Sé que mis acciones rompieron algo invaluable. Y créeme cuando te digo que no hay día que no me duela profundamente en el alma haber sido yo quien trajo lágrimas a tus ojos.
          </p>
          <br/>
          <p className="letter-text">
            No busco excusas. Solo quiero que sepas que en medio de esta oscuridad, he encontrado una luz que me está haciendo despertar.
          </p>
        </Message>

        <PhotoSection images={section1Photos} />

        <VerseSection 
          verse="Cercano está el Señor a los quebrantados de corazón; y salva a los contritos de espíritu."
          reference="Salmos 34:18"
          reflection="Mi corazón se quebró al ver el tuyo así, pero Dios nos sostiene. Él está trabajando en mí, transformando mi arrepentimiento en un cambio real. He aprendido que solo a través de Su guía puedo ser el hombre que realmente mereces."
        />

        {/* Sección 2: La fuerza en Dios */}
        <Message delay={0.2}>
          <p className="letter-text">
            Me he dado cuenta de que, por mis propias fuerzas, soy imperfecto y débil. Pero Dios, en Su infinita gracia, me ha abrazado y me está enseñando a amar de verdad.
          </p>
          <br/>
          <p className="letter-text">
            Él está sanando mis grietas para que yo pueda, si me lo permites algún día, ayudar a sanar las tuyas. Aún me falta camino, pero la transformación está presente y es viva.
          </p>
        </Message>

        <PhotoSection images={section2Photos} />

        <VerseSection 
          verse="Antes, en todas estas cosas somos más que vencedores por medio de aquel que nos amó."
          reference="Romanos 8:37"
          reflection="Ninguna barrera es demasiado alta, ningún abismo es demasiado profundo cuando Dios está en el centro. Su amor inagotable es el ancla que me da esperanza. Sé que con Él podemos vencer y superar cualquier obstáculo que hayamos enfrentado."
        />

        {/* Sección 3: Cordón de tres dobleces */}
        <Message delay={0.2}>
          <p className="letter-text">
            Sé que la confianza se reconstruye ladrillo a ladrillo, y estoy dispuesto a caminar, esperarte y demostrarte mi cambio todo el tiempo que sea necesario.
          </p>
          <br/>
          <p className="letter-text">
            No me rendiré, porque te valoro, te respeto y <span className="highlight">te amo incondicionalmente</span>.
          </p>
        </Message>

        <PhotoSection images={section3Photos} />

        <VerseSection 
          verse="Cordón de tres dobleces no se rompe pronto."
          reference="Eclesiastés 4:12"
          reflection="Tú, yo, y Dios en medio de nosotros. Ese es el único camino que quiero recorrer de ahora en adelante. Te amo con toda el alma, y esperaré con paciencia y fe el día en que podamos volver a sonreír juntos."
        />

        <PhotoSection images={section4Photos} />

        {/* El gran mosaico final con todas las fotos */}
        {mosaicPhotos.length > 0 && <MemoryMosaic images={mosaicPhotos} />}

        <div style={{ height: '30vh' }}></div> {/* Espacio final */}
      </main>
    </>
  );
}

export default App;
