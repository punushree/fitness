import React from 'react'
import logo from '../Assets/gym1.png'
import logo1 from '../Assets/gym2.png'
import logo2 from '../Assets/gym3.jpg'
import logo3 from '../Assets/gym4.jpg'
import logo4 from '../Assets/adidas.png'
import logo5 from '../Assets/nike.png'
import logo6 from '../Assets/puma.png'
import logo7 from '../Assets/under_armour.png'
import logo8 from '../Assets/NB.png'

const ContentFirst = () => {
  return (
      <div className='row p-3'>
          <div className='col-2 col-lg-2 col-md-2 col-sm-6'>
              <img src={logo1} alt="icon" className='h-maxp w-full' />
          </div>
          <div className='col-6 col-lg-3 col-md-4 col-sm-6'>
              <img src={logo} alt="icon"  />
              <div className='row my-2'>
                  <div className='col-6'>
                  <img src={logo2} alt="icon" className='h-full' /> 
                  </div>
                  <div className='col-6'>
                  <img src={logo3} alt="icon" />
                  </div>
              </div>
             
         
          </div>
          <div className='col-md-6'>
              <h2 className='font-white text-4xl'>Why <span className='font-bold'>Choose Us ?</span></h2>
              <div className='flex my-2'>
                  <i class="fal fa-check-circle align-self-center me-2 text-xl text-green-500 font-bold"></i>
                  <p className='text-2xl'>Over 140+ Expert Coach</p>
              </div>
              <div className='flex my-2'>
                  <i class="fal fa-check-circle align-self-center  me-2 text-xl text-green-500 font-bold"></i>
                  <p className='text-2xl'> 1 Free Program to New Joinees</p>
              </div>
              <div className='flex my-2'>
                  <i class="fal fa-check-circle align-self-center  me-2 text-xl text-green-500 font-bold"></i>
                  <p className='text-2xl'>Reliable Partners</p>
              </div>
              <div className='flex my-2'>
                  <i class="fal fa-check-circle align-self-center  me-2 text-xl text-green-500 font-bold"></i>
                  <p className='text-2xl'>Expert Dieticians who schedules your Diet Plans</p>
              </div>
              <h2 className='text-3xl text-gray-500'>Our Gym Partners</h2>
              <div className='row'>
                  <div className='col-md-2'>
                  <img src={logo4} alt="icon" className='h-14 w-14' />
                  </div>
                  <div className='col-md-2'>
                  <img src={logo5} alt="icon" className='h-14 w-14' />  
                 </div>
                  <div className='col-md-2'>
                  <img src={logo6} alt="icon"  className='h-14 w-14'/> 
                </div>
                  <div className='col-md-2'>
                  <img src={logo7} alt="icon"  className='h-14 w-14'/>
                 </div>
                  <div className='col-md-2'>
                  <img src={logo8} alt="icon" className='h-14 w-14'/> 
                 </div>
                 
              </div>
          </div>
    </div>
  )
}

export default ContentFirst