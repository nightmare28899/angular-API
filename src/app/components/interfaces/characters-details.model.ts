export interface CharacterDetails {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  type: string;
  origin: {
    name: string;
    url: string;
  },

  location: {
    name: string;
    url: string;
  }
  episode: {
    name: string;
    url: string;
  }
  url: string;
}
