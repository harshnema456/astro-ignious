import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'PeaceHub - A Journey to Mental Wellness',
  description: 'Discover the support, tools, and community you need to feel better, every day.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ====== HERO SECTION ====== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="0">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            <span>You matter. You are enough.</span>
          </div>

          <h1 className={styles.heroTitle}>
            A Journey to<br />Mental <span className={styles.heroHighlight}>Wellness</span>
          </h1>

          <p className={styles.heroDesc}>
            Discover the support, tools, and community<br />
            you need to feel better, every day.
          </p>

          <Link href="/signup" className={styles.heroBtn}>
            Sign In to Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16l4-4-4-4"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          </Link>

          <div className={styles.heroPrivacy}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>Your privacy is 100% protected</span>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImageWrap}>
            <Image src="/assets/images/hero-woman.png" alt="Woman enjoying nature" width={420} height={520} className={styles.heroImg} priority />
          </div>

          <div className={styles.welcomeCard}>
            <div className={styles.welcomeThumb}>
              <Image src="/assets/images/video-thumbnail.png" alt="Video call" width={64} height={64} className={styles.welcomeThumbImg} />
              <div className={styles.playBtn}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className={styles.welcomeTitle}>Welcome to PeaceHub</h4>
              <p className={styles.welcomeText}>We are here to support you on your mental wellness journey.</p>
            </div>
          </div>

          <div className={styles.scheduleCard}>
            <div className={styles.scheduleHeader}>
              <h4>Book Schedule</h4>
              <Link href="#" className={styles.viewAllLink}>View All</Link>
            </div>
            <div className={styles.scheduleDays}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className={`${styles.scheduleDay} ${i === 2 ? styles.scheduleDayActive : ''}`}>
                  <span className={styles.dayLabel}>{day}</span>
                  <span className={styles.dayNum}>{10 + i}</span>
                </div>
              ))}
            </div>
            <p className={styles.scheduleUpcoming}>
              Upcoming: 1:00 PM – Therapy Session
            </p>
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES ====== */}
      <section className={styles.trustSection}>
        <div className={styles.trustGrid}>
          {[
            { img: '/assets/images/private-secure.png', title: 'Private & Secure', desc: 'Your data is safe with us.' },
            { img: '/assets/images/expert-support.png', title: 'Expert Support', desc: 'Connect with certified professionals.' },
            { img: '/assets/images/caring-community.png', title: 'Caring Community', desc: "You're not alone. We're here together." },
            { img: '/assets/images/personalized-care.png', title: 'Personalized Care', desc: 'Tools and plans tailored just for you.' },
          ].map((item, i) => (
            <div key={i} className={styles.trustCard}>
              <div className={styles.trustImgWrap}>
                <Image src={item.img} alt={item.title} width={56} height={56} className={styles.trustImg} />
              </div>
              <div>
                <h4 className={styles.trustTitle}>{item.title}</h4>
                <p className={styles.trustDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section className={styles.featuresSection} id="services">
        <div className={styles.sectionHeader}>
          <h2>Everything you need to feel better</h2>
          <div className={styles.dotIndicators}>
            <span className={styles.dotActive}></span>
            <span className={styles.dot}></span>
            <span className={styles.dotHeart}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#6366f1">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </span>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {[
            { img: '/assets/images/ai-chat-support.png', title: 'AI Chat Support', desc: 'Talk to our AI companion anytime you need someone to listen.', link: 'Start Chatting' },
            { img: '/assets/images/journaling-feature.png', title: 'Journaling', desc: 'Express your thoughts and track your emotions in your personal journal.', link: 'Write Now' },
            { img: '/assets/images/insights-feature.png', title: 'Insights & Progress', desc: 'Understand your patterns and celebrate your progress.', link: 'View Insights' },
            { img: '/assets/images/coping-tools.png', title: 'Coping Tools', desc: 'Access exercises and resources to help you feel better.', link: 'Explore Tools' },
          ].map((feature, i) => (
            <div key={i} className={styles.featureCard}>
              <div className={styles.featureImgWrap}>
                <Image src={feature.img} alt={feature.title} width={260} height={160} className={styles.featureImg} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
              <Link href="/dashboard" className={styles.featureLink}>
                {feature.link} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ====== TESTIMONIAL ====== */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialQuote}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#c7d2fe" opacity="0.6">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
            </svg>
          </div>
          <p className={styles.testimonialText}>
            PeaceHub gave me the strength to overcome my anxiety.<br />
            The compassionate therapists provided unwavering support,<br />
            and I&apos;ve found a renewed sense of purpose and tranquility in my life.
          </p>
          <div className={styles.testimonialAuthor}>
            <Image src="/assets/images/testimonial-avatar.png" alt="Veronica L." width={48} height={48} className={styles.testimonialAvatar} />
            <div>
              <strong>Veronica L.</strong>
              <span>PeaceHub Member</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section className={styles.howSection}>
        <h2 className={styles.howTitle}>How PeaceHub Works</h2>
        <div className={styles.howGrid}>
          {[
            { img: '/assets/images/create-account-step.png', num: '1', title: 'Create Account', desc: 'Sign in and create your personal profile.' },
            { img: '/assets/images/share-connect-step.png', num: '2', title: 'Share & Connect', desc: 'Talk, journal, and connect with our AI or experts.' },
            { img: '/assets/images/feel-better-step.png', num: '3', title: 'Feel Better, Together', desc: 'Track progress and build a healthier you.' },
          ].map((step, i) => (
            <div key={i} className={styles.howStep}>
              <div className={styles.howImgWrap}>
                <Image src={step.img} alt={step.title} width={200} height={130} className={styles.howImg} />
                <div className={styles.howNum}>{step.num}</div>
              </div>
              <h3 className={styles.howStepTitle}>{step.title}</h3>
              <p className={styles.howStepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.howConnectors}>
          <div className={styles.howDots}></div>
          <div className={styles.howDots}></div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaIcon}>
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8C32 8 24 20 24 32C24 38 27 42 32 44C37 42 40 38 40 32C40 20 32 8 32 8Z" fill="#fff" opacity="0.9"/>
              <path d="M20 16C20 16 14 28 18 38C20 42 24 44 28 44C26 40 24 36 24 32C24 24 20 16 20 16Z" fill="#fff" opacity="0.7"/>
              <path d="M44 16C44 16 50 28 46 38C44 42 40 44 36 44C38 40 40 36 40 32C40 24 44 16 44 16Z" fill="#fff" opacity="0.7"/>
            </svg>
          </div>
          <div className={styles.ctaContent}>
            <h2>Ready to embark on your journey to wellness?</h2>
            <p>Join PeaceHub today and take the first step towards a happier, healthier you.</p>
          </div>
          <Link href="/signup" className={styles.ctaBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            Sign In to Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
