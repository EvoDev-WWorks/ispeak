import styles from './SubNav.module.css';

interface SubNavItem {
  id: string;
  label: string;
}

interface SubNavProps {
  items: SubNavItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function SubNav({ items, activeId, onChange }: SubNavProps) {
  return (
    <div className={styles.subnavWrapper}>
      <div className={styles.subnav}>
        {items.map(item => (
          <button
            key={item.id}
            className={`${styles.pill} ${activeId === item.id ? styles.active : ''}`}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
