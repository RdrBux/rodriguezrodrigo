'use client';
import { useState } from 'react';

export default function LangToggler() {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <div className="rounded-full bg-gray-300 p-1 relative text-sm">
      <div
        className={`${
          isEnglish ? 'translate-x-0' : 'translate-x-full'
        } absolute duration-200 inset-1 rounded-full bg-white w-[84px]`}
      ></div>
      <div className="flex z-10 relative">
        <button
          className="px-4 py-2 w-[84px]"
          onClick={() => setIsEnglish(true)}
        >
          English
        </button>
        <button
          className="px-4 py-2 w-[84px]"
          onClick={() => setIsEnglish(false)}
        >
          Español
        </button>
      </div>
    </div>
  );
}
