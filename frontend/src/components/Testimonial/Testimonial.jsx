import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';


const Testimonial = () => {
  return (
    <div className='mt-10 lg:mt-20'>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className='py-6 px-5 rounded-lg bg-white shadow-md'>
            <div className='flex items-center gap-4'>
              <img src={patientAvatar} alt='Patient Avatar' className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='text-xl font-semibold text-gray-800'>
                  Muhibur Rahman
                </h4>
                <div className="flex items-center">
                  {[...Array(5)].map((star, index) => (
                    <HiStar key={index} className='text-yellow-500 w-5 h-5' />
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-700 text-lg mt-4'>
              "I have taken medical services from them. They treat so well and they are proving the best medical services."
            </p>
          </div>
        </SwiperSlide>

        {/* Add more SwiperSlides for additional testimonials */}

      </Swiper>
    </div>
  );
};

export default Testimonial;
