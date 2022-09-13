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
var rightBack = new Club("De Gea","2","RB")
console.log(second)
second.innerHTML = `
    <img src="/img/back.png" alt="" srcset="" height="100px">
    <h3 class="playername">${rightBack.playerName}</h3>
    <h2 class="jerseynumber">${rightBack.jerseyNumber}</h2>
    <h3 class="position">${rightBack.position}</h3>
`
var centralBack1 = new Club("De Gea","3","CB")
console.log(third)
third.innerHTML = `
    <img src="/img/back.png" alt="" srcset="" height="100px">
    <h3 class="playername">${centralBack1.playerName}</h3>
    <h2 class="jerseynumber">${centralBack1.jerseyNumber}</h2>
    <h3 class="position">${centralBack1.position}</h3>
`