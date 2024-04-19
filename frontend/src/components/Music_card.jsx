import React from 'react';

export default function Music_card({ musics }) {
  return (
    <div>
      <div className='mb-20'>
        <ul className="mx-12 space-y-4">
          {musics.map((music, index) => (
            <li className='flex space-x-9' key={index}>
              <div>
                {/* Constructing the YouTube thumbnail URL */}
                <img className='w-[40vh]' src={`https://img.youtube.com/vi/${music.image}/hqdefault.jpg`} alt="" />
              </div>
              <div className='flex flex-col space-y-2'>
                <div>
                  <h2 className='text-purple-400 font-bold text-2xl'>{music.title}</h2>
                </div>
                <div className='text-gray-400 text-lg'>{music.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
