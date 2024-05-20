#include <cs50.h>
#include <math.h>
#include <stdio.h>

bool is_character(char c);
bool is_spaces(char c);
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);
void grade(int letters, int words, int sentences);

int main(void)
{
    string text = get_string("Text: ");

    int letters = count_letters(text);
    int words = count_words(text);
    int sentences = count_sentences(text);

    grade(letters, words, sentences);
}

bool is_character(char c)
{
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}

bool is_spaces(char c)
{
    return c == ' ';
}

int count_letters(string text)
{
    int count = 0;

    for (int i = 0; text[i] != '\0'; i++)
    {
        if (is_character(text[i]))
        {
            count++;
        }
    }

    return count;
}

int count_words(string text)
{
    int count = 0;
    bool in_word = false;

    for (int i = 0; text[i] != '\0'; i++)
    {
        if (is_character(text[i]) && !in_word)
        {
            in_word = true;
            count++;
        }
        else if (is_spaces(text[i]))
        {
            in_word = false;
        }
    }

    return count;
}

int count_sentences(string text)
{
    int count = 0;

    for (int i = 0; text[i] != '\0'; i++)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            count++;
        }
    }

    return count;
}

void grade(int letters, int words, int sentences)
{
    float L = (float) letters / words * 100;
    float S = (float) sentences / words * 100;

    int index = (int) round(0.0588 * L - 0.296 * S - 15.8);

    if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    else if (index > 1)
    {
        printf("Grade %d\n", index);
    }

    else
    {
        printf("Before Grade 1\n");
    }
}
