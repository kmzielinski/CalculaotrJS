(function (root) {

    var Calculator = function () {
        this.sum = 0;
    };

    Calculator.prototype.getResult = function () {
        return this.sum;
    };

    Calculator.prototype.add = function (x) {
        this.sum += parseFloat(x);

        return this;
    };

    Calculator.prototype.substract = function (x) {
        this.sum -= x;

        return this;
    };

    Calculator.prototype.divide = function (x) {
        if (x !== 0) {
            this.sum /= x;
        } else {
            console.info('Nie dziel cholero przez zero');
        }

        return this;
    };

    Calculator.prototype.multiply = function (x) {
        this.sum *= x;

        return this;
    };

    Calculator.prototype.power = function (x) {
        this.sum = Math.pow(this.sum, x);

        return this;
    };

    Calculator.prototype.factorial = function () {
        var x = 1;

        for (var i = 1; i <= this.sum; i++) {
            x *= i;
        }

        this.sum = x;

        return this;
    };

    Calculator.prototype.clear = function () {
        this.sum = 0;

        return this;
    };

    Calculator.prototype.operate = function (type, x) {
        x = parseFloat(x);
        if (typeof(this[type]) === 'function') {
            if (typeof(x) === 'number' && !isNaN(x)) {
                return this[type](x);
            } else {
                console.warn('To nie jest poprawna liczba: ' + x);
            }
        } else {
            console.warn('Nie ma takiej operacji: ' + type);
        }

        return this;
    };

    root.Calculator = Calculator;

    // var calc = new Calculator();
    //
    // console.log(calc
    //     .operate('add', 2)
    //     .operate('divide', .2)
    //     .factorial()
    //     .clear()
    //     .operate('add', 2)
    //     .operate('multiply', 3)
    //     .operate('power', 5)
    //     .getResult()
    // );
}(window));