/**
 * Created by chenyue on 15-1-7.
 */
function Course(name,credit,type,pass_score)
{
    this.name = name;
    this.credit = credit;
    this.type = type;
    this.pass_score = pass_score;
}
Course.prototype.add_course_to_db = function()
{
    var arr_course_db = JSON.parse(localStorage.getItem('course_db')) || [];
    arr_course_db.push(this);
    localStorage.setItem('course_db',JSON.stringify(arr_course_db));
};
Course.delete_course_to_db = function(name)
{
    var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
    var course_name = name;
    var arr_left_course_in_db = _.filter(arr_course_db,function(obj){
        return obj.name != course_name;
    });
    return arr_left_course_in_db;
};
Course.update_course_to_db = function(course)
{
    var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
    var array = _.map(arr_course_db,function(obj){
       if(course.name == obj.name)
       {
           obj.type = course.type;
           obj.credit = course.credit;
           obj.pass_score = course.pass_score;
       }
       return obj;
    });
    return array;
};
Course.find_course_to_db = function(name)
{
    var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
    return _.find(arr_course_db,function(obj){
        return obj.name = name;
    });
};