class Student {
    name: string
    type: string

    constructor(name: string) {
        this.name = name
        this.type = 'Student'
    }
}

class Teacher {
    name: string
    type: string

    constructor(name: string) {
        this.name = name
        this.type = 'Teacher'
    }
}

class PersonFactory {
    static createPerson(name: string, type: string) : Student | Teacher | void {
        switch (type) {
            case 'Student': return new Student(name)
            case 'Teacher': return new Teacher(name)
            default: throw new Error('Unknown type')
        }
    }
}

const stu = PersonFactory.createPerson('Sushant', 'Student')
console.log(stu)