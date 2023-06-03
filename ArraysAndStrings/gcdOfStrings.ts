// 1071 Greatest Common Divisor of Strings
// Easy
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

function gcdOfStrings(str1: string, str2: string): string {
    if (str1.length == str2.length) {
        if (str1 == str2)
            return str2;
        return "";
    }

    const dividerLength = str2.length - (str1.length % str2.length);
    const divider = str2.substring(0, dividerLength);

    // Check if str2 contains the divider one or more times
    for (let i = 0; i + dividerLength < str2.length; i += dividerLength) {
        if (str2.substring(i, i + dividerLength) != divider)
            return "";
    }

    // Check if st1 contains the divider one or more times
    for (let i = 0; i + dividerLength <= str1.length; i += dividerLength) {
        if (str1.substring(i, i + dividerLength) != divider)
            return "";
    }

    return divider;
};

(() => {
    console.log((gcdOfStrings("ABCABC", "ABC") === "ABC") ? "✅ | TEST #1" : "❌ | TEST #1");
    console.log((gcdOfStrings("ABABAB", "ABAB") === "AB") ? "✅ | TEST #2" : "❌ | TEST #2");
    console.log((gcdOfStrings("LEET", "CODE") === "") ? "✅ | TEST #3" : "❌ | TEST #3");
    console.log((gcdOfStrings("ABCDEF", "ABC") === "") ? "✅ | TEST #4" : "❌ | TEST #4");
    console.log((gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX") === "TAUXX") ? "✅ | TEST #5" : "❌ | TEST #5");
})();