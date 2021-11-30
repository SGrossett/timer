let args = process.argv.splice(2);

// No numbers are provided
if (args.length === 0) return;

// An input is negative or not a number
let intervals = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] > 1 && !isNaN(args[i])) intervals.push(args[i]);
} 

intervals.sort()

