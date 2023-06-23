
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        dict_list = {i: value for i, value in enumerate(nums)}
        sorted_list = dict(sorted(dict_list.items(), key=lambda item: item[1], reverse=True))

        for index, value
        
sol = Solution()
print(sol.increasingTriplet([5, 4, 3, 2, 1]))

"""
    // # Solution 1
    // Sort the array (hashmap for index and value, sort by value)
    // Check if there are 3 numbers increasing in order
        // are their indexes increasing correctly?
"""