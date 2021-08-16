// problem no 1

function seerToMon(seer) {
    if (typeof seer != 'number') {

        return 'Please enter a positive amount';

    }

    else if (seer < 0) {

        return 'Please enter a positive amount';

    }

    else {

        return seer / 40;

    }
}

const findMon = seerToMon(34);
console.log(findMon);

// problem no 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof shirtQuantity != 'number' || shirtQuantity < 0) {

        return 'Bad Input !!! Please enter a valid positive quantity of shirt';

    }
    else if (typeof pantQuantity != 'number' || pantQuantity < 0) {

        return 'Bad Input !!! Please put a valid positive quantity of pant';

    }

    else if (typeof shoeQuantity != 'number' || shoeQuantity < 0) {

        return 'Bad Input !!! Please enter a valid positive quantity of shoe';

    }

    else {
        let perShirtPrice = 100;
        let perPantPrice = 200;
        let perShoePrice = 500;

        let totalSales = (perShirtPrice * shirtQuantity) + (perPantPrice * pantQuantity) + (perShoePrice * shoeQuantity);

        return totalSales;
    }


}

const findSales = totalSales(1, 2, 3);
console.log(findSales);

// problem no 3

function deliveryCost(shirtQuantity) {

    if (typeof shirtQuantity != 'number' || shirtQuantity < 0) {

        return ' Wrong Input !!! Please enter a positive number ';
    }

    else if (shirtQuantity <= 100) {
        let deliveryCost = shirtQuantity * 100;
        return deliveryCost;
    }

    else if (shirtQuantity > 100 && shirtQuantity <= 200) {

        const first100Cost = 10000;
        let deliveryCost = first100Cost + (shirtQuantity - 100) * 80;
        return deliveryCost;
    }
    else {

        const first200Cost = 18000;
        let deliveryCost = first200Cost + (shirtQuantity - 200) * 50;
        return deliveryCost;
    }

}

const findDeliveryCost = deliveryCost(46);
console.log(findDeliveryCost);

// problem no 4

function perfectFriend(arrfriends) {

    if (typeof arrfriends != 'object') {
        return 'Bad Input !!! PLease enter a array of friends'

    }

    else {
        for (const friend of arrfriends) {
            if (friend.length == 5) {
                return friend;
            }
        }


    }

}

const friends = ['shamim', 'hasan', 'reza', 'mim', 'xo', 'z', 'abcde']
const findFriend = perfectFriend(friends);
console.log(findFriend);