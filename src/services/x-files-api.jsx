export const fetchCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json)
    .then(json => json.map(character => ({
      name: character.name,
      image: character.image,
      occupation: character.occupation,
      description: character.description
    })));
};

export const fetchCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json)
    .then(json => ({
      name: json.name,
      image: json.image,
      occupation: json.occupation,
      description: json.description
    }));
};
