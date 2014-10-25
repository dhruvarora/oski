var startingPoints = {1:1250,2:1500,3:500,4:650,5:925,6:1200};
    
$(document).ready(function() {
    newplan()
});


startdt = new Date(2014,7,21);
enddt = new Date(2014,11,18);
ttlDays = Math.floor((enddt - startdt)/86400000); 
var plan = document.getElementById('mpPlan').value;
$('#mpPlan').change(function() {
    newplan()
});

function newplan() {
    plan = document.getElementById('mpPlan').value;
    orig = startingPoints[plan];
    var elem = document.getElementById('mpDisplay');
    
    //var dt = new Date();
    var dt = new Date(2014, 9, 23);
    //var days = Math.floor((new Date(2014, 7, 24) - new Date(2014, 7, 21))/86400/1000);
    var days = Math.floor((dt - startdt )/86400/1000);
    
    pointsleft = Math.floor((1 - days/ttlDays)*orig);
    pointsleft = (pointsleft < 0)? 0:pointsleft;
    
    elem.textContent = 'You should have ' + pointsleft + ' points left'
}
