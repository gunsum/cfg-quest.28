foodPrice = 8.20;
isPlaceVegetarian = "no";

isWithinBudget = (foodPrice <= 10.50);
isVegetarian = (isPlaceVegetarian == "yes");

if (isWithinBudget && isVegetarian) {
    console.log("This place is perfect!");
}
else if (!isWithinBudget && isVegetarian) {
    console.log("Maybe next time when I'm richer");
}
else if (isWithinBudget && !isVegetarian) {
    console.log("Cheap but no vegetarian option");
}
else {
    console.log("I'll find somewhere else");
}

