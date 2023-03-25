import React from 'react'
import "./mailbox.css"

function MailBox() {
    return (
        <section className='mailbox'>
            <div className="mailbox-container">
                <h2 className='mailbox-title title-h2-small'>Creative project? Let's have a productive talk.</h2>
                <form action="" method="post" className='mailbox-form'>
                    <div className='mailbox-form-block-one'>
                        <input type="text" name="name" id="name" className='mailbox-form-name' placeholder='Name' />
                        <input type="email" name="mail" id="mail" className='mailbox-form-mail' placeholder='Email' />
                    </div>
                    <p>
                            <textarea name="comment" id="comment" cols="30" rows="10" className='mailbox-form-comment' placeholder='Hello Iam Intrested in..'></textarea>
                        </p>
                    <button type='submit' className='mailbox-form-btn btn'>
                        Send Now
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.92969 8.43536L15.6529 8.29851M10.5479 1.91132L17.0708 8.4343L10.4165 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default MailBox
