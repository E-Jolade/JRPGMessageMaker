function generateMessage(){
    let games = ['Kingdom Hearts 2', 'Xenoblade 3', 'Trails to Azure', 'Persona 4 Golden', 'Tales of Arise', 
        'Ni no Kuni: Wrath of the White Witch', 'Fire Emblem: Blazing Blade', 'Trails in the Sky the Third', 'Persona 3 Fes', 'Xenoblade 2'];
    let descriptions = ['Defeat the Organization and save your friends ', 'Set aside your differences and change the fate of your world ', 
        'Uncover the disastrous plot lurking beneath the pretense of independence ', 'Solve the mystery of the TV and catch the culprit ', 
        'Fight for your freedom and save your world ', 'Journey to a new world on an unexpected journey ', 'Protect your homeland as the last of your tribe ',
        'Dive into the cube of Phantasma and face your past ', 'Uncover the secret of the Midnight Hour and protect your world ', 
        'Journey to Elsyium and save your dying world '];
    let years = [2005, 2022, 2011, 2012, 2021, 2010, 2003, 2007, 2008, 2017];

    let randomGame = Math.floor(Math.random() * 10);
    let randomDescription = Math.floor(Math.random() * 10);
    let randomYear = Math.floor(Math.random() * 10);

    console.log(`${descriptions[randomDescription]}in ${games[randomGame]}, releasing in ${years[randomYear]}!`);
}

const Steam = (name, genre, publisher) => {
    return {
        name: name,
        genre: genre,
        publisher: publisher
    }
};

let gameRecommender = [50];
gameRecommender[0] = Steam('Tales of Arise', 'JRPG', 'Bandai Namco');

console.log(gameRecommender[0]);

generateMessage();