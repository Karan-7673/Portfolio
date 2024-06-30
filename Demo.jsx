import React from 'react'
import img1 from "../Assets/what-we-offer.jpg"
import img2 from "../Assets/Services-image.png"
export default function Demo() {
    return (
        <>
            <div className='container py-5'>
                <div className='col-md-6'>
                    <div className='position-1 div1'>
                        <img src={img1} alt="" className='img1' />
                    </div>
                    <div className='position-2'>
                        <img src={img2} alt="" className='img2' />
                    </div>
                </div>
            </div>
        </>
    )
}
