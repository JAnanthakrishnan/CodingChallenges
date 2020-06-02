class Population {
  constructor() {
    this.rockets = [];
    this.population = 25;
    for (let i = 0; i < this.population; i++) {
      this.rockets[i] = new Rocket();
    }
  }
  run() {
    for (let i = 0; i < this.population; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
  evaluate() {
    let maxfit = 0;
    for (let i = 0; i < this.population; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    //Normalize
    let sum = 0;
    for (let i = 0; i < this.population; i++) {
      this.rockets[i].fitness /= maxfit;
      sum += this.rockets[i].fitness;
    }
    for (let i = 0; i < this.population; i++) {
      this.rockets[i].fitness /= sum;
    }
    maxFit.html(maxfit);
  }
  pickOne() {
    let index = 0;
    let r = random(1);
    while (r > 0) {
      r = r - this.rockets[index].fitness;
      index++;
    }
    index--;
    return this.rockets[index];
  }
  selection() {
    let newRockets = [];
    for (let i = 0; i < this.rockets.length; i++) {
      let parentA, parentB;
      let n = 0
      do {
        parentA = this.pickOne().dna;
        parentB = this.pickOne().dna;
        n++;
      } while (parentA === parent&&n<20);

      let child = parentA.crossover(parentB);
      child.mutate();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }
}
