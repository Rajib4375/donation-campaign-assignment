

const Banner = () => {
    return (
        <div className=" mt-10">
           <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1CeG2B0KtrboUnB5UebxGsBfnUIbXoSZ-SuoM4y3Pq42ir1njoTRgVpRI)'}}>
     <div className="hero-overlay bg-opacity-90"></div>
     <div className="hero-content text-center ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
      <div>
      <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
      <button className="p-3 rounded-md bg-[#FF444A]">Search</button>
      </div>
      
    </div>
    </div>
   </div>
        </div>
    );
};

export default Banner;