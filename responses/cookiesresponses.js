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
        <break time="200ms" strength="weak"/>
        This Recipe will yield 3 Dozen, <say-as interpret-as="fraction">2+1/2</say-as> inch cookies.
        <break time="200ms" strength="weak"/>
        <break time="200ms" strength="weak"/>
        Preheat the oven to 375 degrees.
    </speak>
    `,
    
    'Ingredients' : ssml`
    <speak>
        For this Recipe, you will need.
        <break time="200ms" strength="weak"/>
        12 tablespoons
        <break time="100ms" strength="weak"/>
        or <say-as interpret-as="fraction">1+1/2</say-as> sticks of butter.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">1+1/4</say-as> cups of light brown sugar, firmly packed.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">1/4</say-as> cup of light corn syrup.
        <break time="200ms" strength="weak"/>
        2 teaspoons of vanilla extract.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">3/4</say-as> teaspoon of baking powder.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">3/4</say-as> teaspoon of salt.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">1/4</say-as> teaspoon of baking soda.
        <break time="200ms" strength="weak"/>
        1 large egg.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">2+1/4</say-as> cups of unbleached all-purpose flour.
        <break time="200ms" strength="weak"/>
        And 2 cups of semisweet or bittersweet chocolate chips.
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
