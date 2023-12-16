export const STEPS_COUNT = 3;

const isRequired = (boolean: boolean) => {
    return {
        value: boolean,
        message: "Обязательное поле"
    }
}

export const formDataConstants = {
    tel: {
        name: "tel",
        register: {
            required: isRequired(true),
            pattern: {
                value: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
                message: "Номер не соотвествует формату"
            }
        }
    },
    email: {
        name: "email",
        register: {
            required: isRequired(true),
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email не соотвествует формату электронной почты"
            }
        }
    },
    nickName: {
        name: "nickName",
        register: {
            required: isRequired(true),
            maxLength: {
                value: 30,
                message: "Максимальная длина 30 символов"
            },
            pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z0-9]{1,30}$/,
                message: "Ник должен состоять из букв и цифр"
            }
        }
    },
    firstName: {
        name: "firstName",
        register: {
            required: isRequired(true),
            maxLength: {
                value: 50,
                message: "Максимальная длина 50 символов"
            },
            pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]{1,50}$/,
                message: "Имя должно состоять из букв без пробелов"
            }
        }
    },
    lastName: {
        name: "lastName",
        register: {
            required: isRequired(true),
            maxLength: {
                value: 50,
                message: "Максимальная длина 50 символов"
            },
            pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]{1,50}$/,
                message: "Фамилия должна состоять из букв без пробелов"
            }
        }
    },
    sex: {
        name: "sex",
        register: {
            required: isRequired(true),
        },
        options: [
            {value: "", label: "Не выбрано"},
            {value: "male", label: "Мужской"},
            {value: "female", label: "Женский"},
        ]
    },
    advantages: {
        name: "advantages",
        register: {
            required: isRequired(true),
            pattern: {
                value: /^[а-яА-ЯёЁa-zA-Z]{1,50}$/,
                message: "Поле должно состоять из букв без пробелов до 50 символов"
            }
        }
    },
    about: {
        name: "about",
        register: {
            required: isRequired(true),
            maxLength: {
                value: 200,
                message: "Максимальная длина 200 символов"
            },
        }
    },
    checkbox: {
        name: "checkbox",
        register: {
            required: isRequired(true),
        }
    },
    radio: {
        name: "radio",
        register: {
            required: isRequired(true),
        }
    },
}

export const checkboxRadioGroupData = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
]