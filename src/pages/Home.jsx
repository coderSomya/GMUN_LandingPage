import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/Beams";
import Query from "../components/ui/Query";

export function Home() {
  return (
    <div>
    (<BackgroundBeamsWithCollision>
        <div className="absolute top-10 left-10 z-100">
        <button
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <a href="https://gmun.cqiitkgp.com">
        Deja Vu ?
        </a>
      </button>
        </div>
       
      <h2
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Global Model United Nations{" "}
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div
            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className=""></span>
          </div>
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-violet-400 to-pink-500 py-4">
            <span className="">Coming Soon.....</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>)
    <Query/>
    </div>
  );
}
