import { lora } from '@/app/fonts';
import React from 'react';
import { ArrowLinkLg } from './Icons';

export default function Contact() {
  return (
    <section className="bg-gray-950 text-white">
      <div className="container mx-auto py-20 px-2 grid grid-cols-2 gap-40">
        <div className="">
          <h2
            className={`${lora.className} text-6xl font-bold -tracking-[.1rem]`}
          >
            Contacto
          </h2>
          <p className="text-gray-300 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            excepturi repudiandae maiores eveniet nam placeat laboriosam.
          </p>

          <ul className="text-2xl mt-10">
            <li>
              <a
                href="mailto:rodrigorodriguezbuxman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2 border-b border-gray-700"
              >
                Email {ArrowLinkLg}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rdrbux/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2 border-b border-gray-700"
              >
                LinkedIn {ArrowLinkLg}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RdrBux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2 border-b border-gray-700"
              >
                GitHub {ArrowLinkLg}
              </a>
            </li>
            <li>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center py-2 border-b border-gray-700"
              >
                Curriculum Vitae {ArrowLinkLg}
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold">Enviar un mensaje</h3>
          <form className="grid gap-6 mt-6">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="name"
                id="name"
                className="block p-2.5 w-full text-sm bg-transparent border-2 rounded-lg border-gray-600 appearance-none focus:border-teal-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                for="name"
                className="mx-3.5 px-1 bg-gray-950 z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px]"
              >
                Nombre
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                className="block p-2.5 w-full text-sm bg-transparent border-2 rounded-lg border-gray-600 appearance-none focus:border-teal-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                className="mx-3.5 px-1 bg-gray-950 z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px]"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full group">
              <textarea
                name="message"
                id="message"
                className="block p-2.5 w-full text-sm bg-transparent border-2 rounded-lg border-gray-600 appearance-none focus:border-teal-500 focus:outline-none focus:ring-0 peer"
                placeholder=" "
                rows={4}
                required
              ></textarea>
              <label
                for="message"
                className="mx-3.5 px-1 bg-gray-950 z-10 peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-[22px] scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[22px]"
              >
                Mensaje
              </label>
            </div>

            <button
              type="submit"
              className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-teal-600 hover:bg-teal-700 focus:ring-teal-800"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
