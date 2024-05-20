import cs50


def main():
    while True:
        height = cs50.get_int("Height: ")
        if height >= 1 and height <= 8:
            break

    for i in range(1, height + 1):
        spaces = height - i
        blocks = i

        print(" " * spaces, end="")

        print("#" * blocks)


if __name__ == "__main__":
    main()
