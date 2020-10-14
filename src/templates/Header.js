const Header = () => {
    const view = `
    
    <div class="Header-main">
        <div class="Header-logo">
            <h1>
                <a href="https://fedeherrera10.github.io/Curso-SPA-VanillaJS">
                <img src="logo.png" alt="loading.." class="logo">
                </a>
                <span class="title">SPA Rick and Morthy</span>
            </h1>
        </div>
        <div class="Header-nav">
            <a href="#/about/">
            About
            </a>
        </div>
    </div>
    <div class="filter" id="Filter">
      <p>Filter for: </p>
      <div class="dropdown">
        <a href="#" class="dropdown">
          Gender
          <div class="collapse">
             <a href="#/gender/Female">Female</a>
             <a href="#/gender/Male">Male</a>
         </div>                                              
       </a>
      </div>
      <div class="dropdown">
        <a href="#/filter/gender" class="dropdown">
          Status
          <div class="collapse">
             <a href="#/status/Alive">Alive</a>
             <a href="#/status/Dead">Dead</a>
         </div>                                              
       </a>
      </div>
      <div class="dropdown">
        <a href="#/filter/gender" class="dropdown">
          Specie
          <div class="collapse">
             <a href="#/species/Human">Human</a>
             <a href="#/species/Alien">Alien</a>
         </div>                                              
       </a>
      </div>
    </div>
    `
    return view;
}


export default Header;