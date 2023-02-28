import React from 'react'
import completed from '../../asset/images/completed.png'
import Header from '../header'
const Completed = () => {
  return (
 <>
 <Header/>
    <div className='flex justify-center items-center mt-28 '>
     <img src={completed} className='w-40 h-40'/>
     <p className='w-64'>با تشکر از پرداخت شما سفارش شما ثبت شده و جهت هماهنگی ارسال با شما تماس گرفته خواهد شد</p>
    </div>
 </>
  )
}

export default Completed
