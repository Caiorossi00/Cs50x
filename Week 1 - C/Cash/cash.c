#include <cs50.h>
#include <stdio.h>

int get_cents(void);
int calculate_quarters(int cents);
int calculate_dimes(int cents);
int calculate_nickels(int cents);
int calculate_pennies(int cents);

int main(void)
{
    int cents;
    do
    {
        cents = get_cents();
    }
    while (cents < 0);

    int quarters = calculate_quarters(cents);
    cents -= quarters * 25;

    int dimes = calculate_dimes(cents);
    cents -= dimes * 10;

    int nickels = calculate_nickels(cents);
    cents -= nickels * 5;

    int pennies = calculate_pennies(cents);
    cents -= pennies * 1;

    printf("%i\n", quarters + dimes + nickels + pennies);
}

int get_cents(void)
{
    int cents;
    do
    {
        cents = get_int("Change owed: ");
    }
    while (cents < 0);

    return cents;
}

int calculate_quarters(int cents)
{
    if (cents >= 25)
    {
        return cents / 25;
    }
    return 0;
}

int calculate_dimes(int cents)
{
    if (cents >= 10)
    {
        return cents / 10;
    }
    return 0;
}

int calculate_nickels(int cents)
{
    if (cents >= 5)
    {
        return cents / 5;
    }
    return 0;
}

int calculate_pennies(int cents)
{
    return cents;
}
