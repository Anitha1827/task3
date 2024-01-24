export default function Contact() {
  return (
    <div
      className="relative w-[420px] md:w-[100%] h-[286.57px] shrink-0 md:h-[610px] bg-cover md:p-6 p-6 md:pl-6 pl-0 bg-white overflow-hidden "
      style={{
        backgroundImage: `url('https://aiesp.vercel.app/assets/contact.png')`,
        borderTopLeftRadius: "30%",
        borderTopRightRadius: "30%",
      }}
    >
      <div className=" flex md:flex-row justify-around  mx-auto">
        <div className="mt-10 md:mt-[10%]">
          <p className="md:w-[642px] w-[211px] shrink-0 p-1 text-neutral-50 text-[12px] md:text-[39px] font-bold uppercase bg-[#00973D] rounded">
            Interested in learning more about our products and services?
          </p>
          <div class="w-[206px] md:w-[606px] text-neutral-50 text-[10px] md:text-[20px] font-bold">
            <br />
            let our team of experts guide you towards the ideal water and
            wastewater treatment solutions for your organization
          </div>
          <div className="md:mt-10 mt-5">
            <a
              className="md:w-[196px] bg-white  text-body-text text-black md:h-[68px] font-bold border-none rounded-[134px] md:px-[32px] md:py-[22px] py-[9px] px-[18px]"
              href="#"
            >
              call us Today↗
            </a>
          </div>
        </div>
        <div className="">
          <img
            src="https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact2.6503186b.png&w=640&q=75"
            className="md:w-[606px] md:h-[595px] w-[100px] h-[231px] shrink-0 md:static absolute bottom-0 right-[-15px]"
          />
        </div>
      </div>
    </div>
  );
}
