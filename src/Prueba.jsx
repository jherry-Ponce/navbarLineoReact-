
export const Prueba=(props)=>{
    console.log(props.dato)
    return(
        <>
             {/* mobil */}
            <div className="bg-white h-full overflow-y-auto d-block d-md-none ">
                <div className="container bg-primary py-2 mb-2">
                
                </div>

                <ul>
                  {/*   @foreach ($categories as $category) */}
                 { (props.dato).map((data)=>(
                    <li className=" text-dark  ">
                        <a href="#" className="px-4 py-2 text-sm d-flex align-items-center lista-menu ">

                            <span className="flex justify-center w-9">
                            {/* icono */}
                            <i className="fa-brands fa-aws"></i>
                            </span>
                        {/*   catgoria */}
                        {data.subcategory}
                        </a>
                    </li>
                 ))

                }
                </ul>
              
                <p className="text-dark px-6 my-2">Usuarios</p>

                <a className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu ">

            
                    <span className="d-flex justify-content-center w-9">
                        <i className="fas fa-user"></i>
                    </span>
                    Perfil
                </a>

                <a href="#"  className="px-4 py-2 text-sm d-flex align-items-center text-dark lista-menu">

            
                    <span className="d-flex justify-content-center w-9">
                        <i className="fas fa-sign-out-alt"></i>
                    </span>
                    Cerrar Sesion
                </a>

            
                
            </div>
        </>
    )
}