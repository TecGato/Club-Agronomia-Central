import { Banner, Contributions, Donation, Publicity } from '..';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [donate, setDonate] = useState(false);
  const visibleContributions = () => {
    setDonate(!donate);
  };

  useEffect(() => {
    function handleScroll() {
      const video = document.querySelector('video')
      
      if(video) {
        const videoTop = video.getBoundingClientRect().top
        const videoHeight = video.offsetHeight
        const viewportHeight = window.innerHeight
        const scrollPosition = window.scrollY
        const offset = viewportHeight / 2

        if (videoTop < scrollPosition + viewportHeight - offset && videoTop + videoHeight > scrollPosition + offset) {
          video.classList.remove('blur')
        } else {
          video.classList.add('blur')
        }
      }
    }
  
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className=''>
      <Banner />
      <div className="contenido w-full pt-80 sm:pt-32 md:pt-40 lg:pt-20 text-center bg-gradient-to-b from-[#397797] to-blue-950">
        <Donation visibleContributions={visibleContributions} />
        {donate ? (
          <Contributions visibleContributions={visibleContributions} />
        ) : null}
        <br className="lg:my-5 lg:py-5" />
        <hr className="lg:mt-5 lg:pt-5 border-gray-500" />
        <Publicity />
      </div>
    </div>
  );
}
