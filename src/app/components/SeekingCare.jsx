export default function SeekingCare() {
  return (
    <div className="flex flex-col md:flex-row mt-[83px] md:gap-[35px] gap-0">
      <div className="md:w-[41%]">
        <div className="text-[35px] md:text-[46px] font-[500] md:leading-[54px]">
          What Are You Seeking Care For?
        </div>
        <div className="text-[#475467] text-[14px] mt-[13px]">
          We are dedicated to providing evidence-based information about
          addiction and treatment centers across America
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-[15px] md:gap-[11px] mt-5 md:mt-0">
        <div className="bg-[#EFFFDF] rounded-2xl md:w-1/2 p-[17px] flex flex-col justify-between gap-[13px]">
          <h2 className="font-[600] text-[19px]">Myself</h2>
          <ul className="text-[#475467] text-[12px] flex flex-col gap-[13px]">
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Find an accredited rehab for my unique needs
            </li>
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Learn when substance abuse requires treatment
            </li>
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Understand addiction treatment and aftercare processes
            </li>
          </ul>
          <button className="cursor-pointer border py-[8px] rounded-full text-[#081253] text-[14px]">
            Find Treatment
          </button>
        </div>
        <div className="bg-[#E9ECFF] rounded-2xl md:w-1/2 p-[17px] flex flex-col justify-between gap-[13px]">
          <h2 className="font-[600] text-[19px]">My Loved One</h2>
          <ul className="text-[#475467] text-[12px] flex flex-col gap-[13px]">
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Learn about setting and holding healthy boundaries
            </li>
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Understand addiction treatment and aftercare processes
            </li>
            <li className="flex gap-[6px]">
              <img src="/Icons/tick-circle.svg" className="h-[32px]" alt="" />
              Find an accredited rehab for my unique needs
            </li>
          </ul>
          <button className="cursor-pointer border py-[8px] rounded-full text-[#081253] text-[14px]">
          Find Treatment
          </button>
        </div>
      </div>
    </div>
  );
}
