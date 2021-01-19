import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2>Socials</h2>
                        <a href='https://github.com/Andy581' target='-blank'>GitHub</a>
                        <a href="https://www.linkedin.com/in/andyvo581/" target='-blank'>LinkedIn</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <small class='website-rights'>© 2020 Andy Vo</small>
                    <div class='social-icons'>
                        <a
                            href="https://github.com/Andy58"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="GitHub"
                            class="social-icon-link"
                        >
                            <i className="fab fa-github" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/andyvo581/"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="LinkedIn"
                            class="social-icon-link"
                        >
                            <i class="fab fa-linkedin" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;