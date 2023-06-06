// 1071 Greatest Common Divisor of Strings
// Easy
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

// Euclidean algorithm 


function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1)
        return "";
    
    let gcd = (a: number, b: number): number => {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    let x = gcd(str1.length, str2.length);

    return str1.substring(0, x);
}

(() => {
    console.log((gcdOfStrings("ABCABC", "ABC") === "ABC") ? "✅ | TEST #1" : "❌ | TEST #1");
    console.log((gcdOfStrings("ABABAB", "ABAB") === "AB") ? "✅ | TEST #2" : "❌ | TEST #2");
    console.log((gcdOfStrings("LEET", "CODE") === "") ? "✅ | TEST #3" : "❌ | TEST #3");
    console.log((gcdOfStrings("ABCDEF", "ABC") === "") ? "✅ | TEST #4" : "❌ | TEST #4");
    console.log((gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX") === "TAUXX") ? "✅ | TEST #5" : "❌ | TEST #5");
})();