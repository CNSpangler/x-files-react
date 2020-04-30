export const fetchCharacters = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(json => json.results.map(character => ({
      name: character.name,
      image: character.image || 'https://www.placecage.com/c/200/300',
      occupation: character.occupation,
      description: character.description
    })));
};

export const fetchCharacter = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(json => ({
      name: json[0].name,
      image: json[0].image,
      occupation: json[0].occupation,
      description: json[0].description
    }));
};
