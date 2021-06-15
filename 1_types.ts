const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 2, 3, 4, 5, 6]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 88]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Arm', 789]

// Any
let variable: any = 42
// ...
variable = 'New String'
variable = []

// ====
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Andrii')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined
