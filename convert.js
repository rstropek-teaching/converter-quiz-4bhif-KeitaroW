var args = process.argv;

if (args.length != 6 || args[4] != "to" || !canConvert() || isNaN(args[2])) {
    process.stdout.write("Invalid parameters\n");
    process.exit(1);
}

var factors = [2];
factors[0] = getFactor(args[3]);
factors[1] = getFactor(args[5]);

process.stdout.write("" + args[2] + " " + args[3] + " are " + args[2]*factors[1]/factors[0] + " " + args[5] + "\n");

function getFactor(unit) {
    switch (unit) {
        case 'm':
        case 'kg': return 1;
        case 'cm': return 100;
        case 'mm': return 1000;
        case 'g': return 1000;
        default: process.stdout.write("Invalid parameters\n"); process.exit(1);
    }
}

function canConvert() {
    return getUnitType(args[3])==getUnitType(args[5]);
}

function getUnitType(unit) {
    switch (unit) {
        case 'm': return "length";
        case 'kg': return "weight";
        case 'cm': return "length";
        case 'mm': return "length";
        case 'g': return "weight";
        default: process.stdout.write("Invalid parameters\n"); process.exit(1);
    }
}