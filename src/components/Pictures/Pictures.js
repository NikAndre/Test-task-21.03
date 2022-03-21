import React, {useEffect} from 'react';
import { Card } from "../Card/Card";
import style from './Pictures.module.css';

export const Pictures = ({
    cdata,
    page,
    getTotalPagesChange,
    onCheckBoxClick,
    allChecked,
    onDeleteClick
}) => {
    const cards = [...cdata].reduce((accum, card, index) => {
        if ((page*6 - 1)  >= index && (page*6 - 1) - 5  <= index) {
            accum.push(
                <Card
                cardData={card}
                onCheckBoxClick={onCheckBoxClick}
                onDeleteClick={onDeleteClick}
                index={index}
                allChecked={allChecked}
                page={page}
                />
            );
        }
        return accum;
    },[]);

    useEffect(() => {
        getTotalPagesChange(cdata.length)
    }, [cdata]);

    return (
        <div>
            <h6>{cdata.length} изображений</h6>
            <div className={style.cardsWrapper}>{cards}</div>
        </div>
    );
};