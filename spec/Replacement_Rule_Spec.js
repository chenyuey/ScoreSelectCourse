/**
 * Created by chenyue on 15-1-20.
 */
describe('置换规则',function(){
    it('哈蒙理工大学实践课不能置换已经修过的课程',function(){
        var hamon_replacement_rule = new HamReplacementRule(student_scores);
        var arr_result = hamon_replacement_rule.get_grade_list();
        expect(arr_result.length).toBe(2);
        console.log(arr_result);
        expect(arr_result[0].course_name).toBe('课程A');
        expect(arr_result[1].course_name).toBe('课程B');

    });
    it('南哈蒙理工大学实践课可以置换已经修过的课程',function(){
        var nan_hamon_replacement_rule = new NanHamReplacementRule(student_scores);
        var arr_nan_hamon_result = nan_hamon_replacement_rule.get_grade_list();
        expect(arr_nan_hamon_result.length).toBe(2);
        expect(arr_nan_hamon_result[0].course_name).toBe('实践A');
        expect(arr_nan_hamon_result[1].course_name).toBe('实践B');

    });
});