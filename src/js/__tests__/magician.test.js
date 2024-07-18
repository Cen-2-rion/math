import Magician from '../magician';

// проверочные тесты
describe('Magician', () => {
  const magician = new Magician('Medivh', 'Magician');
  magician.distance = 5;

  test('attack power on 5nd cell without stoned', () => {
    expect(magician.attack).toBe(60);
  });
  test('attack power on 5nd cell with stoned', () => {
    magician.stoned = true;
    expect(magician.attack).toBe(48);
  });
});
