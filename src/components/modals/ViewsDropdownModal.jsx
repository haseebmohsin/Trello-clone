import Image from 'next/image';
import styles from '@/styles/dropdownModal.module.scss';

const ViewsDropdownModal = ({ title, icon, isOpen, toggleViewsModal }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.header}>
            <div className={styles.left}>
              <Image src={`/header-svg/${icon}.svg`} alt={icon} width={22} height={36} />
              <div className={styles.title}>{title}</div>
            </div>

            <div className={styles.close} onClick={() => toggleViewsModal()}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g opacity='0.4'>
                  <path d='M3.33325 16.6668L16.6666 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                  <path d='M16.6666 16.6668L3.33325 3.3335' stroke='#070F21' strokeWidth='2' strokeLinecap='round' />
                </g>
              </svg>
            </div>
          </div>

          <div className={styles.body}>
            <ul>
              <li>My first filter</li>
              <li className={styles.active}>Available for me</li>
              <li>Current Tasks</li>
              <li>Top Project</li>
              <li>Favorites</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewsDropdownModal;