
const Submit=document.querySelector("button");


var Dob=`00-00-0000 `;
Submit.addEventListener("click",function(event){

event.preventDefault();
const dd=document.getElementById("Date").value;

const mm=document.querySelector(".Month").value;
const yyyy=document.querySelector(".Year").value;

Dob=`${dd}-${mm}-${yyyy} `;

console.log(Dob);
}
);




/*Define the EPOCH date
const EPOCH = new Date(0);
const EPOCH_YEAR = EPOCH.getUTCFullYear(); // EPOCH_YEAR = 1970
const EPOCH_MONTH = EPOCH.getUTCMonth();    // EPOCH_MONTH = 0 (January)
const EPOCH_DAY = EPOCH.getUTCDate();      // EPOCH_DAY = 1


 * @param {Date} birthDate
 
const calculateAge = birthDate => {
    // Calculate the difference between the current date and the birth date
    const diff = new Date(Date.now() - birthDate.getTime());

    // Calculate the age in years, months, and days
    const years = Math.abs(diff.getUTCFullYear() - EPOCH_YEAR);   // years = 2024 - 2000 = 24
    const months = Math.abs(diff.getUTCMonth() - EPOCH_MONTH);    // months = 1 - 6 = 5
    const days = Math.abs(diff.getUTCDate() - EPOCH_DAY);         // days = 14 - 25 = 11

    // Return the age as an object
    return {
        years,
        months,
        days
    };
};

// Birth date: July 25, 2000
const birthDate = new Date(2000, 6, 25); // Note: Months are zero-based, so 6 represents July

// Calculate the age
const age = calculateAge(birthDate);

console.log(age);*/
