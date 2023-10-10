import { Curve, Hexagon } from '@/components/Icons';
import { lora } from './fonts';

export default function Home() {
  return (
    <section className="grid grid-cols-2">
      <div className="w-full h-[70vh] bg-red-300 rounded-3xl col-start-2 row-start-1"></div>
      <div className="col-span-2 col-start-1 row-start-1 self-center">
        <div className="px-4 py-3 rounded-full border w-fit">
          <p className="text-xs flex gap-2 text-gray-500">
            <span className="text-emerald-300">{Hexagon}</span> Desarrollador
            Fullstack
          </p>
        </div>
        <h1 className={`${lora.className} text-7xl mt-2`}>
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
          <div className="h-16"></div>
        </h1>
      </div>
    </section>
  );
}
