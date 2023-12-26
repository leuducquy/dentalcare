import React from 'react'
import Button from './Button'
import AboutImg from '../assets/about-img.jpg'
const About = () => {
  return (
    <section name='about' className="py-20">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={AboutImg}
            className="w-full"
            alt="about us"
          />
        </div>
        <div className="text-center md:text-left">
          <span className="text-blue text-lg"> About Us</span>
          <h2 className="text-3xl md:text-4xl leading-10 text-black pt-2">
            True Healthcare For Your Family
          </h2>
          <p className="py-5 leading-8 text-light-color">
          At our Dental Care Store, we are not just a retailer; we are your partners in oral health. We are committed to fostering a positive and educational shopping experience, where you can access the latest innovations in dental care. Visit us today and let us help you smile confidently with our quality dental care products. Your journey to a healthier, happier smile starts here!
          </p>
          <Button text='make appointment' />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About