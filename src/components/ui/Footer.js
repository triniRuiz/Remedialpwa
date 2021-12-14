import React from 'react'

export const Footer = () => {

    return (
        <div className='row justify-content-center mt-5 color-fondo'>
            <div className='col-6 col-sm-4 col-lg-2 text-center mt-3 my-sm-auto'>
                <img height='100px' src='/assets/logo.svg' alt='logoFooter'></img>
            </div>
            <div className='col-12 col-sm-4 mt-3 col-lg-5 border-right text-center text-md-right my-sm-auto '>
                <img src='/assets/social.png' height='120px' alt='Starbucks Vertical'></img>
            </div>
            <div className='d-none d-md-block col-12 col-sm-4 col-lg-3 text-lg-right mt-5 '>
                <img className='img-fluid' src='/assets/Footer.png' alt='Starbucks Vertical'></img>
            </div>
        </div>
    )
}
