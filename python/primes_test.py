from primes import n_primes, primes_up_to

import pytest
import unittest


@pytest.mark.parametrize("num, expected", [
        (20, [2, 3, 5, 7, 11, 13, 17, 19])
])
def test_primes_up_to(num, expected):
    assert primes_up_to(num) == expected


@pytest.mark.parametrize("num, expected", [
        (2, [2, 3]),
        (4, [2, 3, 5, 7]),
        (8, [2, 3, 5, 7, 11, 13, 17, 19])
])
def test_n_primes(num, expected):
    assert n_primes(num) == expected


if __name__ == '__main__':
    unittest.main(verbosity=2)
