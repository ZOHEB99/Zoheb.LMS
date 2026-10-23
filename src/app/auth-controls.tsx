'use client'

import styles from './experience.module.css'

export default function AuthControls() {
  return (
    <div className={styles.authControls}>
      <span className={styles.accountLabel}>Candidate Mode</span>
      <button 
        className={styles.signInButton} 
        type="button"
        onClick={() => alert('Signed in as Zoheb (Dissertation Demo)')}
      >
        Zoheb (Active)
      </button>
    </div>
  )
}
