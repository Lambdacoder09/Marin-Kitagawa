export interface CharacterData {
  name: string;
  fullName: string;
  kanji: string;
  romaji: string;
  nickname: string;
  gender: string;
  species: string;
  personalDetails: {
    dateOfBirth: string;
    zodiac: string;
    age: string;
    occupation: string;
  };
  physicalStats: {
    height: string;
    weight: string;
    hair: string;
    eyes: string;
  };
  outfitTypes: string[];
  cosplayList: string[];
  relationships: Record<string, string | string[]>;
  background: string;
  keyTraits: string[];
  funFacts: string[];
  description: string;
  tagline: string;
  profileImage: string;
  personality: string[];
  traits: Trait[];
  quotes: Quote[];
  facts: Fact[];
}

export interface Trait {
  name: string;
  description: string;
  icon: string;
}

export interface Quote {
  text: string;
  context: string;
  episode?: string;
}

export interface Fact {
  title: string;
  description: string;
  category: string;
}

export interface Character {
  age: number;
  school: string;
  grade: string;
  birthday: string;
  hobbies: string[];
  favoriteGenres: string[];
  skills: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface GalleryCategory {
  name: string;
  description: string;
  images: GalleryImage[];
}
