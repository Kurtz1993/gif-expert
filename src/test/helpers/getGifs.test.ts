import { getGifs } from '../../helpers/get-gifs.helper';

describe('getGifs utility', () => {
  it('should return 10 elements', async () => {
    const result = await getGifs('One Punch');

    expect(result.length).toBe(10);
  });

  it('should return an empty array when no given string', async () => {
    const result = await getGifs('');

    expect(result.length).toBe(0);
  });
});
