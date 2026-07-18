class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        const total = A.length + B.length;
        const half = Math.floor(total / 2);

        if (B.length < A.length) {
            let temp = B;
            B = A;
            A = temp;
        }
        let left = 0;
        let right = A.length - 1;
        while (true) {
            let i = Math.floor((left + right) / 2);
            let j = half - i - 2;

            let Aleft = i >= 0 ? A[i] : -Infinity;
            let Aright = (i + 1) < A.length ? A[i+1] : Infinity;
            let Bleft = j >= 0 ? B[j] : -Infinity;
            let Bright = (j + 1) < B.length ? B[j+1] : Infinity;

            // Found the right partition
            if (Aleft <= Bright && Bleft <= Aright) {
                // check if the total length of elements is even or odd
                if (total % 2) {
                    // length is odd
                    return Math.min(Aright, Bright);
                } else {
                    // length is even
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                }
            } else if (Aleft > Bright) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }
    }
}
