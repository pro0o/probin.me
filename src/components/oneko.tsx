'use client'

import { useEffect, useRef } from 'react';

interface OnekoProps {
  initialVariant?: string;
  initialKuroNeko?: boolean;
  initialForceSleep?: boolean;
}

const Oneko: React.FC<OnekoProps> = ({
  initialVariant = 'classic',
  initialKuroNeko = false,
  initialForceSleep = false,
}) => {
  const nekoRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !nekoRef.current) return;
    
    let nekoPosX = typeof window !== 'undefined' ? window.innerWidth / 2 : 32;
    let nekoPosY = typeof window !== 'undefined' ? window.innerHeight / 2 : 32;
    
    let mousePosX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    let mousePosY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let forceSleep = initialForceSleep;
    let grabbing = false;
    let grabStop = true;
    let nudge = false;
    let kuroNeko = initialKuroNeko;
    let variant = initialVariant;

    const nekoEl = nekoRef.current;
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;

    // Parse from localStorage with fallback
    function parseLocalStorage(key: string, fallback: any) {
      try {
        const value = JSON.parse(localStorage.getItem(`oneko:${key}`) || 'null');
        return typeof value === typeof fallback ? value : fallback;
      } catch (e) {
        console.error(e);
        return fallback;
      }
    }

    // Try to load saved settings
    variant = parseLocalStorage("variant", initialVariant);

    const nekoSpeed = 20;
    const variants = [
      ["classic", "Classic"],
    ];

    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };
    
    // Get keys with 2 or more sprites
    const keys = Object.keys(spriteSets).filter((key) => spriteSets[key].length > 1);
    const usedKeys = new Set<string>();

    // Initialize neko element styles
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.backgroundImage = `url('/oneko-classic.gif')`;
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.filter = kuroNeko ? "invert(100%)" : "none";
    nekoEl.style.zIndex = "99";
    nekoEl.style.opacity = "0.7";

    function getSprite(name: string, frame: number): [number, number] {
      const spriteSet = spriteSets[name];
      return spriteSet[frame % spriteSet.length];
    }

    function setSprite(name: string, frame: number): void {
      const sprite = getSprite(name, frame);
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation(): void {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function sleep(): void {
      forceSleep = !forceSleep;
      nudge = false;
      localStorage.setItem("oneko:forceSleep", JSON.stringify(forceSleep));
      
      if (!forceSleep) {
        resetIdleAnimation();
        return;
      }

      // If you have a progress bar or specific element to sleep on, add your logic here
      // For general implementation, we'll make it sleep in the center
      mousePosX = window.innerWidth / 2;
      mousePosY = window.innerHeight / 2;
    }

    function idle(): void {
      idleTime += 1;

      // every ~ 20 seconds
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        let availableIdleAnimations = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) {
          availableIdleAnimations.push("scratchWallW");
        }
        if (nekoPosY < 32) {
          availableIdleAnimations.push("scratchWallN");
        }
        if (nekoPosX > window.innerWidth - 32) {
          availableIdleAnimations.push("scratchWallE");
        }
        if (nekoPosY > window.innerHeight - 32) {
          availableIdleAnimations.push("scratchWallS");
        }
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      if (forceSleep) {
        idleAnimation = "sleeping";
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8 && nudge && forceSleep) {
            setSprite("idle", 0);
            break;
          } else if (nudge) {
            nudge = false;
            resetIdleAnimation();
          }
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192 && !forceSleep) {
            resetIdleAnimation();
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame(): void {
      frameCount += 1;

      if (grabbing) {
        grabStop && setSprite("alert", 0);
        return;
      }

      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // Cat has to sleep on top of the target position
      if (forceSleep && Math.abs(diffY) < nekoSpeed && Math.abs(diffX) < nekoSpeed) {
        nekoPosX = mousePosX;
        nekoPosY = mousePosY;
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;

        idle();
        return;
      }

      if ((distance < nekoSpeed || distance < 48) && !forceSleep) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        // count down after being alerted before moving
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    // Event listeners
    const mouseMoveHandler = (e: MouseEvent) => {
      if (forceSleep) return;
      mousePosX = e.clientX;
      mousePosY = e.clientY;
    };

    const mouseDownHandler = (e: MouseEvent) => {
      if (e.button !== 0) return;
      grabbing = true;
      let startX = e.clientX;
      let startY = e.clientY;
      let startNekoX = nekoPosX;
      let startNekoY = nekoPosY;
      let grabInterval: number | null = null;

      const mousemove = (e: MouseEvent) => {
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        // Scratch in the opposite direction of the drag
        if (absDeltaX > absDeltaY && absDeltaX > 10) {
          setSprite(deltaX > 0 ? "scratchWallW" : "scratchWallE", frameCount);
        } else if (absDeltaY > absDeltaX && absDeltaY > 10) {
          setSprite(deltaY > 0 ? "scratchWallN" : "scratchWallS", frameCount);
        }

        if (grabStop || absDeltaX > 10 || absDeltaY > 10 || Math.sqrt(deltaX ** 2 + deltaY ** 2) > 10) {
          grabStop = false;
          clearTimeout(grabInterval as any);
          grabInterval = window.setTimeout(() => {
            grabStop = true;
            nudge = false;
            startX = e.clientX;
            startY = e.clientY;
            startNekoX = nekoPosX;
            startNekoY = nekoPosY;
          }, 150) as unknown as number;
        }

        nekoPosX = startNekoX + e.clientX - startX;
        nekoPosY = startNekoY + e.clientY - startY;
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
      };

      const mouseup = () => {
        grabbing = false;
        nudge = true;
        resetIdleAnimation();
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      };

      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);
    };

    const contextMenuHandler = (e: MouseEvent) => {
      e.preventDefault();
      kuroNeko = !kuroNeko;
      localStorage.setItem("oneko:kuroneko", JSON.stringify(kuroNeko));
      nekoEl.style.filter = kuroNeko ? "invert(100%)" : "none";
    };

    const dblClickHandler = () => {
      sleep();
    };

    const resizeHandler = () => {
      if (forceSleep) {
        forceSleep = false;
        sleep();
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", mouseMoveHandler);
    nekoEl.addEventListener("mousedown", mouseDownHandler);
    nekoEl.addEventListener("contextmenu", contextMenuHandler);
    nekoEl.addEventListener("dblclick", dblClickHandler);
    window.addEventListener("resize", resizeHandler);

    // Start animation loop
    intervalRef.current = window.setInterval(frame, 100);

    // Apply initial sleep if needed
    if (forceSleep) {
      sleep();
    }

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      nekoEl.removeEventListener("mousedown", mouseDownHandler);
      nekoEl.removeEventListener("contextmenu", contextMenuHandler);
      nekoEl.removeEventListener("dblclick", dblClickHandler);
      window.removeEventListener("resize", resizeHandler);
      
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [initialForceSleep, initialKuroNeko, initialVariant]);

  return <div ref={nekoRef} id="oneko" />;
};

export default Oneko;