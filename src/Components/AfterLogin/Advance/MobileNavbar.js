import React from 'react'

export default function MobileNavbar() {
    return (
       <>
        <nav className='my-nav'>
            <a href="#" class="my-btn"><i class="bi bi-x"></i></a>
            <ul className='my-ul'>
                <li>
                    <a href="#" className='text-uppercase'>Beginning</a>
                </li>
                <li>
                    <a href="#" className='text-uppercase'>Our Method</a>
                </li>
                <li>
                    <a href="#" className='text-uppercase'>Us</a>
                </li>
                <li>
                    <a href="#" className='text-uppercase'>prices</a>
                </li>
                <li>
                    <a href="#" className='text-uppercase'>help</a>
                </li>
            </ul>
        </nav>
       </>
       
    )
}
