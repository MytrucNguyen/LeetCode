/**
 * We use a breath first search to generate all possible combinations of parentheses, 
 * and then we filter out the ones that are not valid
 */
const generateParenthesis = (n) => {
    const result = [];
    breathFirstSearch("", 0, 0);
    return result;

    /**
     * If the number of left parentheses is less than the number of right parentheses, 
     * then add a right parenthesis. Otherwise, add a left parenthesis.
     * @param str - the current string
     * @param left - the number of left parentheses
     * @param right - the number of right parentheses that have been added
     */
    function breathFirstSearch(str, left, right) {
        if (left === n && right === n) {
            result.push(str);
            return;
        }
        if (left !== n) {
            breathFirstSearch(str + "(", left + 1, right);
        }
        if (left > right) {
            breathFirstSearch(str + ")", left, right + 1);
        }
    }
}

// Another Way
const generateParenthesis = (n) => {
    let ans = [],
        m = 2 * n

    const dfs = (pos, open, seq) => {
        if (pos === m) {
            let res = new Array(m)
            for (let i = 0; i < m; i++)
                res[i] = seq & 1 << i ? "(" : ")"
            ans.push(res.join(""))
            return
        }
        if (open) dfs(pos + 1, open - 1, seq)
        if (m - pos > open) dfs(pos + 1, open + 1, seq | 1 << pos)
    }

    dfs(0, 0, 0)
    return ans
}
console.log(generateParenthesis(3))
