'use client';
import Link from 'next/link';
import PeacehubLogo from './PeacehubLogo';
import styles from './Navbar.module.css';

export default function Navbar({ variant = 'default' }) {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <PeacehubLogo size={30} />
        <span className={styles.brandText}>PEACEHUB</span>
      </Link>

      {variant === 'default' && (
        <div className={styles.links}>
          <Link href="/#about">About</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#resources">Resources</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      )}

      <div className={styles.actions}>
        {variant === 'signup' ? (
          <span className={styles.authPrompt}>
            Already have an account?{' '}
            <Link href="/" className={styles.signInLink}>Sign In</Link>
          </span>
        ) : (
          <Link href="/signup" className={styles.signInBtn}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
