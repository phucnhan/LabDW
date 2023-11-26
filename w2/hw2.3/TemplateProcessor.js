// template-processor.js

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        // Regular expression to match property placeholders in the template
        const regex = /{{\s*([^{}\s]+)\s*}}/g;

        // Replace each property placeholder with the corresponding value from the dictionary
        const result = this.template.replace(regex, (match, p1) => {
            // If the property exists in the dictionary, replace with its value, otherwise replace with an empty string
            return dictionary[p1] !== undefined ? dictionary[p1] : '';
        });

        return result;
    }
}

// Example usage
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);
console.log(str); // Output: 'My favorite month is July but not the day 1 or the year 2016'

// Case: property doesn't exist in dictionary
var dictionary2 = { day: '1', year: '2016' };
var str2 = dateTemplate.fillIn(dictionary2);
console.log(str2); // Output: 'My favorite month is but not the day 1 or the year 2016'
