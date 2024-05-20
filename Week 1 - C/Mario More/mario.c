#include <cs50.h>
#include <stdio.h>

void print_pyramids(int height);

int main(void)
{
    int height;
    do
    {
        height = get_int("Height: ");
    }
    while (height < 1 || height > 8);

    print_pyramids(height);

    return 0;
}

void print_pyramids(int height)
{
    for (int i = 0; i < height; i++)
    {
        for (int j = height - i - 1; j > 0; j--)
        {
            printf(" ");
        }

        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }

        printf("  ");

        for (int j = 0; j <= i; j++)
        {
            printf("#");
        }

        printf("\n");
    }
}
