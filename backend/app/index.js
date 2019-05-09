const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);  

engine.start();

module.exports = app;

/* CODE FROM EARLIER IN COURSE, second time it's removed
const Generation = require('./generation');

const generation = new Generation();

console.log('generation', generation);

const gooby = generation.newDragon();

console.log('gooby',gooby);

setTimeout(() => {
    const mimar = generation.newDragon();
    console.log('mimar',mimar);
}, 15000);
*/


/*  CODE FROM EARLIER IN COURSE
const Dragon = require('./dragon.js');

const fooey = new Dragon({
    birthdate: new Date(),
    nickname:  'fooey'
});
const baloo = new Dragon({
    birthdate: new Date(),
    nickname: 'baloo',
    traits: [
        {
            traitType: 'backgroundColor', traitValue: 'green'
        }
    ]
});

const mimar = new Dragon();
setTimeout(()=>{
    const gooby = new Dragon();
    console.log('gooby', gooby);
}, 3000)


console.log('fooey', fooey);
console.log('baloo', baloo);


console.log('mimar', mimar); */
