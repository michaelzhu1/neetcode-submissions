class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        if (prerequisites.length === 0) {
            return true;
        }
        const inDegrees = new Array(numCourses).fill(0);
        const courses = Array.from({length: numCourses}, ()=> []);
        for (const [course, prereq] of prerequisites) {
            inDegrees[course]++;
            courses[prereq].push(course); 
        }
        const queue = [];
        // queue contains all the courses available to be taken right now
        for (let i = 0; i < numCourses; i++) {
            if (inDegrees[i] === 0) {
                queue.push(i);
            }
        }
        let courseTaken = 0;
        while (queue.length) {
            const currCourse = queue.shift();
            courseTaken++;
            const availableCourses = courses[currCourse];
            for (const availableCourse of availableCourses) {
                inDegrees[availableCourse]--;
                if (inDegrees[availableCourse] === 0) {
                    queue.push(availableCourse);
                }
            }

        }
        return courseTaken === numCourses;
    }
}
