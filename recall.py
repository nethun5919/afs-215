

class List:

    def __init__(self):
      self.list =[]

    def insertNumber (self,number):
        self.list.append(number)
    def insertString (self,string):
        self.list.append(string)
    def insertDictionary (self,dictionary):
        self.list.append(dictionary)
    def insertTuple (self,tuple):
        self.list.append(tuple)
    def listToTuple (self):
        self.list = tuple(self.list)
 
my_list = List()
my_list.insertNumber(8)
my_list.insertString("abc")
my_list.insertDictionary({"float" :"5"})
my_list.insertTuple((6,7,10))
my_list.listToTuple()
print(my_list.list) 
