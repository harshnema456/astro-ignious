'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PeacehubLogo from '@/components/PeacehubLogo';
import styles from './dashboard.module.css';

const sidebarItems = [
  { icon: 'home', label: 'Dashboard', active: true },
  { icon: 'chat', label: 'AI Chat Support' },
  { icon: 'journal', label: 'Journal' },
  { icon: 'insights', label: 'Insights & Progress' },
  { icon: 'coping', label: 'Coping Tools' },
  { icon: 'therapy', label: 'Therapy Sessions' },
  { icon: 'community', label: 'Community' },
  { icon: 'resources', label: 'Resources' },
  { icon: 'settings', label: 'Settings' },
];

const moodEmojis = [
  { emoji: '😊', label: 'Great', color: '#6366f1' },
  { emoji: '🙂', label: 'Good', color: '#22c55e' },
  { emoji: '😐', label: 'Okay', color: '#f59e0b' },
  { emoji: '😟', label: 'Not Good', color: '#f97316' },
  { emoji: '😢', label: 'Awful', color: '#ef4444' },
];

const wellnessData = [
  { day: 'Mon', value: 60 },
  { day: 'Tue', value: 55 },
  { day: 'Wed', value: 62 },
  { day: 'Thu', value: 70 },
  { day: 'Fri', value: 65 },
  { day: 'Sat', value: 78 },
  { day: 'Sun', value: 82 },
];

const journalEntries = [
  { title: 'A Step Towards Healing', date: 'Today, 9:30 AM', preview: 'I felt anxious in the morning, but journaling helped me clear my thoughts...' },
  { title: 'Grateful for the Little Things', date: 'May 11, 2024', preview: "Today I'm grateful for my family's support and the beautiful weather..." },
  { title: 'Letting Go of Worry', date: 'May 10, 2024', preview: "I'm learning to let go of things I can't control and focus on what I can..." },
];

const upcomingEvents = [
  { title: 'Therapy Session', desc: 'with Dr. Emily Carter', time: 'Today', hour: '1:00 PM', img: '/assets/images/expert-support.png' },
  { title: 'Mindfulness Exercise', desc: 'Daily breathing practice', time: 'Today', hour: '7:00 PM', img: '/assets/images/coping-tools.png' },
  { title: 'Journal Reminder', desc: 'Express your thoughts', time: 'Tomorrow', hour: '9:00 AM', img: '/assets/images/journaling-feature.png' },
];

function SidebarIcon({ type }) {
  const icons = {
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    chat: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>,
    journal: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,
    insights: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    coping: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></>,
    therapy: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    community: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>,
    resources: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></>,
  };
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type]}
    </svg>
  );
}

