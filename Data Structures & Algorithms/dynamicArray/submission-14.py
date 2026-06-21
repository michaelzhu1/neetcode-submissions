class DynamicArray:
    
    def __init__(self, capacity: int):
        self.arr = capacity * [None]
        self.capacity = capacity
        self.size = 0

    def get(self, i: int) -> int:
        return self.arr[i]

    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    def pushback(self, n: int) -> None:
        if self.size == self.capacity:
            self.resize()
        self.set(self.size, n)
        self.size += 1

    def popback(self) -> int:
        self.size -= 1
        return self.arr[self.size]

    def resize(self) -> None:
        self.capacity = self.capacity * 2
        self.arr = self.arr + [None] * self.capacity

    def getSize(self) -> int:
        return self.size
    
    def getCapacity(self) -> int:
        return self.capacity