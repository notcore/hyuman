import Image from "next/image";

function Skill(){

    const data = [
        { url : 'svg/laravel.svg' ,
          name : 'laravel'
        } ,
        { url : 'svg/vue.svg' ,
          name : 'vue JS'
        } ,
        { url : 'svg/tailwind-css.svg' ,
          name : 'tailwind css'
        } ,
        { url : 'svg/python.svg' ,
          name : 'python'
        } ,
        { url : 'svg/react.svg' ,
          name : 'react JS'
        } ,
        { url : 'svg/next.svg' ,
          name : 'next JS'
        }
    ]

    

    const Looping = () => {
      return (
        <div className="grid mt-12 gap-3 mx-auto grid-cols-2 md:grid-cols-3">
          {data.map((data,i) => (
            <div key={i} className="border hover:shadow-md transition duration-500 shadow-indigo-300/90 border-slate-300 rounded-lg p-5">
              <div className="flex justify-center h-[70px] items-center">
                <Image src={data.url} width={50} height={50} alt={data.name}/>
              </div>
              <h2 className="text-xl text-center mt-4 font-semibold text-gray-900">
                  {data.name}
              </h2>
            </div>
          ))}

        </div>
      )
    }

  return(
    <div id="skill" className="flex py-4 my-22 w-screen justify-center">
      <div className="mx-10">
        <h2 className="text-sm fade-in font-semibold text-indigo-600 uppercase tracking-wide">
          skill
        </h2>
        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl fade-in">
          framework dan bahasa yang aku pelajari
        </p>
        <Looping />
        
      </div>
     

    </div>
  )
}

export {Skill}