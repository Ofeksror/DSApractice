class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        
        s_vowels = ""
        
        for c in s:
            if c in vowels:
                s_vowels += c

        ret = ""

        for i in range(len(s)):
            if s[i] in vowels:
                ret += s_vowels[len(s_vowels) - 1]
                s_vowels = s_vowels[0:(len(s_vowels) - 1)]
            else:
                ret += s[i]
        
        return ret
        

# Testing
solution = Solution()

solution.reverseVowels("hello") # holle
solution.reverseVowels("leetcode") # leotcede