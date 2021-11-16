/*
El jefe de nuestro zoologico ha contratado a un becario para que haga una recopilacion de datos sobre el zoologico.
Para ello, el jefe le ha dado una lista sobre la que tiene que recopilar los datos.
*/
/*
La primera recopilacion que le ha pedido el jefe, esque busque a todos los mamiferos, 
 y que su promedio de vida sea entre 20-30 años.
*/
db.zoologico.find(
    {
    $and:[
        {etiqueta:{$eq:"mamiferos"}},
        {duracion:{$gte:20}},
        {duracion:{$lte:30}}
       ]}
)

/*
La segunda recopilacion sera una lista de los animales que no tengan una duracion entre 20 y 50 y que no  esten en la seccion sabana
*/
db.zoologico.find( { $nor: [
     { duracion: { $in: [20, 50] } }, 
     { secciones:"sabana" } ] } )

/*
La tercera recopilación sera una lista de los animales que empiezen por "c" o que terminen en "e"
*/

db.zoologico.find( 
    {$or: [
    
    { especie: { $regex: /^c/ } },
    { especie: { $regex: /e$/ } } ]})

/*
La cuarta recopilación sera una lista de los animales que empiezen por c y que no contengan enfermedades
*/

db.animalconcreto.find(
{$and: [
    {especie:{$regex:/^t/}},
    {enfermedad:{$ne: true }}
    ]})

/*
El jefe le pide de crear una lista de animales que recopile aquellos que 
nacieron desde el 1 de enero de 1995 hasta el 31 de diciembre de 2020 y que la familia no termine por "dae"
*/


    db.animalconcreto.find(
        {$and:[
            
            {nacimiento: {$gt: new Date("1995-01-01")}},
            
            {nacimiento: {$lt: new Date("2020-12-31")}},
        
            {familia: {$not:{ $regex:/dae$/}}}
        ]})
          
/*
El jefe le vuelve a pedir otra lista, esta vez quiere o que todos los animales que sean aves o que su habitat no sea una laguna y que 
en ellos exista enfermedad
*/

db.animalconcreto.find(
            
                ({$or:
                    [ 
                        {etiqueta:"aves"},
                        {habitat:{$ne:"laguna"}},
                        {enfermedad:{$exists: false}}
                    ]
                } ) )
/*
La siguiente lista sera un recopilacion de todos los animales que su cantidad sea 7 y sus multiplos

*/


                db.zoologico.find(
                    
                    { cantidad: { $mod: [ 7,0 ] } })

