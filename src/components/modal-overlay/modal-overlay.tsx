import styles from './modal-overlay.module.css';
import React, { FC } from 'react';
import { TModalOverlay } from '../../services/types/types';

export const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {

  return (
    <div className={styles.overlay} onClick={onClose}>
    </div>
  )
}
