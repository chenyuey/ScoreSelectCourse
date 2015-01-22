function get_completed_course()
{
    return [{course_name:'数学',score:82,pass_score:60,is_required:true,credit:4},
        {course_name:'语文',score:80,pass_score:60,is_required:false,credit:3},
        {course_name:'物理',score:95,pass_score:60,is_required:true,credit:2},
        {course_name:'化学',score:77,pass_score:60,is_required:false,credit:2},
        {course_name:'课程A',score:75,pass_score:60,is_required:true,credit:2},
        {course_name:'课程B',score:69,pass_score:60,is_required:true,credit:2}];
}
function get_social_practice_course()
{
    return [{course_name:'实践A',score:88,pass_score:60,credit:2},
        {course_name:'实践B',score:82,pass_score:60,credit:2}];
}
var student_scores = {
    arr_social_practice_scores :[{course_name:'实践A',score:88,pass_score:60,credit:2},
        {course_name:'实践B',score:82,pass_score:60,credit:2}],
    arr_course_scores:[{course_name:'课程A',score:75,pass_score:60,is_required:true,credit:2},
        {course_name:'课程B',score:69,pass_score:60,is_required:true,credit:2}]
};