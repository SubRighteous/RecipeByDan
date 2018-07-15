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
        Heat oven to 350 degrees fahrenheit. 
        <break time="200ms"/>
        line 24 small muffin cups with paper bake cups or spray with vegetable cooking spray.
        <break time="200ms"/>
        In a small saucepan over low heat, melt corn oil spread; cool slightly. 
        In a small mixer bowl, beat egg whites and egg on medium speed of electric mixer until foamy. 
        Gradually add sugar, beating until slightly thickened and light color, 
        In a small bowl, stir  together flour, cocoa, baking powder and salt. 
        Add gradually to egg mixture, beating until blended. 
        Gradually add corn oil spread; beat until blended. 
        Fill nuffin cups 2/3 full with batter. 
        Bake 15 to 18 minutes until wooden pick inserted in centers comes out clean. 
        Cool Completely. 
        Now  to prepare the Mocha Glaze. 
        <break time="1s"/>
        In a small bowl, stir together powered sugar and cocoa. 
        Dissolve coffee in water. 
        Add sugar mixture, stirring until well blended. 
        Stir in vanilla. 
        
    </speak>
    `,
    
    'Ingredients' : ssml`
    <speak>
        What you will need for the Brownie Cups are,<break time="400ms"/> 
        1/4 cup or (1/2 of a stick )light corn oil spread. 
        2 egg whites. 
        1 egg. 
        3/4 cup sugar. 
        2/3 cup all-purpose flour. 
        1/3 cup hershey's cocoa. 
        1/2 teaspoon baking powder. 
        1/4 teaspoon salt.
        <break time="1s"/>
        To prepare the Mocha Glaze you will need, <break time="1s"/> 
        1/4 cup powdered sugar. 
        3/4 teaspoon Hersey's Cocoa. 
        1/4 teaspoon powdered instane coffee. 
        2 teasppons hot water. 
        1/4 teaspoon vanilla extract. 

        
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
