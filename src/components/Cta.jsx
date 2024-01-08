export default function Cta() {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg pt-10 md:pt-20 md:px-20">
      <h4 className="font-bold text-center text-3xl md:text-[34px]">
        Start Trading Now
      </h4>
      <div className="w-[80%] mx-auto my-10 grid grid-cols-2 gap-5 md:w-[60%]">
        <button className="col-span-2 bg-black text-white text-center rounded-2xl py-5">
          Google Play
        </button>
        <button className="bg-black text-white text-center rounded-2xl py-5">
          Start on web
        </button>
        <button className="bg-black text-white text-center rounded-2xl py-5">
          Start on chat
        </button>
      </div>
      <img
        src="https://www.cardeaze.com/img/start_now_background.png"
        alt=""
        className="mt-10"
      />
    </div>
  );
}
