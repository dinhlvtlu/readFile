/**
 * Created by dinhlv on 3/29/16.
 */
const fs = require('fs');

var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};
var demo;
fs.readFile('demo.html',{encoding: 'utf8'}, function(err,result){
    if(err)
    {
        return console.log(err);
    }
    demo = result;
    var php = 0;
    var arrPhp = [];
    var nodejs = 0;
    var arrNodejs =[];
    demo = demo.split(" ");
    for(var i = 0 ; i < demo.length; i++)
    {
        if(demo[i].match(/PHP/))
        {
            arrPhp.push(i);
            php++;
        }
        if(demo[i].match(/Node.js/))
        {
            arrNodejs.push(i);
            nodejs++;
        }
    }

    demo = replaceWord(demo,arrPhp,php,'PHP',data.php);
    demo = replaceWord(demo,arrNodejs,nodejs,'Node.js',data.node);
    demo = demo.join(" ");
    fs.writeFile("demo2.html","<meta charset='utf-8'>" +" "+ demo,function(err,result){
        if(err)
        {
            return console.log(err);
        }
        console.log("Done");
    })
});

function replaceWord(text,arr,count,word,link){
        for (var i = 0; i < count * 0.3; i++) {
            var random = Math.floor((Math.random()) * count);
            console.log(text[arr[random]],random);
            text[arr[random]] = text[arr[random]].replace(word, "<a href=" + link + ">" + word +"</a>");
        }

    return text;
}

