import { number } from 'prop-types';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { paginationDec, paginationInc, paginationSet } from '../../../slices/pagination';

import "./pagination.css"

function Pagination({ totalPosts, currentNum, perPage }) {

    const dispatch = useDispatch()

    let currentNums = [number];
    const pageNum = [];
    const [numPerPage] = useState(2);

    for (let i = 0; i < Math.ceil(totalPosts / perPage); i++) {
        pageNum.push(i + 1);
    }

    let indexOfLastNum = currentNum + numPerPage;
    let indexOfFirstNum = currentNum - 1;
    
    (currentNum >= pageNum.length - 2) ? currentNums = pageNum.slice(pageNum.length - 3) : currentNums = pageNum.slice(indexOfFirstNum, indexOfLastNum);

    console.log(Link);

    return (
        <nav className='pagination-block'>
            <ul className='pagination'>
                {/* prev */}
                <li className={`pagination-item pagination-item-prev ${currentNum !== 1 && "pagination-item-active"}`}>
                    <button onClick={() => {
                        if (currentNum <= 1) return
                        dispatch(paginationDec(1))
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
                            dispatch(paginationSet(num))
                        }} className='pagination-link'>{num}</button>
                    </li>
                ))}
                {/* next */}
                <li className={`pagination-item pagination-item-next ${currentNum <= pageNum.length - 2 && "pagination-item-active"}`}>
                    <button onClick={() => {
                        if (currentNum >= pageNum.length) return
                        dispatch(paginationInc(1))
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