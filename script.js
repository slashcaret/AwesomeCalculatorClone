const displayText = document.querySelector("#display-text");

displayText.value = 0;
function validateInputChar(char){
    
}

const buttons = document.querySelectorAll("button");

function hightlightKeys(e){
    e.classList.add('activeBtn');
    setTimeout(() => {
        e.classList.remove('activeBtn');
    }, 100);
}

buttons.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        //console.log(e.target.id);
        switch (e.target.id) {
            case 'num0':
              pressNum(document.querySelector('#num0'));
              break;
            case 'num1':
              pressNum(document.querySelector('#num1'));
              break;
            case 'num2':
              pressNum(document.querySelector('#num2'));
              break;
            case 'num3':
              pressNum(document.querySelector('#num3'));
              break;
            case 'num4':
              pressNum(document.querySelector('#num4'));
              break;
            case 'num5':
              pressNum(document.querySelector('#num5'));
              break;
            case 'num6':
              pressNum(document.querySelector('#num6'));
              break;
            case 'num7':
              pressNum(document.querySelector('#num7'));
              break;
            case 'num8':
              pressNum(document.querySelector('#num8'));
              break;
            case 'num9':
              pressNum(document.querySelector('#num9'));
              break;
            case 'add':
              pressOperator(document.querySelector('#add'));
              break;
            case 'subtract':
              pressOperator(document.querySelector('#subtract'));
              break;
            case 'multiply':
              pressOperator(document.querySelector('#multiply'));
              break;
            case 'divide':
              pressOperator(document.querySelector('#divide'));
              break;
            case 'decimal':
              pressDot();
              break;
            // case '(':
            //   pressBracket("(");
            //   break;
            // case ')':
            //   pressBracket(")");
            //   break;
            case 'eval':
              // prevent default action
              e.preventDefault();
              pressEqual();
              break;
            case 'del':
              pressClear();
              break;
            case 'ac':
              pressAllClear();
              break;
          }
})


    // if(e.target.id)
    // {
    //     count.textContent++;
    //     setColor(count.textContent);
        
    // }
    // if(e.target.classList.contains("subtract"))
    // {
    //     count.textContent--;
    //     setColor(count.textContent);
    // }
    // if(e.target.classList.contains("reset"))
    // {
    //     count.textContent = 0;
    //     setColor(count.textContent);
    // }
});

function pressNum(e){
    if (displayText.value === '0') {
        displayText.value = e.innerText;
    } else {
    displayText.value += e.innerHTML;
    }
    hightlightKeys(e);
}

function pressAllClear() {
    displayText.value = '0';
    hightlightKeys(document.querySelector("#ac"));
}

function pressClear() {
    displayText.value = displayText.value.slice(0, -1);
    hightlightKeys(document.querySelector("#del"));
}

function pressDot() {
    displayText.value += '.';
    hightlightKeys(document.querySelector("#decimal"));
}

function pressOperator(e) {
    // check last operator
    let lastOperator = displayText.value.slice(-1);
    if (lastOperator.includes('+', '-', '×', '÷')) {
        displayText.value = displayText.value.slice(0, -1) + e.innerHTML;
    } else {
        displayText.value += e.innerHTML;
    }
    hightlightKeys(e);
}

function pressBracket(e) {
    displayText.value  += e;
}

function pressEqual() {
    let exp = displayText.value;
    
    displayText.value = exp;
    exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
    let result;
    try {
        if(exp !== 'Error' ){
            result = eval(exp);
        }
        else{
            result = 'Error';
        }
        // if decimal number more than 4 decimal places
        if (result.toString().indexOf('.') !== -1) {
        result = result.toFixed(4);
        }
    } catch (e) {
        result = 'Error';
    }
    displayText.value = result;

    hightlightKeys(document.querySelector('#eval'));
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '0':
            pressNum(document.querySelector('#num0'));
            break;
        case '1':
            pressNum(document.querySelector('#num1'));
            break;
        case '2':
            pressNum(document.querySelector('#num2'));
            break;
        case '3':
            pressNum(document.querySelector('#num3'));
            break;
        case '4':
            pressNum(document.querySelector('#num4'));
            break;
        case '5':
            pressNum(document.querySelector('#num5'));
            break;
        case '6':
            pressNum(document.querySelector('#num6'));
            break;
        case '7':
            pressNum(document.querySelector('#num7'));
            break;
        case '8':
            pressNum(document.querySelector('#num8'));
            break;
        case '9':
            pressNum(document.querySelector('#num9'));
            break;
        case '+':
            pressOperator(document.querySelector('#add'));
            break;
        case '-':
            pressOperator(document.querySelector('#subtract'));
            break;
        case '*':
            pressOperator(document.querySelector('#multiply'));
            break;
        case '/':
            pressOperator(document.querySelector('#divide'));
            break;
        case '.':
            pressDot();
            break;
        case '(':
            pressBracket("(");
            break;
        case ')':
            pressBracket(")");
            break;
        case 'Enter':
            // prevent default action
            e.preventDefault();
            pressEqual();
            break;
        case '=':
            // prevent default action
            e.preventDefault();
            pressEqual();
            break;
        case 'Backspace':
            pressClear();
            break;
        case 'Escape':
            pressAllClear();
            break;
        }
  });