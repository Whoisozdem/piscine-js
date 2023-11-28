const planet = {
    earth: 31557600,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
}

function dogYears (plan, ageinsec) {
    if (plan =="earth") {
        let onearth = ageinsec / 31557600;
        let finalresear = onearth * (7)
            return Number(finalresear.toFixed(2));
    } else {
        return Number(((ageinsec/(planet[plan]*31557600))*(7)).toFixed(2))
    }
}