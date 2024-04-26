import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Philosophy() {
    return (
      <div>
        <Navbar/>
        <div className='m-[5vw] flex flex-col gap-y-5'>
          <div>
              <img src="images/about_img.jpg" alt="about us" />
          </div>
          <div className='text-2xl text-[#5a72a7]'>The Philosophy</div>
          <div>
              <p className='text-justify'>Probably you have already seen members of the Hare Krsna movement singing and dancing in the streets or you have been asked for donation for a book or a magazine. You could also see us in TV or read about us in newspapers. How many times have you asked yourselves: Who are they? Why do they dress in this way? What do they believe in? Why do they always sing? Who is Krsna?

To enable you to better understand us, we want to show you the Hare Krsna movement in detail and tell you who we are. You will be probably surprised by learning that to become a part of the Hare Krsna movement one does not need to wear traditional dress or change ones hairstyle or religion. You will discover that Krsna consciousness is much more than religion. It is a spiritual, universal, time-proven process enabling to achieve inner happiness, satisfaction and higher consciousness.

Hare Krsna movement makes spiritual reality and culture derived from it known to the widest public. This makes it unique. When you speak with a devotee from the Hare Krsna movement, eat spiritual food served in our restaurants, take part in the Sunday festival in a temple, read any of our books or chant Hare Krsna at least once, your consciousness will change. And this spiritual change of consciousness is the key to improvement of the quality of life on this planet.

Michael Grant (Mukunda Goswami)</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
