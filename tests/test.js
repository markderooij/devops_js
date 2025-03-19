console.log("Running test...");

function add(a, b) {
    return a + b;
}

function testAdd() {
    const result = add(2, 3);
    if (result === 5) {
        console.log("Test passed!");
    } else {
        console.log("Test failed!");
    }
}

testAdd();