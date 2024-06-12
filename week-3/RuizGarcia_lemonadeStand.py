"""
Author: Diana Ruiz Garcia
Date: 6/11/2024
File Name: RuizGarcia_lemonadeStand.py
Description: Building a simple Python program that simulates a
lemonade stand.
"""

# Defining a function that calculates the cost of making lemonade
def calculate_cost(lemons_cost, sugar_cost):
  total_cost = lemons_cost + sugar_cost # Calculating the total cost
  return total_cost # Returning the total cost

# Defining a function that calculates the profit from selling lemonade
def calculate_profit(lemons_cost, sugar_cost, selling_price):
  cost = lemons_cost + sugar_cost # Calculating the cost of making lemonade
  profit = selling_price - cost # Calculating the profit
  return profit # Returning the profit from selling the lemonade

# Defining variables to test calculate_cost and calculate_profit functions
lemons_cost = 4
sugar_cost = 2
selling_price = 8

costString = '$' + str(lemons_cost) + ' + $' + str(sugar_cost) # Defining string concatenation
cost = calculate_cost(lemons_cost, sugar_cost) # Calculating the cost

profitString = '$' + str(selling_price) + ' - $' + str(cost) + ' = ' # Defining string concatenation
profit = calculate_profit(lemons_cost, sugar_cost, selling_price) # Calculating the profit

print('- Lemonade stand -') # Printing the program title
print('Cost: ' + costString + ' = $%.2f' % cost) # Printing the cost of making lemonade
print('Profit: ' + profitString + '$%.2f' % profit) # Printing the profit from selling lemonade