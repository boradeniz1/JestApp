test('throwing an exception', () => {
    const throwError = () => {
      throw new Error('Test error');
    };
  
    expect(throwError).toThrow('Test error');
  });

  test('catching an exception', () => {
    const throwError = () => {
      throw new Error('Test error');
    };
  
    try {
      throwError();
    } catch (error) {
      expect(error.message).toBe('Test error');
    }
  });