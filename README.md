# Homework #4: Rock, Paper, Scissors

## View in Netlify
[Rock, Paper, Scissors Game](https://quizzical-katie-3145f6.netlify.app/)

## Instructions
To complete this assignment, do the following:

1. Fork this repo
2. Clone your forked repo and in terminal, open the provided project files.
3. Ensure the application meets the base requirements
4. Open Pull Request (PR) against this repo

## Overview

In this homework assignment, you will be tasked with completing the functionality of a Rock, Paper, Scissors game.

## Instructions

  * Review the gif below to understand how the app is expected to work

  * Plan out your approach **before** coding (using pseudocode, white boarding, etc.)

  * Use `console.log()` to print out values to console to help ensure you're on the right path

## Requirements

  * The application should work as depicted in the gif image below

    * The score should accurately reflect the result of the game based on the user's choice and the bot's choice

    * The messages depicted in the gif below should also be replicated in your applications

  * Ensure your code adheres to the DRY principle (Don't Repeat Yourself)

  * Code must be properly indented

  * Use jQuery for any DOM manipulation

  * In the finished version of the application, the bot choice should be **random**

## Bonus Requirements (Optional)

**Note**: All of following requirements are optional. You have complete control over how you choose to implement the bonus requirements below. Take this as an opportunity to be creative.

* **Bonus Requirement #1**: Add logic that declares the first person or bot to achieve a score of 10 as the winner of that **round**

  * There should be some visual indication or message that identifies the winner of a **round**


* **Bonus Requirement #2**: Add logic that declares the first person or bot to win 2 rounds the winner of the **game**

  * There should be some visual indication or message that identifies the winner of a **game**


* **Bonus Requirement #3**: Add logic that gives the person or bot 2 bonus points for winning 3 **hands** in a row.

  * A message should be displayed whenever a user / bot has earned a bonus

  * For example: In a normal scenario if the user won 3 hands in a row, they would have 3 points

  * After implementing this bonus requirement, the user / bot would receive an additional 2 points as a reward for winning 3 hands in a row:

  * See the hypothetical scenario below:

  | Hand  | User Choice | Bot Choice | Winner | Score |
  |:-----|:-----|:-----|:-----|:---|
  | #1 | rock | paper| bot | user: 0, bot: 1 |
  | #2 | scissors | paper| user | user: 1, bot: 1 |
  | #3 | paper | rock| user | user: 2, bot: 1 |
  | #4 | rock | scissors| user | user: 5 (3 + 2 bonus points), bot: 1 |

---

## Gif of Completed Application

* bonus requirements are not depicted in this gif

![deliverable](https://github.com/jsr20190826/hw-04-rock-paper-scissors/blob/master/images/rps-demo.gif)
