function StudentGrade(completed_course,completed_social_practice)
{
    this.completed_course = completed_course;
    this.completed_social_practice = completed_social_practice;
}
StudentGrade.prototype.get_required_course_score = function()
{
    var sum_required_credit = 0;
    for(var i = 0; i < this.completed_course.length; i ++)
    {
        var course_score_info = this.completed_course[i];
        if(course_score_info.is_required == true)
        {
            sum_required_credit = sum_required_credit + course_score_info.credit;
        }
    }
    return sum_required_credit;
}
StudentGrade.prototype.get_not_required_course_score = function()
{
    var sum_not_required_credit = 0;
    for(var i = 0; i < this.completed_course.length; i ++)
    {
        var course_score_info = this.completed_course[i];
        if(course_score_info.is_required == false)
        {
            sum_not_required_credit = sum_not_required_credit + course_score_info.credit;
        }
    }
    return sum_not_required_credit;
}
StudentGrade.prototype.get_practice_required_course_score = function()
{
    var sum_practice_required_credit = 0;
    for(var i = 0; i < this.completed_social_practice.length; i ++)
    {
        var practice_score_info = this.completed_social_practice[i];
        if(practice_score_info.is_required == true)
        {
            sum_practice_required_credit = sum_practice_required_credit + practice_score_info.credit;
        }
    }
    return sum_practice_required_credit;
}
StudentGrade.prototype.get_practice_not_required_course_score = function()
{
    var sum_not_practice_required_credit = 0;
    for(var i = 0; i < this.completed_social_practice.length; i ++)
    {
        var practice_score_info = this.completed_social_practice[i];
        if(practice_score_info.is_required == false)
        {
            sum_not_practice_required_credit = sum_not_practice_required_credit + practice_score_info.credit;
        }
    }
    return sum_not_practice_required_credit;
}
