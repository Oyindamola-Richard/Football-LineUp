class Club {
    constructor(playerName,jerseyNumber,position){
        this.playerName = playerName,
        this.jerseyNumber = jerseyNumber,
        this.position = position
    }
    
}
var keeper = new Club("De Gea","1","GK")
console.log(first)
first.innerHTML = `
    <img src="/img/back.png" alt="" srcset="" height="100px">
    <h3 class="playername">${keeper.playerName}</h3>
    <h2 class="jerseynumber">${keeper.jerseyNumber}</h2>
    <h3 class="position">${keeper.position}</h3>
`