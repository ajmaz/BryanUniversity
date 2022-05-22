// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)

class studentObj {
    constructor(...args) {
        this.studentName = args[0]
        this.className = args[1]
        this.studentScores = args[2]
        this.possibleScores = args[3]
    }

    sumScores() {
        let allScores = this.studentScores.split(',').map(Number).reduce((a, b) => {
            return a + b
        },
            0)
        return allScores

    }

    sumPossibleScore() {
        let allPossibleScores = this.possibleScores.split(',').map(Number).reduce((a, b) => {
            return a + b
        },
            0)
        return allPossibleScores

    }

    finalScore(a, b) {
    let finalCalc = this.sumScores()  /  this.sumPossibleScore()
    
        if (finalCalc <= 0.6 ){
            finalCalc = "E"
        }
        if (finalCalc <= 0.7 ){
            finalCalc = "D"
        }
        if (finalCalc <= 0.8 ){
            finalCalc = "C"
        }
        if (finalCalc <= 0.89 ){
            finalCalc = "B"
        }
        if (finalCalc >= 0.9 ){
            finalCalc = "A"
        }


        return finalCalc
    }

}

