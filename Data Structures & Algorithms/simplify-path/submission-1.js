class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        let curr = "";
        path += "/";
        for (const c of path) {
            if (c === "/") {
                if (curr === "..") {
                    if (stack.length > 0) {
                        stack.pop()
                    }
                } else if (curr !== "" && curr !== ".") {
                    stack.push(curr);
                }
                curr = "";
            } else {
                curr += c;
            }
        }
        return "/" + stack.join("/")
    }
}
