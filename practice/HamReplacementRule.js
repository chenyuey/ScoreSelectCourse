function HamReplacementRule (student_scores) {
    this.student_scores = student_scores;
}
extend(HamReplacementRule,ReplacementRule);

HamReplacementRule.prototype.replace  = function (arr_social_practice_scores,arr_course_scores) {
    var arr_result = [];
    console.log('****************8');
    for(var i = 0; i < arr_social_practice_scores.length; i ++)
    {
        if( arr_course_scores[i].score >= arr_course_scores[i].pass_score)
        {
            console.log(arr_course_scores[i].course_name);
            arr_result.push(arr_course_scores[i]);
        }
        else if(arr_social_practice_scores[i].score>=arr_social_practice_scores[i].pass_score)
        {
            console.log(arr_social_practice_scores[i].course_name);
            arr_result.push(arr_social_practice_scores[i]);
        }
    }
    return arr_result;
};