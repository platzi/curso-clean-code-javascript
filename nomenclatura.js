//> Nombres pronunciables y expresivos
// No recomendado
const yyyymmdstr = moment().format("YYYY/MM/DD");

// Recomendado
const currentDate = moment().format("YYYY/MM/DD");

//> Ausencia de información técnica en los nombres
// No recomendado
class AbstractUser {}

// Recomendado
class User {}

//> Establecer un lenguaje ubicuo
// No recomendado
getUserInfo();
getClientData();
getCustomerRecord();

// Recomendado
getUser();
