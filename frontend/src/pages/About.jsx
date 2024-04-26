import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar/>
      <div className='m-[5vw] flex flex-col gap-y-5'>
        <div>
            <img src="images/about_img.jpg" alt="about us" />
        </div>
        <div className='text-2xl text-[#5a72a7]'>About Us</div>
        <div>
            <p className='text-justify'>The Sri Sri Krishna Balaram Mandir, situated in the Raman Reti area of Vrindavan, holds a special significance for the devotees of the International Society for Krishna Consciousness. This grand temple represents the fulfilled dream of Srila Prabhupada, Founder Acharya of ISKCON, who wished to construct a temple of unparalleled beauty for the worship of the transcendental brothers Krishna and Balaram in the same village where They played more than five thousand years ago. Srila Prabhupada directly oversaw all the aspects of design and construction and personally called the Lord to come and accept the worship of His devotees from around the world. He said, “Lord Balaram is the source of spiritual strength, and I have built this temple just to give strength to the devotees”.<br/><br/>

Today, the Sri Sri Krishna Balaram Mandir is a booming spiritual center. Every day of the week pilgrims flood in the gate in great numbers from all over the world. In fact, the large green government signs posted over the highway turn off to Vrindavan only give directions to two temples: Banke Bihari and ISKCON.<br/><br/>

Visitors to the temple first pass under the brilliant white marble archway of Srila Prabhupada’s samadhi, an architectural wonder of winding peacock stairways and intricately carved walls and domes. They then enter through the gigantic wooden temple doors and find themselves transported to the spiritual world upon seeing the palace of Krishna Balaram with its sunken black and white checkered marble courtyard, beautified by a living tamal tree. The music of the kartals, mrdanga and sweet harmonium of the 24 hour kirtaniyas enters the heart, and everyone, young and old, spontaneously raise their arms and dance in ecstasy. <br/><br/>

Ascending the courtyard steps, visitors approach the effulgent gorgeous forms of the source of all beauty, the presiding Lords Sri Sri Gaura Nitai, Krishna Balaram and Radha Shyamasundar. Standing transfixed with open eyes and folded hands, pilgrims drink in the dazzling vision of the Lord, lovingly decorated with no consideration of expense or effort, truly a festival for the eyes.<br/><br/>

This entire temple complex is a busy preaching powerhouse comprised of thirty departments including a guesthouse, welcome center, Samadhi museum, ten book stalls, bakery, restaurant, broadcast studio, residential Brahmacari ashram and a Deity department with one of the highest standards of worship in the world, engaging more than one hundred devotees directly in the seva everyday.<br/><br/></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
