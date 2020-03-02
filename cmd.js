function clickableNavBar(stringID){
    for(var i = 0;i <document.getElementsByTagName('a').length;i++){
        document.getElementsByTagName('a')[i].style.color = 'black';
        document.getElementsByTagName('a')[i].style.textDecoration = 'none';
    }
    document.getElementById(stringID).style.color = 'rgb(219, 78, 13)';
    document.getElementById(stringID).style.textDecoration = 'underline';
}