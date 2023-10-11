import { Curve, Hexagon, ChevronDouble } from '@/components/Icons';
import { lora } from './fonts';
import Image from 'next/image';
import HeroImg from './bg_home.png';
import CopySaver from '@/components/CopySaver';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-2">
        <div className="w-full h-[400px] bg-gray-200 overflow-hidden rounded-3xl col-start-2 row-start-1">
          <Image
            className="w-[400px] ml-24"
            src={HeroImg}
            alt="profile image"
          />
        </div>

        <div className="col-span-2 col-start-1 row-start-1 mt-10">
          <div className="px-4 py-3 rounded-full border border-gray-300 w-fit">
            <p className="text-xs flex gap-2">
              <span className="text-teal-300">{Hexagon}</span> Desarrollador Web
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -rotate-90">{Curve}</div>
            <div className="absolute bottom-[52px] left-1/2">{Curve}</div>
            <h1 className={`${lora.className} text-7xl mt-2`}>
              <span className="block relative z-20 bg-white rounded-r-3xl pr-8 py-3 w-fit">
                Transformando grandes
              </span>{' '}
              <span className="block relative z-10 bg-white rounded-r-3xl pr-8 py-3 w-fit -mt-5">
                ideas en <b>experiencias</b>{' '}
                <span className="absolute top-5 -right-6">{Curve}</span>
              </span>{' '}
              <span className="block relative bg-white rounded-r-3xl pr-8 py-3 w-fit -mt-5">
                digitales <b>únicas</b>{' '}
                <span className="absolute top-5 -right-6">{Curve}</span>
              </span>
            </h1>
          </div>
          {/* <p className="w-5/12 mt-3 text-gray-600">
            ¡Hola! Soy un Desarrollador Web Fullstack especializado en el uso de
            React, Next.js, Node.js (Express) y TypeScript.
          </p> */}
        </div>
      </section>

      <CopySaver />
    </>
  );
}
