import { lora } from '@/app/fonts';

export default function CopySaver() {
  return (
    <section className="my-20 bg-blue-100 rounded-3xl grid grid-cols-2">
      <div className="h-[80vh]"></div>
      <div className="flex flex-col items-center text-center gap-10 justify-center">
        <p className="border border-gray-900 px-4 py-3 rounded-full">2023</p>
        <h2 className={`${lora.className} text-6xl -tracking-[.1rem]`}>
          Copy Saver
        </h2>
        <p className="text-sm px-20">
          La extensión de Google Chrome que llegó para solucionarte la vida
        </p>
        <button className="font-bold text-white bg-gray-900 px-6 py-3 rounded-full">
          EXPLORAR
        </button>
      </div>
    </section>
  );
}
