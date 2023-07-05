
const ncharacters=856
const API = `https://rickandmortyapi.com/api/character/${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)},${randgen(ncharacters)}`

function randgen(nidex){
    return Math.round((Math.random()*nidex)+1)
}
async function fetchinfo(API) {
    const respose = await fetch(API, { method: "Get" })
    const data = await respose.json()
    return data
}
const content = null || document.getElementById("content")

;(async () => {
    try {
        const d = await fetchinfo(API)

        let view = ` ${d
            .map(
                (character) => `        
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    
                    <img src="${character.image}" alt="${character.name}" class="w-full">
                    
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <a href="${character.url}">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${character.name}
                        </a>
                    </h3>
                </div>
            </div>
            `
            )
            .slice(1, 10)
            .join("")}
    `
        content.innerHTML = view
        //d.map(character =>console.log(character.name))
    } catch (error) {
        console.log(error)
    }
})()
