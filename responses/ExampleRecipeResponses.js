'use strict';

const {ssml} = require('./utils');


const CookiesRecipe = {
    'Name' : ssml`
    <speak>
        Enter Recipe Name Here.
    </speak>
    `,
    
    'leadIntoRecipe': ssml`
    <speak>
        What she will say after the user askes for the recipe.
    </speak>
    `,
    
    'Directions' : ssml`
    <speak>
        Directions go here.
    </speak>
    `,
    
    'Ingredients' : ssml`
    <speak>
        Ingredients go here.
    </speak>
    `,
    
    'Step_1' : ssml`
    <speak>

        Step 1 goes here.

    </speak>
    `,
    
    'Step_2' : ssml`
    <speak>
        Step 2 goes here.

    </speak>
    `,
    'PreHeat' : ssml`
    <speak>

        Preheat temp. goes here.

    </speak>
    `,
    'Bake' : ssml`
    <speak>

        Bake time goes here.

    </speak>
    `,
    'Butter' : ssml`
    <speak>
        
        Amount of butter goes here. 

    </speak>
    `,
    
};


module.exports = {CookiesRecipe};
