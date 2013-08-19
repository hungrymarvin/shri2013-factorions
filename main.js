function factorions()
{
    var factroionMax = 2540160; //верхняя граница для факторионов

    console.log('Факторионы');
    console.log(1);
    console.log(2);
    console.log(145);
    console.log(40585);

    console.log('Тест "в лоб"');

    var start = new Date();

    for (var i = 0; i < factroionMax; i++)
    {
        if (isFactorion(i))
            console.log(i + ' - Факторион');
    }

    var end = new Date();
    console.log('Скорость ' + (end.getTime()-start.getTime()) + ' мс');
}

//медленный способ
function factorial(n) {
    return (n >= 1) ? n*factorial(n-1) : 1;
}
//быстрый способ
function factorialFast(n) {
    //значения факториала для 0-9
    var factorialCache = [1,1,2,6,24,120,720,5040,40320,362880];
    return factorialCache[n];

}

function isFactorion(number)
{
    var tmpNumber = number;
    var factorialsSum = 0;
    var digit;

    do
    {
        digit = tmpNumber%10; //получаем цифру последнего разряда
        factorialsSum += factorialFast(digit);
        //factorialsSum += factorial(digit); 
        tmpNumber = (tmpNumber - digit)/10; //удаляем последний разряд
    }
    while (tmpNumber != 0);

    return factorialsSum === number;
}

factorions();