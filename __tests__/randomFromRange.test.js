import { randomFromRange } from '../src/helpers/randomFromRange';

describe('Helper function - select random number from range', () => {
  it('renders a number between 0 and 10', () => {
    const random = randomFromRange(10);
    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThanOrEqual(10);
  });

  it('renders a number between 0 and 50', () => {
    const random = randomFromRange(50);
    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThanOrEqual(50);
  });

  it('renders a number between 0 and 100', () => {
    const random = randomFromRange(100);
    expect(random).toBeGreaterThanOrEqual(0);
    expect(random).toBeLessThanOrEqual(100);
  });
});
