import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function History() {
    return (
      <div>
        <Navbar/>
        <div className='m-[5vw] flex flex-col gap-y-5'>
          <div>
              <img src="images/about_img.jpg" alt="about us" />
          </div>
          <div className='text-2xl text-[#5a72a7]'>The History</div>
          <div>
              <p className='text-justify'>The International Society for Krishna Consciousness (ISKCON) was founded in New York City in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who went to the western world with the mission of spreading the transcendental message of Sri Chaitanya Mahaprabhu, the Supreme Personality of Godhead appearing as a devotee in this age of Kali. Being a part of the Brahma Madhva Gaudiya Vaishnava Sampradaya, one of the four vaishnava sampradayas, ISKCON comes in an authorized disciplic succession of great spiritual preceptors who have taught the science of self realization based on the teachings of the Bhagawat Gita and Srimad Bhagwatam.

The precepts and practices of ISKCON were taught and codified by Sri Chaitanya Mahaprabhu (1486-1532) along with His brother Nityananda Prabhu and six of His principle associates, the Goswamis of Vrindavana (Sanatana, Rupa, Jiva, Gopal Bhatta, Raghunatha Dasa and Raghunatha Bhatta).

The Bhagavad-gita, the principal scripture of The Hare Krishna Movement, is an eternal teaching, having Its’ written origins more than 5000-years ago, and before that time it was an oral tradition handed down from teacher to student from time immemorial.

Sri Chaitanya gave a powerful impetus for a massive bhakti (devotional) movement throughout India. Under His direction hundreds of volumes on the philosophy of Krishna consciousness were compiled. Many devotees followed in the preceptorial line of Sri Chaitanya Mahaprabhu including in the 19th century an outstanding Vaishnava theologian, Bhaktivinoda Thakura (1838-1914) who brought Krishna consciousness to a modern audience by first sending a book on the Teachings of Lord Caitanya to McGill University in Canada in 1896. Bhaktivinoda Thakur’s son, Bhaktisiddhanta Sarasvati Goswami (1874- 1937), became the guru of Srila Prabhupada (1896-1977) and instructed him to spread Krishna consciousness to the English speaking people of the West. On this order, Srila A.C. Bhaktivedanta Swami Prabhupada took a perilous journey across the Atlantic Ocean to USA in 1965, and consequently started the most auspicious spiritual movement, The International Society for Krishna Consciousness, for the fulfillment of his guru’s desire. ISKCON quickly spread to the major cities of the whole world in a mere 11 years.</p>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
