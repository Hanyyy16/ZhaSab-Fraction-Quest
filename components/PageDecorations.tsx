'use client';

// Mario Mushroom SVG Component
function MarioMushroom({ size = 50, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
      {/* Mushroom cap - red dome */}
      <ellipse cx="50" cy="40" rx="45" ry="35" fill="#E52521" />
      {/* White spots on cap */}
      <ellipse cx="50" cy="25" rx="18" ry="14" fill="white" />
      <ellipse cx="25" cy="40" rx="12" ry="10" fill="white" />
      <ellipse cx="75" cy="40" rx="12" ry="10" fill="white" />
      {/* Mushroom stem - beige/tan color */}
      <ellipse cx="50" cy="75" rx="25" ry="20" fill="#F5DEB3" />
      {/* Eyes on stem */}
      <ellipse cx="40" cy="72" rx="4" ry="6" fill="#1a1a1a" />
      <ellipse cx="60" cy="72" rx="4" ry="6" fill="#1a1a1a" />
      {/* Highlight on eyes */}
      <ellipse cx="41" cy="70" rx="1.5" ry="2" fill="white" />
      <ellipse cx="61" cy="70" rx="1.5" ry="2" fill="white" />
      {/* Shadow under cap */}
      <path d="M25,55 Q50,65 75,55" stroke="#D4A574" strokeWidth="3" fill="none" />
    </svg>
  );
}

export default function PageDecorations() {
  return (
    <>
      {/* Bottom left decorations */}
      <div className="fixed bottom-0 left-0 z-0 pointer-events-none flex items-end gap-2">
        {/* Small tree */}
        <svg width="60" height="80" viewBox="0 0 60 80" className="mb-0">
          {/* Tree trunk */}
          <rect x="25" y="50" width="10" height="30" fill="#8B4513" />
          {/* Tree foliage layers */}
          <ellipse cx="30" cy="45" rx="25" ry="20" fill="#228B22" />
          <ellipse cx="30" cy="30" rx="20" ry="18" fill="#2E8B2E" />
          <ellipse cx="30" cy="18" rx="15" ry="15" fill="#32CD32" />
        </svg>
        {/* Mushroom */}
        <MarioMushroom size={50} className="mb-2" />
      </div>

      {/* Bottom right decorations */}
      <div className="fixed bottom-0 right-0 z-0 pointer-events-none flex items-end gap-2">
        {/* Mushroom */}
        <MarioMushroom size={45} className="mb-2" />
        {/* Small tree */}
        <svg width="70" height="90" viewBox="0 0 70 90" className="mb-0">
          {/* Tree trunk */}
          <rect x="30" y="55" width="12" height="35" fill="#8B4513" />
          {/* Tree foliage layers */}
          <ellipse cx="36" cy="50" rx="28" ry="22" fill="#228B22" />
          <ellipse cx="36" cy="33" rx="22" ry="20" fill="#2E8B2E" />
          <ellipse cx="36" cy="18" rx="16" ry="16" fill="#32CD32" />
        </svg>
      </div>

      {/* Top left small tree */}
      <div className="fixed top-20 left-4 z-0 pointer-events-none opacity-70">
        <svg width="40" height="55" viewBox="0 0 40 55">
          <rect x="16" y="35" width="8" height="20" fill="#8B4513" />
          <ellipse cx="20" cy="30" rx="18" ry="14" fill="#228B22" />
          <ellipse cx="20" cy="20" rx="14" ry="12" fill="#2E8B2E" />
          <ellipse cx="20" cy="12" rx="10" ry="10" fill="#32CD32" />
        </svg>
      </div>

      {/* Small mushroom decorations scattered */}
      <div className="fixed bottom-20 left-20 z-0 pointer-events-none opacity-60">
        <MarioMushroom size={30} />
      </div>

      <div className="fixed bottom-32 right-24 z-0 pointer-events-none opacity-50">
        <MarioMushroom size={25} />
      </div>

      {/* Additional small tree on right side */}
      <div className="fixed top-32 right-8 z-0 pointer-events-none opacity-60">
        <svg width="35" height="50" viewBox="0 0 35 50">
          <rect x="14" y="32" width="7" height="18" fill="#8B4513" />
          <ellipse cx="17" cy="28" rx="15" ry="12" fill="#228B22" />
          <ellipse cx="17" cy="18" rx="12" ry="10" fill="#2E8B2E" />
          <ellipse cx="17" cy="10" rx="9" ry="9" fill="#32CD32" />
        </svg>
      </div>

      {/* Grass at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none">
        <svg width="100%" height="20" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,20 Q5,10 10,20 Q15,5 20,20 Q25,12 30,20 Q35,8 40,20 Q45,15 50,20 Q55,10 60,20 Q65,5 70,20 Q75,12 80,20 Q85,8 90,20 Q95,15 100,20 L100,20 L0,20 Z" fill="#90EE90" />
        </svg>
      </div>
    </>
  );
}
