function validate() {

    var text1 = document.getElementById('txt1');
    var text3 = document.getElementById('txt3');
    var text4 = document.getElementById('txt4');
    var btn = document.getElementById('button');





    if (text1.value == '' || text3.value == '' || text4.value == '') {
        alert('Blank Values Are Not Allowed');




    } else {
        alert('Sucessfully Submitted');


    }



}
