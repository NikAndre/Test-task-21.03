import React from 'react';
import style from './Pagination.module.css';
import {PaginationButton} from "./PaginationButton";

import 'material-design-lite/material.css';
import 'material-design-icons';


export const Pagination = ({ setCurrentPage, currentPage, setNextPage, setPreviousPage, totalPages}) => {
    const length = Math.ceil((totalPages/6));
    const pages = [];
    for (let i = 1;i <= length; i++) {
        pages.push(
            <PaginationButton
                number={i}
                onPageButtonClick={setCurrentPage}
                currentPage={currentPage}
            />
        );
    }
    return (
        <div className={style.paginationWrapper}>
            <span className="material-icons" onClick={setPreviousPage}>
                chevron_left
            </span>
            {pages}
            <span className="material-icons" onClick={setNextPage}>
                chevron_right
            </span>
        </div>
    );
};