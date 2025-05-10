const nums1 = [0,7,28,17,18]; 

const nums2 = [1,2,6,26,1,0,27,3,0,30];

function minimumEqualSum(nums1, nums2) {
    let arr1zeroes = 0;
    let arr2zeroes = 0;

    for(let n of nums1) {
        if(n === 0) {
            arr1zeroes++;
        }
    }
    for(let n of nums2) {
        if(n === 0) {
            arr2zeroes++;
        }
    }
    let nums1sum = nums1.reduce((acc, n) => acc += n , 0);
    let nums2sum = nums2.reduce((acc, n) => acc += n , 0);
    


    if((nums1sum + arr1zeroes < nums2sum + arr2zeroes) && arr1zeroes > 0) {
        return nums2sum + arr2zeroes;
    } else if ((nums1sum + arr1zeroes > nums2sum + arr2zeroes) && arr2zeroes > 0) {
        return nums1sum + arr1zeroes;

    } else if ((nums1sum + arr1zeroes === nums2sum + arr2zeroes)) {
        return nums2sum + arr2zeroes;
    } else {
        return -1
    }
    


}

console.log(minimumEqualSum(nums1, nums2)); // 98
