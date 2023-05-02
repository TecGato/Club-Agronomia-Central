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
          // Video is in view, add blur class
          video.classList.remove('blur')
        } else {
          // Video is out of view, remove blur class
          video.classList.add('blur')
        }
      }
    }

  //   function adjustBackgroundOpacity() {
  //     const scrollTop = document.documentElement.scrollTop;
  //     const scrollHeight = document.documentElement.scrollHeight;
  //     const clientHeight = document.documentElement.clientHeight;
  //     const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  //     const div = document.querySelector('.contenido');
  //     div.style.opacity = (scrollPercent+40) / 100;
  // }
  
    window.addEventListener('scroll', handleScroll)
    // window.addEventListener('load', adjustBackgroundOpacity);
    // window.addEventListener('resize', adjustBackgroundOpacity);
    // window.addEventListener('scroll', adjustBackgroundOpacity);
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
