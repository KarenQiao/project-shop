/**
 * Created by ZHUANGYI on 2017/6/12.
 */

/*切换tab*/

var jdShoppingCart = {

    editDeleteChange: function () {

        document.getElementById('editTabBtn').addEventListener('click', function () {


            if (this.innerText == '编辑') {                                                                                   //当文字为编辑时候

                this.innerText = '完成';                                                                                    //点击为'完成'

                document.getElementById('settlementTab').style.transform = 'translateY(55px)';

                document.getElementById('deleteTab').style.transform = 'translateY(0)';

            }

            else if (this.innerText == '完成') {

                this.innerText = '编辑';

                document.getElementById('settlementTab').style.transform = 'translateY(0)';

                document.getElementById('deleteTab').style.transform = 'translateY(55px)';
            }

        })

    }


};












