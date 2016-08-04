/**
 * Created by plter on 8/4/16.
 */

(function () {

    function sort(numbers) {
        //冒泡排序算法
        for (var i = 0; i < numbers.length; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[j] > numbers[i]) {
                    numbers[i] = numbers[i] + numbers[j];
                    numbers[j] = numbers[i] - numbers[j];
                    numbers[i] = numbers[i] - numbers[j];
                }
            }
        }
    }

    //把sort函数公开到顶级作用域
    window.sort = sort;
})();