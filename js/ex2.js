
//1
const changeTemp = (Celsius) => {
    const Fahrenheit = (Celsius * 9 / 5) + 32;
    return Fahrenheit;
}

document.getElementById("fahr_1").innerHTML = changeTemp(document.getElementById("celsius_1").innerText);
document.getElementById("fahr_2").innerHTML = changeTemp(document.getElementById("celsius_2").innerText);
document.getElementById("fahr_3").innerHTML = changeTemp(document.getElementById("celsius_3").innerText);

//2
var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
let answer = classification.reverse().slice(0, 3);
document.getElementById("best_students").innerHTML = answer.map((student, index) => `${index + 1}. ${student}`).join("<br>");

//3
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_star_reviews': 420,
    '4_star_reviews': 80,
    '3_star_reviews': 33,
    '2_star_reviews': 20,
    '1_star_reviews': 4,
    calculatePercentage: function () {
        const totalReviews = this['5_star_reviews'] + this['4_star_reviews'] + this['3_star_reviews'] + this['2_star_reviews'] + this['1_star_reviews'];
        return {
            '5_star': (this['5_star_reviews'] / totalReviews * 100).toFixed(0) + '%',
            '4_star': (this['4_star_reviews'] / totalReviews * 100).toFixed(0) + '%',
            '3_star': (this['3_star_reviews'] / totalReviews * 100).toFixed(0) + '%',
            '2_star': (this['2_star_reviews'] / totalReviews * 100).toFixed(0) + '%',
            '1_star': (this['1_star_reviews'] / totalReviews * 100).toFixed(0) + '%'
        };
    }
};

document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];
document.getElementById("reviews_5_stars").innerHTML = course.calculatePercentage()['5_star'];

//4
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
//firstProblem
shoppingList.unshift(shoppingList.pop());
//secondProblem
shoppingListNew = [...shoppingList, "Cheese", "Eggs"];
console.log("Shopping List:", shoppingListNew);
