class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        function calculate(a, b, operator) {
            switch (operator) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "*":
                    return a * b;
                case "/":
                    return Math.trunc(a / b);
            }
        }
        for (const token of tokens) {
            if (isNaN(token)) {
                const secondNum = stack.pop();
                const firstNum = stack.pop();
                const res = calculate(firstNum, secondNum, token);
                stack.push(res);
            } else {
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
