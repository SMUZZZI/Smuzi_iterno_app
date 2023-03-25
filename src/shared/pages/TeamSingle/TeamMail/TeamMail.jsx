import React from 'react'
import "./teammail.css"


function TeamMail() {
    return (
        <div>
            <section className='teammail'>
                <div className="teammail-container">
                    <h2 className='teammail-title'>Contact Me</h2>
                    <form action="" method="post" className='teammail-form'>
                        <div className='teammail-form-block-one'>
                            <input type="text" name="name" id="name" className='teammail-form-name' placeholder='Name' />
                            <input type="email" name="mail" id="mail" className='teammail-form-mail' placeholder='Email' />
                        </div>
                        <p>
                            <textarea name="comment" id="comment" cols="30" rows="10" className='teammail-form-comment' placeholder='Sent Your Message'></textarea>
                        </p>
                        <button type='submit' className='teammail-form-btn btn'>
                            Send Now
                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.92969 8.43536L15.6529 8.29851M10.5479 1.91132L17.0708 8.4343L10.4165 15.0887" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default TeamMail
