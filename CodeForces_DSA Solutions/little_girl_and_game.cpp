#include <bits/stdc++.h>
using namespace std;
int palindrom(string s)
{
    string p = s;
    reverse(p.begin(), p.end());
    if (s == p)
        return 1;
    else
        return 0;
}
int main()
{
    string s;
    cin >> s;
    if (palindrom(s))
    {
        cout << "First" << endl;
        return 0;
    }
    else
    {
        for (int i = 0; i < s.length() / 2; i++)
        {
            if (s[i] != s[s.length() - i - 1])
            {
                
            }
        }
    }
    return 0;
}