import React from 'react'
import "./leavereply.css"


function LeaveReply() {
    return (
        <section className='leavereply-main'>
            <h3 className='leavereply-title'>Leave a Reply</h3>
            <form action="/" method="post" className='leavereply'>
                <div className='leavereply-input-block'>
                    <input type="text" name="Name" id="Name" placeholder='Name' className='leavereply-input' />
                    <input type="email" name="Mail" id="Mail" placeholder='Email' className='leavereply-input' />
                </div>
                <div className='leavereply-input-block'>
                    <input type="text" name="Site" id="Site" placeholder='Website' className='leavereply-input' />
                    <input type="tel" name="Phone" id="Phone" placeholder='Phone' className='leavereply-input' />
                </div>
                <p>
                    <textarea cols="40" rows="5" className='leavereply-input-comment' name="Comment" id="Comment" placeholder='Hello Iam Intrested in..' />
                </p>
                <div className='leavereply-btn-block'>
                    <button type='submit' className='leavereply-btn btn'>
                        Send Now
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.43536L15.7232 8.29851M10.6182 1.91132L17.1412 8.4343L10.4868 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default LeaveReply