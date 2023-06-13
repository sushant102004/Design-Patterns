class Student {
    constructor(name) {
        this.name = name
        this.type = 'Student'
    }

    showStudentDetails() {
        console.log('Student Details: -')
        console.log(`Name: ${this.name} Session: 2021 - 2025`)
    }
}

class Teacher {
    constructor(name) {
        this.name = name
        this.type = 'Teacher'
    }

    showTeacherDetails() {
        console.log('Teacher Details: -')
        console.log(`Name: ${this.name}`)
    }
}

class PersonFactory {
    createPerson(name, type) {
        switch (type) {
            case 'Student': return new Student(name)
            case 'Teacher': return new Teacher(name)
        }
    }
}

const personFactory = new PersonFactory()

const sushant = personFactory.createPerson('Sushant Dhiman', 'Student')
const stan = personFactory.createPerson('Stan Lee', 'Teacher')

sushant.showStudentDetails()

console.log('')

stan.showTeacherDetails()