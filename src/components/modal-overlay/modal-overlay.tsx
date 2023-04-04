import styles from './modal-overlay.module.css';
import React, { FC } from 'react';
import { TModalOverlay } from '../../services/types/types';

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {

  const closeModalOverlay = (event: any) => {
    if (event.target.classList.contains(styles.overlay)) {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={closeModalOverlay}>
    </div>
  )
}
