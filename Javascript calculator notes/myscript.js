/*
Gameplan

HTML=
(8) Calculator window for operations to be shown along with result
(8) Number buttons for the calculator
(8) Operator buttons
(8) '=' button
(8) Reset or clear function
() optional= backspace button

 Javascript
 (8) function that captures what typed in the calcWindow
 (8) Separate functions that add numbers, subtract numbers, etc.
 */

function calculate(expression) //ex. expression in 2+5 or 9*6 or 10/5
{
    //'expression' is a string of everything in your calculator window
    //Need to extract the first number from 'expression'
    var first = Number(expression.substr(0,1));
    var second = expression.substr(1,1);
    var third = expression.substr(2,1);
    var fourth = Number(expression.substr(3,1));
    var fifth = Number(expression.substr(4,1));

    if (second === '+')
    {
        return addNums(first, third);
    }
    else if (second === '-')
    {
        return subNums(first, third);
    }
    else if (second === '*')
    {
        return mulNums(first, third);
    }
    else if (second === '/')
    {
        return divNums(first, third);
    }
    else if (second === '^')
    {
        return powNums(first, third);
    }
    else if (third === '+')
    {
        addNums(first, Number(second) + fourth);
    }
}

function addNums(p1, p2) //addnums expects 2 parameters... p1 and p2
{
    return p1 + p2;
}

function subNums(p1, p2)
{
    return p1 - p2;
}

function mulNums(p1, p2)
{
    return p1 * p2;
}

function divNums(p1, p2)
{
    return p1 / p2;
}

function powNums (p1, p2)
{
    return Math.pow(p1, p2);
}


