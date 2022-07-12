import "./App.css";
import { Carro } from "./Carro";
import { apifecth } from "./datos";
import { Subcategory } from "./Subcategory";
import Logo from "./logo.svg";
import { Prueba } from "./Prueba";
function App() {
  const Data = apifecth();
  const scroll = () => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };
  return (
    <>
      <header className="bg-dark position-sticky top-0  ">
        <div className="">
          <div className="container d-flex align-items-center h-16 justify-content-between px-0 ">
            {/* barra categorias */}
            <a
              href="#"
              type="button"
              onClick={scroll}
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className=" navbar-toggler d-flex flex-column align-items-center justify-content-center  order-md-first order-last px-4 bg-white bg-opacity-25 text-white h-100  text-white pe-auto"
            >
              <svg
                className="barra"
                stroke="currentColor"
                fill="#ffff"
                viewBox="0 0 24 24"
              >
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="text-sm hidden md:block">Categorias</span>
            </a>
            {/* logo */}
            <a href="/" className="fs-2">
              <img src={Logo} title="Linio" alt="logo" className="logo" />
            </a>
            {/* buscador */}
            <div className="input-group w-50 d-none d-md-flex ">
              <input
                type="search"
                className="form-control "
                placeholder="¿Que estas buscando?"
                autoFocus
                maxLength="true"
              />
              <button className="btn btn-light btn-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 226 226"
                >
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,226v-226h226v226z" fill="none"></path>
                    <g fill="#4E9EF5">
                      <path d="M92.42978,25.42569c-17.1707,0 -34.34072,6.53212 -47.40634,19.59775c-26.13125,26.13125 -26.13125,68.68143 0,94.81268c13.06562,13.06563 30.19288,19.6012 47.496,19.6012c17.30313,0 34.43038,-6.53557 47.496,-19.6012c25.95469,-26.13125 25.95193,-68.68143 -0.17932,-94.81268c-13.06563,-13.06562 -30.23564,-19.59775 -47.40634,-19.59775zM92.34357,35.84357c14.47813,0 28.95556,5.47068 39.90244,16.59412c22.07031,22.07031 22.06962,57.91388 0.17587,79.98419c-22.07031,22.07031 -57.91388,22.07031 -79.98419,0c-22.07031,-22.07031 -22.07031,-57.91388 0,-79.98419c10.94688,-10.94687 25.42776,-16.59412 39.90588,-16.59412zM92.34357,46.43732c-12.18281,0 -23.66075,4.76581 -32.31232,13.59393c-8.29844,8.29844 -12.88837,19.06944 -13.41806,30.72257c-0.17656,3.00156 2.11944,5.29618 5.121,5.47275h0.17587c2.825,0 5.12031,-2.296 5.29688,-5.121c0.35313,-9.00469 4.05887,-17.30381 10.23856,-23.66006c6.70937,-6.70937 15.54026,-10.41443 24.89807,-10.41443c3.00156,0 5.29688,-2.29531 5.29688,-5.29687c0,-3.00156 -2.29531,-5.29687 -5.29687,-5.29687zM61.79688,113c-2.92538,0 -5.29687,2.37149 -5.29687,5.29688c0,2.92538 2.37149,5.29688 5.29688,5.29688c2.92538,0 5.29688,-2.37149 5.29688,-5.29687c0,-2.92538 -2.37149,-5.29687 -5.29687,-5.29687zM147.18829,142.13281c-1.34629,0 -2.67051,0.53038 -3.6416,1.58975c-2.11875,2.11875 -2.11875,5.47206 0,7.41424l4.41406,4.41406c-1.05937,2.11875 -1.58975,4.41475 -1.58975,6.88663c0,4.2375 1.58837,8.29913 4.58993,11.30069l22.60138,22.24618c3.17812,3.17812 7.23631,4.76581 11.29724,4.76581c4.06094,0 8.12256,-1.58837 11.30069,-4.58994c6.17969,-6.17969 6.17969,-16.24237 0,-22.42206l-22.59793,-22.60138c-3.00156,-3.00156 -7.06319,-4.58993 -11.30069,-4.58993c-2.47188,0 -4.76788,0.53038 -6.88663,1.58975l-4.41406,-4.41406c-1.05937,-1.05937 -2.42636,-1.58975 -3.77264,-1.58975zM162.26163,156.96475c1.4125,0 2.82431,0.53038 3.70712,1.58975l22.42206,22.42206c2.11875,2.11875 2.11875,5.47206 0,7.41425c-2.11875,2.11875 -5.47206,2.11875 -7.41425,0l-22.42206,-22.24619c-1.05937,-1.05937 -1.58975,-2.47049 -1.58975,-3.88299c0,-1.4125 0.53038,-2.82431 1.58975,-3.70712c1.05937,-1.05937 2.29462,-1.58975 3.70712,-1.58975z"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            {/* user */}
            <div className="mx-6 relative  d-none d-md-block">
              <i className="fas fa-user-circle text-white login "></i>
            </div>

            <div className="d-none d-md-block">
              {/* carro desplegable */}
              <span className="position-relative inline-block cursor-pointer">
                <Carro color="white" size="30" />
                {/*  {si carro tiene items marca esto} */}
                {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span> */}
                {/* sino*/}
                <span className="position-absolute top-0 right-0  carro bg-danger "></span>
              </span>
              {/*   fin bucle */}
            </div>
          </div>

          {/*  genera la vista desplegada de categorias */}
          <nav
            id="navbarToggleExternalContent"
            className="collapse navigation-menu bg-dark bg-opacity-25 w-100 position-absolute  "
          >
            <div className="container h-max d-none d-md-block">
              <div className=" row h-max row-cols-4 position-relative">
                <ul className="bg-white h-max ">
                  
                  {Data.map((data) => (
                    <>
                      <li className="navigation-link text-primary hover:bg-blue-500 hover:text-white">
                        <a
                          href="#"
                          className="px-4 py-2 text-sm text-dark d-flex aling-items-center lista-menu "
                        >
                          <span className="d-flex justify-content-center w-25">
                            {/* iconos */}
                            <i className="fa-brands fa-aws"></i>
                          </span>
                          {/* nombre categoria */}
                          {data.category}
                        </a>
                        <div className="navigation-submenu bg-light position-absolute w-75 h-max top-0 navigation-menu-item ">
                          <Subcategory
                            Subcategories={data.subcategory}
                            imagenes={data.image}
                          />
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
                <div className="col-9 bg-light">
                  <Subcategory
                    className={console.log(
                      Data.map((data) => data).findIndex(
                        (element) => element > 0
                      )
                    )} /* Subcategories={data.subcategory.find(element=>element.id=='5')} */
                  />
                </div>
              </div>
            </div>
            
            <Prueba dato={Data}/>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;
