# Individual Track
In the individual track, you will need to implement the game of Snake and sign up for a code review session. This is due on **10/02**.

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
Detect when the snake is eating the apple. Right now, have the program print out "the snake at an apple!" when that occurs. In the next two parts, we will implement what happens when the snake moves the apple.

6. Moving the apple.
When the snake ate an apple, we need to move it! Move it to a location that is not on the snake.

7. Growing the snake.
The snake needs to grow! Change `move` so that the snake will grow in length once it eats an apple.

8. Display the score.
Display the score of the player. You will need to search up on Google how to display pygame text on screen.

## Optional Features
You need to implement *two* of the features below. Document which two features by inserting the following code block above where you made the change:
```
    # Implements feature #9
    <your code>
```

9. Incremental difficulty
Right now the difficulty of the game is constant. However, we should challenge the player more as their snake gets longer. Change your code so that the snake moves faster as it gets longer, but maintain a good difficulty curve -- people don't like impossible games.

10. Wait for user input
Right now the snake starts immediately as we open the game. Change your code so that the snake only starts moving when the user presses a key.

11. Try again!
Change your code so that the game starts again once the snake dies.

12. Color themes
Implement different color themes. For example, there may be a spaceship theme and you can access it by typing `python snake.py spaceship`. You may need to import the `sys` package.

13. Better Graphics
For the artistically inclined, make a better looking snake than a bunch of differently colored squares.

14. Coyote Time
Coyote time is a feature in many platformers that improve the game feel: see, for example, [here](https://www.youtube.com/watch?v=97_jvSPoRDo). In short, we hate when we pressed turn 0.01 second late and the game says we died. So, when the snake is about to die, give a 0.05-0.1 second leeway for the user to press another key.

You will need to change your `move` and `coyote_time` function.s

Tip: Start debugging by setting the coyote time amount to be much higher than 0.1 second.

## Submit!
```
git add -A
git commit -m "Submit lab 1"
git push
```

Make a pull request and fill out [this whentomeet](https://www.when2meet.com/?9849821-bIqJP) to schedule a code review.

## The Snake game competition
The comper/comper team who makes the best snake game, as judged by the CrimTech board, will win a merch of choice from [pythongear.com](https://www.pythongear.com/). If a team wins this, they will each get a Python sticker.