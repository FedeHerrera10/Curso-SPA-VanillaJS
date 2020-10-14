import getData from '../utils/getData';


const Home = async () => {
    
    const characters = await getData();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const view = `
                <div class="Characters">
                    ${characters.results.map((character) => `
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
            `;
            if(view.length ==0){
                reject(new Error('Error'))
            } else{
                resolve(view)
            }
        },2000)
    })
}

export default Home;