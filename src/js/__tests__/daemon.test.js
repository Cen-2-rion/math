import Daemon from '../daemon';

// проверочные тесты
describe('Daemon', () => {
  const daemon = new Daemon('Lucifer', 'Daemon');
  daemon.distance = 2;

  test('attack power on 2nd cell without stoned', () => {
    expect(daemon.attack).toBe(90);
  });
  test('attack power on 2nd cell with stoned', () => {
    daemon.stoned = true;
    expect(daemon.attack).toBe(85);
  });
});
