var randomArticle = ["", ""];

var randomAdj = ["First", "Value", "Principal", "American", "Horizon", "Century", "Fixed", "Eagle", "Creek", "Pier", "Oak", "New", "Pacific", "Tactical", "National", "Columbia", "Alpha", "Beacon", "Union", "North", "Harbor", "Private", "Fiduciary", "Harvest", "Granite", "Pine", "Impact", "Blue", "Alpine", "Redwood", "Birch", "Canyon", "Mountain",
];

var randomNounPlural = ["Investment", "Financial", "Wealth", "Fund", "International", "Street", "Research", "Institutional", "Capital", "Trust", "Life", "Income", "Portfolio", "Equity", "Credit", "Growth", "Estate", "Alliance", "Insight", "Point", "Rock",
"Stone", "Bridge", "View", "Market", "Hill", "Tower", ]

var randomNounSingular = ["Securities","Strategies", "Management", "LLC", "Funds", "Managers", "Services", "Advisors", "Partners", "Investments", "Ltd", "Group", "Company", "Global", "Limited", "Investors", "LLP", "LP", "Associates", "Corporation", "Advisory", ];

var name;

function makeNewName() {
$("#quote").html(randomArticle[Math.floor(Math.random() * randomArticle.length)] + " " + randomAdj[Math.floor(Math.random() * randomAdj.length)] + " " + randomNounPlural[Math.floor(Math.random() * randomNounPlural.length)] + " " + randomNounSingular[Math.floor(Math.random() * randomNounSingular.length)]);

name = document.getElementById("quote").innerHTML;
}

$( "#new" ).click(function() {
  makeNewName();
});

$(function() {
  makeNewName();
});
