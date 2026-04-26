import Link from 'next/link';
import PeacehubLogo from './PeacehubLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <PeacehubLogo size={26} />
            <span className={styles.logoText}>PEACEHUB</span>
          </div>
          <p>Your mental wellness<br/>is our priority.</p>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Resources</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className={styles.col}>
          <h4>Support</h4>
          <ul>
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Community Guidelines</Link></li>
          </ul>
        </div>

        {/* Help Box */}
        <div className={styles.helpBox}>
          <h4>You are not alone</h4>
          <p>If you are in crisis or need immediate help, please contact a helpline in your area.</p>
          <button className={styles.helpBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Find Help Now
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2024 PeaceHub. All rights reserved.
      </div>
    </footer>
  );
}
