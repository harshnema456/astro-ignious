export default function PeacehubLogo({ size = 32, color = '#4f46e5' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lotus flower logo */}
      <path d="M32 8C32 8 24 20 24 32C24 38 27 42 32 44C37 42 40 38 40 32C40 20 32 8 32 8Z" fill={color} opacity="0.9"/>
      <path d="M20 16C20 16 14 28 18 38C20 42 24 44 28 44C26 40 24 36 24 32C24 24 20 16 20 16Z" fill={color} opacity="0.7"/>
      <path d="M44 16C44 16 50 28 46 38C44 42 40 44 36 44C38 40 40 36 40 32C40 24 44 16 44 16Z" fill={color} opacity="0.7"/>
      <path d="M12 24C12 24 8 34 14 42C17 46 22 46 26 44C22 42 18 40 18 38C16 32 12 24 12 24Z" fill={color} opacity="0.5"/>
      <path d="M52 24C52 24 56 34 50 42C47 46 42 46 38 44C42 42 46 40 46 38C48 32 52 24 52 24Z" fill={color} opacity="0.5"/>
      <path d="M28 44C28 44 30 52 32 56C34 52 36 44 36 44C34 46 30 46 28 44Z" fill={color} opacity="0.8"/>
    </svg>
  );
}
