#include<iostream>
using namespace std;
void merge(int arr[], int l, int mid, int r)
{
    int n1 = mid - l + 1;
    int n2 = r - mid;

    int a[n1];
    int b[n2]; // temp arr

    for (int i = 0; i < n1; i++)
    {
        a[i] = arr[l + i];
    }
    for (int i = 0; i < n2; i++)
    {   
        b[i] = arr[mid + 1 + i];
    }

    int i = 0, j = 0, k = l;  //sorting by selection sort.
    while (i < n1 && j < n2)
    {
        if (a[i] < b[j])
        {
            arr[k] = a[i];
            k++;
            i++;
        }
        else
        {
            arr[k] = b[j];
            k++;
            j++;
        }
    }
    while (i < n1)
    {
        arr[k] = a[i];
        k++;
        i++;
    }
    while (j < n2)
    {
        arr[k] = b[j];
        k++;
        j++;
    }
}

void mergeSort(int arr[], int l, int r)
{
    if (l < r) // sort in accending order
    {
        int mid = (l + r) / 2;
        mergeSort(arr, l, mid); //recursive seperation of array in two sub parts.
        mergeSort(arr, mid + 1, r);

        merge(arr, l, mid, r);
    }
}
int main(){
    int n,m;
    cin >> n >> m;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        int a;
        cin >> a;
        arr[i]=a;
    }
    mergeSort(arr,0,n-1);
    int sum=0;
    for (int i = 0; i < m; i++)
    {
        if(arr[i]<=0){
            sum+=arr[i];
        }
    }
    cout << abs(sum) << endl;
    return 0;
}