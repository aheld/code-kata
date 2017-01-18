import itertools


def n_primes(num):
    return list(itertools.islice(filter(is_prime, itertools.count()), num))


def primes_up_to(num):
    return list(filter(is_prime, range(1, num)))


def is_prime(num):
    """Returns True if the number is prime else False."""
    if num == 0 or num == 1:
        return False
    for x in range(2, num):
        if num % x == 0:
            return False
    else:
        return True
