import React, {useEffect, useRef, useState} from 'react';
import style from './Card.module.css';
import 'material-design-lite/material.css';
import 'material-design-icons';



export const Card = ({cardData, onDeleteClick, onCheckBoxClick, index, allChecked, page}) => {
    const [deleteClassName, setDeleteClassName] = useState(style.deleteButton);
    const [visibilityClassName, setVisibilityClassName] = useState(style.visibilityButton);
    const [checkBoxClassName, setCheckBoxClassName] = useState(style.checkbox);
    const checkBoxRef = useRef();

    useEffect(() => {
        if (checkBoxRef.current.checked) return  setCheckBoxClassName(style.checkboxFakeActive);
    });

    useEffect(() => {
        if (allChecked) {
            onCheckBoxClick(index, true);
            checkBoxRef.current.checked = true;
            return null;
        } else {
            checkBoxRef.current.checked = false;
            onCheckBoxClick(index, false);
        }
    }, [allChecked, page])

    if (!cardData) return  null;

    const { sample_url, name } = cardData;
    const imgStyle = {
        width: 400,
        height: 300,
        position: 'absolute'
    };

    const onMouseOver = () => {
        setDeleteClassName(style.deleteButtonActive);
        setVisibilityClassName(style.visibilityButtonActive);
        setCheckBoxClassName(style.checkboxFakeActive);
    };

    const onMouseOut = () => {
        setDeleteClassName(style.deleteButton);
        setVisibilityClassName(style.visibilityButton);
        if (!checkBoxRef.current.checked) return setCheckBoxClassName(style.checkboxFake)
    };

    return (
        <div
            key={sample_url}
            className={style.cardBlock}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <div className={style.cardImgBlock}>
                <img style={imgStyle} src={sample_url} />
                <div className={style.upperButtonBlock}>
                    <div>
                        <label>
                            <input
                                ref={checkBoxRef}
                                className={style.checkbox}
                                type={'checkbox'}
                                onClick={() => onCheckBoxClick(index, checkBoxRef.current.checked)}
                            />
                            <span className={checkBoxClassName}></span>
                        </label>
                        <div className={deleteClassName}>
                            <button
                                className='mdl-button mdl-js-button  '
                                onClick={() => onDeleteClick(index)}
                            >
                                <span className="material-icons md-light">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={visibilityClassName}>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ">
                        <span className="material-icons">
                            visibility
                        </span>
                    </button>
                </div>
            </div>
            <div className={style.cardTextContainer}>
                <p className={style.cardText}>{name}</p>
            </div>
        </div>
    );
};