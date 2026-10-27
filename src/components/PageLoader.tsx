import { useEffect, useState } from 'react';
import Logo from './ui/Logo';
import { SERVICES } from '../data';

const IMAGES = Array.from(
  new Set([
    '/images/hero-natural-nails.jpg',
    '/images/ari-marquez-fundadora.jpg',
    ...SERVICES.map((s) => s.image).filter((src): src is string => !!src),
  ]),
);

const MIN_VISIBLE_MS = 700;
// Never trap the visitor behind the loader on a slow connection.
const MAX_WAIT_MS = 10000;

function loadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = src;
  });
}

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const total = IMAGES.length + 1; // +1 for fonts
    let loaded = 0;
    let finished = false;
    const tick = () => setProgress(++loaded / total);

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(1);
      const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - start));
      setTimeout(() => setDone(true), wait + 250);
    };

    document.body.style.overflow = 'hidden';
    Promise.all([
      document.fonts.ready.then(tick),
      ...IMAGES.map((src) => loadImage(src).then(tick)),
    ]).then(finish);
    const timeout = setTimeout(finish, MAX_WAIT_MS);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!done) return;
    document.body.style.overflow = '';
    const t = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <div
      role="progressbar"
      aria-label="Loading Privéx Studio"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className={`fixed inset-0 z-[100] bg-[#FAFAFA] flex flex-col items-center justify-center px-8 transition-opacity duration-600 ease-out ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="animate-fadeIn flex flex-col items-center">
        <Logo className="h-12 sm:h-16" />
        <div className="mt-8 w-40 sm:w-52 h-px bg-[#E8DDD3] overflow-hidden">
          <div
            className="h-full bg-[#4A0D1A] origin-left transition-transform duration-500 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#726058] font-light">
          Birmingham, Alabama
        </span>
      </div>
    </div>
  );
}
