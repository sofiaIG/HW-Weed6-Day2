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
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.guestsAttractedPerDay > highestNumber){
            highestNumber = dinosaur.guestsAttractedPerDay;
            mostVisitedDinosaur = dinosaur.species;
        } 
    }

    return mostVisitedDinosaur;
}

Park.prototype.findDinosaursSpecies = function(species){
    dinosaurs =[];
    for (dinosaur of this.collectionOfDinosaurs){
        if (dinosaur.species == species){
            dinosaurs.push(dinosaur.species);
        }
    }
    return dinosaurs
}

Park.prototype.calculateTotalVisitorsPerDay = function(){
    let sum = 0;
    for (dinosaur of this.collectionOfDinosaurs){
        sum += dinosaur.guestsAttractedPerDay;
    }
    return sum;
}

Park.prototype.calculateTotalVisitorsPerYear = function(){
    visitorsPerDay = this.calculateTotalVisitorsPerDay();
    return visitorsPerDay * 365;
}

Park.prototype.calculateYearlyTicketAvenue = function(){
    visitorsYearly = this.calculateTotalVisitorsPerYear();
    return visitorsYearly * this.ticketPrice
}

module.exports = Park;