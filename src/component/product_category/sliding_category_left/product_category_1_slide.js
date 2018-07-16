/**
 * Created by ZHUANGYI on 2017/6/26.
 */

var jdCategoryPage = {

    clickTSortChange: function () {

        var fatherEle = document.getElementsByClassName('product_category_slide')[0];

        var allEle = fatherEle.getElementsByTagName('div');


        for (var i = 0; i < allEle.length; i++) {

            allEle[i].addEventListener('click', function () {

                var _this = this;

                /*选中高亮*/
                fatherEle.getElementsByClassName('select_sort')[0].className = fatherEle.getElementsByClassName('select_sort')[0].className.replace('select_sort', '');

                _this.className += ' select_sort';

                //设定点击类型切换右侧显示内容 ps: 点击为你推荐以外的类显示另一个内容

                var div_select_sort = document.getElementsByClassName('select_sort')[0];

                var div_comment_for_you = document.getElementsByClassName('comment_for_you')[0];

                var div_one_of_classify = document.getElementsByClassName('one_of_classify')[0];

                if(div_select_sort.innerText == '为你推荐'){

                    div_comment_for_you.style.display = 'block';

                    div_one_of_classify.style.display = 'none';

                }else{

                    div_comment_for_you.style.display = 'none';

                    div_one_of_classify.style.display = 'block';

                }

                /*滚动条移动*/
                var eleHeight = _this.offsetTop;
                //元素到父元素的高度

                var screenHeight = window.innerHeight;
                //浏览器的高度

                var thisEleHeight = _this.offsetHeight;
                //点击元素的高度

                /*目标位置*/
                var distance = eleHeight - screenHeight / 2 + thisEleHeight / 2;

                /*现在滚动位置*/
                var thisScrollTop = _this.parentNode.scrollTop;

                /*平滑过渡*/

                var index = 0;

                /*每10毫秒执行一次*/
                var time = setInterval(timeSet, 10);

                /*执行方法*/
                function timeSet() {


                    //计数
                    index++;

                    /*每次增加1/30的差值*/
                    _this.parentNode.scrollTop += (distance - thisScrollTop) / 30;

                    /*三十次*/
                    if (index >= 30) {
                        clearInterval(time);

                    }

                }

                //this.parentNode.scrollTop = distance;


            }, false);


        }


    }
};

