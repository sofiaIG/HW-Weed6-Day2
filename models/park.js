const Park = function(name, ticketPrice, collectionOfDinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(index, 1);
}

Park.prototype.findMostVisitedDinosaur = function(){
    let highestNumber = 0;
    let mostVisitedDinosaur;
    for (dinosaur in this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay > highestNumber){
            highestNumber = dinosaur.guestsAttractedPerDay;
            mostVisitedDinosaur = dinosaur.species;
        } 
    }
    const example = this.collectionOfDinosaurs[0]
    const numbr = example.guestsAttractedPerDay
    console.log('oneeeeee',example);
    console.log('twoooo',numbr)
    return mostVisitedDinosaur;
}

module.exports = Park;