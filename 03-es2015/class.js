// function Warrior() {
//   this.health = 100;
//   this.armour = 100;
// }

// Warrior.prototype.takeDamage = function(damageValue) {
//   if (this.armour <= 0 ) {
//     this.health -= damageValue;
//   } else {
//     this.armour -= damageValue
//   }
// }

// var superWarrior = new Warrior();
// superWarrior.takeDamage(50);
// superWarrior.takeDamage(50);
// superWarrior.takeDamage(50);
// console.log('Health: ' + superWarrior.health);
// console.log('Armour: ' + superWarrior.armour);

// class Warrior {
//   constructor() {
//     this.health = 100;
//     this.armour = 100;
//   }

//   takeDamage(damageValue) {
//     if (this.armour <= 0 && this.armour > damageValue) {
//       this.health -= damageValue;
//     } else {
//       this.armour -= damageValue
//     }
//   }
// }

// const superWarrior = new Warrior();
// superWarrior.takeDamage(50);
// console.log(`Health: ${superWarrior.health}, Armour: ${superWarrior.armour}`);

// class ChampionWarrior extends Warrior {
//   takeDamage(damageValue) {
//     super.takeDamage(damageValue);
//     this.armour += 10;
//   }
// }

// const champ = new ChampionWarrior();
// champ.takeDamage(50);
// console.log(`Health: ${champ.health}, Armour: ${champ.armour}`);