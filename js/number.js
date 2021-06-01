 $("#tel").intlTelInput({// whether or not to allow the dropdown
  allowDropdown: true,
  
  // if there is just a dial code in the input: remove it on blur, and re-add it on focus
  autoHideDialCode: true,
  
  // add a placeholder in the input with an example number for the selected country
  autoPlaceholder: "polite",
  
  // modify the auto placeholder
  customPlaceholder: null,
  
  // append menu to specified element
  dropdownContainer: null,
  
  // don't display these countries
  excludeCountries: [],
  
  // format the input value during initialisation and on setNumber
  formatOnDisplay: true,
  
  // geoIp lookup function
  geoIpLookup: null,
  
  // inject a hidden input with this name, and on submit, populate it with the result of getNumber
  hiddenInput: "",
  
  // initial country
  initialCountry: "",
  
  // localized country names e.g. { 'de': 'Deutschland' }
  localizedCountries: null,
  
  // don't insert international dial codes
  nationalMode: true,
  
  // display only these countries
  onlyCountries: [],
  
  // number type to use for placeholders
  placeholderNumberType: "MOBILE",
  
  // the countries at the top of the list. defaults to united states and united kingdom
  preferredCountries: [ "us", "gb" ],
  
  // display the country dial code next to the selected flag so it's not part of the typed number
  separateDialCode: false,
  
  // specify the path to the libphonenumber script to enable validation/formatting
  utilsScript: ""
  });
  