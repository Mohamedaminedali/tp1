const express=require('express');//importer le module express
const app=express();//creer une instance d'application express
const port=3000;//definir le port d'ecoute 
//definir la route pour la racine
app.get('/',(req,res)=>{
    res.send('hello world!'); //repondre avec hello world
    
});
//ecouter sur le port definie
app.listen(port,() => { 
    console.log(`Application exemple à l'ecoute sur le port ${port}!` ) // (``) hedhom yetaamlo b alt gr 7  
});