import fizzbuzz




def test_answer():
    assert fizzbuzz.my_numbers(4) == "4"
def test_get1():
    assert fizzbuzz.my_numbers(1) == "1"
def test_get2():
    assert fizzbuzz.my_numbers(2) == "2"  
def test_getPepsi():
    assert fizzbuzz.my_numbers(3) == "Pepsi"
def test_getCoke():
    assert fizzbuzz.my_numbers(5) =="Coke"
def test_getPepsi2():
    assert fizzbuzz.my_numbers(6) == "Pepsi"
def test_getCoke2():
    assert fizzbuzz.my_numbers(10) == "Coke"
def test_getPepsiCoke():
    assert fizzbuzz.my_numbers(15) == "PepsiCoke"