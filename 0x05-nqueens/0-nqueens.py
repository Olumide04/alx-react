#!/usr/bin/python3
"""
N queens puzzle solution
"""

import sys

def is_safe(board, row, col, N):
    """
    Check if it's safe to place a queen at board[row][col]
    """
    # Check the left side of the row
    for i in range(col):
        if board[row][i]:
            return False

    # Check upper diagonal on the left side
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j]:
            return False

    # Check lower diagonal on the left side
    for i, j in zip(range(row, N), range(col, -1, -1)):
        if board[i][j]:
            return False

    return True

def nqueens(N):
    """
    Solve the N queens puzzle and print the solutions
    """
    if not isinstance(N, int):
        print("N must be a number")
        sys.exit(1)

    if N < 4:
        print("N must be at least 4")
        sys.exit(1)

    board = [[0 for _ in range(N)] for _ in range(N)]

    def solve(row):
        """
        Recursive backtracking function to find solutions
        """
        if row == N:
            for i in range(N):
                for j in range(N):
                    if board[i][j]:
                        print("[{}, {}]".format(i, j), end=" ")
            print()

        for col in range(N):
            if is_safe(board, row, col, N):
                board[row][col] = 1
                solve(row + 1)
                board[row][col] = 0

    solve(0)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: {} N".format(sys.argv[0]))
        sys.exit(1)

    try:
        N = int(sys.argv[1])
        nqueens(N)
    except ValueError:
        print("N must be a number")
        sys.exit(1)

