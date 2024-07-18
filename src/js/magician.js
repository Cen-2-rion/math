import Character from './character';

// класс Magician наследуемый от Character
export default class Magician extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
  }
}
