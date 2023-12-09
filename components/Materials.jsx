import React from 'react'

const Materials = () => {
  return (
    <div className='materials-section' id='materials'>
        <div className="sec-title">Materials</div>
        <div className="materials">
            <div className="wood">
                <div className="wood-text">TEAK</div>
                <img src="/images/maple.jpg" alt="" />
            </div>
            <div className="wood">
                <div className="wood-text">MAHOGANY</div>
                <img src="/images/chery.jpg" alt="" />

            </div>
            <div className="wood">
                <div className="wood-text">ROSEWOOD</div>
                <img src="/images/walnut.jpg" alt="" />

            </div>
            <div className="wood">
                <div className="wood-text">NEEM</div>
                <img src="/images/w2.avif" alt="" />

            </div>
            <div className="wood">
                <div className="wood-text">MAPLE</div>
                <img src="/images/w1.jpg" alt="" />

            </div>
            <div className="wood">
                <div className="wood-text">OAK</div>
                <img src="/images/w3.jpg" alt="" />
                
            </div>
        </div>
        <img src="/images/mb.png" alt="" className="materials-bg" />
    </div>
  )
}

export default Materials