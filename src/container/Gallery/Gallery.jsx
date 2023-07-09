import React from 'react'
import "./Gallery.css"

const Gallery = () => {
    return (
        <>
            <div id="gallery">
                <h1>Our gallery</h1>

                <div className="g-line"></div>

                <div className="images">
                    <img src="https://live.staticflickr.com/65535/53033829995_b41ed5911f.jpg" alt="Image 1" />
                
                    <img src="https://live.staticflickr.com/65535/53033616219_533fc86ed6.jpg" alt="Image 2" />
                
                    <img src="https://live.staticflickr.com/65535/53032855237_c74cda23c8.jpg" alt="Image 3" />
                
                    <img src="https://live.staticflickr.com/65535/53033434431_b56c62d151.jpg" alt="Image 4" />
                
                    <img src="https://live.staticflickr.com/65535/53033434416_bccf8e3d52.jpg" alt="Image 5" />

                    <img src="https://live.staticflickr.com/65535/53033616374_e40182bf3c.jpg" alt="Image 6" />
                </div>
            </div>
        </>
    )
}

export default Gallery