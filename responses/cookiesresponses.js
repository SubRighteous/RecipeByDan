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
        Ok, Getting the test version of <prosody rate="110%">Chewy Chocolate Chip Cookies</prosody>.
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
        Before we start,
        <break time="200ms" strength="weak"/>
        Preheat the oven to 375 degrees.
        <break time="200ms" strength="weak"/>
        Step 1, Beat the butter, light brown sugar, and corn syrup together until fluffy. 
        <break time="200ms" strength="weak"/>
        Add in the vanilla extract, baking powder, salt, baking soda and mix in the egg.
        <break time="200ms" strength="weak"/>
        Editor's Note : Beat well.
        <break time="200ms" strength="weak"/>
        Step 2, Drop Cookie dough by the rounded tablespoon onto lightly greased or parchment-lined sheet pans. 
        <break time="200ms" strength="weak"/>
        And Bake for 12 to 14 minutes.
        <break time="200ms" strength="weak"/>
        For the chewist cookies, do not overbake.
        <break time="200ms" strength="weak"/>
        The cookies will look slightly underdone in the middle, but will set up as they cool.
        <break time="200ms" strength="weak"/>
        Cool on the baking sheets for 5 minutes.
        <break time="10s" strength="weak"/>
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
        1 tablespoon of coco powder.
        <break time="200ms" strength="weak"/>
        <say-as interpret-as="fraction">2+1/4</say-as> cups of unbleached all-purpose flour.
        <break time="200ms" strength="weak"/>
        And 2 cups of semisweet or bittersweet chocolate chips.
       <break time="10s" strength="weak"/>
    </speak>
    `,
    
    'Step_1' : ssml`
    <speak>
        Step 1, Beat the butter, light brown sugar, and corn syrup together until fluffy. 
        <break time="200ms" strength="weak"/>
        Add in the vanilla extract and mix in the egg.
        <break time="200ms" strength="weak"/>
        In a separate bowl, put the flour, baking powder, baking soda, salt and add in some coco powder.
        <break time="200ms" strength="weak"/>
        Add flour mixture into the cookie dough.
        <break time="200ms" strength="weak"/>
        Editor's Note : Beat well.

        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    
    'Step_2' : ssml`
    <speak>
        Step 2, Drop Cookie dough by the rounded tablespoon onto lightly greased or parchment-lined sheet pans. 
        <break time="200ms" strength="weak"/>
        And Bake for 12 to 14 minutes.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'PreHeat' : ssml`
    <speak>
        Preheat the oven to 375 degrees.

        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>


    </speak>
    `,
    'Bake' : ssml`
    <speak>
        Bake for 12 to 14 minutes.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'Butter' : ssml`
    <speak>
        <say-as interpret-as="fraction">1+1/2</say-as> sticks of butter.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'Sugar' : ssml`
    <speak>
        <say-as interpret-as="fraction">1+1/4</say-as> cups of light brown sugar, firmly packed.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'CornSyrup' : ssml`
    <speak>
        <say-as interpret-as="fraction">1/4</say-as> cup of light corn syrup.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'VanillaExtract' : ssml`
    <speak>
       2 teaspoons of vanilla extract.
       
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>
       <break time="10s" strength="weak"/>

    </speak>
    `,
    'BakingPowder' : ssml`
    <speak>
        <say-as interpret-as="fraction">3/4</say-as> teaspoon of baking powder.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'Salt' : ssml`
    <speak>
        <say-as interpret-as="fraction">3/4</say-as> teaspoon of salt.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
     'BakingSoda' : ssml`
    <speak>
        <say-as interpret-as="fraction">1/4</say-as> teaspoon of baking soda.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
     'Egg' : ssml`
    <speak>
         1 Large Egg.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
     'Flour' : ssml`
    <speak>
        <say-as interpret-as="fraction">2+1/4</say-as> cups of unbleached all-purpose flour.
        
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    'ChocolateChips' : ssml`
    <speak>
        2 cups of semisweet or bittersweet chocolate chips.
       
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>
        <break time="10s" strength="weak"/>

    </speak>
    `,
    
};


module.exports = {CookiesRecipe};