export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState(null);

  const maxVal = Math.max(...wellnessData.map(d => d.value));

  return (
    <div className={styles.dashboardLayout}>
      {/* ====== SIDEBAR ====== */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <Link href="/" className={styles.sidebarBrand}>
            <PeacehubLogo size={28} />
            <span>PEACEHUB</span>
          </Link>

          <nav className={styles.sidebarNav}>
            {sidebarItems.map((item, i) => (
              <Link
                key={i}
                href="#"
                className={`${styles.sidebarItem} ${item.active ? styles.sidebarItemActive : ''}`}
              >
                <SidebarIcon type={item.icon} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.premiumCard}>
            <div className={styles.premiumBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span>Premium Plan</span>
            </div>
            <p className={styles.premiumText}>You&apos;re on Premium</p>
            <p className={styles.premiumSub}>Thank you for prioritizing your mental wellness.</p>
            <button className={styles.viewPlanBtn}>View Plan</button>
          </div>

          <div className={styles.helpCard}>
            <h4>Need Help?</h4>
            <p>If you are in crisis or need immediate help, please contact a helpline in your area.</p>
            <button className={styles.helpBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Find Help Now
            </button>
          </div>
        </div>
      </aside>

      {/* ====== MAIN CONTENT ====== */}
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <header className={styles.topBar}>
          <div>
            <h1 className={styles.greeting}>Welcome back, Veronica!</h1>
            <p className={styles.greetingSub}>It&apos;s a great day to focus on your well-being.</p>
          </div>
          <div className={styles.topBarRight}>
            <div className={styles.searchBar}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input type="text" placeholder="Search anything..." className={styles.searchInput} />
            </div>
            <button className={styles.notifBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
              <span className={styles.notifDot}></span>
            </button>
            <div className={styles.avatar}>
              <Image src="/assets/images/testimonial-avatar.png" alt="Profile" width={40} height={40} className={styles.avatarImg} />
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className={styles.dashGrid}>
          {/* Mood Check-In */}
          <div className={`${styles.card} ${styles.moodCard}`}>
            <div className={styles.moodTop}>
              <div className={styles.moodImgWrap}>
                <Image src="/assets/images/lake-meditation.png" alt="How are you feeling" width={180} height={120} className={styles.moodImg} />
              </div>
              <div className={styles.moodText}>
                <h3>How are you feeling today?</h3>
                <p>Track your mood and reflect on your day.</p>
                <button className={styles.checkInBtn}>Check In Now</button>
              </div>
            </div>
            <div className={styles.moodEmojis}>
              {moodEmojis.map((mood, i) => (
                <button
                  key={i}
                  className={`${styles.moodEmoji} ${selectedMood === i ? styles.moodEmojiActive : ''}`}
                  onClick={() => setSelectedMood(i)}
                  style={{ '--mood-color': mood.color }}
                >
                  <span className={styles.emojiIcon}>{mood.emoji}</span>
                  <span className={styles.emojiLabel}>{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Wellness Overview */}
          <div className={`${styles.card} ${styles.wellnessCard}`}>
            <div className={styles.cardHeader}>
              <h3>Your Wellness Overview</h3>
              <select className={styles.periodSelect}>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className={styles.chartArea}>
              <div className={styles.chartYAxis}>
                {[100, 75, 50, 25, 0].map(v => (
                  <span key={v}>{v}</span>
                ))}
              </div>
              <div className={styles.chartBars}>
                {wellnessData.map((d, i) => (
                  <div key={i} className={styles.chartCol}>
                    <div className={styles.barWrap}>
                      <div
                        className={styles.bar}
                        style={{ height: `${d.value}%` }}
                      >
                        {i === wellnessData.length - 1 && (
                          <span className={styles.barLabel}>{d.value}</span>
                        )}
                      </div>
                    </div>
                    <span className={styles.chartDay}>{d.day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.wellnessFooter}>
              <div className={styles.wellnessScore}>
                <span className={styles.scoreLabel}>Wellness Score</span>
                <div className={styles.scoreValue}>
                  <strong>82</strong>
                  <span>/100</span>
                </div>
              </div>
              <div className={styles.wellnessTrend}>
                <span className={styles.scoreLabel}>Trend</span>
                <div className={styles.trendValue}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  <strong style={{ color: '#22c55e' }}>12%</strong>
                  <span>vs last week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className={`${styles.card} ${styles.upcomingCard}`}>
            <div className={styles.cardHeader}>
              <h3>Upcoming</h3>
              <Link href="#" className={styles.viewAllLink}>View All</Link>
            </div>
            <div className={styles.upcomingList}>
              {upcomingEvents.map((event, i) => (
                <div key={i} className={styles.upcomingItem}>
                  <Image src={event.img} alt={event.title} width={44} height={44} className={styles.upcomingImg} />
                  <div className={styles.upcomingInfo}>
                    <strong>{event.title}</strong>
                    <span>{event.desc}</span>
                  </div>
                  <div className={styles.upcomingTime}>
                    <span>{event.time}</span>
                    <strong>{event.hour}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Chat Support */}
          <div className={`${styles.card} ${styles.chatCard}`}>
            <div className={styles.cardHeader}>
              <h3>AI Chat Support</h3>
              <button className={styles.newChatBtn}>New Chat</button>
            </div>
            <div className={styles.chatBubble}>
              <div className={styles.chatAvatar}>
                <PeacehubLogo size={24} color="#fff" />
              </div>
              <div>
                <strong>Hi Veronica. I&apos;m here for you.</strong>
                <p>How can I support you today?</p>
              </div>
            </div>
            <div className={styles.chatSuggestions}>
              {['I feel overwhelmed', 'Help me sleep better', "I'm feeling anxious", 'Motivate me'].map((text, i) => (
                <button key={i} className={styles.chatSuggestion}>
                  {i % 2 === 0 ? '💜' : '✨'} {text}
                </button>
              ))}
            </div>
            <Link href="#" className={styles.startConvoLink}>
              Start a New Conversation →
            </Link>
          </div>

          {/* Recent Journal Entries */}
          <div className={`${styles.card} ${styles.journalCard}`}>
            <div className={styles.cardHeader}>
              <h3>Recent Journal Entries</h3>
              <Link href="#" className={styles.viewAllLink}>View All</Link>
            </div>
            <div className={styles.journalList}>
              {journalEntries.map((entry, i) => (
                <div key={i} className={styles.journalItem}>
                  <div className={styles.journalContent}>
                    <strong>{entry.title}</strong>
                    <span className={styles.journalDate}>{entry.date}</span>
                    <p>{entry.preview}</p>
                  </div>
                  <button className={styles.moreBtn}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <Link href="#" className={styles.writeLink}>Write in Journal →</Link>
          </div>

          {/* Quick Tools */}
          <div className={`${styles.card} ${styles.toolsCard}`}>
            <h3>Quick Tools</h3>
            <div className={styles.toolsGrid}>
              {[
                { img: '/assets/images/breathing-exercise.png', label: 'Breathing Exercise' },
                { img: '/assets/images/sleep-sounds.png', label: 'Sleep Sounds' },
                { img: '/assets/images/lake-meditation.png', label: 'Guided Meditation' },
                { img: '/assets/images/ai-chat-support.png', label: 'Thought Record' },
              ].map((tool, i) => (
                <div key={i} className={styles.toolItem}>
                  <Image src={tool.img} alt={tool.label} width={120} height={80} className={styles.toolImg} />
                  <span>{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Affirmation */}
          <div className={`${styles.card} ${styles.affirmationCard}`}>
            <h3>Daily Affirmation</h3>
            <div className={styles.affirmationContent}>
              <div className={styles.affirmationQuote}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
                <p>You are allowed to be both a masterpiece and a work in progress, simultaneously.</p>
              </div>
              <Image src="/assets/images/lake-meditation.png" alt="Affirmation" width={200} height={140} className={styles.affirmationImg} />
            </div>
          </div>

          {/* Community Support */}
          <div className={`${styles.card} ${styles.communityCard}`}>
            <h3>Community Support</h3>
            <p className={styles.communityDesc}>You&apos;re not alone. Connect and share with people who care.</p>
            <div className={styles.communityAvatars}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={styles.communityAvatar}>
                  <Image src="/assets/images/testimonial-avatar.png" alt="Member" width={36} height={36} className={styles.communityAvatarImg} />
                </div>
              ))}
              <div className={styles.communityMore}>+245</div>
            </div>
            <button className={styles.exploreBtn}>
              Explore Community →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
