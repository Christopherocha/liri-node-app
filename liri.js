var keys = require('./keys.js');
var inquirer = require('inquirer');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
var userChoice;

var callLookup = {
    tweet: function(){

    },
    spotify: function(){
        var spotify = new Spotify({
            id: "f1a47bc7d2df4f31bca270d373a48660",
            secret: "7e1f4db8abe54e378acb24ecc09b4296"
        });

    },
    movie: function(){
        request(userChoice,function(err, response, body){

        })

    },
    doWhatItSays: function(){
        fs.readFile('random.txt', function(err, data){

            if(err){
                console.log(err);
            }

            var text = data.split(",");

            switch(text[1]){
                case "spotify-this-song":
                    callLookup.spotify()
                    
            }

        })
    }
}

