import React from "react";

const Navbar = () => {
  const NavItems = ["Home","About","Programs","Pricing","Contact Us"]
  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-black ">
  <div class="container-fluid">
    <a class="navbar-brand text-capitalize font-bold" href="#">stayfit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            {NavItems.map(item => (
               <li class="nav-item">
                <a class="nav-link active font-bold" aria-current="page" href="#">{item}</a>
             </li>
            ))}
            <div className="border-2 p-2 rounded border-orange-400 hover:cursor-pointer font-bold text-white">Signup Today</div>
      </ul>
    </div>
  </div>
</nav>


  );
};

export default Navbar;
