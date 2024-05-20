#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int startSize;
    do
    {
        startSize = get_int("Enter the initial number of llamas (must be at least 9): ");
    }
    while (startSize < 9);

    int endSize;
    do
    {
        endSize = get_int("Enter the desired ending number of llamas (must be greater than or equal to the starting size): ");
    }
    while (endSize < startSize);

    int years = 0;
    int currentSize = startSize;

    while (currentSize < endSize)
    {
        int llamasBorn = currentSize / 3;
        int llamasDead = currentSize / 4;
        currentSize = currentSize + llamasBorn - llamasDead;
        years++;
    }

    printf("Years: %d\n", years);

    return 0;
}
