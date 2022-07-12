export const Subcategory = (props) => {
  console.log(props);
  return (
    <>
      <div className="row row-cols-4 p-4">
        <div>
          <p className="text-lg font-bold text-center text-primary mb-3  ">
            SubCategorias{" "}
          </p>
          <ul>
            <li>
              <a
                href="#"
                className=" py-1 px-4 subcatergoria-menu "
              >
                {/*  {{ $subcategory->name }} */}
                {props.Subcategories}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-9">
          <img className=" h-64 w-100 subcategoria" src={props.imagenes} alt={props.Subcategories} />
        </div>
      </div>
    </>
  );
};
