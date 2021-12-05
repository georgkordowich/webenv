'use strict'

var action_list = [1, 2, 3, 4, 5, 6, 7, 8];
var rewardlist = [0, 0, 0, 0, 0, 0, 0, 0];
var cnt = 0

function sum(array) {
    var total = 0;
    for (var i=0; i<array.length; i++) {
      total += array[i];
    }
    return total;
  };

function mean(array) {
    var arraySum = sum(array);
    return arraySum / array.length;
};


function rotateRight(arr){
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}

function reward(number) {
    cnt=(cnt+1)%2
    if (cnt==0){
        rotateRight(action_list)
        action_list[0] = number

        var ret = 0
        if (action_list[0] == (action_list[1]) + 1){
            ret = 1
        }

        if (action_list[0] == (action_list[1]) - 3){
            ret = 1
        }
        if (action_list[0] == 0){
            if (action_list[1] == 1 && action_list[2] == 2 && action_list[3] == 3 &&
                action_list[4] == 2 && action_list[5] == 1 && action_list[6] == 0){
                    ret = 5
                }
        }
        if (action_list[0] == 1){
            if (action_list[1] == 2 && action_list[2] == 3 && action_list[3] == 2 &&
                action_list[4] == 1 && action_list[5] == 0){
                    ret = 5
                }
        }
        if (action_list[0] == 2){
            if (action_list[1] == 3 && action_list[2] == 2 && action_list[3] == 1 &&
                action_list[4] == 0){
                    ret = 5
                }
        }
        rotateRight(rewardlist)
        rewardlist[0] = ret

        if (JSON.stringify(action_list.slice(0,6)) === JSON.stringify([1, 2, 3, 2, 3, 2])){
            ret = 100
        }
        if (JSON.stringify(action_list.slice(0,7)) === JSON.stringify([1, 0, 3, 2, 3, 2, 1])){
            ret = 500
        }
        document.getElementById("avgreward").innerHTML = String(mean(rewardlist));
        document.getElementById("reward").innerHTML = String(ret);
    }
}
  


document.getElementById("b0").addEventListener('click', function() {
    reward(0)
});

document.getElementById("b1").addEventListener('click', function() {
    reward(1)
});

document.getElementById("b2").addEventListener('click', function() {
    reward(2)
});

document.getElementById("b3").addEventListener('click', function() {
    reward(3)
});
