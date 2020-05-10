
const STRINGS = {
  NAV_TITLE: "CasaOne",
  NAV_HOME: "Add Rules",
  NAV_PROFILE: "View Rules",
  RENTAL_TENURE: "Rental Tenure",
  PRODUCT_NAME: "Product Name",
  ZIPCODE: "Zipcode",
  CUSTOMER_AGE: "Customer Age",
  MONTHLY_RENTAL_AMOUNT: "Monthly Rental Amount",
  SUBMIT:"Submit",
  UPDATE:"Update",
  DELETE_RULE:"Click to Delete this rule",
  EDIT_RULE:"Click to Edit this rule",
  DELETE:"delete",
  EDIT:"edit",
  DELETE_RULE_MESSAGE:"Rule Deleted Sucessfully",
  DENSE:"dense",
  RULE:"Rules",
};

const FIELD_TYPE={
  ARRAY:0,
  NUMBER:1
}

const COLORS = {
  TRANSPARENT: "transparent",
  OVERLAY: "rgba(0, 0, 0, 0.8)",
  lIME:"#bdd9b6"
}

const MONTHLY_RENTAL_AMOUNT_OPTIONS = [
  { value: [0, 1000], label: '0 - $1000' },
  { value: [1001, 2000], label: '$1001 - $2000' },
  { value: [2001, 3000], label: '$2001 - $3000' },
  { value: [3001, 4000], label: '$3001 - $4000' },
  { value: [4001, 5000], label: '$4001 - $5000' },
  { value: [5001, -1], label: 'more than 5001$' },
];

const ZIPCODE_OPTIONS = [
  { value: '35801', label: 'Alabama 35801' },
  { value: '99501', label: 'Alaska 99501' },
  { value: '85001', label: 'Arizona 85001' },
  { value: '94203', label: 'Arkansas 94203' },
  { value: '90001', label: 'California 90001' },

];

const CUSTOMER_AGE_OPTIONS = [
  { value: [0, 20], label: 'less than 21' },
  { value: [21, -1], label: 'greater than 21' },
];
const PRODUCT_NAME_OPTIONS = [
  { value: 'TV', label: 'TV' },
  { value: 'Washing Machine', label: 'Washing Machine' },
  { value: 'Air Conditioner', label: 'Air Conditioner' },
];
const RENTAL_TENURE_OPTIONS = [
  { value: [0, 2], label: 'less than 3 months' },
  { value: [3, 5], label: '3 - 5' },
  { value: [6, -1], label: 'more than 6 months' },
];

const DATA_TABLE =
  [
    { title: "Monthly Rental Low", field: "monthly_rent_low" },
    { title: "Monthly Rental Upper", field: "monthly_rent_upr" },
    { title: "Customer Age Rental Low", field: "age_low" },
    { title: "Customer Age Rental Upper", field: "age_upr" },
    { title: "ZipCode", field: "zip" },
    { title: "Product Name", field: "product" },
    { title: "Rental Tenure Low", field: "rental_low" },
    { title: "Rental Tenure Upper", field: "rental_upr" }
  ]

const DATA_TABLE_VALUE = [
  { monthly_rent_low: '1001', monthly_rent_upr: "2000", age_low: "0", age_upr: "20", zip: "35801", product: "TV", rental_low: "3", rental_upr: "5" },
  { monthly_rent_low: null, monthly_rent_upr: null, age_low: "21", age_upr: "-1", zip: null, product: null, rental_low: null, rental_upr: null },
  { monthly_rent_low: '3001', monthly_rent_upr: "4000", age_low: "21", age_upr: "-1", zip: "94203", product: "Fridge", rental_low: "0", rental_upr: "3" },
  { monthly_rent_low: '1001', monthly_rent_upr: "2000", age_low: "21", age_upr: "-1", zip: "35801", product: "TV", rental_low: "3", rental_upr: "5" },
  
  { monthly_rent_low: '0', monthly_rent_upr: "1000", age_low: null, age_upr: null, zip: null, product: "TV", rental_low: null, rental_upr: null },
  
  { monthly_rent_low: '5001', monthly_rent_upr: "-1", age_low: "0", age_upr: "20", zip: "94203", product: "Fridge", rental_low: "6", rental_upr: "-1" },
  { monthly_rent_low: '5001', monthly_rent_upr: "-1", age_low: "0", age_upr: "20", zip: "90001", product: "TV", rental_low: "0", rental_upr: "2" },
  { monthly_rent_low: '1001', monthly_rent_upr: "2000", age_low: "21", age_upr: "-1", zip: "99501", product: "TV", rental_low: "6", rental_upr: "-1" },
  { monthly_rent_low: '0', monthly_rent_upr: "1000", age_low: "0", age_upr: "20", zip: "85001", product: "Fridge", rental_low: "3", rental_upr: "5" },
  { monthly_rent_low: null, monthly_rent_upr: null, age_low: null, age_upr: null, zip: null, product: null, rental_low: "3", rental_upr: "5" },
]




export { FIELD_TYPE,DATA_TABLE_VALUE, DATA_TABLE, COLORS, STRINGS, MONTHLY_RENTAL_AMOUNT_OPTIONS, ZIPCODE_OPTIONS, CUSTOMER_AGE_OPTIONS, PRODUCT_NAME_OPTIONS, RENTAL_TENURE_OPTIONS };
