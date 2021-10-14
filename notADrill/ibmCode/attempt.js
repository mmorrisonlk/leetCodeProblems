function deviceNamesSystem(devicenames) {
    let items = new Set()
    for (let i = 0; i < devicenames.length; i++) {
        if (items.has(devicenames[i])) {
            incrementer(devicenames[i], 1)
        }
        items.add(devicenames[i])
        
    }

    function incrementer(problemChild, signifier) {
        let addOn = signifier
        let comboMeal
        comboMeal = problemChild + addOn
        if (items.has(comboMeal) != true) {
            items.add(comboMeal)
            return
        }
        else {
            addOn++
            incrementer(problemChild, addOn)
        }


    }
    return items

}

deviceNamesSystem(["mixer","toaster","mixer","tv", "mixer", "mixer"])