describe('Authentication', () => {
  // it('should receive JWT token when authenticated with valid credentials', () => {

  // });

  it('sum two numbers', () => {
    const x = 2;
    const y = 4;

    const sum = x + y;

    expect(sum).toBe(6)
  });

  it('sum three numbers ', () => {
    const x = 2;
    const y = 4;
    const z = 6;

    const sum = x + y + z;

    expect(sum).toBe(12)
  });
})
