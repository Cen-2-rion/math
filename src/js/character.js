// класс Character
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoned = false;
  }

  // создаём сеттер для свойства stoned
  set stoned(value) {
    this.Stoned = value;
  }

  // создаём геттер для свойства stoned
  get stoned() {
    return this.Stoned;
  }

  // создаём сеттер для свойства attack
  set attack(value) {
    this.Attack = value;
  }

  /* создаём геттер для свойства attack, если stoned = false, то атака зависит от расстояния:
  на 1-ую клетку 100%, на 2-ую 90% и т.д., если stoned = true, то атака расчитывается по формуле */
  get attack() {
    const attack = Math.round(this.Attack * (1 - (this.distance - 1) / 10));

    if (this.Stoned) {
      return Math.round(attack - Math.log2(this.distance) * 5);
    }
    return attack;
  }
}
