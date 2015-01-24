/**
 * Created by chenyu on 15/1/21.
 */
function ReplacementRule(student_scores)
{
    this.student_scores = student_scores;
}

ReplacementRule.prototype.get_grade_list = function()
{
    var arr_social_practice_scores = this.student_scores.arr_social_practice_scores;
    var arr_course_scores = this.student_scores.arr_course_scores;
    return this.replace(arr_social_practice_scores,arr_course_scores);
};
ReplacementRule.prototype.replace  = function (arr_social_practice_scores,arr_course_scores) {

}
