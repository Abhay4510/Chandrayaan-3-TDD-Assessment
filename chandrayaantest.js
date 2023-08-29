const chandrayaan = require('../src/chandrayaan');

describe('chandrayaan Control', () => {
  test('Move forward from N updates position correctly', () => {
    const chandrayaan = new chandrayaan(0, 0, 0, 'N');
    chandrayaan.executeCommands(['f']);
    expect(chandrayaan.getCurrentPosition()).toBe('(0, 1, 0)');
  });

  test('Move forward from S updates position correctly', () => {
    const chandrayaan = new chandrayaan(0, 0, 0, 'S');
    chandrayaan.executeCommands(['f']);
    expect(chandrayaan.getCurrentPosition()).toBe('(0, -1, 0)');
  });
  test('Rotate left from N updates direction correctly', () => {
    const chandrayaan = new chandrayaan(0, 0, 0, 'N');
    chandrayaan.executeCommands(['l']);
    expect(chandrayaan.getCurrentDirection()).toBe('W');
  });
  test('Execute a sequence of commands updates position and direction correctly', () => {
    const chandrayaan = new chandrayaan(0, 0, 0, 'N');
    chandrayaan.executeCommands(['f', 'r', 'u', 'b', 'l']);
    expect(chandrayaan.getCurrentPosition()).toBe('(0, 1, -1)');
    expect(chandrayaan.getCurrentDirection()).toBe('N');
  });
  test('Invalid command is ignored', () => {
    const chandrayaan = new chandrayaan(0, 0, 0, 'N');
    chandrayaan.executeCommands(['x']);
    expect(chandrayaan.getCurrentPosition()).toBe('(0, 0, 0)');
    expect(chandrayaan.getCurrentDirection()).toBe('N');
  });
});
