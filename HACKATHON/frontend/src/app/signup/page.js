'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './signup.module.css';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard on form submit
    router.push('/dashboard');
  };

  return (
    <>
      <Navbar variant="signup" />

      <main className={styles.main}>
        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed" stroke="#7c3aed" strokeWidth="0">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <span>You matter. You are enough.</span>
            </div>

            <h1 className={styles.leftTitle}>
              Start Your<br />Journey to<br />Mental <span className={styles.highlight}>Wellness</span>
            </h1>

            <p className={styles.leftDesc}>
              Create your account and join a<br />
              supportive community that cares<br />
              about your well-being.
            </p>

            <div className={styles.leftFeatures}>
              {[
                { img: '/assets/images/private-secure.png', title: 'Private & Secure', desc: 'Your data is safe with us.\nWe prioritize your privacy.' },
                { img: '/assets/images/expert-support.png', title: 'Expert Support', desc: 'Connect with certified\nprofessionals and AI support.' },
                { img: '/assets/images/caring-community.png', title: 'Caring Community', desc: "You're not alone.\nWe're here together." },
                { img: '/assets/images/personalized-care.png', title: 'Personalized Care', desc: 'Tools and plans tailored\njust for you.' },
              ].map((feature, i) => (
                <div key={i} className={styles.leftFeature}>
                  <Image src={feature.img} alt={feature.title} width={48} height={48} className={styles.leftFeatureImg} />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.leftImageWrap}>
            <Image src="/assets/images/lake-meditation.png" alt="Peaceful meditation" width={500} height={400} className={styles.leftImage} />
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className={styles.rightPanel}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Create Your Account</h2>
            <p className={styles.formSubtitle}>Let&apos;s take the first step towards a happier you.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Password</label>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <button type="button" className={styles.eyeBtn} onClick={() => setShowPassword(!showPassword)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showPassword ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
                <p className={styles.passwordHint}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  At least 8 characters with a mix of letters, numbers &amp; symbols
                </p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Confirm Password</label>
                <div className={styles.inputWrap}>
                  <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                  <button type="button" className={styles.eyeBtn} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {showConfirmPassword ? (
                        <>
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </>
                      ) : (
                        <>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <label htmlFor="agreeTerms" className={styles.checkboxLabel}>
                  I agree to the <a href="#" className={styles.link}>Terms of Service</a> and <a href="#" className={styles.link}>Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>Create Account</button>

              <div className={styles.divider}>
                <span>OR</span>
              </div>

              <button type="button" className={styles.googleBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <p className={styles.secureNote}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Your information is 100% secure and encrypted
              </p>
            </form>

            {/* Testimonial */}
            <div className={styles.miniTestimonial}>
              <div className={styles.miniQuote}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#c7d2fe" opacity="0.6">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              <p>PeaceHub has been a safe space for me to grow, heal, and become a better version of myself.</p>
              <div className={styles.miniAuthor}>
                <Image src="/assets/images/testimonial-avatar.png" alt="Veronica L." width={36} height={36} className={styles.miniAvatar} />
                <div>
                  <strong>Veronica L.</strong>
                  <span>PeaceHub Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
