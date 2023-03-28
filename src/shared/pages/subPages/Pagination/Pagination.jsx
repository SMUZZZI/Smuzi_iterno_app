import { number } from 'prop-types';
import React, { useState } from 'react'

import "./pagination.css"

function Pagination({ postPerPage, totalPosts, paginate }) {
    const pageNum = [];
    for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
        pageNum.push(i);
    }

    const [currentNum, setCurrentNum] = useState(1);
    const [numPerPage] = useState(2);
    const indexOfLastNum = currentNum + numPerPage;
    const indexOfFirstNum = currentNum - 1;

    let currentNums = [number];
    (currentNum >= pageNum.length - 2) ? currentNums = pageNum.slice(pageNum.length - 3) : currentNums = pageNum.slice(indexOfFirstNum, indexOfLastNum);

    //prev
    let togglePrevClassCheck = "";
    (currentNum !== 1) ? togglePrevClassCheck = " pagination-item-active" : togglePrevClassCheck = "";
    //next
    let toggleNextClassCheck = "";
    (currentNum >= pageNum.length - 2) ? toggleNextClassCheck = "" : toggleNextClassCheck = " pagination-item-active";

    return (
        <nav className='pagination-block'>
            <ul className='pagination'>
                {/* prev */}
                <li className={`pagination-item pagination-item-prev${togglePrevClassCheck}`}>
                    <button onClick={() => {
                        if (currentNum <= 1) return
                        paginate(currentNum - 1)
                        setCurrentNum(prevNum => prevNum - 1)
                    }} className='pagination-link'>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </li>
                {/* any */}
                {currentNums.map(num => (
                    <li key={num} className={`pagination-item ${currentNum === num && "pagination-item-current"}`}>
                        <button onClick={() => {
                            paginate(num)
                            setCurrentNum(num)
                        }} className='pagination-link'>{num}</button>
                    </li>
                ))}
                {/* next */}
                <li className={`pagination-item pagination-item-next${toggleNextClassCheck}`}>
                    <button onClick={() => {
                        if (currentNum >= pageNum.length) return
                        paginate(currentNum + 1)
                        setCurrentNum(prevNum => prevNum + 1)
                    }} className='pagination-link'>
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination