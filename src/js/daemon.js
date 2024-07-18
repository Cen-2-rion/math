import Character from './character';

// класс Daemon наследуемый от Character
export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 100;
  }
}
