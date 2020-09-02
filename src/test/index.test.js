import {readCSVSync, unifiedData, speedOrderedDinosaurs} from '../index'

describe("Testing readCSV function", () => {
    test("Expect read dataset1 correctly", () => {
        const data = readCSVSync('./dataset1.csv');

        expect(data).toContainEqual({NAME: "Hadrosaurus", LEG_LENGTH: "1.2", DIET: "herbivore"});
        expect(data).toEqual([{"DIET": "herbivore", "LEG_LENGTH": "1.2", "NAME": "Hadrosaurus"}, {"DIET": "omnivore", "LEG_LENGTH": "0.92", "NAME": "Struthiomimus"}, {"DIET": "carnivore", "LEG_LENGTH": "1.0", "NAME": "Velociraptor"}, {"DIET": "herbivore", "LEG_LENGTH": "0.87", "NAME": "Triceratops"}, {"DIET": "herbivore", "LEG_LENGTH": "1.6", "NAME": "Euoplocephalus"}, {"DIET": "herbivore", "LEG_LENGTH": "1.40", "NAME": "Stegosaurus"}, {"DIET": "carnivore", "LEG_LENGTH": "2.5", "NAME": "Tyrannosaurus Rex"}]);
    })

    test("Expect read dataset2 correctly", () => {
        const data = readCSVSync('./dataset2.csv');

        expect(data).toContainEqual({"NAME": "Euoplocephalus", "STANCE": "quadrupedal", "STRIDE_LENGTH": "1.87"});
        expect(data).toEqual([{"NAME": "Euoplocephalus", "STANCE": "quadrupedal", "STRIDE_LENGTH": "1.87"}, {"NAME": "Stegosaurus", "STANCE": "quadrupedal", "STRIDE_LENGTH": "1.90"}, {"NAME": "Tyrannosaurus Rex", "STANCE": "bipedal", "STRIDE_LENGTH": "5.76"}, {"NAME": "Hadrosaurus", "STANCE": "bipedal", "STRIDE_LENGTH": "1.4"}, {"NAME": "Deinonychus", "STANCE": "bipedal", "STRIDE_LENGTH": "1.21"}, {"NAME": "Struthiomimus", "STANCE": "bipedal", "STRIDE_LENGTH": "1.34"}, {"NAME": "Velociraptor", "STANCE": "bipedal", "STRIDE_LENGTH": "2.72"}]);
    })
})

describe("Testing data after calculate speed and sorted by speed", () => {
    test("Expect data with speed to be correctly", () => {
        expect(unifiedData).toEqual([{"DIET": "carnivore", "LEG_LENGTH": "2.5", "NAME": "Tyrannosaurus Rex", "SPEED": 6.454470698670805, "STANCE": "bipedal", "STRIDE_LENGTH": "5.76"}, {"DIET": "carnivore", "LEG_LENGTH": "1.0", "NAME": "Velociraptor", "SPEED": 5.384451689819494, "STANCE": "bipedal", "STRIDE_LENGTH": "2.72"}, {"DIET": "omnivore", "LEG_LENGTH": "0.92", "NAME": "Struthiomimus", "SPEED": 1.3707820681132614, "STANCE": "bipedal", "STRIDE_LENGTH": "1.34"}, {"DIET": "herbivore", "LEG_LENGTH": "1.2", "NAME": "Hadrosaurus", "SPEED": 0.5715476066494085, "STANCE": "bipedal", "STRIDE_LENGTH": "1.4"}]);
    })
})

describe("Testing output", () => {
    test("Expect speedOrderedDinosaurs to be equal to expected output", () => {
        const output = "Tyrannosaurus Rex\nVelociraptor\nStruthiomimus\nHadrosaurus\n"

        expect(speedOrderedDinosaurs.split('\n')).toEqual(output.split('\n'))
    })
})