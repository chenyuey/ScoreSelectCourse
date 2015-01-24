describe('学生成绩',function(){
    var stu_grade = new StudentGrade(completed_course,social_practice_course);
    it('获取必修课程的成绩',function(){
        var sum_require_course = stu_grade.get_required_course_score();
        console.log(sum_require_course);
        expect(sum_require_course).toBe(10);

    })
    it('获取选修课程的成绩',function(){
        var sum_require_course = stu_grade.get_not_required_course_score();
        console.log(sum_require_course);
        expect(sum_require_course).toBe(5);

    })
    it('获取置换必修课程的社会实践课程的成绩',function(){
        var sum_require_course = stu_grade.get_practice_required_course_score();
        console.log(sum_require_course);
        expect(sum_require_course).toBe(2);

    })
    it('获取置换选修课程的实践课程的成绩',function(){
        var sum_require_course = stu_grade.get_practice_not_required_course_score();
        console.log(sum_require_course);
        expect(sum_require_course).toBe(2);

    })
});