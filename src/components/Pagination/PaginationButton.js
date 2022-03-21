import React, {useState} from 'react';
import 'material-design-lite/material.css';
import style from './Pagination.module.css'

export const PaginationButton = ({number, onPageButtonClick, currentPage}) => {
     return (
        <button
            className={currentPage === number ? style.buttonItemActive : style.buttonItem}
            key={number}
            onClick={() => onPageButtonClick(number)}
        >
            {number}
        </button>
    );
};