const assert = require('assert');
const deepTrim = require('./deepTrim'); // Replace 'yourFileName' with the actual name of your file

// Test Case 1
const input1 = {
    name: '  John  ',
    age: 25,
    address: {
        city: '  New York  ',
        country: ' USA ',
    },
    dob: new Date("01-01-2022"),
    hrYears: [
        {
			quarters: [
				{
					leaveCount: 11,
                    isFullTime : false,
					remark: " good ",
				},
				
				{
					leaveCount: 22,
                    isFullTime : true,
					remark: " better ",
				},
				
			],
        },
        {
			quarters: [
				{
					leaveCount: 11,
                    isFullTime : false,
					remark: " good ",
				},
				
				{
					leaveCount: 22,
                    isFullTime : true,
					remark: " better ",
				},
				
			],
        },

    ]
};

const expected = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA',
    },
    dob: new Date("01-01-2022"),
    hrYears: [
        {
			quarters: [
				{
					leaveCount: 11,
                    isFullTime : false,
					remark: "good",
				},
				
				{
					leaveCount: 22,
                    isFullTime : true,
					remark: "better",
				},
				
			],
        },
        {
			quarters: [
				{
					leaveCount: 11,
                    isFullTime : false,
					remark: "good",
				},
				
				{
					leaveCount: 22,
                    isFullTime : true,
					remark: "better",
				},
				
			],
        },

    ]
};
const output1 = deepTrim(input1);
 assert.deepStrictEqual(output1, expected);

// Test Case 2
const input2 = [
    {
        title: '  JavaScript Basics  ',
        duration: 60,
    },
    {
        title: '  Advanced React  ',
        duration: 120,
    },
];
const output2 = deepTrim(input2);
assert.deepStrictEqual(output2, [
    {
        title: 'JavaScript Basics',
        duration: 60,
    },
    {
        title: 'Advanced React',
        duration: 120,
    },
]);

// Test Case 3
const input3 = {
    name: '  John  ',
    age: 25,
    isStudent: true,
    grades: [90, 85, 95],
};
const output3 = deepTrim(input3);
 assert.deepStrictEqual(output3, {
    name: 'John',
    age: 25,
    isStudent: true,
    grades: [90, 85, 95],
});

console.log("ALL test cases have passed");
