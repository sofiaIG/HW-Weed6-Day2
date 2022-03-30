const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur_1;
  let dinosaur_2;
  let dinosaur_3;
  let dinosaur_4;

  beforeEach(function () {
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('Velociraptor', 'carnivore', 35);
    dinosaur_3 = new Dinosaur('Diplodocus', 'herbivore', 54);
    dinosaur_4 = new Dinosaur('Edmontosaurus', 'herbivore', 22);
    park = new Park('VondelPark', 25, [dinosaur_1, dinosaur_2, dinosaur_3]);
  
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'VondelPark');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual,[dinosaur_1, dinosaur_2, dinosaur_3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur_4);
    const actual = park.collectionOfDinosaurs.length;
    assert.equal(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur_3);
    const actual = park.collectionOfDinosaurs.length;
    assert.equal(actual,2);
  });

  it('should be able to find the dinosaur that attracts the most visitors',
  function(){
    const actual = park.findMostVisitedDinosaur();
    assert.strictEqual(actual, 'Diplodocus');
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaursSpecies('t-rex');
    assert.deepEqual(actual, ['t-rex']);
  });


  it('should be able to calculate the total number of visitors per day', function(){
    const actual = park.calculateTotalVisitorsPerDay();
    assert.strictEqual(actual, 139);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = park.calculateTotalVisitorsPerYear();
    assert.strictEqual(actual, 50735)
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = park.calculateYearlyTicketAvenue();
    assert.strictEqual(actual, 1268375)
  });

});
