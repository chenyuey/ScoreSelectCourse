/**
 * Created by chenyue on 15-1-24.
 */
function NanHamReplacementRule(student_scores)
{
    this.student_scores = student_scores;
}
extend(NanHamReplacementRule,ReplacementRule);

NanHamReplacementRule.prototype.replace = function(arr_social_practice_scores,arr_course_scores)
{  console.log("-----------------------------------------------")
    var arr_result = [];
    for(var j = 0; j < arr_course_scores.length; j ++)
    {
        var high_score = arr_course_scores[j].score >= arr_social_practice_scores[j].score ? arr_course_scores[j].score :arr_social_practice_scores[j].score;
        console.log('high_score:'+high_score);
        if(arr_course_scores[j].score == high_score && arr_course_scores[j].score >= arr_course_scores[j].pass_score)
        {
            arr_result.push(arr_course_scores[j]);
        }
        else if(arr_social_practice_scores[j].score > arr_social_practice_scores[j].pass_score)
        {
            arr_result.push(arr_social_practice_scores[j]);
        }
    }
    return arr_result;
}