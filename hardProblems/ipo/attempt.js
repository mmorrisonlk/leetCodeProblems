var findMaximizedCapital = function(k, w, profits, capital) {
    let finalCapital = w;

    while (k > 0) {
        k--
        let validProjects = [];
        for (i = 0; i < capital.length; i++) {
            if (capital[i] <= finalCapital) {
                validProjects.push(i);
            }
        }
        let selectedProject = 0;
        let projectedProfit = 0;
        for (j = 0; j < validProjects.length; j++) {
            if (projectedProfit < profits[validProjects[j]]){
                projectedProfit = profits[validProjects[j]];
                selectedProject = validProjects[j]; 
            }
        }
        finalCapital = finalCapital + projectedProfit;
        capital.splice(selectedProject, 1);
        profits.splice(selectedProject, 1);
    }
    
    return finalCapital;
};