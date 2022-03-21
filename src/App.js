import React, { useState } from 'react';
import style from './App.module.css';
import { Pictures } from "./components/Pictures/Pictures";
import data from './data.json';
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";

function App() {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(data.length);
    const [ checkedCards, setCheckedCards ] = useState([]);
    const [ allChecked, setAllChecked ] = useState();
    const [cdata, setCardData] = useState([...data]);

    const onDeleteClick = (index) => {
        const arr = [...cdata];
        arr.splice(index,1);
        setCardData(arr);
    };

    const onCheckBoxClick = (index, checked) => {
        const uniq = new Set([...checkedCards,index]);

        if (checked === true) {
            return setCheckedCards([...uniq]);
        }

        uniq.delete(index);
        return setCheckedCards([...uniq]);
    };

    const getTotalPagesChange = (number) => {
        setTotalPages(number);
    };

    const onPageButtonClick = (number) => {
        setCurrentPage(number);
    };

    const setPreviousPage = () => {
        if (currentPage <= 1) return null;
        setCurrentPage(currentPage - 1);
    };

    const setNextPage = () => {
        if (currentPage >= Math.ceil((data.length/6))) return null;
        setCurrentPage(currentPage + 1);
    };

    const onAllCheckedButtonClick = () => {
        if (!allChecked) {
            setAllChecked(true);
            const checkedArr = [];
            cdata.forEach((card, index) => {
                checkedArr.push(index);
            })
            return setCheckedCards(checkedArr);
        }
        setAllChecked(false);
        setCheckedCards([]);
    };

    const onCheckedCardsButtonDeleteClick = () => {
        const arr = [...cdata].filter((elem, index) => {
            return !checkedCards.includes(index);
        })
        setCardData(arr);
        setCheckedCards([]);
    };

    return (
        <div className={style.container}>
            <Pictures
                cdata={cdata}
                page={currentPage}
                getTotalPagesChange={getTotalPagesChange}
                onCheckBoxClick={onCheckBoxClick}
                allChecked={allChecked}
                onDeleteClick={onDeleteClick}
            />
            <Pagination
                setCurrentPage={onPageButtonClick}
                currentPage={currentPage}
                setPreviousPage={setPreviousPage}
                setNextPage={setNextPage}
                totalPages={totalPages}
            />
            <Footer
                checkedCards={checkedCards}
                onAllCheckedButtonClick={onAllCheckedButtonClick}
                onDeleteButtonClick={onCheckedCardsButtonDeleteClick}
            />
        </div>
    );
}

export default App;
