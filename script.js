let waterCount = 0;

function calcBMI() {
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value / 100;

    if (!w || !h) {
        document.getElementById("bmiResult").innerText = "Enter weight & height!";
        return;
    }

    let bmi = (w / (h * h)).toFixed(1);
    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
}

function addWater() {
    waterCount++;
    document.getElementById("waterResult").innerText = "Glasses: " + waterCount;
}

function giveDiet() {
    let diets = [
        "Morning: Oats + Fruits\nLunch: Dal + Roti + Salad\nDinner: Khichdi",
        "Morning: Sprouts\nLunch: Rice + Sabzi + Curd\nDinner: Soup + Veg",
        "Morning: Poha\nLunch: Roti + Paneer\nDinner: Dalia"
    ];
    let pick = diets[Math.floor(Math.random() * diets.length)];
    document.getElementById("dietResult").innerText = pick;
}

function giveWorkout() {
    let workouts = [
        "20 min Walk\n15 Squats\n10 Pushups\n5 min Stretching",
        "10 min Jogging\n20 Jumping Jacks\n10 Lunges",
        "15 min Yoga\n10 Pushups\n20 sec Plank"
    ];
    let pick = workouts[Math.floor(Math.random() * workouts.length)];
    document.getElementById("workoutResult").innerText = pick;
}

function showTip() {
    let tips = [
        "Avoid sugar drinks.",
        "Drink 2–3 liters of water daily.",
        "Eat more fruits and vegetables.",
        "Do at least 20 minutes of exercise every day."
    ];
    let pick = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tipResult").innerText = pick;
}