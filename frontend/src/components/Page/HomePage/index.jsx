import { Banner, Contributions, Donation, Publicity } from '..';
import { useState } from 'react';

export function HomePage() {
  const [donate, setDonate] = useState(false);
  const visibleContributions = () => {
    setDonate(!donate);
  };
  return (
    <div>
      <Banner />
      <h1 className="text-3xl dark:text-slate-100 text-gray-800 font-bold underline">
        Bienvenidos
      </h1>
      <Donation visibleContributions={visibleContributions} />
      {donate ? (
        <Contributions visibleContributions={visibleContributions} />
      ) : null}
      <br className="my-5 py-5" />
      <hr className="mt-5 pt-5" />
      <Publicity />
    </div>
  );
}
