function Welcome(){
  return (
    <div className="overflow-hidden mt-15 bg-white py-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pt-4 lg:pr-8">
          <div className="lg:max-w-lg mx-8 md:-ml-11 lg:ml-0">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              welcome
            </h2>
            <p className=" text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Terima kasih telah berkunjung di portofolio aku
            </p>
            <p className="mt-4 text-lg/8 fade-in text-gray-600">
              halaman ini berisi keahlian aku dibidang web developer
            </p>
            {/* todo */}
            <div className="relative mt-5 inline-block group">
              <button
                 onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                className="relative px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  lihat skill
                </span>
              </button>
              <div className="absolute ml-20 invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                <div className="relative p-4 bg-gradient-to-br from-indigo-900/95 to-indigo-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-indigo-400"
                      >
                        <path
                          clipRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-white">
                      menuju ke skill
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">
                      kamu akan dipindahkan ke bagian skill
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="img/pc.webp"
          alt="desktop"
          className="w-[48rem] max-w-none rounded-xl animate-scroll ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width={2432}
          height={1442}
        />
        <img
          src="img/mobile.webp"
          className="absolute w-[200px] mt-[320px] sm:mt-[300px] lg:-mt-5 right-2 h-auto"
          alt=""
        />
      </div>
    </div>
  </div>
  )
}


export { Welcome }