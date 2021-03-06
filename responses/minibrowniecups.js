'use strict';

const {ssml} = require('./utils');


const MiniBrownieCupsRecipe = {
    'Name' : ssml`
    <speak>
        Mini brownie cups
    </speak>
    `,
    
    'leadIntoRecipe' : ssml`
    <speak>
        Here is your mini brownie cups receipe. 
        Do you want the ingredients or the directions? 

    </speak>
    `,
    
    'Directions' : ssml`
    <speak>

        Heat oven to 350 degrees fahrenheit. 
        <break time="200ms"/>
        line 24 small muffin cups with paper bake cups or spray with vegetable cooking spray.
        <break time="200ms"/>
        In a small saucepan over low heat, melt corn oil spread, cool slightly. 
        In a small mixer bowl, beat egg whites and egg on medium speed of electric mixer until foamy. 

        Preheat the oven to 350 degrees fahrenheit. 

        Line 24 small muffin cups with paper baking cups  or spray with vegetable cooking spray.
    
        In a small saucepan over low heat, melt corn oil spread; cool slightly. 
        In a small mixer bowl, beat egg whites and egg on medium speed  until foamy. 

        Gradually add sugar, beating until slightly thickened and light color, 
        In a small bowl, stir  together flour, cocoa, baking powder and salt. 
        Add gradually to egg mixture, beating until blended. 
        Gradually add corn oil spread; beat until blended. 
        Fill nuffin cups 2/3 full with batter. 
        Bake 15 to 18 minutes until wooden pick inserted in centers comes out clean. 
        Cool Completely. 
         <break time="1s"/>
        Now  to prepare the Mocha Glaze. 
        
        In a small bowl, stir together powered sugar and cocoa. 
        Dissolve instant coffee in water. 
        Add sugar mixture, stirring until well blended. 
        Stir in vanilla. 
        Drizzle mocha glaze over tops of brownie cups. 
        Let stand until set.
        Enjoy eating your mini Brownie cups.

        
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

     line 24 small muffin cups with paper bake cups or spray with vegetable cooking spray.    

    </speak>
    `,
 
    
    'Step_2' : ssml`
    <speak>
        In a small saucepan over low heat, melt corn oil spread, cool slightly. 
        In a small mixer bowl, beat egg whites and egg on medium speed of electric mixer until foamy. 
          
    </speak>
        
    `,
    'step_3' : ssml`
    <speak> 
        Gradually add sugar, beating until slightly thickened and light color, 
        In a small bowl, stir  together flour, cocoa, baking powder and salt. 
        
    </speak>  
        
    `,
    'step_4' : ssml`
    <speak> 
        Add gradually to egg mixture, beating until blended. 
    </speak>
    `,
     'step_5' : ssml`
    <speak> 
      Gradually add corn oil spread; beat until blended.

    </speak>
    `,
     'step_6' : ssml`
    <speak> 
      Fill nuffin cups 2/3 full with batter.  
    </speak>
    `,
    
    'PreHeat' : ssml`
    <speak>

        Preheat temp. 350 degree fahrenheit.

    </speak>
    `,
    'Bake' : ssml`
    <speak>

         Bake for 15 to 18 minutes. 


    </speak>
    `,
    'Butter' : ssml`
    <speak>
        
         1/4 cup or (1/2 of a stick )light corn oil spread. 

    </speak>
    `,
    
};


module.exports = {MiniBrownieCupsRecipe};
