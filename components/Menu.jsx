'use client';

import { useState } from 'react';
import { ArrowLink, Hamburger, Xmark } from './Icons';
import OutsideAlerter from './OutsideAlerter';

export default function Menu() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenuActive(true)}
        className="flex gap-3 items-center px-4"
      >
        Menú {Hamburger}
      </button>

      {menuActive && (
        <>
          <div className="fixed z-40 top-0 left-0 w-full h-full bg-gray-900/50"></div>
          <OutsideAlerter fn={() => setMenuActive(false)}>
            <div className="container mx-auto p-2 relative">
              <div className="bg-white flex flex-col gap-4 rounded-3xl p-8 absolute top-0 right-0 w-fit min-w-[340px] z-50">
                <div className="flex items-center justify-between">
                  <p className="lg:w-0 overflow-hidden">Text</p>
                  <button
                    className="flex gap-3 items-center group"
                    onClick={() => setMenuActive(false)}
                  >
                    Cerrar{' '}
                    <span className="block rounded-full border p-1 border-gray-300 group-hover:rotate-180 duration-500">
                      {Xmark}
                    </span>
                  </button>
                </div>

                <ul className="text-4xl font-medium flex flex-col gap-4">
                  <li>Inicio</li>
                  <li>
                    <button>Proyectos</button>
                    <ul className="text-2xl text-gray-500 font-regular hidden">
                      <li className="p-3 border-b">Proyecto 1</li>
                      <li className="p-3 border-b">Proyecto 2</li>
                      <li className="p-3 border-b">Proyecto 3</li>
                    </ul>
                  </li>
                  <li>Contacto</li>
                </ul>

                <ul className="ml-auto">
                  <li>
                    <a
                      href="mailto:rodrigorodriguezbuxman@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-sm justify-between w-24 py-0.5"
                    >
                      Email {ArrowLink}
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:rodrigorodriguezbuxman@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-sm justify-between w-24 py-0.5"
                    >
                      LinkedIn {ArrowLink}
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:rodrigorodriguezbuxman@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-sm justify-between w-24 py-0.5"
                    >
                      GitHub {ArrowLink}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </OutsideAlerter>
        </>
      )}
    </>
  );
}
