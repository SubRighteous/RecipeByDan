'use strict';

const {ssml} = require('./utils');


const CookiesRecipe = {
    'Name' : ssml`
    <speak>
        Chewy Chocolate Chip Cookies
    </speak>
    `,
    
    'leadIntoRecipe': ssml`
    <speak>
        Ok, Getting the test version of Chewy Chocolate Chip Cookies.
        <break time="1s" strength="weak"/>
        Please stand by.
        <break time="200ms" strength="weak"/>
         <audio src="https://firebasestorage.googleapis.com/v0/b/recipebydan.appspot.com/o/audio%2FAssistantBeamUp.ogg?alt=media">
            Broken Plate
        </audio>
        <break time="200ms" strength="weak"/>
        When you are ready, just say
        <break time="200ms" strength="weak"/> 
        tell me the ingredients. 
        <break time="1s" strength="weak"/>
        You can also say, tell me the directions. 
    </speak>
    `,
    
    'Directions' : ssml`
    <speak>
        Currently there are no Directions.
        <break time="200ms" strength="weak"/>
        Will be added soon.
        <break time="100ms" strength="weak"/>
        Dont worry about it.
    </speak>
    `,
    
    'Ingredients' : ssml`
    <speak>
        Currently there are no Ingredients.
        <break time="200ms" strength="weak"/>
        Sorry.
    </speak>
    `,
    
    'Step_1' : ssml`
    <speak>
        Step 1, Get a cookbook.
    </speak>
    `,
    
    'Step_2' : ssml`
    <speak>
        Step 2, get someone else to read it for you.
    </speak>
    `,
    
};


module.exports = {CookiesRecipe};
