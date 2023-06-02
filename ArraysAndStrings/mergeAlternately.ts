// 1768 Merge Strings Alternately
// Easy
// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

function mergeAlternately(word1: string, word2: string): string {
    let ret: string = "";
    
    let iterator1 = 0;
    let iterator2 = 0;
    let i = 0;
    while (iterator1 < word1.length || iterator2 < word2.length ) {
        if (iterator1 >= word1.length || iterator2 >= word2.length) {
            ret += word1.substring(iterator1, word1.length);
            ret += word2.substring(iterator2, word2.length);
            return ret;
        }
        else {
            if (i % 2 == 0) {
                ret += word1.charAt(iterator1);
                iterator1++;
            }
            else {
                ret += word2.charAt(iterator2);
                iterator2++;
            }
            
            i++;
        }
    }

    return ret;
};

function runTests(): void {
    console.log((mergeAlternately("abc", "pqr") === "apbqcr") ? "✅ | TEST #1" : "❌ | TEST #1: Expected \'apbqcr\' for \'abc\' + \'pqr\'.");
    console.log((mergeAlternately("ab", "pqrs") === "apbqrs") ? "✅ | TEST #2" : "❌ | TEST #2: Expected \'apbqrs\' for \'ab\' + \'pqrs\'.");
    console.log((mergeAlternately("abcd", "pq") === "apbqcd") ? "✅ | TEST #3" : "❌ | TEST #1: Expected \'apbqcd\' for \'abcd\' + \'pq\'.");
}

runTests();