al_size, status_codes):
    print("File size: {}".#!/usr/bin/python3
import sys

def print_stats(totformat(total_size))
    for code, count in sorted(status_codes.items()):
        print("{}: {}".format(code, count))

def parse_line(line):
    try:
        parts = line.split(' ')
        if len(part            file_size = int(parts[-1])
           s) >= 9:
            status_code = int(parts[-2])
 return status_code, file_size
    except ValueError:
        pass
    return None, None

def main():
    total_size = 0
    status_codes = {
        200: 0,
        301: 0,
        400: 0,
        40 0,
        500: 0
    }
    
    try:
        lin1: 0,
        403: 0,
        404: 0,
        405:e_count = 0
        for line in sys.stdin:
            line_count += 1
            status_code, file_size = parse_line(line)
            if status_code and file_size:
                total_size += fildes:
                    status_codes[status_code]e_size
                if status_code in status_co += 1
            
            if line_count % 10 == 0:
                print_stats(total_size, status_codes)

    except KeyboardInterrupt:
        print_stats(total_size, status_codes)
        raise

if __name__ == "__main__":
    main()

