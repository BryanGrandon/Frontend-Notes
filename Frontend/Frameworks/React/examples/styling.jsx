import styles from './Button.module.css'

// -------------------------------------
// Inline CSS
// -------------------------------------

const InlineButton = () => {
  return (
    <button
      style={{
        backgroundColor: '#2563eb',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
      }}
    >
      Inline Button
    </button>
  )
}

// -------------------------------------
// CSS Modules
// -------------------------------------

const ModuleButton = () => {
  return <button className={styles.button}>Module Button</button>
}

export { InlineButton, ModuleButton }
