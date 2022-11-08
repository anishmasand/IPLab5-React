import React from 'react'

export const Contact = () => {
    return (
        <div>
            <br /><br /><br />
            <center><button id="btn" className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Contact Us</button></center>

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">You can contact us at:</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small">
                    <a href="mailto:2020.anish.masand@ves.ac.in"><img
                        src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-201003176.jpg"
                        alt="HTML tutorial" style={{width:"42px",height:"42px"}}/></a>
                    <a href="https://www.linkedin.com/in/vesit/"><img
                        src="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png"
                        alt="HTML tutorial" style={{width:"42px",height:"42px"}} /></a>
                    <a href="https://www.instagram.com/vesitedu/?hl=en"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                        alt="HTML tutorial" style={{width:"42px",height:"42px"}} /></a>
                    <a href="tel:9337"><img
                        src="https://w7.pngwing.com/pngs/759/922/png-transparent-telephone-logo-iphone-telephone-call-smartphone-phone-electronics-text-trademark.png"
                        alt="HTML tutorial" style={{width:"42px",height:"42px"}} /></a>
                </div>
            </div>
            <br></br>
        </div>
    )
}
