class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        // collision only occurs when left is positive and right is negative
        for (let i = 0; i < asteroids.length; i++) {
            let alive = true;
            while (alive && stack.length && stack[stack.length - 1] > 0 && asteroids[i] < 0) {
                const top = stack[stack.length - 1];
                const asteroid = asteroids[i];
                if (Math.abs(top) > Math.abs(asteroid)) {
                    // current asteroid explodes
                    alive = false;
                } else if (Math.abs(top) === Math.abs(asteroid)) {
                    // both asteroid explode
                    stack.pop();
                    alive = false;
                } else {
                    // previous asteroid explodes
                    stack.pop();
                    alive = true;
                }
            }
            if (alive) {
                stack.push(asteroids[i])
            }
        }
        return stack;
    }
}
