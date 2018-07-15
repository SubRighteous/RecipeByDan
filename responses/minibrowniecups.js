'use strict';

const {ssml} = require('./utils');


const minibrowniecupsRecipe = {
    'Name' : ssml`
    <speak>
        Mini brownie cups
    </speak>
    `,
    
    'leadIntoRecipe': ssml`
    <speak>
        Here is your mini brownie cups receipe
    </speak>
    `,
    
    'Directions' : ssml`
    <speak>
        heat oven to 350 degrees fahrenheit. 
        <break time="200ms"/>
        line 24 small muffin cups with paper bake cups or spray with vegetable cooking spray.
        <break time="200ms"/>
        in a small saucepan over 
    </speak>
    `,
    
    'Ingredients' : ssml`
    <speak>
        1/4 cup or (1/2 of a stick )light corn oil spread. 
        2 egg whites. 
        1 egg. 
        3/4 cup sugar. 
        2/3 cup all-purpose flour. 
        1/3 cup hershey's cocoa. 
        1/2 teaspoon baking powder. 
        1/4 teaspoon salt. 
        
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
