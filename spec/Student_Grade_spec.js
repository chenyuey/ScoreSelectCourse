describe('学生成绩',function(){
    var stu_grade = new StudentGrade(completed_course,social_practice_course);
    it('获取必修课程的成绩',function(){
//        var sum_require_course = stu_grade.get_required_course_score();
        var sum_require_course = stu_grade.get_course_or_practice_score('courses',true);
        console.log(sum_require_course);
        expect(sum_require_course).toBe(8);

    })
    it('获取选修课程的成绩',function(){
        var sum_require_course = stu_grade.get_course_or_practice_score('courses',false);
        console.log(sum_require_course);
        expect(sum_require_course).toBe(7);

    })
    it('获取置换必修课程的社会实践课程的成绩',function(){
        var sum_require_course = stu_grade.get_course_or_practice_score('practice',true);
        console.log(sum_require_course);
        expect(sum_require_course).toBe(2);

    })
    it('获取置换选修课程的实践课程的成绩',function(){
        var sum_require_course = stu_grade.get_course_or_practice_score('practice',false);
        console.log(sum_require_course);
        expect(sum_require_course).toBe(2);

    })
});