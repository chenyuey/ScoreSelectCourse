describe('test_course',function(){
    function before(){
        localStorage.removeItem("course_db");
    };
    before();
    it('add a course db course_db should have an item',function(){
        var course = new Course('数据结构',3,true,60);
        course.add_course_to_db();
        var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
        var course_in_db = _.find(arr_course_db,function(obj){
           return obj.name == '数据结构';
        });
        expect(course_in_db.name).toEqual(course.name);
        expect(course_in_db.credit).toEqual(course.credit);
        expect(course_in_db.type).toEqual(course.type);
        expect(course_in_db.pass_score).toEqual(course.pass_score);
    });
    it('update a course ,course type should be false',function(){
        var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
        var find_course = _.find(arr_course_db,function(obj){
            return obj.name == '数据结构';
        });
        console.log(find_course);
        expect(find_course.type).toBe(true);
        var course = new Course('数据结构',3,false,60);
        var arr_course_in_db = Course.update_course_to_db(course);
        var course_in_db = _.find(arr_course_in_db,function(obj){
            return obj.name == '数据结构';
        });
        console.log(course_in_db);
        expect(course_in_db.type).toBe(false);
    });
    it('delete a course, course_db should have no item',function(){
        var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
        var find_course = _.find(arr_course_db,function(obj){
            return obj.name == '数据结构';
        });
        console.log(find_course);
        expect(find_course.name).toBe('数据结构');

        var arr_left_course_in_db = Course.delete_course_to_db('数据结构');
        var course_in_db = _.find(arr_left_course_in_db,function(obj){
            return obj.name == '数据结构';
        });
        expect(course_in_db).toBe(undefined);
    });

    it('find a course, course_db should have no item',function(){
        var arr_course_db = JSON.parse(localStorage.getItem('course_db'));
        var find_course = _.find(arr_course_db,function(obj){
            return obj.name == '数据结构';
        });
        console.log(find_course);
        expect(find_course.name).toBe('数据结构');

        var arr_left_course_in_db = Course.delete_course_to_db('数据结构');
        var course_in_db = _.find(arr_left_course_in_db,function(obj){
            return obj.name == '数据结构';
        });
        expect(course_in_db).toBe(undefined);
    });
});