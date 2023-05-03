import { useState } from 'react';
import Link from 'next/link';
import { Banner, Contributions, Donation, Publicity } from '..';
import Quincho from '../../../../public/installations-img/Imagen4.jpg';

export function HomePage() {
  const [donate, setDonate] = useState(false);
  const visibleContributions = () => {
    setDonate(!donate);
  };
  return (
    <div className="flex">
      <Banner />

      <Donation visibleContributions={visibleContributions} />
      {donate ? (
        <Contributions visibleContributions={visibleContributions} />
      ) : null}
      <br className="lg:my-5 lg:py-5" />
      <hr className="lg:mt-5 lg:pt-5" />
      <Publicity />
    </div>
  );
}
