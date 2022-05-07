const app = require( "express" )();
const server = require( "http" ).Server( app );
const bodyParser = require( "body-parser" );
const async = require( "async" );
const daoCategories = require("../database/categories/index")

app.use( bodyParser.json() );

module.exports = app;

app.get( "/", function ( req, res ) {
    res.send( "Category API" );
} );


  
app.get( "/all", async function ( req, res ) {
    const categories = await daoCategories.getAll()
    res.json( categories );
} );

 
app.post( "/category", async function ( req, res ) {
    try {
        const category = await daoCategories.create(req.body)
        res.json( category )
    } catch (error) {
        res.status( 500 ).send( error ) 
    }

} );



app.delete( "/category/:categoryId", function ( req, res ) {
    categoryDB.remove( {
        _id: parseInt(req.params.categoryId)
    }, function ( err, numRemoved ) {
        if ( err ) res.status( 500 ).send( err );
        else res.sendStatus( 200 );
    } );
} );

 

 
app.put( "/category", async function ( req, res ) {
    const category = req.body; 
    try {
        await daoCategories.edit(category)
        res.sendStatus( 200 )
    } catch (error) {
        res.status( 500 ).send( error ) 
    }
});



 