function StudentGrade(completed_course,completed_social_practice)
{
    this.completed_course = completed_course;
    this.completed_social_practice = completed_social_practice;
}
StudentGrade.prototype.get_course_or_practice_score = function(course_type,required_flag)
{
    var arr_courses = StudentGrade._get_array_course_or_practice_score(this,course_type);
    var sum_credit = StudentGrade._get_sum_credit_of_courses(arr_courses,required_flag);
    return sum_credit;
};
StudentGrade._get_array_course_or_practice_score = function(stu_grade,course_type)
{
    var arr_courses = stu_grade.completed_course;
    if(course_type == 'practice')
        arr_courses = stu_grade.completed_social_practice;
    return arr_courses;
};
StudentGrade._get_sum_credit_of_courses = function(arr_courses,required_flag)
{
    var sum_credit = 0;
    for(var i = 0; i < arr_courses.length; i ++)
    {
        var course_score_info = arr_courses[i];
        if (course_score_info.is_required == required_flag)
            sum_credit = sum_credit + course_score_info.credit;
    }
    return sum_credit;
};
StudentGrade.prototype.get_all_required_score = function(type)
{
    for(var i = 0; i < this.completed_social_practice.length; i ++)
    {

    }
};

var arr_replace_courses = [{course_name:'课程A',practice_name:'实践A'},{course_name:'课程B',practice_name:'实践B'}];