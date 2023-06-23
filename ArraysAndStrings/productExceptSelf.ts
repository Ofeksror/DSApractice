function productExceptSelf(nums: number[]): number[] {
    let pre: number[] = [1, nums[0]];
    for (let i = 1; i < nums.length - 1; i++) {
        pre.push(pre[pre.length - 1] * nums[i]);
    }

    let post: number[] = [];
    post.push(1)
    for (let i = nums.length - 1; i > 0; i--) {
        post.unshift(post[0] * nums[i]);
    }

    return pre.map((n, i) => n * post[i]);
};

console.log(productExceptSelf([7, 4, 2, 5]));
    
//
// [7, 4, 2, 5]
// [1, 7, 7*4, 7*4*2] pre
// [4*2*5, 2*5, 5, 1] post