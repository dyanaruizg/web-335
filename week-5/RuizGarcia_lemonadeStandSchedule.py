"""
Author: Diana Ruiz Garcia
Date: 6/25/2024
File Name: RuizGarcia_lemonadeStandSchedule.py
Description: Program that manages a weekly schedule for a lemonade stand.
"""

# Defining a list of tasks related to running a lemonade stand.
tasks = ["Set up a stand", "Buy lemonade ingredients", "Make lemonade", 
         "Sell lemonade", "Count profits"]

# Using a for loop to iterate over the list of tasks.
for task in tasks: # Loop through the tasks
  print(task) # Printing the task to the console window.

# Defining a list of days of the week
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday"]

print("\n~ Lemonade Stand Schedule ~") # Print the title of the program

# Using a for loop to iterate over the list of days of the week.
for i in range(len(days)): # Loop through the days by referring to their index number.
  if days[i] == "Saturday" or days[i] == "Sunday": # Statement for Saturday and Sunday.
    print(days[i] + " - " + "It's a day off and you should rest") # Print a message
  else: # Statement for all other days.
    j = i - 1 # Get the index number of the task according to the day of the week
    print(days[i] + " - " + tasks[j]) # Print what the task is for each day