from cs50 import get_float


def main():
    while True:
        dollars = get_float("Change owed: ")
        if dollars >= 0:
            break

    cents = round(dollars * 100)

    quarters = cents // 25
    dimes = (cents % 25) // 10
    nickels = ((cents % 25) % 10) // 5
    pennies = ((cents % 25) % 10) % 5

    total_coins = quarters + dimes + nickels + pennies
    print(total_coins)


if __name__ == "__main__":
    main()
