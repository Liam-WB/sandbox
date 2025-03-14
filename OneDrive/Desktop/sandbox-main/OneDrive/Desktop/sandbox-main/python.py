# FUNDAMENTAL SKILLS
# Variables
# Conditions
# Chained Conditionals
# Operators
# Control Flow
# Loops/Iterables
# Basic Data Structure
# Functions

def example():
    print("Item 1")
    print("Item 2")

    
example()

    # Parameters/Arguments

def example2(request_1, request_2): # <-- Parameters for function (Inputs defined for the function)
    print(f"This is {request_1} and {request_2}")


example2("Item 1", "Item 2")
example2(0, 1) # <-- Arguments (Actual values for the parameter)

    # Function Types

# Perform Task
def value_example(val):
    print(f"Here is {val}")

# Return Item/Value
def get_value_example(val):
    return val

message = get_value_example("23")
file = open("result.txt", "w") # <-- Opens a file
file.write(message) # <-- Writes the returned value to file

# Increment function
def increment(*numbers):
    total = 2
    for number in numbers:
        total *= number # <-- Shorthand for multiply total by number, replace total value
    print(total)

increment(1,2,3,4,2)

# Mutable vs Immutable
# Common Methods
# File IO

# INTERMIDIATE SKILLS
# Object Oriented Programming (OOP)
# Data Structures
# Comprehensions
# Lambda Functions
# *args and **kwargs
# Inheritance
# Advanced Class Behaviour
# PIP
# Environments
# Module Creation
# Async IO

# ADVANCED SKILLS
# Decorators
# Generators
# Context Managers
# Metaclasses
# Concurrency
# Parallelism
# Testing - Unit testing and test driven development
# Packages (Building/Managing)
# Cython

# EXTRA SKILLS
# FizzBuzz challenge

def fizz_buzz(input):
    if (input % 3 == 0) and (input % 5 == 0):
        return "FizzBuzz"
    if input % 3 == 0:
        return "Fizz"
    if input % 5 == 0:
        return "Buzz"
    return input


print(fizz_buzz(7))