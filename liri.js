"use strict";
var keys = require('./keys.js');
var inquirer = require('inquirer');
var Twitter = require('twitter');
var request = require('request');
var fs = require('fs');
var userChoice;

var callLookup = {
    tweet: function(){

    },
    spotify: function(){
        var Spotify = require('node-spotify-api');
        var spotify = new Spotify({
            id: "f1a47bc7d2df4f31bca270d373a48660",
            secret: "7e1f4db8abe54e378acb24ecc09b4296"
        });

    },
    movie: function(mov){
        request(userChoice,function(err, response, body){

        })

    },
    doWhatItSays: function(){
        fs.readFile('random.txt', function(err, data){

            if(err){
                console.log(err);
            }

            var text = data.split(",");

            switch(text[0]){
                case "spotify-this-song":
                    callLookup.spotify(text[1]);
                    
            }

        })
    }
}

inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    choices: ["Retrieve your tweets?","See song information?", "See movie information?", "Or, whatever?" ],
    name: "choice"

}).then(function(user){
    console.log(user.choice);
})

