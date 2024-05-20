#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

int compute_score(string word);

int main(void)
{
    int a = POINTS[0];
    int b = POINTS[1];
    int c = POINTS[2];
    int d = POINTS[3];
    int e = POINTS[4];
    int f = POINTS[5];
    int g = POINTS[6];
    int h = POINTS[7];
    int i = POINTS[8];
    int j = POINTS[9];
    int k = POINTS[10];
    int l = POINTS[11];
    int m = POINTS[12];
    int n = POINTS[13];
    int o = POINTS[14];
    int p = POINTS[15];
    int q = POINTS[16];
    int r = POINTS[17];
    int s = POINTS[18];
    int t = POINTS[19];
    int u = POINTS[20];
    int v = POINTS[21];
    int w = POINTS[22];
    int x = POINTS[23];
    int y = POINTS[24];
    int z = POINTS[25];

    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    if (score1 > score2)
    {
        printf("Player 1 wins!");
    }
    else if (score2 > score1)
    {
        printf("Player 2 wins!");
    }
    else
    {
        printf("Tie!");
    }
}

int compute_score(string word)
{
    int total_score = 0;

    for (int i = 0; i < strlen(word); i++)
    {
        char current_char = word[i];

        if (isalpha(current_char))
        {
            char lowercase_letter = tolower(current_char);
            int letter_position = lowercase_letter - 'a';
            int letter_score = POINTS[letter_position];
            total_score += letter_score;
        }
    }

    return total_score;
}
