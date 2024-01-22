const host = 'https://randomuser.me'

export const api = {
  
  getRandomUsers: async () => {
    const response = await fetch(`${host}/api/?results=10`, {
      method: 'GET',
    });
      if (!response.ok) {
      throw new Error('Failed to fetch data');
      }
    
    const data = await response.json();
    const results = data.results
    const seed = data.info.seed

  return {results, seed};
  }
}