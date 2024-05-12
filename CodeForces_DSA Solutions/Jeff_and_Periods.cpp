#include<bits/stdc++.h>
using namespace std;
int largestEle(int arr[],int n)
{
    int ref= INT_MIN;
    for (int i = 0; i < n; i++)
    {
        if(arr[i]>ref)
        {
            ref=arr[i];
        }
    }
    return ref;
}
int main(){
    // input
    int n; cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    // output
    int length_arr2=largestEle(arr,n);
    int arr2[length_arr2];
    for (int i = 0; i < length_arr2; i++)
    {
        arr2[i]=0;
    }
    for (int i = 0; i < n; i++)
    {
        arr2[arr[i]]++;
    }
    int total=0;
    for (int i = 0; i <= length_arr2; i++)
    {
        if(arr2[i]!=0)
        {
            total++;
        }
    }
    cout << total << endl;
    for (int i = 0; i <= length_arr2; i++)
    {
        if(arr2[i]==1)
        {
            cout << i << " 0" << endl;
        }
        else if(arr2[i]>1)
        {
            int index1=0,index2=0;
            for (int j = 0; j < n; j++)
            {
                if(arr[j]==i){
                    index1=j;
                    break;
                }
            }
            for (int k = index1+1; k < n; k++)
            {
                if(arr[k]==i){
                    index2=k;
                    break;
                }
            }
            cout << i << " " << index2-index1 << endl;
        }
    }
    return 0;
}