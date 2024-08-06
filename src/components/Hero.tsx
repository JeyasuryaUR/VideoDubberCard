"use client";
import React, { useState } from "react";

const Hero = () => {
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvoteClick = () => {
    setUpvoted(!upvoted);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto p-4 sm:p-6">
      <div className="my-5 flex flex-col sm:flex-row justify-between">
        <ol className="flex flex-wrap gap-2 mb-4 sm:mb-0">
          <li className="flex items-center gap-2">
            <a
              href="https://www.producthunt.com/"
              className="text-sm text-gray-600 hover:text-blue-500 opacity-70"
            >
              Home
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-2 h-2 mt-0.5 fill-gray-400" viewBox="0 0 7 11">
              <path d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z" />
            </svg>
            <a
              href="https://www.producthunt.com/products/videodubber-fast-video-translator"
              className="text-sm text-gray-600 hover:text-blue-500 opacity-70"
            >
              Product
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-2 h-2 mt-0.5 fill-gray-400" viewBox="0 0 7 11">
              <path d="M6.744 5.502a1 1 0 0 1-.292.703l-4.247 4.247a1.003 1.003 0 0 1-1.412-.002.996.996 0 0 1-.003-1.412L4.33 5.5.79 1.962A1.004 1.004 0 0 1 .794.55a.995.995 0 0 1 1.41-.002l4.248 4.247c.192.192.29.447.29.702z" />
            </svg>
            <a
              href="https://www.producthunt.com/posts/videodubber-fast-video-translator"
              className="text-sm text-gray-600 pointer-events-none"
            >
              VideoDubber - Fast Video Translator
            </a>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center sm:justify-start">
          <img
            className="w-18 h-18 rounded"
            alt="VideoDubber - Fast Video Translator"
            src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop"
            srcSet="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1 1x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2 2x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=3 3x"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              VideoDubber - Fast Video Translator
              <span className="ml-2 -mt-1">
                <svg className="w-3 h-2 fill-gray-300" viewBox="0 0 12 7">
                  <path d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z" />
                </svg>
              </span>
            </h1>
            <h2 className="text-2xl font-light text-gray-500">
              Translate videos in your own voice, globalize in a click!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-end gap-3">
            <button className="h-16 w-full sm:w-24 px-4 py-2 text-sm font-semibold text-gray-800 bg-white border border-gray-200 rounded">
              <div className="flex items-center justify-center">
                <div>Visit</div>
                <svg
                  className="w-3 h-2 ml-2.5 fill-gray-400"
                  viewBox="0 0 12 7"
                >
                  <path d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z" />
                </svg>
              </div>
            </button>
            <button
              className={`h-16 w-full sm:w-56 px-5 py-5 text-sm font-semibold rounded ${
                upvoted
                  ? "text-red-500 bg-white border border-red-500"
                  : "text-white bg-red-500"
              }`}
              onClick={handleUpvoteClick}
            >
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-4 mr-2"
                  fill={upvoted ? "red" : "currentColor"}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l10 20H2z" />
                </svg>
                <div className="uppercase">
                  {upvoted ? "Upvoted" : "Upvote"}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;