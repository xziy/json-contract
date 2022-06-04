var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("core/Reason", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает ошибку валидации
     */
    var Reason = /** @class */ (function () {
        function Reason(code, label, anyData) {
            this.code = code;
            this.label = label;
            this._rejectOption = anyData;
        }
        Object.defineProperty(Reason.prototype, "rejectOption", {
            get: function () {
                return this._rejectOption;
            },
            set: function (value) {
                this._rejectOption = value;
            },
            enumerable: false,
            configurable: true
        });
        return Reason;
    }());
    exports.default = Reason;
});
define("core/OptionString", ["require", "exports", "core/Option", "core/Reason"], function (require, exports, Option_1, Reason_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Класс, описывающий строковое значение для ввода.
     */
    var OptionString = /** @class */ (function (_super) {
        __extends(OptionString, _super);
        /**
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param minLength - минимальная длина
         * @param maxLength - максимальная длина
         * @param regex - RegExp для проверки
         * @param handler - внешний обработчик
         */
        function OptionString(id, type, label, isRequired, isHidden, description, anyData, minLength, maxLength, regex, handler) {
            var _this = _super.call(this, id, type, label, isRequired, isHidden, description, anyData, handler) || this;
            _this.minLength = minLength || 0;
            _this.maxLength = maxLength || 100000;
            _this.regex = regex;
            _this.anyData = anyData;
            _this.handler = handler;
            return _this;
        }
        /**
         * Создаёт экземпляр OptionString из JSON. Если передать объект, то будет создана его копия.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param minLength - минимальная длина
         * @param maxLength - максимальная длина
         * @param regex - RegExp для проверки
         * @param handler - внешний обработчик
         */
        OptionString.buildOption = function (_a) {
            var anyData = _a.anyData, description = _a.description, id = _a.id, isRequired = _a.isRequired, isHidden = _a.isHidden, label = _a.label, maxLength = _a.maxLength, minLength = _a.minLength, regex = _a.regex, type = _a.type, handler = _a.handler;
            return new OptionString(id, type, label, isRequired, isHidden, description, anyData, minLength, maxLength, regex, handler);
        };
        /**
         * Проверяет валидность переданного значения. А именно, переменная должна быть строкой, не меньше минимальной длины,
         * не больше максимальной и соответствовать regex. Так же производится проверка, поставляемая родительским классом.
         * @param value - значение для проверки
         */
        OptionString.prototype.validate = function (value) {
            if (value) {
                if (typeof value !== 'string')
                    return false;
                var len = value.length;
                if (this.minLength)
                    if (len < this.minLength)
                        return false;
                if (this.maxLength)
                    if (len > this.maxLength)
                        return false;
                if (this.regex)
                    if (!value.match(this.regex))
                        return false;
            }
            return _super.prototype.validate.call(this, value);
        };
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение
         * @return Возможные значения
         * - [[Reason]] {
         *   code: 'IT',
         *   label: 'incorrect type'
         * }
         * - [[Reason]] {
         *   code: 'STML',
         *   label: 'smaller than min length'
         * }
         * - [[Reason]] {
         *   code: 'LTML',
         *   label: 'larger than max length'
         * }
         * - [[Reason]] {
         *   code: 'RME',
         *   label: 'regex matching error'
         * }
         * - причины отказа родительского класса
         */
        OptionString.prototype.getRejectReason = function (value) {
            if (value) {
                if (typeof value !== 'string')
                    return new Reason_1.default('IT', 'incorrect type');
                var len = value.length;
                if (this.minLength)
                    if (len < this.minLength)
                        return new Reason_1.default('STML', 'smaller than min length');
                if (this.maxLength)
                    if (len > this.maxLength)
                        return new Reason_1.default('LTML', 'larger than max length');
                if (this.regex)
                    if (!value.match(this.regex))
                        return new Reason_1.default('RME', 'regex matching error');
            }
            return _super.prototype.getRejectReason.call(this, value);
        };
        return OptionString;
    }(Option_1.default));
    exports.default = OptionString;
});
define("core/OptionNumber", ["require", "exports", "core/Option", "core/Reason"], function (require, exports, Option_2, Reason_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Класс, описывающий численное значение для ввода.
     */
    var OptionNumber = /** @class */ (function (_super) {
        __extends(OptionNumber, _super);
        /**
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param min - минимальное значение
         * @param max - максимальное значение
         * @param regex - RegExp для проверки
         * @param handler - Внешний обработчик
         */
        function OptionNumber(id, type, label, isRequired, isHidden, description, anyData, min, max, regex, handler) {
            var _this = _super.call(this, id, type, label, isRequired, isHidden, description, anyData, handler) || this;
            _this.min = min;
            _this.max = max;
            _this.regex = regex;
            _this.anyData = anyData;
            _this.handler = handler;
            return _this;
        }
        /**
         * Создаёт экземпляр OptionNumber из JSON. Если передать объект, то будет создана его копия.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param min - минимальное значение
         * @param max - максимальное значение
         * @param regex - RegExp для проверки
         * @param handler - внешний обработчик
         */
        OptionNumber.buildOption = function (_a) {
            var anyData = _a.anyData, description = _a.description, id = _a.id, isRequired = _a.isRequired, isHidden = _a.isHidden, label = _a.label, max = _a.max, min = _a.min, regex = _a.regex, type = _a.type, handler = _a.handler;
            return new OptionNumber(id, type, label, isRequired, isHidden, description, anyData, min, max, regex, handler);
        };
        /**
         * Проверяет валидность переданного значения. А именно, переменная должна быть числом, не меньше минимального значения,
         * не больше максимального и соответствовать regex. Так же производится проверка, поставляемая родительским классом.
         * @param value - значение для проверки
         */
        OptionNumber.prototype.validate = function (value) {
            if (value) {
                if (typeof value !== 'number')
                    return false;
                if (this.min)
                    if (value < this.min)
                        return false;
                if (this.max)
                    if (value > this.max)
                        return false;
                if (this.regex)
                    if (!value.toString().match(this.regex))
                        return false;
            }
            return _super.prototype.validate.call(this, value);
        };
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение
         * @return Возможные значения
         * - [[Reason]] {
         *   code: 'IT',
         *   label: 'incorrect type'
         * }
         * - [[Reason]] {
         *   code: 'STM',
         *   label: 'smaller than min'
         * }
         * - [[Reason]] {
         *   code: 'LTM',
         *   label: 'larger than max'
         * }
         * - [[Reason]] {
         *   code: 'RME',
         *   label: 'regex matching error'
         * }
         * - причины отказа родительского класса
         */
        OptionNumber.prototype.getRejectReason = function (value) {
            if (value) {
                if (typeof value !== 'number')
                    return new Reason_2.default('IT', 'incorrect type');
                if (this.min)
                    if (value < this.min)
                        return new Reason_2.default('STM', 'smaller than min');
                if (this.max)
                    if (value > this.max)
                        return new Reason_2.default('LTM', 'larger than max');
                if (this.regex)
                    if (!value.toString().match(this.regex))
                        return new Reason_2.default('RME', 'regex matching error');
            }
            return _super.prototype.getRejectReason.call(this, value);
        };
        return OptionNumber;
    }(Option_2.default));
    exports.default = OptionNumber;
});
define("core/Form", ["require", "exports", "core/Option", "core/OptionSelect"], function (require, exports, Option_3, OptionSelect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Содержит в [[Option]][] и методы для обработки [[Option]] в зависимости от значения, что для него записано
     */
    var Form = /** @class */ (function () {
        function Form(options) {
            this.options = options || [];
        }
        /**
         * Создаёт документ из JSON. Используется только при клонировании. Как и другие методы build делает глубокое создание моделей
         * @param options
         */
        Form.build = function (_a) {
            var options = _a.options;
            options = options.map(function (opt) { return Option_3.default.getOption(opt); });
            return new Form(options);
        };
        /**
         * Проверяет, что переданный документ содержит валиданые значения для options этого экземпляра
         * @param document - Документ, подлежащий проверке
         */
        Form.prototype.validate = function (document) {
            var _loop_1 = function (option) {
                var value = document.values.filter(function (v) { return v.id === option.id; })[0] || {};
                if (option.type === Option_3.OptionTypes.SELECT) {
                    if (!option.validate(value.value, document)) {
                        return { value: false };
                    }
                }
                else if (!option.validate(value.value)) {
                    return { value: false };
                }
            };
            for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                var option = _a[_i];
                var state_1 = _loop_1(option);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return true;
        };
        /**
         * Возвращает причину не валидности документа или undefined если документ валидный.
         * @param document
         */
        Form.prototype.getRejectReason = function (document) {
            var _loop_2 = function (option) {
                var value = document.values.filter(function (v) { return v.id === option.id; })[0] || {};
                if (option.type === Option_3.OptionTypes.SELECT) {
                    var reason = option.getRejectReason(value.value, document);
                    if (reason) {
                        reason.rejectOption = "" + option.id + (reason.rejectOption ? ':' + reason.rejectOption : '');
                        return { value: reason };
                    }
                }
                else {
                    var reason = option.getRejectReason(value.value);
                    if (reason) {
                        reason.rejectOption = option.id;
                        return { value: reason };
                    }
                }
            };
            for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                var option = _a[_i];
                var state_2 = _loop_2(option);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
            return undefined;
        };
        /**
         * Рассчитывает цену, время поставки (ETA), а так же редактирует productContractModified переданного [[Document]] в соответствии
         * с выбранными [[OptionsSelect]]. Иными словами, этот метод активирует все [[Action]] для выбранных [[SelectItem]].
         * @param document - документ, который нужно обработать
         * @param contract - [[ProductContract]] который использовать для сброса. Если не передан, то используется productContract
         * переданного документа
         */
        Form.prototype.processing = function (document, contract) {
            document.productContractModified = (contract || document.productContract).clone();
            var modifiers = this.getModifiers(document);
            modifiers.forEach(function (modifier) { return modifier.action.activate(document.productContractModified); });
        };
        /**
         * Создаёт глубокую копию текущего экземпляра.
         */
        Form.prototype.clone = function () {
            return Form.build(this.getJSON());
        };
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        Form.prototype.getJSON = function () {
            var clone = Object.assign({}, this);
            clone.options = this.options.map(function (opt) { return opt.getJSON(); });
            return clone;
        };
        /**
         * Возвращает все [[SelectItem]], которые в данный момент выбраны для текущих options в переданном документе.
         * @param document - документ
         */
        Form.prototype.getModifiers = function (document) {
            var optionsSelect = this.options.filter(function (opt) { return opt instanceof OptionSelect_1.default; });
            var selectedOptions = optionsSelect.map(function (m) { return m.getSelected(document.getValue(m.id)); });
            selectedOptions = selectedOptions.filter(function (sm) { return !!sm; });
            return selectedOptions;
        };
        return Form;
    }());
    exports.default = Form;
});
define("core/Changeable", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает действие изменения количественной переменной
     */
    var Changeable = /** @class */ (function () {
        /**
         * @param increase - увеличить
         * @param decrease - уменьшить
         * @param set - установить
         */
        function Changeable(increase, decrease, set) {
            this.increase = increase;
            this.decrease = decrease;
            this.set = set;
        }
        /**
         * Если передан JSON, создаёт новый экземпляр класса, если передан другой экземпляр класса, клонирует его
         * @param increase - увеличить
         * @param decrease - уменьшить
         * @param set - установить
         */
        Changeable.build = function (_a) {
            var increase = _a.increase, decrease = _a.decrease, set = _a.set;
            return new Changeable(increase, decrease, set);
        };
        /**
         * Увеличивает, потом уменьшает и  потом устанавливает переданное значение на указанные в экземпляре значения
         * @param value - значение для изменения
         */
        Changeable.prototype.modify = function (value) {
            if (this.increase)
                value += this.increase;
            if (this.decrease)
                value -= this.decrease;
            if (this.set)
                value = this.set;
            return value;
        };
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        Changeable.prototype.getJSON = function () {
            return JSON.parse(JSON.stringify(this));
        };
        return Changeable;
    }());
    exports.default = Changeable;
});
define("core/Property", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/Action", ["require", "exports", "core/Changeable"], function (require, exports, Changeable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает действия. Может менять поля ProductContract, стоимость, время поставки (ETA) и свойство видимости Option
     */
    var Action = /** @class */ (function () {
        /**
         * @param setDiscountInPercentage - значение скидки
         * @param modifyPrice - изменение цены
         * @param modifyDeliveryTime - изменение времени доставки
         * @param hideOptionById - массив строк, которые не будут больше показываться
         * @param showOptionsById - массив строк, которые следует показать
         * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
         * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
         */
        function Action(setDiscountInPercentage, modifyPrice, modifyDeliveryTime, hideOptionById, showOptionsById, changeProperties, setCustomProperties) {
            this._setDiscountInPercentage = setDiscountInPercentage ?
                setDiscountInPercentage > 0 && setDiscountInPercentage < 100 ?
                    setDiscountInPercentage : undefined : setDiscountInPercentage;
            this.modifyPrice = modifyPrice;
            this.modifyDeliveryTime = modifyDeliveryTime;
            this.hideOptionsById = hideOptionById;
            this.showOptionsById = showOptionsById;
            this.changeProperties = changeProperties;
            this.setCustomProperties = setCustomProperties;
        }
        Object.defineProperty(Action.prototype, "setDiscountInPercentage", {
            get: function () {
                return this._setDiscountInPercentage;
            },
            /**
             * Проверяет, что новое значение больше 0 и меньше 100
             * @param value - новое значение
             */
            set: function (value) {
                if (value) {
                    if (value > 0 && value < 100) {
                        this._setDiscountInPercentage = value;
                    }
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @param setDiscountInPercentage - значение скидки
         * @param modifyPrice - изменение цены
         * @param modifyDeliveryTime - изменение времени доставки
         * @param hideOptionById - массив строк, которые не будут больше показываться
         * @param showOptionsById - массив строк, которые следует показать
         * @param changeProperties - массив пар ключ-значение, которые будут заменены в [[ProductContract]]
         * @param setCustomProperties - массив пар ключ-значение, которые будут добавлены в [[ProductContract]]
         */
        Action.build = function (_a) {
            var setDiscountInPercentage = _a.setDiscountInPercentage, hideOptionsById = _a.hideOptionsById, modifyDeliveryTime = _a.modifyDeliveryTime, modifyPrice = _a.modifyPrice, showOptionsById = _a.showOptionsById, changeProperties = _a.changeProperties, setCustomProperties = _a.setCustomProperties;
            var changePropertiesObj, setCustomPropertiesObj;
            if (modifyPrice)
                modifyPrice = Changeable_1.default.build(modifyPrice);
            if (modifyDeliveryTime)
                modifyDeliveryTime = Changeable_1.default.build(modifyDeliveryTime);
            if (changeProperties)
                changePropertiesObj = Object.keys(changeProperties).map(function (key) { return ({
                    property: key,
                    value: changeProperties[key]
                }); });
            if (setCustomProperties)
                setCustomPropertiesObj = Object.keys(setCustomProperties).map(function (key) { return ({
                    property: key,
                    value: setCustomProperties[key]
                }); });
            return new Action(setDiscountInPercentage, modifyPrice, modifyDeliveryTime, hideOptionsById, showOptionsById, changePropertiesObj, setCustomPropertiesObj);
        };
        /**
         * Активация экземпляра. Если поле не undefined, то выполняет изменение, которое в нём указано.
         * - Если указан [[modifyPrice]], происходит изменение цены.
         * - Если указан [[modifyDeliveryTime]], происходит изменение времени доставки
         * - Если указан [[_setDiscountInPercentage]], цена, после возможного изменения выше, уменьшается на указанный процент
         * - Если указан [[showOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет false
         * - Если указан [[hideOptionsById]], поле isHidden всех [[Option]], id которых указан в массиве, станет true
         * - Если указан [[changeProperties]], будут изменены указанные в нём поля на новые значения
         * - Если указан [[setCustomProperties]], будут добавлены указанные в нём поля
         * @param contract - контракт для изменения
         */
        Action.prototype.activate = function (contract) {
            if (this.modifyPrice)
                contract.price = this.modifyPrice.modify(contract.price);
            if (this.modifyDeliveryTime)
                contract.deliveryTime = this.modifyDeliveryTime.modify(contract.deliveryTime);
            if (this._setDiscountInPercentage)
                contract.price = contract.price * (100 - this._setDiscountInPercentage) / 100;
            if (this.showOptionsById) {
                var _loop_3 = function (id) {
                    var option = contract.options.filter(function (opt) { return opt.id === id; })[0];
                    if (option)
                        option.isHidden = false;
                };
                for (var _i = 0, _a = this.showOptionsById; _i < _a.length; _i++) {
                    var id = _a[_i];
                    _loop_3(id);
                }
            }
            if (this.hideOptionsById) {
                var _loop_4 = function (id) {
                    var option = contract.options.filter(function (opt) { return opt.id === id; })[0];
                    if (option)
                        option.isHidden = true;
                };
                for (var _b = 0, _c = this.hideOptionsById; _b < _c.length; _b++) {
                    var id = _c[_b];
                    _loop_4(id);
                }
            }
            if (this.changeProperties) {
                for (var _d = 0, _e = this.changeProperties; _d < _e.length; _d++) {
                    var prop = _e[_d];
                    if (contract[prop.property]) {
                        contract[prop.property] = prop.value;
                    }
                }
            }
            if (this.setCustomProperties) {
                for (var _f = 0, _g = this.setCustomProperties; _f < _g.length; _f++) {
                    var prop = _g[_f];
                    contract[prop.property] = prop.value;
                }
            }
        };
        return Action;
    }());
    exports.default = Action;
});
define("core/SelectItem", ["require", "exports", "core/Option", "core/Form", "core/Action"], function (require, exports, Option_4, Form_1, Action_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает строку выбора в [[OptionSelect]]. Этот класс может иметь дочерние [[Option]][] и выполнять действия [[Action]] над
     * документом, с которым в данный момент происходит работа.
     */
    var SelectItem = /** @class */ (function () {
        /**
         * @param id - id
         * @param label - подпись
         * @param form - [[Form]], хранящий необходимые [[Option]][]
         * @param action - [[Action]], который будет выполнен при выборе этого экземпляра
         * @param description - описание
         * @param anyData - другие данные
         * @param handler - внейшний обработчик
         */
        function SelectItem(id, label, form, action, description, anyData, handler) {
            this.id = id;
            this.label = label;
            this.description = description;
            this.form = form;
            this.action = action;
            this.anyData = anyData;
            this.handler = handler;
        }
        /**
         * Создаёт SelectItem и вложенные в него [[Form]] и [[Action]].
         * @param id - id
         * @param label - метка
         * @param description - описание
         * @param options - опции для отображения (см. [[Form]])
         * @param changeProperties - изменение свойств (см. [[Action]])
         * @param hideOptionsById - массив id опций, которые нужно скрыть (см. [[Action]])
         * @param modifyDeliveryTime - изменение времени доставки (см. [[Action]])
         * @param modifyPrice - изменение цены (см. [[Action]])
         * @param setDiscountInPercentage - установка скидки (см. [[Action]])
         * @param showOptionsById - массив id опций, которые нужно показать (см. [[Action]])
         * @param setCustomProperties - изменение свойств (см. [[Action]])
         * @param anyData - другие данные
         * @param handler - внейшний обработчик
         */
        SelectItem.buildItem = function (_a) {
            var id = _a.id, label = _a.label, description = _a.description, options = _a.options, changeProperties = _a.changeProperties, hideOptionsById = _a.hideOptionsById, modifyDeliveryTime = _a.modifyDeliveryTime, modifyPrice = _a.modifyPrice, setDiscountInPercentage = _a.setDiscountInPercentage, showOptionsById = _a.showOptionsById, setCustomProperties = _a.setCustomProperties, anyData = _a.anyData, handler = _a.handler;
            if (options)
                options = options.map(function (opt) { return Option_4.default.getOption(opt); });
            var formObj = new Form_1.default(options);
            var actionObj = Action_1.default.build({
                setDiscountInPercentage: setDiscountInPercentage,
                showOptionsById: showOptionsById,
                modifyPrice: modifyPrice,
                modifyDeliveryTime: modifyDeliveryTime,
                hideOptionsById: hideOptionsById,
                changeProperties: changeProperties,
                setCustomProperties: setCustomProperties
            });
            return new SelectItem(id, label, formObj, actionObj, description, anyData, handler);
        };
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        SelectItem.prototype.getJSON = function () {
            var res = {
                id: this.id,
                label: this.label,
                description: this.description,
                anyData: this.anyData,
                handler: this.handler
            };
            res.options = this.form.options.map(function (opt) { return opt.getJSON(); });
            res.modifyPrice = this.action.modifyPrice ? this.action.modifyPrice.getJSON() : undefined;
            res.modifyDeliveryTime = this.action.modifyDeliveryTime ? this.action.modifyDeliveryTime.getJSON() : undefined;
            res.setDiscountInPercentage = this.action.setDiscountInPercentage;
            res.hideOptionsById = this.action.hideOptionsById;
            res.showOptionsById = this.action.showOptionsById;
            res.changeProperties = this.action.changeProperties;
            res.setCustomProperties = this.action.setCustomProperties;
            return res;
        };
        return SelectItem;
    }());
    exports.default = SelectItem;
});
define("core/OptionSelect", ["require", "exports", "core/Option", "core/SelectItem", "core/Reason"], function (require, exports, Option_5, SelectItem_1, Reason_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Класс, описывающий поле выбора из нескольких вариантов
     */
    var OptionSelect = /** @class */ (function (_super) {
        __extends(OptionSelect, _super);
        /**
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param options - массив [[SelectItem]] которые содержат варианты выбора.
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param handler - внешний обработчик
         */
        function OptionSelect(id, type, label, options, isRequired, isHidden, description, anyData, handler) {
            var _this = _super.call(this, id, type, label, isRequired, isHidden, description, anyData, handler) || this;
            _this.options = options;
            _this.anyData = anyData;
            _this.handler = handler;
            return _this;
        }
        /**
         * Создаёт экземпляр OptionSelect из JSON. Если передать объект, то будет произведена попытка создать копию.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param options - массив SelectItem которые содержат варианты выбора.
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         * @param handler - внешний обработчик
         */
        OptionSelect.buildOption = function (_a) {
            var anyData = _a.anyData, description = _a.description, id = _a.id, isRequired = _a.isRequired, isHidden = _a.isHidden, label = _a.label, options = _a.options, type = _a.type, handler = _a.handler;
            var optionsObj = options.map(function (opt) { return SelectItem_1.default.buildItem(opt); });
            return new OptionSelect(id, type, label, optionsObj, isRequired, isHidden, description, anyData, handler);
        };
        /**
         * Проверка валидности значения. Проверяет, что выбранное значение есть в массиве допустимых значений, а так же
         * проверяет вложенные значения этого выбора, если был передан документ. У некоторых [[SelectItem]] могут быть вложены
         * свои [[Option]][], которые следует проверить. Тут происходит проверка того, что для опций выбранного значения документ
         * так же является валидным
         * @param value - значение для проверки
         * @param document - документ, в котором хранятся вложенные значения
         */
        OptionSelect.prototype.validate = function (value, document) {
            if (value) {
                var checked = this.options.filter(function (opt) { return opt.id === value; })[0];
                if (this.isRequired)
                    if (!checked)
                        return false;
                if (checked)
                    if (checked.form.options.length)
                        if (document)
                            if (!checked.form.validate(document))
                                return false;
            }
            return _super.prototype.validate.call(this, value);
        };
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение
         * @param document
         * @return Возможные значения
         * - [[Reason]] {
         *   code: 'NC',
         *   label: 'not checked'
         * }
         * - причины отказа дочерних Option
         * - причины отказа родительского класса
         */
        OptionSelect.prototype.getRejectReason = function (value, document) {
            if (value) {
                var checked = this.options.filter(function (opt) { return opt.id === value; })[0];
                if (this.isRequired)
                    if (!checked)
                        return new Reason_3.default('NC', 'not checked');
                if (checked.form.options.length) {
                    if (document) {
                        var reason = checked.form.getRejectReason(document);
                        if (reason)
                            return reason;
                    }
                }
            }
            return _super.prototype.getRejectReason.call(this, value);
        };
        /**
         * Возвращает [[SelectItem]] для заданного значения
         * @param value - значение
         */
        OptionSelect.prototype.getSelected = function (value) {
            return this.options.find(function (opt) { return opt.id === value; });
        };
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]].
         */
        OptionSelect.prototype.getJSON = function () {
            var clone = _super.prototype.getJSON.call(this);
            clone.options = this.options.map(function (opt) { return opt.getJSON(); });
            return clone;
        };
        return OptionSelect;
    }(Option_5.default));
    exports.default = OptionSelect;
});
define("core/Option", ["require", "exports", "core/Reason", "core/OptionString", "core/OptionNumber", "core/OptionSelect"], function (require, exports, Reason_4, OptionString_1, OptionNumber_1, OptionSelect_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptionTypes = void 0;
    /**
     * Класс, описывающий значение для ввода. По сути является описанием некоторого поля ввода и параметров его валидации.
     */
    var Option = /** @class */ (function () {
        /**
         * Если [[isRequired]] не передан, то он считается true.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         */
        function Option(id, type, label, isRequired, isHidden, description, anyData, handler) {
            this.id = id;
            this.type = type;
            this.label = label;
            this.description = description;
            this.anyData = anyData;
            this.handler = handler;
            this.isRequired = isRequired || true;
            this.isHidden = isHidden || false;
        }
        /**
         * Создаёт экземпляр [[Option]] из JSON. Если передать объект, то будет создана его копия.
         * @param id - id
         * @param type - тип
         * @param label - подпись
         * @param isRequired - обязательно ли
         * @param isHidden - скрывать ли опцию
         * @param description - описание
         * @param anyData - любые данные
         */
        Option.buildOption = function (_a) {
            var id = _a.id, type = _a.type, label = _a.label, isRequired = _a.isRequired, isHidden = _a.isHidden, description = _a.description, anyData = _a.anyData, handler = _a.handler;
            return new Option(id, type, label, isRequired, isHidden, description, anyData, handler);
        };
        /**
         * Создаёт экземпляр того класса, тип которого указан в type в параметре data.
         * Например, если data.type = 'number', то будет создан и отдан [[OptionNumber]].
         * @param data - JSON объект для создания нового [[Option]] или экземпляр [[Option]] для клонирования
         */
        Option.getOption = function (data) {
            switch (data.type) {
                case OptionTypes.STRING:
                    return OptionString_1.default.buildOption(data);
                case OptionTypes.NUMBER:
                    return OptionNumber_1.default.buildOption(data);
                case OptionTypes.SELECT:
                    return OptionSelect_2.default.buildOption(data);
            }
            return Option.buildOption(data);
        };
        /**
         * Базовая проверка значения. Если значение не спрятано ([[isHidden]]=false) и оно является обязательны([[isRequired]]=true)
         * и значение передано пустым, то валидация не будет пройдена. В ином случае валидация пройдена.
         * @param value - значение для проверки
         */
        Option.prototype.validate = function (value) {
            if (!this.isHidden) {
                if (this.isRequired) {
                    if (!value)
                        return false;
                }
            }
            return true;
        };
        /**
         * Возвращает причину не валидности значения или undefined если значение валидное
         * @param value - значение для проверки
         * @return Возможные значения
         * - Reason {
         *   code: 'IR',
         *   label: 'is required'
         * }
         */
        Option.prototype.getRejectReason = function (value) {
            if (!this.isHidden) {
                if (this.isRequired) {
                    if (!value)
                        return new Reason_4.default('IR', 'is required');
                }
            }
            return undefined;
        };
        /**
         * Возвращает текущий экземпляр как JSON. Метод противоположный [[build]].
         */
        Option.prototype.getJSON = function () {
            return Object.assign({}, this);
        };
        return Option;
    }());
    exports.default = Option;
    /**
     * Возможные типы [[Option]]. В данный момент доступны
     * - string
     * - number
     * - select
     */
    var OptionTypes;
    (function (OptionTypes) {
        OptionTypes["STRING"] = "string";
        OptionTypes["NUMBER"] = "number";
        OptionTypes["SELECT"] = "select";
    })(OptionTypes = exports.OptionTypes || (exports.OptionTypes = {}));
});
define("lib/util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToProperties = void 0;
    /**
     * Принимает объект, превращает его в Property[]. То есть каждый ключ записывает в [[Property.property]], а возле него
     * его пару в поле [[Property.value]]
     * @param args - объект для преобразования
     */
    function objectToProperties(args) {
        var newArgs = [];
        for (var i in args) {
            // noinspection JSUnfilteredForInLoop
            newArgs.push({
                property: i,
                value: args[i]
            });
        }
        return newArgs;
    }
    exports.objectToProperties = objectToProperties;
});
define("core/ProductContract", ["require", "exports", "core/Option", "core/Form", "lib/util", "uuid"], function (require, exports, Option_6, Form_2, util_1, uuid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Класс, являющийся шаблоном для заполнения. Хранит в себе общие данные для будущего документа. В документе хранится два
     * экземпляра ProductContract, один для хранения начальных настроек, второй для изменения с помощью [[Action]]
     */
    var ProductContract = /** @class */ (function (_super) {
        __extends(ProductContract, _super);
        /**
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param args - иные параметры
         */
        function ProductContract(options, name, locale, description, specificationMinVersion, prefix, badge, price, currency, start, finish, revision, deliveryTime, args) {
            var _this = _super.call(this, options) || this;
            _this.name = name;
            _this.locale = locale;
            _this.description = description;
            _this.contractId = uuid.v4();
            _this.specificationMinVersion = specificationMinVersion;
            _this.prefix = prefix;
            _this.badge = badge;
            _this.price = price;
            _this.currency = currency;
            _this.start = start;
            _this.finish = finish;
            _this.revision = revision;
            _this.deliveryTime = deliveryTime;
            _this.controlHash = '';
            if (args)
                for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
                    var i = args_1[_i];
                    _this[i.property] = i.value;
                }
            return _this;
        }
        /**
         * Создаёт новый ProductContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра экземпляра ProductContract будет осуществлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         *
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param documentsPrefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param args - иные параметры
         */
        ProductContract.build = function (_a) {
            var locale = _a.locale, name = _a.name, options = _a.options, badge = _a.badge, deliveryTime = _a.deliveryTime, currency = _a.currency, description = _a.description, prefix = _a.prefix, finish = _a.finish, price = _a.price, revision = _a.revision, specificationMinVersion = _a.specificationMinVersion, start = _a.start, args = __rest(_a, ["locale", "name", "options", "badge", "deliveryTime", "currency", "description", "prefix", "finish", "price", "revision", "specificationMinVersion", "start"]);
            options = options.map(function (opt) { return Option_6.default.getOption(opt); });
            return new ProductContract(options, name, locale, description, specificationMinVersion, prefix, badge, price, currency, start, finish, revision, deliveryTime, util_1.objectToProperties(args));
        };
        /**
         * Создаёт глубокую копию текущего экземпляра
         */
        ProductContract.prototype.clone = function () {
            return ProductContract.build(this.getJSON());
        };
        /**
         * Создаёт JSON из текущего экземпляра. Метод противоположный [[build]]
         */
        ProductContract.prototype.getJSON = function () {
            return Object.assign({}, this, _super.prototype.getJSON.call(this));
        };
        return ProductContract;
    }(Form_2.default));
    exports.default = ProductContract;
});
define("core/Document", ["require", "exports", "core/ProductContract", "core/OptionSelect", "lib/util", "uuid", "core/Option"], function (require, exports, ProductContract_1, OptionSelect_3, util_2, uuid, Option_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = void 0;
    /**
     * Основной класс. Документ хранит пары id-значение для некоторого [[ProductContract]], сам [[ProductContract]] и копию
     * [[ProductContract]], которая может меняться [[Action]]. Эти [[Action]] могут быть активированы [[OptionSelect]] посредством выбора юзера
     * которого из вариантов. Активация [[Action]] происходит в момент записи новой пары OptionSelectId-значение. Документ по
     * сути своей является наполнением для [[ProductContract]]
     */
    var Document = /** @class */ (function () {
        /**
         * При создании генерирует [[documentId]] и клонирует [[ProductContract]] в [[productContractModified]]
         *
         * @constructor
         * @param productContract - [[ProductContract]] для которого предназначен документ
         * @param values - Массив, если такие уже есть
         * @param args - Дополнительные поля (для внешних модулей)
         */
        function Document(productContract, values, args) {
            this.productContract = productContract;
            this.controlHash = '';
            this.values = values || [];
            this.documentId = uuid.v4();
            this.productContractModified = this.productContract.clone();
            if (args)
                for (var _i = 0, args_2 = args; _i < args_2.length; _i++) {
                    var i = args_2[_i];
                    this[i.property] = i.value;
                }
        }
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка происходит рекурсивно, то есть
         * создаются новые [[Value]] и [[ProductContract]]
         *
         * @param productContract - [[ProductContract]], может быть JSON или экземпляр класса. Если это JSON, то будет создан новый экземпляр [[ProductContract]] на его основе,
         * если это экземпляр, то он будет скопирован, опять же, рекурсивно
         * @param values - Массив пар id-значение. При создании не проверяется, для проверки используйте метод [[validate]]
         * @param args - Дополнительные поля (для внешних модулей)
         * @return new [[Document]]
         */
        Document.build = function (_a) {
            var productContract = _a.productContract, values = _a.values, args = __rest(_a, ["productContract", "values"]);
            values = values.map(function (v) { return new Value(v.id, v.value); });
            productContract = ProductContract_1.default.build(productContract);
            return new Document(productContract, values, util_2.objectToProperties(args));
        };
        /**
         * Проверяет, что все [[Value]] валидны для их [[Option]] (проверяет валидность каждой [[Option]])
         */
        Document.prototype.check = function () {
            return this.productContract.validate(this);
        };
        /**
         * Возвращает первую причину отказа в успешности проверки или undefined если проверка успешна
         */
        Document.prototype.getRejectReason = function () {
            return this.productContract.getRejectReason(this);
        };
        /**
         * Запись новой пары <id опции>:<значение> или перезапись старой. Если значение не валидно происходит отказ, иначе
         * запись и выполнение действий, если это [[OptionsSelect]]
         *
         * @param id - [[Option]] id
         * @param value - Новое значение ввода
         */
        Document.prototype.addOption = function (id, value) {
            var option = this.findOptionById(id, this.productContract.options);
            if (!option)
                return false;
            if (!option.validate(value))
                return false;
            var oldValue = this.values.find(function (v) { return v.id === id; });
            if (oldValue) {
                if (option.type === Option_7.OptionTypes.SELECT) {
                    var oldOptionIds_1 = this.getOptionsOfSelectItem(option, oldValue.value).map(function (o) { return o.id; });
                    this.values = this.values.filter(function (v) { return !oldOptionIds_1.includes(v.id); });
                }
                oldValue.value = value;
            }
            else
                this.values.push(new Value(id, value));
            if (option instanceof OptionSelect_3.default) {
                var selected = option.getSelected(value);
                if (selected) {
                    selected.action.activate(this.productContractModified);
                }
            }
            return true;
        };
        /**
         * Возвращает значение по id
         *
         * @param id - [[Option]] id
         */
        Document.prototype.getValue = function (id) {
            var value = this.values.find(function (v) { return v.id === id; });
            return value && value.value;
        };
        /**
         * Рассчитывает цену, время поставки (ETA), а так же редактирует [[productContractModified]] поле в соответствии с выбранными [[OptionsSelect]].
         * Иными словами, этот метод активирует все [[Action]] для выбранных [[OptionsSelect]]
         *
         * @param contract - [[ProductContract]] который использовать для сброса. Если не передан, то используется [[productContract]] поле
         * @return Успешность расчёта
         */
        Document.prototype.processing = function (contract) {
            if (!this.check())
                return false;
            this.productContract.processing(this, contract);
            return true;
        };
        /**
         * "Осушает" документ. Создаёт объект, который содержит только поля, необходимые для воссоздания его в другом модуле.
         * поле [[productContract]] заменяется на его [[ProductContract.contractId]]
         */
        Document.prototype.dry = function () {
            var res = {};
            for (var i in this) {
                if (i == 'productContract')
                    res.productContract = this.productContract.contractId;
                else if (this.hasOwnProperty(i) && i != 'productContractModified')
                    res[i] = this[i];
            }
            return res;
        };
        Document.prototype.findOptionById = function (id, options) {
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var opt = options_1[_i];
                if (opt.id === id) {
                    return opt;
                }
                if (opt.type === Option_7.OptionTypes.SELECT) {
                    var selected = opt.getSelected(this.getValue(opt.id));
                    if (selected) {
                        return this.findOptionById(id, selected.form.options);
                    }
                }
            }
        };
        Document.prototype.getOptionsOfSelectItem = function (selectOption, selected) {
            var selectedItem = selectOption.options.find(function (opt) { return opt.id === selected; });
            if (selectedItem) {
                return selectedItem.form.options;
            }
            return [];
        };
        return Document;
    }());
    exports.default = Document;
    /**
     * Содержит пары id-значение
     */
    var Value = /** @class */ (function () {
        /**
         * @param id - option id
         * @param value - option value
         */
        function Value(id, value) {
            this.id = id;
            this.value = value;
        }
        return Value;
    }());
    exports.Value = Value;
});
define("discount/ProductContractD", ["require", "exports", "core/ProductContract", "core/Option", "lib/util"], function (require, exports, ProductContract_2, Option_8, util_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает контракт с скидками
     */
    var ProductContractD = /** @class */ (function (_super) {
        __extends(ProductContractD, _super);
        /**
         * Если [[discountAllowed]] не передан, устанавливает его в true.
         * Если [[discountCumulativeAllowed]] не передан, устанавливает его в true.
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param discountAllowed - разрешение на применение скидок
         * @param discountCumulativeAllowed - разрешение на суммирование скидок
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param discounts -
         * @param args - иные параметры
         */
        function ProductContractD(options, name, locale, description, specificationMinVersion, prefix, badge, price, currency, start, finish, discountAllowed, discountCumulativeAllowed, revision, deliveryTime, discounts, args) {
            var _this = _super.call(this, options, name, locale, description, specificationMinVersion, prefix, badge, price, currency, start, finish, revision, deliveryTime, args) || this;
            _this.discounts = discounts || [];
            _this.discountAllowed = discountAllowed || true;
            _this.discountCumulativeAllowed = discountCumulativeAllowed || true;
            return _this;
        }
        /**
         * Создаёт новый ProductContractD из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра екземпляра ProductContractD будет осущствлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         * @param options - [[Option]][], которые хранит этот контракт
         * @param name - название
         * @param locale - локализация
         * @param description - описание
         * @param specificationMinVersion - Минимальная версия модуля обработки контракта
         * @param prefix - префикс
         * @param badge -
         * @param price - цена
         * @param currency - валюта
         * @param start - время начала работы
         * @param finish - время завершения работы
         * @param discountAllowed - разрешение на применение скидок
         * @param discountCumulativeAllowed - разрешение на суммирование скидок
         * @param revision -
         * @param deliveryTime - время поставки (ETA - minutes)
         * @param discounts -
         * @param args - иные параметры
         */
        ProductContractD.build = function (_a) {
            var locale = _a.locale, name = _a.name, options = _a.options, discountCumulativeAllowed = _a.discountCumulativeAllowed, badge = _a.badge, deliveryTime = _a.deliveryTime, currency = _a.currency, description = _a.description, discountAllowed = _a.discountAllowed, prefix = _a.prefix, finish = _a.finish, price = _a.price, revision = _a.revision, specificationMinVersion = _a.specificationMinVersion, start = _a.start, discounts = _a.discounts, args = __rest(_a, ["locale", "name", "options", "discountCumulativeAllowed", "badge", "deliveryTime", "currency", "description", "discountAllowed", "prefix", "finish", "price", "revision", "specificationMinVersion", "start", "discounts"]);
            options = options.map(function (opt) { return Option_8.default.getOption(opt); });
            return new ProductContractD(options, name, locale, description, specificationMinVersion, prefix, badge, price, currency, start, finish, discountAllowed, discountCumulativeAllowed, revision, deliveryTime, discounts, util_3.objectToProperties(args));
        };
        /**
         * Создаёт глубокую копию текущего екземпляра
         */
        ProductContractD.prototype.clone = function () {
            return ProductContractD.build(this.getJSON());
        };
        /**
         *  Создаёт JSON из текущего экземпляра. Метод противоположный [[build]]
         */
        ProductContractD.prototype.getJSON = function () {
            return Object.assign({}, this, _super.prototype.getJSON.call(this));
        };
        return ProductContractD;
    }(ProductContract_2.default));
    exports.default = ProductContractD;
});
define("discount/Condition", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает шаблон класса для проверки данных. Первый параметр T это класс наследник, который реализует данный класс.
     * Второй параметр U это класс, проверка в котором будет совершаться проверка.
     */
    var Condition = /** @class */ (function () {
        /**
         *
         * @param where - поля для проверки
         * @param and - другие проверки, к которым применять логическое И
         * @param or - другие проверки, к которым применять логическое ИЛИ
         */
        function Condition(where, and, or) {
            this.where = where;
            this.AND = and;
            this.OR = or;
        }
        /**
         * Создаёт новый екзеспляр класса наследника, который был передан в эту функцию. Указываются поля для создания класса-
         * наследника и его тип.
         * @param where - поля для проверки
         * @param AND - другие проверки, к которым применять логическое И
         * @param OR - другие проверки, к которым применять логическое ИЛИ
         * @param args - другие поля класса наследника
         * @param type - тип класса наследника. Тут указывается название класса, который следует создать
         */
        Condition.buildCondition = function (_a, type) {
            var _this = this;
            var where = _a.where, OR = _a.OR, AND = _a.AND, args = __rest(_a, ["where", "OR", "AND"]);
            if (OR)
                OR = OR.map(function (i) { return _this.buildCondition(i, type); });
            if (AND)
                AND = AND.map(function (i) { return _this.buildCondition(i, type); });
            return new type(where, AND, OR, args);
        };
        /**
         * Проверка что некоторый объект соответствует данному условию.
         * Проверка идёт в таком порядке:
         * - проверяются [[where]] посредством логического И, то есть если хотя бы одно поле в переданом объекте не соответствует
         * указаному в [[Property]], будет отказ
         * - проверяются условия внутри поля [[OR]]. Если хотя бы одно условие было выполнено, то функция вернёт успех
         * - проверяются условия внутри поля [[AND]]. Если хотя бы одно условие не было выполнено, то функция вернёт отказ
         * @param checkObject - объект для проверки
         */
        Condition.prototype.check = function (checkObject) {
            if (this.where) {
                if (this.where.length) {
                    for (var _i = 0, _a = this.where; _i < _a.length; _i++) {
                        var cond = _a[_i];
                        if (checkObject[cond.property] !== cond.value) {
                            return false;
                        }
                    }
                }
            }
            if (this.OR) {
                if (this.OR.length) {
                    for (var _b = 0, _c = this.OR; _b < _c.length; _b++) {
                        var cond = _c[_b];
                        if (cond.check(checkObject))
                            return true;
                    }
                }
            }
            if (this.AND) {
                if (this.AND.length) {
                    for (var _d = 0, _e = this.AND; _d < _e.length; _d++) {
                        var cond = _e[_d];
                        if (!cond.check(checkObject))
                            return false;
                    }
                }
            }
            return true;
        };
        return Condition;
    }());
    exports.default = Condition;
});
define("discount/ConditionDocument", ["require", "exports", "discount/Condition"], function (require, exports, Condition_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает условия проверки полей документа, то есть поля [[Document.productContractModified]].
     */
    var ConditionDocument = /** @class */ (function (_super) {
        __extends(ConditionDocument, _super);
        function ConditionDocument() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // checkDayOfWeek?: string;
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
         * @param data - JSON c полями, аналогичными родетельскому конструктору.
         */
        ConditionDocument.build = function (data) {
            return _super.buildCondition.call(this, data, this);
        };
        return ConditionDocument;
    }(Condition_1.default));
    exports.default = ConditionDocument;
});
define("discount/Select", ["require", "exports", "discount/Condition"], function (require, exports, Condition_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает условия проверки полей контракта продукта, для которого заполняется документ, то есть поля [[Document.productContract]].
     */
    var Select = /** @class */ (function (_super) {
        __extends(Select, _super);
        function Select() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору.
         * @param data - JSON c полями, аналогичными родетельскому конструктору.
         */
        Select.build = function (data) {
            return _super.buildCondition.call(this, data, this);
        };
        return Select;
    }(Condition_2.default));
    exports.default = Select;
});
define("discount/DiscountContract", ["require", "exports", "discount/ConditionDocument", "discount/Select", "core/Action"], function (require, exports, ConditionDocument_1, Select_1, Action_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает скидки. Хранит условия применения на начальный и изменённый контракт и действия, которые следует выполнять
     * при выполнении указанных условий
     */
    var DiscountContract = /** @class */ (function () {
        /**
         *
         * @param id - id
         * @param name - название
         * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
         * @param specificationMinVersion - минимальная версия модуля
         * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
         * @param actions - действия скидки
         */
        function DiscountContract(id, name, condition, specificationMinVersion, selects, actions) {
            this.id = id;
            this.name = name;
            this.conditions = condition;
            this.specificationMinVersion = specificationMinVersion;
            this.selects = selects;
            this.actions = actions;
        }
        /**
         * Создаёт новый DiscountContract из JSON, содержащим все необходимые поля. Обязательность полей см. в конструкторе.
         * При передаче как параметра екземпляра DiscountContract будет осущствлена попытка его скопировать, однако для таких целей
         * лучше использовать метод [[clone]]. Данный метод выступает как парсер из JSON в объект, а не как клонирование
         * @param id - id
         * @param name - название
         * @param condition - условия применения для изначального [[ProductContract]] в поле [[Document.productContract]]
         * @param specificationMinVersion - минимальная версия модуля
         * @param selects - условия применения для модифицированого [[ProductContract]] в поле [[Document.productContractModified]]
         * @param actions - действия скидки
         */
        DiscountContract.build = function (_a) {
            var actions = _a.actions, conditions = _a.conditions, id = _a.id, name = _a.name, selects = _a.selects, specificationMinVersion = _a.specificationMinVersion;
            var selectsObj = selects.map(function (s) { return Select_1.default.build(s); });
            var conditionsObj = conditions.map(function (c) { return ConditionDocument_1.default.build(c); });
            var actionsObj = actions.map(function (a) { return Action_2.default.build(a); });
            return new DiscountContract(id, name, conditionsObj, specificationMinVersion, selectsObj, actionsObj);
        };
        /**
         * Проверяет, что текущую скидку можно применить к некоторому [[Document]]. Проверяется [[Document.productContract]] по
         * условиям хранящимся в [[selects]] и [[Document.productContractModified]] по условиям хранящимся в [[conditions]].
         * Если [[selects]] или [[conditions]] несколько, то результат работы это логическое И результата проверки каждой
         * (при отказе любого условия будет общий отказ функции).
         * @param document - документ, к которому проверяетяся можно ли применить скидку
         */
        DiscountContract.prototype.isActive = function (document) {
            if (document.productContract.discounts.includes(this) || this.canUseForContract(document.productContract)) {
                for (var _i = 0, _a = this.conditions; _i < _a.length; _i++) {
                    var cond = _a[_i];
                    if (!cond.check(document.productContractModified)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        /**
         * Проверяет, что текущую скидку можно применить к некоторому [[ProductContract]]. Проверяет его поля по условиям, записанными
         * в поле [[selects]].
         * @param contract - контракт, к которому проверяетяся можно ли применить скидку
         */
        DiscountContract.prototype.canUseForContract = function (contract) {
            for (var _i = 0, _a = this.selects; _i < _a.length; _i++) {
                var select = _a[_i];
                if (!select.check(contract))
                    return false;
            }
            return true;
        };
        /**
         * Активация скидки для некоторого документа. Применение происходит непосредственно, игнорируя все проверки. Перед использованием
         * этой функции рекомендуется проверить возможно ли применять скидку на переданный документ.
         * Активация подразумевает под собой выполнение всех действий, записаных в [[actions]].
         * Данная функция не занимается обнулением функции, для добавления скидки в документ рекомендуется использовать
         * [[DocumentD.addDiscount]]
         * @param document - документ, к которому следует применить скидку
         */
        DiscountContract.prototype.activate = function (document) {
            for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
                var action = _a[_i];
                action.activate(document.productContractModified);
            }
        };
        return DiscountContract;
    }());
    exports.default = DiscountContract;
});
define("discount/DocumentD", ["require", "exports", "core/Document", "discount/ProductContractD", "lib/util"], function (require, exports, Document_1, ProductContractD_1, util_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Описывает документ с вохможность добавления и обработки скидок. Скидки действуют не на сам документ, а только на
     * productContractModified
     */
    var DocumentD = /** @class */ (function (_super) {
        __extends(DocumentD, _super);
        /**
         * Аналогично родительскому конструктору (см. [[Document]])
         * @param productContract
         * @param values
         * @param args
         */
        function DocumentD(productContract, values, args) {
            var _this = _super.call(this, productContract, values, args) || this;
            _this.discountContracts = [];
            _this.productContract = productContract;
            _this.productContractModified = productContract.clone();
            return _this;
        }
        /**
         * Создаёт экземпляр документа из JSON. Поля JSON аналогичны конструктору. Обработка проихсодит рекурсивно, то есть
         * создаются новые [[Value]] и [[ProductContractD]]
         *
         * @param productContract - [[ProductContractD]], может быть JSON или екземляр класса. Если это JSON, то будет создан новый екземпляр [[ProductContractD]] на его основе,
         * если это екземпляр, то он будет скопирован, опять же, рекурсивно
         * @param values - Массив пар id-значение. При создании не проверяется, для проверки используйте родительским метод validate
         * @param args - Дополнительные поля (для внешних модулей)
         * @return new [[DocumentD]]
         */
        DocumentD.build = function (_a) {
            var productContract = _a.productContract, values = _a.values, args = __rest(_a, ["productContract", "values"]);
            var valuesObj = values.map(function (v) { return new Document_1.Value(v.id, v.value); });
            productContract = ProductContractD_1.default.build(productContract);
            return new DocumentD(productContract, valuesObj, util_4.objectToProperties(args));
        };
        /**
         * Применяет все активные для данного документа скидки. То есть проверяется, что они [[productContract]] и
         * [[productContractModified]] соответсвуют заданому [[DiscountContract]]. Если [[ProductContractD]] запрещает применять несколько скидок,
         * то применяет только первую. После чего расчитывает цену, время поставки (ETA),
         * а так же редактирует [[productContractModified]] поле в соответствии с выбраными [[OptionsSelect]].
         * Иными словами, этот метод активирует все [[Action]] для выбраных [[OptionsSelect]]
         *
         * @param contract - [[ProductContractD]] который использовать для сброса. Если не передан, то используется [[productContract]] поле
         * @return Успешность расчёта
         */
        DocumentD.prototype.processing = function (contract) {
            this.productContractModified = (contract || this.productContract).clone();
            for (var _i = 0, _a = this.discountContracts; _i < _a.length; _i++) {
                var discount = _a[_i];
                if (discount.isActive(this)) {
                    discount.activate(this);
                    if (!this.productContractModified.discountCumulativeAllowed)
                        break;
                }
            }
            return _super.prototype.processing.call(this, this.productContractModified);
        };
        /**
         * Пытается применить переданный [[DiscountContract]] к текущему документу. Если [[ProductContractD]] позволяет
         * применять скидки и если скидку возможно применить, то сразу же выполняет все её [[Action]].
         * @param discount - Скидка, которую следует проверить и, возможно, применить
         * @return Была ли применена скидка
         */
        DocumentD.prototype.addDiscount = function (discount) {
            if (!discount.isActive(this))
                return false;
            if (!this.productContract.discountAllowed)
                return false;
            this.discountContracts.push(discount);
            this.productContractModified = this.productContract.clone();
            for (var _i = 0, _a = this.discountContracts; _i < _a.length; _i++) {
                var discount_1 = _a[_i];
                discount_1.activate(this);
                if (!this.productContractModified.discountCumulativeAllowed)
                    break;
            }
            return true;
        };
        /**
         * "Осущает" документ. Создаёт объект, который содержит только поля, необходимые для воссоздания его в другом модуле.
         * поле [[productContract]] заменяется на его [[ProductContract.contractId]], а [[discountContracts]] на массив из
         * [[DiscountContract.id]] каждой применённой скидки
         */
        DocumentD.prototype.dry = function () {
            var res = {};
            for (var i in this) {
                if (i == 'productContract')
                    res.productContract = this.productContract.contractId;
                else if (i == 'discountContracts')
                    res.discountContracts = this.discountContracts.map(function (d) { return d.id; });
                else if (this.hasOwnProperty(i) && i != 'productContractModified')
                    res[i] = this[i];
            }
            return res;
        };
        return DocumentD;
    }(Document_1.default));
    exports.default = DocumentD;
});
define("index", ["require", "exports", "discount/DocumentD", "core/Document", "discount/ProductContractD", "core/ProductContract", "discount/DiscountContract"], function (require, exports, DocumentD_1, Document_2, ProductContractD_2, ProductContract_3, DiscountContract_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductContract = exports.Document = exports.DiscountContract = exports.ProductContractD = exports.DocumentD = void 0;
    exports.DocumentD = DocumentD_1.default;
    exports.Document = Document_2.default;
    exports.ProductContractD = ProductContractD_2.default;
    exports.ProductContract = ProductContract_3.default;
    exports.DiscountContract = DiscountContract_1.default;
});
