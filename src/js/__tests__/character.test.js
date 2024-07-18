import Character from '../character';

// проверочные тесты
describe('Character class', () => {
  const character = new Character('John Doe', 'Warrior');

  test('create a new character with a name and type', () => {
    expect(character.name).toBe('John Doe');
    expect(character.type).toBe('Warrior');
  });

  test('by default we have distance 1', () => {
    expect(character.distance).toBe(1);
  });

  test('by default the stoned status is false', () => {
    expect(character.stoned).toBe(false);
  });
});
