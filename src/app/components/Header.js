export default function Header() {
  return (
    <header
      className="w-[420px] md:w-[100%] h-[100%] shrink-0 bg-no-repeat bg-cover p-6 bg-opacity-50
      bg-[url('https://res.cloudinary.com/dhetnxi3h/image/upload/v1706080765/image_12_vmn5ox.png')]
      md:bg-[url('https://res.cloudinary.com/dhetnxi3h/image/upload/v1706081129/image_12_1_sude4j.png')]"
      //   style={{
      //     backgroundImage: `url('https://res.cloudinary.com/dhetnxi3h/image/upload/v1706080765/image_12_vmn5ox.png')`,
      //   }}
    >
      <nav className="flex flex-wrap justify-between navbar bg-transparent text-white max-w-[1920px] mx-auto mt-5">
        <div className="navbar-start hidden md:flex bg-white w-[220px] h-[68px]  justify-center items-center rounded-[6px]">
          <img
            alt="logo"
            loading="lazy"
            width="193"
            height="54"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f021c609.png&w=256&q=75"
          />
        </div>

        <div className="navbar-start md:hidden bg-white w-[80px] h-[26.444px] flex justify-center items-center rounded-[6px]">
          <img
            alt="logo"
            loading="lazy"
            width="69"
            height="20"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src="https://aiesp.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f021c609.png&w=256&q=75"
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 px-1 ">
            <li>
              <a
                className="text-white bg-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white bg-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white bg-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-white bg-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="#"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="text-white border-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="#"
              >
                Our Works
              </a>
            </li>
            <li>
              <a
                className="text-white bg-none hover:bg-sky-600 rounded-lg px-2 py-4"
                href="#"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="w-[196px]   bg-white  text-body-text text-black h-[68px] font-bold border-none rounded-[134px] px-[42px] py-[22px] hidden lg:block"
            href="#"
          >
            Contact Us↗
          </a>
          <div className="dropdown dropdown-end block lg:hidden">
            <label className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1.75 10.5H12.25V9.33333H1.75V10.5ZM1.75 7.58333H12.25V6.41667H1.75V7.58333ZM1.75 3.5V4.66667H12.25V3.5H1.75Z"
                  fill="#F8F8F8"
                />
              </svg>
            </label>
            {/* <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Our Works</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      <section className="bg-contact bg-cover pl-10 md:p-10 lg:p-20">
        <div className="max-w-[1920px] mx-auto">
          <h1 className="relative right-10 w-[105px] md:w-[851.76px] text-neutral-50  text-[16px] md:text-[76px] font-bold   leading-[85.12px]  uppercase">
            our works
          </h1>
          <h3 className="w-[301px] md:w-[100%] relative right-10 md:gap-5 text-neutral-50 text-[10px] md:text-[25px] font-bold  leading-[37.50px] mt-2 md:mt-6">
            At AIES, we are not just building projects; we are building a
            community of dedicated professionals committed to making a positive
            impact on the world. If you share our passion for sustainability,
            innovation, and excellence, we invite you to explore career
            opportunities with us.
          </h3>
        </div>
      </section>
    </header>
  );
}
