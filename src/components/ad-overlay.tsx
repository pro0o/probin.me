'use client'
import { useEffect, useState } from "react";

export function AdOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  
  useEffect(() => {
    // Start the appearing transition
    setIsRendered(true);
    
    // Delay setting isVisible to allow DOM to render first
    setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    // Set timer for auto-hiding
    const timer = setTimeout(() => {
      // Start disappearing transition
      setIsVisible(false);
      
      // Remove from DOM after transition completes
      setTimeout(() => {
        setIsRendered(false);
      }, 500); // Match this with CSS transition duration
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSkip = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      setIsRendered(false);
    }, 500); 
  };
  
  if (!isRendered) return null;
  return (
    <div
      className={`fixed inset-x-0 top-0 flex justify-center bg-zinc-700 z-50 h-auto transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)'
      }}
    >
      <div className="relative w-96 h-96">
        <img
          src="/ads/ghilbi.gif"
          alt="Advertisement"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      <button
        onClick={handleSkip}
        className="absolute bottom-4 right-4 px-4 py-2 bg-white text-zinc-900 text-md transition-opacity duration-100 hover:bg-accent"
      >
        Skip this Ad.
      </button>
    </div>
  );
}