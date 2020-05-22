import React from 'react';

export default function Contact(props) {
    return (
        <div className="contact__page">
        <header className="contact__header">GET IN TOUCH</header>
            <div className="contact__content">

                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                    <input className="contact__name" type="text" onfocus="this.value=''" name="name" placeholder="Name"/>
        
                    <input className="contact__email" type="email" name="email" placeholder="Email" />
                    <br/>
                    <textarea className="contact__textarea" rows="4" cols="50" placeholder="How can I help you?"/>
                    <br/>
                    <button className="contact__button" type="submit" value="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}