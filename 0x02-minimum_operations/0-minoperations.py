#!/usr/bin/python3
"""
A method
"""

def minOperations(n):
    """
    method that calculates the fewest number of operaions
    needed to result in exactly n H characters in a file
    """
    if n < 1:
        return 0
    if n == 1:
        return 0
    for i in range(2, n+1):
        if n % i == 0:
            return i + minOperations(n//i)
    return n

