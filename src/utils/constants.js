
const STRINGS = {
  NAV_TITLE:"CasaOne",
  NAV_HOME:"Add Rules",
  NAV_PROFILE:"View Rules",
  RENTAL_TENURE:"Rental Tenure (in Months.)",
  PRODUCT_NAME:"Product Name",
  ZIPCODE:"Zipcode",
  CUSTOMER_AGE:"Customer Age (in Years.)",
  MONTHLY_RENTAL_AMOUNT:"Monthly Rental Amount (in Dollars $)",
};

const COLORS={
  TRANSPARENT:"transparent",
  OVERLAY:"rgba(0, 0, 0, 0.8)"
}

const MONTHLY_RENTAL_AMOUNT_OPTIONS = [
  { value: [0,1000], label: '0 - $1000' },
  { value: [3001,2000], label: '$1001 - $2000' },
  { value: [2001,3000], label: '$2001 - $3000' },
  { value: [3001,4000], label: '$3001 - $4000' },
  { value: [4001,5000], label: '$4001 - $5000' },
  { value: [5001,-1], label: 'more than 5001$' },
];

const ZIPCODE_OPTIONS = [
  { value: '35801', label: 'Alabama 35801' },
  { value: '99501', label: 'Alaska 99501' },
  { value: '85001', label: 'Arizona 85001' },
  { value: '94203', label: 'Arkansas 94203' },
  { value: '90001', label: 'California 90001' },

];

const CUSTOMER_AGE_OPTIONS = [
  { value: [0,20], label: 'less than 21' },
  { value: [21,-1], label: 'greater than 21' },
];
const PRODUCT_NAME_OPTIONS = [
  { value: 'TV', label: 'TV' },
  { value: 'Washing Machine', label: 'Washing Machine' },
  { value: 'Air Conditioner', label: 'Air Conditioner' },
];
const RENTAL_TENURE_OPTIONS = [
  { value: [0,2], label: 'less than 3 months' },
  { value: [3,5], label: '3 - 5' },
  { value: [6,-1], label: 'more than 6 months' },

];




export {COLORS,STRINGS,MONTHLY_RENTAL_AMOUNT_OPTIONS,ZIPCODE_OPTIONS,CUSTOMER_AGE_OPTIONS,PRODUCT_NAME_OPTIONS,RENTAL_TENURE_OPTIONS};
