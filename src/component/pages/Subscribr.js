import React from 'react'

const Subscribr = () => {
    return (
        <>
            <div className='subcriber-img'></div>
            <div className='subscribe-area'>
                <div className='container'>
                    <div className='subscriber'>
                        <p><b>Join the Exolot!</b>"Sign up for the latest upates and news"</p>
                        <div className='subcribe'>
                            <input className='from-control' type="email" placeholder='name@gmail.com' required></input>
                            <input className='from-control1' type='button' name="Subscriber" value="subcribe"></input>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Subscribr
