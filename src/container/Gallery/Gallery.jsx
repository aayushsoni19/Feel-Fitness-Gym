import React from 'react'
import "./Gallery.css"

const Gallery = () => {
    return (
        <>
            <div id="gallery">
                <h1>Our gallery</h1>

                <div className="g-line"></div>

                <div className="images">
                    <img src="src/assets/g1.jpg" alt="Image 1" />
                
                    <img src="src/assets/g2.jpg" alt="Image 2" />
                
                    <img src="src/assets/g3.jpg" alt="Image 3" />
                
                    <img src="src/assets/g4.jpg" alt="Image 4" />
                
                    <img src="src/assets/g5.jpg" alt="Image 5" />

                    <img src="src/assets/g6.jpg" alt="Image 6" />
                </div>
            </div>
        </>
    )
}

export default Gallery