def my_numbers(num):
  if num == 3:
    return "Pepsi"
  elif num ==5:
    return 'Coke'
  
  elif num % 3 == 0 and num % 5 == 0: 
    return "PepsiCoke"

  elif num % 3 == 0:
    return "Pepsi"

  elif num % 5 == 0:
    return "Coke"

  

  return str(num)
  
print(my_numbers(1))
print(my_numbers(2))
print(my_numbers(3))
print(my_numbers(5))
print(my_numbers(6))
print(my_numbers(10))
print(my_numbers(15))

