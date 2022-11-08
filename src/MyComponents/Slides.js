import React from 'react'

export const Slides = () => {
    return (
        <div>
            <br /><br /><br />
            <h1 id="pic" style={{ fontSize: "50px", color: "#FD841F", fontFamily: "serif" }}>Glimpse of our college &rarr;</h1><br />

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2620/2021/8/30/Campus%20View%20of%20Vivekanand%20Education%20Societys%20Institute%20of%20Technology%20Chembur_Campus-View.jpg"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Our Campus</h3>
                            <p>Campus surrounded with greenery.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.foxbusiness.com/BrightCove/854081161001/202004/1495/854081161001_6153242466001_6153242152001-vs.jpg"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Our Campus</h3>
                            <p>Clean and Healthy environment for students.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.smwllc.com/wp-content/uploads/2020/02/Online-Learning-vs-Classroom-Learning-825x550.jpg"
                            className="d-block w-100" alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Classrooms</h3>
                            <p>Hi-Tech classrooms with comfortable seats.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://gatton.uky.edu/sites/default/files/facilities/281.jpg" className="d-block w-100" alt="..."
                            height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>classrooms</h3>
                            <p>Students provided with high speed net.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cutm.ac.in/wp-content/uploads/2020/03/IMG_5580-scaled.jpg" className="d-block w-100"
                            alt="..." height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Hostels</h3>
                            <p>Clean and cozy rooms with good wifi connection.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.mahagurutech.ac.in/images/facility/hostel.jpg" className="d-block w-100" alt="..."
                            height="600px" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Hostels</h3>
                            <p>comfortable beds and furniture.</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
