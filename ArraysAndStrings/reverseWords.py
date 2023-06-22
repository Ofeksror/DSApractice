class Solution:
    def reverseWords(self, s: str) -> str:
        reversedOrder = s.split(" ")
        reversedOrder.reverse()
        
        while "" in reversedOrder:
            reversedOrder.remove("")

        return " ".join(reversedOrder)
    
sol = Solution()
print(sol.reverseWords("the sky is blue"))
print(sol.reverseWords("   hello world   "))
print(sol.reverseWords("a good    example"))