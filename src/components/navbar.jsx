function Navbar(){
    return (
      <div className="sticky navbar z-60 inset-1 top-0 bg-white h-12 shadow-md">
      <div className="flex items-center  gap-1">
        <img
          src="img/hyuma.png"
          className="w-[30px] ml-3 mt-2 h-[30px] object-cover"
          alt=""
        />
        <ul className="ml-auto gap-3 md:mr-12 flex mr-10 mt-2">
          <li>
            <button className="text-gray-900" onClick={() => {
                    document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    >About me
            </button>
          </li>
          <li>
          <button className="text-gray-900" onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    >contact
            </button>
          </li>
          <li>
          <button className="text-gray-900" onClick={() => {
                    document.getElementById('skill')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    >skill
            </button>
          </li>
        </ul>
      </div>
    </div>
    )
  }

  export { Navbar }