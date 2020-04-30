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
    .then(res => res.json)
    .then(json => json[0]({
      name: json.name,
      image: json.image,
      occupation: json.occupation,
      description: json.description
    }));
};
