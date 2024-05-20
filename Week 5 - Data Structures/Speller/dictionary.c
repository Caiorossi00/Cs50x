#include <ctype.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <stdio.h>

#include "dictionary.h"

typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

const unsigned int N = 26;

node **table;

bool check(const char *word)
{
    unsigned int h = hash(word);

    for (node *temp = table[h]; temp != NULL; temp = temp->next)
    {
        if (strcasecmp(word, temp->word) == 0)
        {
            return true;
        }
    }

    return false;
}

unsigned int hash(const char *word)
{
    return toupper(word[0]) - 'A';
}

bool load(const char *dictionary)
{
    FILE *file = fopen(dictionary, "r");
    if (file == NULL)
    {
        return false;
    }

    table = malloc(N * sizeof(node *));
    if (table == NULL)
    {
        fclose(file);
        return false;
    }

    for (int i = 0; i < N; i++)
    {
        table[i] = NULL;
    }

    char word[LENGTH + 1];
    while (fscanf(file, "%s", word) != EOF)
    {
        node *new_node = malloc(sizeof(node));
        if (new_node == NULL)
        {
            fclose(file);
            unload();
            return false;
        }

        strcpy(new_node->word, word);

        unsigned int h = hash(word);

        new_node->next = table[h];
        table[h] = new_node;
    }

    fclose(file);
    return true;
}

unsigned int size(void)
{
    unsigned int count = 0;

    for (int i = 0; i < N; i++)
    {
        for (node *temp = table[i]; temp != NULL; temp = temp->next)
        {
            count++;
        }
    }

    return count;
}

bool unload(void)
{
    for (int i = 0; i < N; i++)
    {
        node *temp = table[i];
        while (temp != NULL)
        {
            node *next = temp->next;
            free(temp);
            temp = next;
        }
    }

    free(table);

    return true;
}
