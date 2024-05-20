#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

bool isValidCipher(string cipher)
{
    if (strlen(cipher) != 26)
    {
        return false;
    }

    int counts[26] = {0};

    for (int i = 0; i < 26; i++)
    {
        if (!isalpha(cipher[i]))
        {
            return false;
        }

        int index = tolower(cipher[i]) - 'a';

        if (counts[index] > 0)
        {
            return false;
        }

        counts[index]++;
    }

    return true;
}

string encryptText(string plaintext, string cipher)
{
    int length = strlen(plaintext);
    for (int i = 0; i < length; i++)
    {
        if (isalpha(plaintext[i]))
        {
            char original = isupper(plaintext[i]) ? 'A' : 'a';
            int index = plaintext[i] - original;
            plaintext[i] = isupper(plaintext[i]) ? toupper(cipher[index]) : tolower(cipher[index]);
        }
    }

    return plaintext;
}

int main(int argc, string argv[])
{
    if (argc != 2)
    {
        printf("Usage: %s key\n", argv[0]);
        return 1;
    }

    string cipher = argv[1];

    if (!isValidCipher(cipher))
    {
        printf("Key must contain 26 unique alphabetic characters.\n");
        return 1;
    }

    string plaintext = get_string("plaintext: ");

    string ciphertext = encryptText(plaintext, cipher);

    printf("ciphertext: %s\n", ciphertext);

    return 0;
}
