from calculator import *
import unittest

class Test_Calculator(unittest.TestCase):
    def test_add_1(self):
        assert(add("")==0)

if __name__ == '__main__':
    unittest.main()