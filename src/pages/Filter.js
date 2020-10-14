import getData from '../utils/getData';
const filter = async() => {
    let filter;
    let param;
    let urlHash = location.hash.slice(1).split('/');
    let filterCharacter;
    
    if ( urlHash.length === 3){
        filter = urlHash[1];
        param=urlHash[2];
        let characters = await getData();
        filterCharacter=characters.results.filter( (character) => {
             if (character[filter] === param){
                return character;
            } 
            
        })
        console.log(filterCharacter)
    }
    

    const view = `
                <div class="Characters">
                ${filterCharacter.map((character) => `
                <article class="Characters-item">
                        <a href="#/${character.id}/">
                            <img src=${character.image} alt="${character.name}"/>
                            <h2>${character.name}</h2>
                        </a>
                </article>
                `).join('')}
            </div>
            <div class="loading" id="load-content">
            </div>
        </div>
    `;
    return view;
}

export default filter;