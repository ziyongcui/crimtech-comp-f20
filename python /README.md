# Python

## Setting Up
1. Terminal text editor. I recommend `micro`, which can be installed with `curl https://getmic.ro | bash` and then `mv micro /usr/bin`.
2. Code editor. I recommend (VSCode)[https://code.visualstudio.com/].
3. Running python code `python3 [name of the file]`.


## Python Tutorial
1. Hello World
2. [Variables](https://www.w3schools.com/python/python_variables.asp)
3. [if statements](https://www.w3schools.com/python/python_conditions.asp)
4. [for loops](https://www.w3schools.com/python/python_for_loops.asp)
5. [while loops](https://www.w3schools.com/python/python_while_loops.asp)
6. [functions](https://www.w3schools.com/python/python_functions.asp)
7. [lists](https://www.w3schools.com/python/python_lists.asp)
8. [dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)
9. [imports](https://www.digitalocean.com/community/tutorials/how-to-import-modules-in-python-3)
10. [classes](https://www.w3schools.com/python/python_classes.asp)

## Assignmnet 
1. Write a program that prints the square root of a given variable.

2. Write a program that randomly generates  numbers in the range [1,10] and prints them, until it generates a 6, at which point it prints it and stops.

3. Write a function that takes a list and a number N, and returns True if any two numbers in the list sum to N.
For example: given the list [1, 2, 4, 5, 6] and number N=10, it returns true, because 4+6=10.

4. Wrie a function that given a dictonary removes the key corresponding to the minimum value and returns changed dictonary.
For exmaple on input:
```Python
sampleDict = {
  'Physics': 82,
  'Math': 65,
  'history': 75
}
```
Output:
```Python
sampleDict = {
  'Physics': 82,
  'history': 75
}
```

5. Push your code to github! If you do not remeber how to commit your changes steps G-I from the [intro folder](https://github.com/crimtech/crimtech-comp-f20/blob/master/intro/README.md) should be helpful!

[Optional if time permits] 6. 
* Define a class to represent companies. Companies will have a name (given at creation), a list of all sales for the year (string of a product), and a dictionary of products (strings, keys) and their prices (float like, values), as well as a list of employees.

* Define a function to add a new product. The function will take the name of the product and the price.

* Define a function to add an employee, given an employee.

* Define an employee class. Employees will have a name as a string, and a company, both given at creation. They will
also have a role given at creation.  A role is represented by a number, with 1 being a
new hire, and 10 the ceo. Make the role value optional, with the default set to 1.



