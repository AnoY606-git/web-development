const act = ['+', '-', '*', '/']

function math(act, num1, num2) {
    switch(act) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    var i = 0;
    return result = String(result);
}

function arithmeticAction(stack, i) {
    var num1 = Number(stack[i + 1]);
    var num2 = Number(stack[i + 2]);
    math(stack[i], num1, num2);
    stack.splice(i, 1);
    stack.splice(i, 1);
    stack.splice(i, 1);
    stack.splice(i, 0, result); 
    if (stack[i - 1] == '(' ) {
        stack.splice(i - 1, 1);
        if (stack[i] == ')' ) {
            stack.splice(i, 1);
        }
    }
    return(stack);
}

function calculation(stack, i, length) {
    while (i <= length) {
        if (stack[i + 1] == '(') {
            i = i + 1;
            continue;     
        }
        if (stack[i + 2] == '(') {
            i = i + 2;
            continue;
        }
        if (act.includes(stack[i])) {
            arithmeticAction(stack, i)
            i = 0;
            continue;    
        }
        i = i + 1;
    }    
    return(stack);
}

function calc(string) {
    var stack = string.split('');
    var length = stack.length;
    var elementOfArr = 0;
    var val = ' ';
    while (elementOfArr <= length) {
        if (stack[elementOfArr] == val) {
            stack.splice(elementOfArr, 1);
        } else {
            elementOfArr = elementOfArr + 1; 
        }
    }
    var i = 0; 
    if (length > 2) {
        calculation(stack, i, length);
        return(stack[0]);
    } else {
        console.log('error')
    }
}