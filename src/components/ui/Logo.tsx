/**
 * Privéx logo. The source PNG (3300×2550) holds a black and a burgundy
 * wordmark on a large canvas; this box crops to the burgundy one.
 * Crop numbers are in the 2000×1545 reference frame of that file.
 */
const FRAME_W = 2000;
const BOX = { x: 225, y: 786, w: 1600, h: 340 };

export default function Logo({ className = 'h-9' }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden ${className}`} style={{ aspectRatio: `${BOX.w} / ${BOX.h}` }}>
      <img
        src="/images/logo-privex.png"
        alt="Privéx"
        className="absolute max-w-none mix-blend-multiply"
        style={{
          width: `${(FRAME_W / BOX.w) * 100}%`,
          left: `${(-BOX.x / BOX.w) * 100}%`,
          top: `${(-BOX.y / BOX.h) * 100}%`,
        }}
      />
    </span>
  );
}
