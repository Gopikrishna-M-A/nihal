import Image from 'next/image';

const Materials = () => {
  return (
    <div className='materials-section' id='materials'>
        <div className="sec-title">Materials</div>
        <div className="materials">
            <div className="wood">
                <div className="wood-text">TEAK</div>
                {/* <img src="/images/w1.png" alt="" /> */}
                <Image src="/images/w1.png" alt="" width={300} height={200} />
            </div>
            <div className="wood">
                <div className="wood-text">MAHOGANY</div>
                {/* <img src="/images/w2.png" alt="" /> */}
                <Image src="/images/w2.png" alt="" width={300} height={200} />

            </div>
            <div className="wood">
                <div className="wood-text">ROSEWOOD</div>
                {/* <img src="/images/w6.png" alt="" /> */}
                <Image src="/images/w6.png" alt="" width={300} height={200} />

            </div>
            <div className="wood">
                <div className="wood-text">NEEM</div>
                {/* <img src="/images/w4.png" alt="" /> */}
                <Image src="/images/w4.png" alt="" width={300} height={200} />

            </div>
            <div className="wood">
                <div className="wood-text">MAPLE</div>
                {/* <img src="/images/w5.png" alt="" /> */}
                <Image src="/images/w5.png" alt="" width={300} height={200} />
            </div>
            <div className="wood">
                <div className="wood-text">OAK</div>
                {/* <img src="/images/w3.png" alt="" /> */}
                <Image src="/images/w3.png" alt="" width={300} height={200} />
            </div>
        </div>
        <img src="/images/mb.png" alt="" className="materials-bg" />
    </div>
  )
}

export default Materials