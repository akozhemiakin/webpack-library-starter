import Library from '../lib/library.js';

let lib;

describe('Given an instance of my library', () => {
  beforeAll(() => {
    lib = new Library();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).toBe('Library');
    });
  });
});
