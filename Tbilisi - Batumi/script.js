let fuel = 110;

if (fuel >= 80) {
    console.log('ამ ბენზინით ბათუმამდე ბრატ');
    fuel -= 80
} else if (fuel >= 50) {
    console.log('ამ ბენზინით ქუთაისამდე ბრატ');
    fuel -= 50
} else if (fuel >= 30) {
    console.log('ამ ბენზინით ხაშურამდე ბრატ');
    fuel -= 30
} else if (fuel >= 20) {
    console.log('ამ ბენზინით გორამდე ბრატ');
    fuel -= 20
} else if (fuel >= 10) {
    fuel -= 10
    console.log('ამ ბენზინით იგოეთამდე ბრატ');
}

if (fuel >= 80) {
    console.log('ამ ბენზინით თბილისამდე ბრატ');
    fuel -= 80;
} else if (fuel >= 70) {
    console.log('ამ ბენზინით იგოეთამდე ბრატ');
    fuel -= 80;
} else if (fuel >= 60) {
    console.log('ამ ბენზინით გორამდე ბრატ');
    fuel -= 50;
} else if (fuel >= 50) {
    console.log('ამ ბენზინით ხაშურამდე ბრატ');
    fuel -= 50;
} else if (fuel >= 30) {
    console.log('ამ ბენზინით ქუთაისამდე ბრატ');
    fuel -= 30;
}
