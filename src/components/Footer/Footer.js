import React from 'react';
import style from './Footer.module.css';
import 'material-design-icons';

export const Footer = ({checkedCards, onAllCheckedButtonClick, onDeleteButtonClick}) => {
    return (
        <div className={style.mainFooterBlock}>
            <div className={style.FooterCountBlock}>
                <button
                    className={style.checkButton}
                    onClick={onAllCheckedButtonClick}
                >
                    -
                </button>
                { checkedCards.length >= 0 && (<div className={style.countBlock}>{checkedCards.length}</div>)}
            </div>
            <button className={style.deleteButton} onClick={onDeleteButtonClick}>
                <span className="material-icons">
                     delete
                </span>
            </button>
            <p>Для отмены нажмите ESC</p>
        </div>
    );
};