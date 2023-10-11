import { Curve, Hexagon } from '@/components/Icons';
import { lora } from './fonts';
import Image from 'next/image';
import HeroImg from './bg_home.png';
import CopySaver from '@/components/CopySaver';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-[1fr_1.7fr_1fr] gap-6">
        <div className="w-full h-[70vh] bg-teal-200 overflow-hidden rounded-3xl col-start-2 row-start-1"></div>

        <div className="col-span-2 col-start-1 row-start-1 mt-10">
          <div className="px-4 py-3 rounded-full border w-fit">
            <p className="text-xs font-medium flex gap-2">
              <span className="text-emerald-300">{Hexagon}</span> Desarrollador
              Web
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 left-[39%] -rotate-90">{Curve}</div>
            <div className="absolute -bottom-6 left-[39%]">{Curve}</div>
            <h1 className={`${lora.className} text-5xl font-medium mt-2`}>
              <span className="block relative z-20 bg-white rounded-3xl pr-8 py-3 w-fit">
                Transformando grandes
              </span>{' '}
              <span className="block relative z-10 bg-white rounded-3xl pr-8 py-3 w-fit -mt-5">
                ideas en <b>experiencias</b>{' '}
                <span className="absolute top-5 -right-6">{Curve}</span>
              </span>{' '}
              <span className="block relative bg-white rounded-3xl pr-8 py-3 w-fit -mt-5">
                digitales <b>únicas</b>{' '}
                <span className="absolute top-5 -right-6">{Curve}</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="bg-stone-200 rounded-3xl h-1/2 overflow-hidden self-end">
          <Image className="w-[300px]" src={HeroImg} alt="profile image" />
        </div>
      </section>

      <CopySaver />
    </>
  );
}
