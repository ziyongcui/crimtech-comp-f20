# Individual Track
In the individual track, you will need to implement the game of Snake and sign up for a code review session.

## Acclimating to the Codde
Run `cp snake_starter_code.py snake.py` to make a copy of the game, and run `python snake.py`. You should see a board with a red and black dot. The two blue dots represent the snake, and the red dot is the apple.

The board has 24 squares. The top left square has location (0,0), and the bottom right (23,23).

We have two classes within `snake.py`: a `Snake` class and an `Apple` class. Then, we have a loop inside `main` that runs this game. You will see that there are many comments with `TODO` written on them. We will be implementing them in the next sections.

The snake's head body is represented by the `body` variable, which is a list containing the body from the head to the tail. So, `self.body[0]` would be referencing the head, and `self.body[:-1]` would reference everything except the tail.

## Required Features
1. Move the snake!
Let's get the snake moving! Change the `move` function so that it will move the snake 1 unit in the correct direction.

Tips: Use the dictionary `DIR` and `self.direction` to figure out which way to move the snake. Change `self.direction` to make sure that the snake moves correctly in all directions.

2. Check for collision.
Now that the snake is moving, it will go off the screen into the vast void of sadness. That's not good! Change the `collision` function to return True if the snake is out of bounds. Change `move` to call the `kill` function when the snake goes out of bounds.

3. Turning the snake.
We need to be able to turn the snake. Modify the `turn` function so that after the function is called, `self.direction` is set to the new direction.

4. Self Collisions.
But, the snake can collide with itself! Change the `collision` function so that it returns `True` if the snake's head has hit another part of its body.

Tip: You may need to make the snake longer and slow down time (decrease the tick_time variable) to test this.

5. Eating the apple.
Detect when the snake is eating the apple. Then, 

6. Moving the apple.
7. Growing the snake.
8. Display the score.

## Optional Features
9. Incremental difficulty
10. Wait for user input
11. Try again!
12. Color themes
13. Better Graphics
14. Coyote Time