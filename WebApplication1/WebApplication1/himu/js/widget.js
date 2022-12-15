/**
 * @fileoverview This file loads the widget functionality
 *
 * @author Juan Carlos León Jarquín
 *
 * @version 1.0.0
 */

/**
 * Self called function that injects all the modules into the widget
 *
 * @param {Object} module_array - It holds the array of all the modules that are going to be integrated.
 */

 var textAreaTxt = "Escribe tu mensaje";
 ! function (module_array) {
     /**
      * Function that will load each part of the modules and injects into the code
      * @param {number} module_index - The position of the module in the module_array
      * @return {} - It will return the injection and update of the current module
      */
     function loader(module_index) {
         // If the module is in the array it exports to the global context of the browser
         if (exporter[module_index]) return exporter[module_index].exports;
 
         // It form a temporary record to watch if the modules are loaded
         var load = exporter[module_index] = {
             exports: {},
             id: module_index,
             loaded: false
         };
 
         return (
             module_array[module_index].call(load.exports, load, load.exports, loader),
             load.loaded = true,
             load.exports
         );
     }
 
     var exporter = {};
     loader.m = module_array;
     loader.c = exporter;
     loader(0);
 }([
     function (module_object, exports, loader) {
         /* Actinver Variables */
         var client_email = "";
         var client_phone = "";
         var in_form = false;
         var count_in_form = 0;
         var context = {};
         var transcript = [];
         var user_name = "";
         var user_email = "";
         var user_phone = "";
         var retryCount = 0;
         var session_affinity_cookie = "";
         /* End of Actinver variables */
         /* Template defined variables */
         var not_timeout = true;
         var in_survey = false;
         var client_name = "anonymous";
         var client_segment = "Otros";
         var text = "";
         var timer = null;
         var referrer = '';
         var is_common = false;
         var global_names = [];
         var words = [];
         var client_properties = {};
         var not_input_timeout = null;
         var not_input_timeout2 = null;
         var chat_closed_timeout = null;
         var count = 0;
         var last_questions = [];
         var client_general_info_seguro_auto = { "Name": "", "LastName": "", "SecondLastName": "", "BirthDate": "", "Gender": "", "PhoneNumber": "", "Email": "", "RFC": "", "CURP": "" };
         var general_data = { "Marca": "", "Municipio": "", "Estado": "" };
         var current_clicked = "";
         var need_thinking = true;
         var session_ended = false;
         var is_refresh = false;
         var wasPressed = false;
         var doubt_string = "";
         var client_path = [];
         var is_full_screen; // chat property to keep track of full screen status
         var in_more_info = false; // track if user is in a `more info` div
         var chat_state = "closed"; // keep track of the chat state - options: "closed", "opened", "mined"
         var finish_localization = false;
         var getBackTxt = "< Regresar";
         var moreInfoTxt = "Más información";
         var opcionesTxt = "Seleccione una opción";
         var justNowTxt = "Justo ahora";
         textAreaTxt = "Escribe tu mensaje";
         var minutesTxt = "minutos antes";
         var yesOption = "Sí";
         var noOption = "No";
         var vuelvePronto = "Gracias por conversar conmigo 🥰<br>¡Vuelve pronto! ";
         var newChatTxt = "Reiniciar conversación";
         var conexionTxt = "Hay un error en la conexión a internet, por favor asegúrate de estar conectado, y reinicia la página.";
         var helpTxt = "Claro, ¿en qué más te puedo ayudar?";
         var seeVideo = "Ver video";
         var transTimerMessages = [];
         var location_object = "";
         var listener = null;
         var use_case_flux = false;
         var get_client_data = false;
         var early_withdrawal_flag = 0;
         var get_client_number_by_contract_data = false;
         var unique_client_number = "";
         var phone_validation = false;
         var choose_token_method = false;
         var select_contract = false;
         var verify_email = false;
         var select_period = false;
         var confirm_successful_spei = false;
         var confirm_successful_fund_bank = false;
         var end_option_fund_bank = false;
         var is_option_fund_bank = false;
         var confirm_spei = false;
         var changing_token_status = false;
         var closing_flux = false;
         var new_statement = false;
         var final_use_case = false;
         var card_filter_response = false;
         var is_client_actinver = false;
         var balance_inquiry_insurance = false;
         var credit_card_info = false;
         var date_aprox_pago = false;
         var is_client = false;
         var insurance_coverage = false;
         var regular_driver = false;
         var is_regular_driver = false;
         var notification_buy = false;
         var get_info_contratante = false;
         var car_information = false;
         var localidad_cliente = false;
         var car_year = false;
         var print_policy = false;
         var insurance_quote = false;
         var form_localidad_conductor_seguros = false;
         var form_no_motor_serie = false;
         var car_use = false;
         var payment_type = false;
         var form_rfc_contratante = false;
         var payment_methods = false;
         var selected_payment_method = false;
         var payment_confirmed = false;
         var card_filter = false;
         var inserted_card = false;
         var card_activation = false;
         var c_number = "";
         var available_periods = {};
         var ContractsDict = {};
         var MaskedContractsDict = {};
         var use_case_action = "";
         var selected_email = "";
         var actinver_contracts = [];
         var actinver_token = "";
         var actinver_contract = "";
         var actinver_phones;
         var actinver_emails;
         var actinver_number = "";
         var contract_number = "";
         var avayaRetryCount = 0;
         var send_spei = false;
         var validate_transfer_amount = false;
         var find_beneficiary = false;
         var select_bank = false;
         var transfer_summary = false;
         var select_account_tranfer = false;
         var select_bank_or_house = false;
         var fund_select_bank_or_house = false;
         var validate_phone_code = false;
         var ask_beneficiary = false;
         var remove_special_characters = false;
         var select_beneficiary = false;
 
         var send_fund = false;
         var select_choice_bank_or_house = "";
         var issuer_name = "";
         var issuer_serie = "";
         var amount_funds_to_sell_bank = false;
         var validate_amount_funds_to_sell_bank = false;
         var validate_fund_qty_bank = false;
         var amount_funds_to_sell = false;
         var validate_amount_funds_to_sell = false;
         var advance_sale_funds = false;
         var advance_sale_funds_bank = false;
 
         var funds_summary = false;
         var funds_summary_bank = false;
         var confirm_fund = false;
         var confirm_fund_bank = false;
         var isTitlesQty = false;
         var isAmount = false;
         var confirm_successful_fund = false;
         var anticipated_sell = "";
         var current_value = "";
         var validate_fund_qty = "";
         var issuer_registration_type = "";
         var sale_titles_qty = 0;
         var transfer_amount = "";
         var spei_geolocalizacion = "";
         var ask_geolocalizacion_spei = false;
         var ask_geolocalizacion_ivr = false;
         var contractTypeSpei = 0;
         var blockear_tdd = false;
         var desblockear_tdd = false;
 
 
         var sale_the_same_day = false;
         var is_sale_the_same_day = false;
         var validate_amont_sale_the_same_day = false;
         var confirm_spei_sale_the_same_day = false;
         var destination_account = "";
         var currentCash = "";
 
         /* End of own defined variables */
         /* Avaya Variables */
         var chatSocket;
         var webChat;
         var links;
         var withAgent = false;
         var webSocket;
         var chatConfig;
         var maxWaitTime = 600;
         var maxRetries = 5;
         var minAgentCount = 1;
         var minWaitTime = -5;
         var isDate = false;
 
         /* End of Avaya Variables */
 
         var nds_utils = loader(1),
             minEmoji = loader(2);
         loader(7);
 
         if (!Array.from) {
             Array.from = (function () {
                 var symbolIterator;
                 try {
                     symbolIterator = Symbol.iterator
                         ? Symbol.iterator
                         : 'Symbol(Symbol.iterator)';
                 } catch (e) {
                     symbolIterator = 'Symbol(Symbol.iterator)';
                 }
 
                 var toStr = Object.prototype.toString;
                 var isCallable = function (fn) {
                     return (
                         typeof fn === 'function' ||
                         toStr.call(fn) === '[object Function]'
                     );
                 };
                 var toInteger = function (value) {
                     var number = Number(value);
                     if (isNaN(number)) return 0;
                     if (number === 0 || !isFinite(number)) return number;
                     return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
                 };
                 var maxSafeInteger = Math.pow(2, 53) - 1;
                 var toLength = function (value) {
                     var len = toInteger(value);
                     return Math.min(Math.max(len, 0), maxSafeInteger);
                 };
 
                 var setGetItemHandler = function setGetItemHandler(isIterator, items) {
                     var iterator = isIterator && items[symbolIterator]();
                     return function getItem(k) {
                         return isIterator ? iterator.next() : items[k];
                     };
                 };
 
                 var getArray = function getArray(
                     T,
                     A,
                     len,
                     getItem,
                     isIterator,
                     mapFn
                 ) {
                     // 16. Let k be 0.
                     var k = 0;
 
                     // 17. Repeat, while k < len… or while iterator is done (also steps a - h)
                     while (k < len || isIterator) {
                         var item = getItem(k);
                         var kValue = isIterator ? item.value : item;
 
                         if (isIterator && item.done) {
                             return A;
                         } else {
                             if (mapFn) {
                                 A[k] =
                                     typeof T === 'undefined'
                                         ? mapFn(kValue, k)
                                         : mapFn.call(T, kValue, k);
                             } else {
                                 A[k] = kValue;
                             }
                         }
                         k += 1;
                     }
 
                     if (isIterator) {
                         throw new TypeError(
                             'Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1'
                         );
                     } else {
                         A.length = len;
                     }
 
                     return A;
                 };
 
                 // The length property of the from method is 1.
                 return function from(arrayLikeOrIterator /*, mapFn, thisArg */) {
                     // 1. Let C be the this value.
                     var C = this;
 
                     // 2. Let items be ToObject(arrayLikeOrIterator).
                     var items = Object(arrayLikeOrIterator);
                     var isIterator = isCallable(items[symbolIterator]);
 
                     // 3. ReturnIfAbrupt(items).
                     if (arrayLikeOrIterator == null && !isIterator) {
                         throw new TypeError(
                             'Array.from requires an array-like object or iterator - not null or undefined'
                         );
                     }
 
                     // 4. If mapfn is undefined, then let mapping be false.
                     var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                     var T;
                     if (typeof mapFn !== 'undefined') {
                         // 5. else
                         // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                         if (!isCallable(mapFn)) {
                             throw new TypeError(
                                 'Array.from: when provided, the second argument must be a function'
                             );
                         }
 
                         // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                         if (arguments.length > 2) {
                             T = arguments[2];
                         }
                     }
 
                     // 10. Let lenValue be Get(items, "length").
                     // 11. Let len be ToLength(lenValue).
                     var len = toLength(items.length);
 
                     // 13. If IsConstructor(C) is true, then
                     // 13. a. Let A be the result of calling the [[Construct]] internal method
                     // of C with an argument list containing the single item len.
                     // 14. a. Else, Let A be ArrayCreate(len).
                     var A = isCallable(C) ? Object(new C(len)) : new Array(len);
 
                     return getArray(
                         T,
                         A,
                         len,
                         setGetItemHandler(isIterator, items),
                         isIterator,
                         mapFn
                     );
                 };
             })();
         }
 
         var elements = {},
             questionList = [],
             config = {},
             widget = {},
             answerList = [];
 
         if (form) {
             config = form.config || {};
             questionList = Array.from(form.questions) || [];
             widget = form.widget || {};
             widgetTexts = form.widget.texts || {};
             avayaConfig = form.avaya || {};
             transTimerMessages = form.timerMessages || {};
         }
 
         // TODO: Change postSurvey visualization to prompt
         var NDSchat = {
             name: config.project,
             state: {
                 current: undefined,
                 last: undefined,
                 activeQuestion: -1,
                 token: undefined,
                 accountID: undefined,
                 tpQueue: undefined
             },
             tags: {
                 chatbot_message: 0,
                 user_message: 0
             },
             /** Init functions */
             /**
              * This function initialize all the visual and initial properties for this
              * session
              */
             init: function () {
                 function getBrowserName() {
                     // Opera 8.0+
                     if ((window.opr && window.opr.addons) ||
                         window.opera ||
                         navigator.userAgent.indexOf(' OPR/') >= 0) {
                         return 'Opera';
                     }
 
                     // Firefox 1.0+
                     if (typeof InstallTrigger !== 'undefined') {
                         return 'Firefox';
                     }
 
                     // Safari 3.0+ "[object HTMLElementConstructor]"
                     if (/constructor/i.test(window.HTMLElement) || (function (p) {
                         return p.toString() === '[object SafariRemoteNotification]';
                     })(!window.safari)) {
                         return 'Safari';
                     }
 
                     // Internet Explorer 6-11
                     if ( /* @cc_on!@*/ false || document.documentMode) {
                         return 'Internet Explorer';
                     }
 
                     // Edge 20+
                     if (!(document.documentMode) && window.StyleMedia) {
                         return 'Microsoft Edge';
                     }
 
                     // Chrome
                     if (window.chrome) {
                         return 'Chrome';
                     }
 
                     return "no disponible";
                 }
                 // BROWSER DETECTION
                 var browser = getBrowserName();
                 var app_version = "" + parseInt(navigator.appVersion, 10);
 
                 client_properties.browser = browser;
                 client_properties.app_version = app_version;
                 client_properties.device = nds_utils.mobilecheck() ? "MOBILE" : "DESKTOP";
 
                 // OS DETECTION
                 var OSName = "no disponible";
                 if (client_properties.device === "DESKTOP") {
                     if (navigator.appVersion.indexOf("Win") != -1) OSName = "WINDOWS";
                     if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MAC_OS";
                     if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
                     if (navigator.appVersion.indexOf("Linux") != -1) OSName = "LINUX";
                 }
                 client_properties.os = OSName;
                 client_properties.userAgent = window.navigator.userAgent;
                 client_properties.referrer = window.location.href;
                 referrer = window.location.href;
 
                 // If configuration file set a dictionary, load it
                 if (config.personalized) {
                     nds_utils.minAjax({
                         url: config.url + "lucy/js/dictionaries.json",
                         type: "GET",
                         headers: {
                             "Cache-Control": "no-cache",
                             Pragma: "no-cache",
                             Expires: -1
                         },
                         json: true,
                         success: function (response) {
                             var names = JSON.parse(response);
                             NDSchat.setDictionaries(names);
                         }
                     });
                 }
 
                 // Let laucher know that widget is loaded
                 parent.postMessage("nds-chat-widget-loaded", "*");
 
                 // create initial containers
                 var t = document.createElement("div");
                 t.id = "nds-chat";
                 t.innerHTML = loader(6);
                 var e = document.getElementsByTagName("body")[0];
                 e.appendChild(t);
                 elements.divChatbox = document.getElementById("nds-chat-chatbox");
                 elements.txMessage = document.getElementById("txMessage");
                 elements.sendButton = document.querySelector(".nds-chat-send-button");
                 elements.sendButton.id = "nds-chatbot-send-button";
                 elements.chatComposer = document.getElementById("nds-chat-composer");
                 elements.returnBtn = document.getElementById("nds-chat-return");
                 elements.closeBtn = document.getElementById("nds-chat-launcher-close");
                 elements.submitBtn = document.getElementById("nds-chat-submit");
 
                 if (window.collectEmbedded) {
                     nds_utils.addClass(document.getElementById("nds-chat-container"), "nds-chat-embed-container");
                 }
 
                 nds_utils.addClass(elements.chatComposer, "hidden");
 
                 // Google Analytics
                 if (config.gaId) {
                     config.gaId && (! function (t, e, c, o, a, n, l) {
                         t.GoogleAnalyticsObject = a, t[a] = t[a] || function () {
                             (t[a].q = t[a].q || []).push(arguments);
                         }, t[a].l = 1 * new Date(), n = e.createElement(c), l = e.getElementsByTagName(c)[0], n.async = 1, n.src = o, l.parentNode.insertBefore(n, l);
                     }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", config.gaId, "auto"), ga('send', 'pageview'));
                 }
 
                 // Change Default Date function for local time
                 Date.prototype.toIsoString = function () {
                     var tzo = -this.getTimezoneOffset(),
                         dif = tzo >= 0 ? '+' : '-',
                         pad = function (num) {
                             var norm = Math.floor(Math.abs(num));
                             return (norm < 10 ? '0' : '') + norm;
                         };
                     return this.getFullYear() +
                         '-' + pad(this.getMonth() + 1) +
                         '-' + pad(this.getDate()) +
                         'T' + pad(this.getHours()) +
                         ':' + pad(this.getMinutes()) +
                         ':' + pad(this.getSeconds()) +
                         dif + pad(tzo / 60) +
                         ':' + pad(tzo % 60);
                 };
 
                 // handlers for reload functions
                 window.frameElement.ownerDocument.onkeydown = fkey;
                 window.frameElement.ownerDocument.onkeyup = fkey;
                 document.body.onkeydown = fkey;
                 document.body.onkeyup = fkey;
 
                 wasPressed = false;
 
                 function fkey(t) {
                     t = t || window.event;
                     var e = t.which ? t.which : t.keyCode;
 
                     if (wasPressed) return;
 
                     if ((e == 116) || (e == 82 && t.ctrlKey) || (e == 82 && t.ctrlKey && t.shiftKey) || (e == 114 && t.ctrlKey) || (e == 114 && t.ctrlKey && t.shiftKey)) {
                         is_refresh = true;
                         wasPressed = true;
                     }
                 }
 
                 // INIT PERSISTANCE
                 if (config.persistance) {
                     window.onbeforeunload = function () {
                         // if the session is going and the redirection doesn't reload same page
                         if (!session_ended && !is_refresh) {
                             // Cookie for persistance check
                             nds_utils.setCookie("preserve_chat", "true", 5);
                             NDSchat.removeButtons();
                             // Get all current chat content
                             var chat = document.getElementById("nds-chat").innerHTML;
                             // save current configuration
                             localStorage.setItem('chat', chat);
                             localStorage.setItem("current_location", window.location.href);
                             localStorage.setItem('client_path', JSON.stringify(client_path));
                             localStorage.setItem('account_id', NDSchat.state.accountID);
                             localStorage.setItem('answerList', answerList);
                             nds_utils.minAjax({
                                 url: config.url + config.api_version + "removeWatsonSession",
                                 headers: {
                                     "Content-type": "application/json",
                                     "X-ACCOUNT-ID": NDSchat.state.accountID,
                                     "X-APP-TOKEN": NDSchat.state.token,
                                     "X-API-KEY": config.token_apigee
                                 },
                                 type: "GET"
                             });
                         } else if (NDSchat.state.token !== null && NDSchat.state.token !== undefined) {
                             // if not persistance, remove session and expire token
                             nds_utils.deleteCookie("sessionID");
                             NDSchat.removeSession();
                         }
                     };
                 }
 
                 // If the page has change, check if the required variables exists
                 if (
                     nds_utils.getCookie("preserve_chat") !== null &&
                     nds_utils.getCookie("preserve_chat") !== undefined &&
                     nds_utils.getCookie("sessionID") !== null &&
                     nds_utils.getCookie("sessionID") !== undefined &&
                     localStorage.getItem('account_id') !== null &&
                     localStorage.getItem('account_id') !== undefined &&
                     localStorage.getItem("current_location") !== window.location.href
                 ) {
                     // set the account id
                     NDSchat.state.accountID = localStorage.getItem("account_id");
                     // set user token
                     NDSchat.state.token = nds_utils.getCookie("sessionID");
 
                     // set a loader if the request take too long
                     var loading = document.body;
                     var animation = loading.appendChild(document.createElement('div'));
                     animation.classList.add('loader');
                     animation.id = 'loader';
 
                     // check if the session is still running
                     nds_utils.minAjax({
                         url: config.url + config.auth_endpoint + "sessionExpired",
                         type: "GET",
                         headers: {
                             "Content-type": "application/json",
                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                             "X-APP-TOKEN": NDSchat.state.token,
                             "X-API-KEY": config.token_apigee
                         },
                         success: function (response) {
                             expire = JSON.parse(response);
                             localStorage.removeItem('account_id');
 
                             if (expire.response === "Active") {
                                 nds_utils.minAjax({
                                     url: config.url + config.api_version + 'newContext',
                                     type: 'GET',
                                     headers: {
                                         "Content-type": "application/json",
                                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                                         "X-APP-TOKEN": NDSchat.state.token,
                                         "X-API-KEY": config.token_apigee
 
                                     },
                                     success: function (t) {
                                         t = JSON.parse(t);
                                         NDSchat.full_context = t.context;
                                         // if is active, restablish last state
                                         if (localStorage.getItem("chat") !== null) {
                                             // Start without nothing the widget
                                             document.getElementById("nds-chat").innerHTML = "";
                                             // Add last state bubbles
                                             document.getElementById("nds-chat").innerHTML = localStorage.getItem("chat");
                                             // set links and show more messages
                                             NDSchat.showMore();
                                             // remove the last state from local storage
                                             localStorage.removeItem("chat");
                                             // set the number of questions as last question answered
                                             // avoids the predefined messages again
                                             NDSchat.state.activeQuestion = form.questions.length - 1;
 
                                         }
                                         // load answer list
                                         var returned_answerList;
                                         answerList = returned_answerList && returned_answerList.constructor === Array ? returned_answerList : [];
                                         if (answerList.length === 0) {
                                             for (var fill = 0; fill < widget.minimum_responses; fill++) {
                                                 answerList.push({
                                                     question: '',
                                                     answer: ''
                                                 });
                                             }
                                         }
                                         localStorage.removeItem('answerList');
 
                                         // let user write
                                         nds_utils.removeClass(elements.chatComposer, "hidden");
                                         // remove unused cookie
                                         nds_utils.deleteCookie("preserve_chat");
 
                                         // set the configuration for this session
                                         NDSchat.config = nds_utils.mergeConfig({
                                             user: client_name,
                                             thinkingTime: 1e3,
                                             questionInterval: 2e3,
                                             errorInterval: 1500
                                         }, {});
 
                                         // remove loader
                                         document.getElementById('loader').parentElement.removeChild(document.getElementById('loader'));
                                         // start the event handler
                                         NDSchat.initEventHandler(true);
                                     },
                                     error: function (x, r, s) {
                                         NDSchat.handleError(s);
                                     }
                                 });
 
                             } else {
                                 // If there is no active session, delete all saved variables
                                 localStorage.removeItem("chat");
                                 localStorage.removeItem("user_name");
                                 localStorage.removeItem("user_segment");
                                 localStorage.removeItem("account_id");
                                 localStorage.removeItem('account_id');
                                 localStorage.removeItem('answerList');
                                 if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                     nds_utils.deleteCookie("sessionID");
                                 }
                                 if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                     nds_utils.deleteCookie("preserve_chat");
                                 }
 
                                 // set the configuration for the session
                                 NDSchat.config = nds_utils.mergeConfig({
                                     user: client_name,
                                     thinkingTime: 1e3,
                                     questionInterval: 2e3,
                                     errorInterval: 1500
                                 }, {});
 
                                 // start over the client_path
                                 client_path = [];
 
                                 // remove loader
                                 document.getElementById('loader').parentElement.removeChild(document.getElementById('loader'));
                                 // start the event handler
                                 NDSchat.initEventHandler(true);
                             }
                         },
                         error: function (t, f, s) {
                             // If there is an error on the request, remove all saved variables
                             localStorage.removeItem('chat');
                             localStorage.removeItem('user_name');
                             localStorage.removeItem('user_segment');
                             localStorage.removeItem("account_id");
                             localStorage.removeItem('answerList');
                             if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                 nds_utils.deleteCookie("sessionID");
                             }
                             if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                 nds_utils.deleteCookie("preserve_chat");
                             }
 
                             // set the configuration for new session
                             NDSchat.config = nds_utils.mergeConfig({
                                 user: client_name,
                                 thinkingTime: 1e3,
                                 questionInterval: 2e3,
                                 errorInterval: 1500
                             }, {});
 
                             // start over the client_path
                             client_path = [];
 
                             // start the event handler again
                             NDSchat.initEventHandler();
 
                             // remove loader
                             document.getElementById('loader').parentElement.removeChild(document.getElementById('loader'));
                         }
                     });
                 } else {
                     // If no persistance or there are missing variables
                     // remove all saved variables
                     localStorage.removeItem('chat');
                     localStorage.removeItem("account_id");
                     if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                         nds_utils.deleteCookie("sessionID");
                     }
                     if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                         nds_utils.deleteCookie("preserve_chat");
                     }
 
                     // set the configuration for new session
                     NDSchat.config = nds_utils.mergeConfig({
                         user: client_name,
                         thinkingTime: 1e3,
                         questionInterval: 2e3,
                         errorInterval: 1500
                     }, {});
 
                     // start over the client_path
                     client_path = [];
 
                     // Start event handler
                     NDSchat.initEventHandler();
                 }
 
                 // remove the last location of the user
                 localStorage.removeItem("current_location");
                 // start new session
                 session_ended = false;
 
                 // validate we are in desktop
                 if (!nds_utils.mobilecheck()) {
                     // enable the draggable window
                     if (widget.draggable) {
                         NDSchat.dragElement(window.frameElement.ownerDocument.getElementById("nds-chat-frame-container"));
                     }
 
                     // enable minimize for animation
                     if (config.minimize_animation) {
                         NDSchat.minimizedAnimated(window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize-animated"));
                     }
 
                     // enable resize
                     if (config.resize_button) {
                         NDSchat.resizeElement(window.frameElement.ownerDocument.getElementById("nds-chat-launcher-resize"));
                     }
 
                     // enabe fullscreen toggle
                     if (config.fullscreen_button) {
                         NDSchat.fullSreen(window.frameElement.ownerDocument.getElementById("nds-chat-launcher-fullscreen"));
                     }
                 }
             },
             /**
              * This function assign all the functionality for the main chat events, like
              * sending a message
              *
              * @param {bool} persistance - If the content of this session is loaded from the persistance
              */
             initEventHandler: function (persistance) {
                 /* Loads envents handlers */
                 // If the content is loaded from the persistance, recreate widget elements
                 if (persistance) {
                     document.getElementById("nds-chat-composer-container").innerHTML = "";
 
                     // create the bottom container
                     var chat_composer_container_div = document.getElementById("nds-chat-composer-container").appendChild(document.createElement("div"));
                     chat_composer_container_div.id = "nds-chat-composer";
                     chat_composer_container_div.classList.add("nds-chat-composer");
                     chat_composer_container_div.setAttribute("style", "transform: translate(0,0)");
 
                     // create text_area container
                     var chat_composer_textarea_container = chat_composer_container_div.appendChild(document.createElement("div"));
                     chat_composer_textarea_container.classList.add("nds-chat-composer-textarea-container");
 
                     // create the textarea div
                     var chat_composer_textarea = chat_composer_textarea_container.appendChild(document.createElement("div"));
                     chat_composer_textarea.classList.add("nds-chat-composer-textarea");
                     chat_composer_textarea.appendChild(document.createElement("label")).id = "charcount";
                     chat_composer_textarea.appendChild(document.createElement("pre")).classList.add("nds-chat-send-button");
 
                     // create textarea
                     var textarea = chat_composer_textarea.appendChild(document.createElement("textarea"));
                     textarea.id = "txMessage";
                     textarea.maxLength = 140;
                     textarea.placeholder = textAreaTxt;
 
                     // set elements
                     elements.divChatbox = document.getElementById("nds-chat-chatbox");
                     elements.txMessage = document.getElementById("txMessage");
                     elements.sendButton = document.querySelector(".nds-chat-send-button");
                     elements.sendButton.id = "nds-chatbot-send-button";
                     elements.chatComposer = document.getElementById("nds-chat-composer");
                     elements.returnBtn = document.getElementById("nds-chat-return");
                     elements.submitBtn = document.getElementById("nds-chat-submit");
                     elements.closeBtn = document.getElementById("nds-chat-launcher-close");
 
                     // initialize timers
                     NDSchat.initTimers();
                 }
 
                 // load client path or initialize
                 client_path = localStorage.getItem("client_path") !== null ? JSON.parse(localStorage.getItem("client_path")) : [];
                 client_path.push({
                     url: window.location.href
                 });
 
                 // if desktop, focus the textarea every time
                 if (!nds_utils.mobilecheck) {
                     document.getElementById("txMessage").onblur = function (event) {
                         var blur = this;
                         setTimeout(function () {
                             blur.focus();
                         }, 1000);
                     };
                 }
 
                 // set charcount as 0 at the begining
                 charcount.innerHTML = "0/140";
 
                 // if there is post survey
                 if (config.require_postsurvey) {
                     setTimeout(function () {
                         _.toArray(document.querySelectorAll(".content-image-satisfaction input")).forEach(function (element) {
                             element.onclick = function () {
                                 var recommendation_divs = document.getElementsByClassName("question");
                                 _.toArray(recommendation_divs).forEach(function (element) {
                                     if (element.getAttribute("style"))
                                         element.setAttribute("style", "display: block;");
                                 });
                             };
                         });
 
                         // set survey submit button
                         elements.submitBtn.onclick = function () {
                             // remove the conversation screen and add the postsurvey window
                             document.getElementById("nds-chat-conversation").style.display = "block";
                             document.getElementById("nds-chat-survey").style.display = "none";
                             // send user to post survey flow
                             NDSchat.postSurvey();
                             // session is ended
                             session_ended = true;
                         };
                     }, 1e3 * 5);
                 }
 
                 // Define the send button behaviour
                 elements.sendButton.onclick = function () {
                     var input = elements.txMessage.value.toString().trim();
                     var unspacer = /\r?\n|\r/g;
                     if (input.length == 0) return;
 
                     // Clean the input from the user
                     // TODO: Add mask function before add the input to the text
                     input = input.replace(/<(.|\n)*?/g, "").replace(unspacer, "");
                     text += " " + input;
                     elements.txMessage.value = "";
                     if (input.trim() == "") return;
 
                     NDSchat.addMessage(input, new Date(), client_name);
 
 
                     text = text.trim();
                     if (withAgent) {
                         webChat.sendIsTyping(false);
                         webChat.sendChatMessage(text);
                         text = "";
                     } else if (text !== "" && answerList.length >= widget.minimum_responses) {
                         timer = setTimeout(function () {
                             timer = null;
                             NDSchat.sendMessage(text);
                             return;
                         }, 3e3);
                     } else if (text !== "") {
                         timer = null;
                         NDSchat.sendMessage(text);
                         return;
                     }
 
                 };
 
                 var keyhandler = function (entered_key) {
                     // get entered key
                     entered_key = window.event || entered_key;
 
                     // get keyCode
                     var keyCode = entered_key.which ? entered_key.which : entered_key.keyCode;
                     var charcount = document.getElementById("charcount");
 
                     if (withAgent)
                         elements.txMessage.length > 0 ? webChat.sendIsTyping(true) : webChat.sendIsTyping(false);
 
                     // if maxlength reached enable error class
                     if (!("maxlength" in elements.txMessage)) {
                         charcount.classList.remove('limit-characters');
                         var max = parseInt(elements.txMessage.getAttribute("maxlength"));
                         elements.txMessage.onkeypress = function (t) {
                             if (this.value.length + 1 >= max) charcount.classList.add("limit-characters");
                         };
                     }
 
 
                     // increment or decrement innerhtml value
                     charcount.innerHTML = elements.txMessage.value.length !== 140 ? (elements.txMessage.value.length).toString() + "/140" : "140/140";
 
                     // Wait for another message for three seconds
                     if (elements.txMessage.value.toString().trim().length > 0) {
                         clearTimeout(timer);
                     } else {
                         if (text && keyCode !== 13) {
                             NDSchat.initTimers();
                             timer = setTimeout(function () {
                                 timer = null;
                                 NDSchat.sendMessage(text);
                                 text = "";
                                 return;
                             }, 3e3);
                         }
                     }
 
                     if (13 === keyCode && !entered_key.shiftKey) {
                         charcount.innerHTML = "0/140";
                         entered_key.preventDefault ? entered_key.preventDefault() : (entered_key.returnValue = false);
 
                         var input = elements.txMessage.value.toString().trim();
                         var unspacer = /\r?\n|\r/g;
                         if (input.trim().length == 0) return;
 
                         // Clean the input from the user
                         // TODO: Add mask function before add the input to the text
                         input = input.replace(/<(.|\n)*?/g, "").replace(unspacer, "");
 
                         if (remove_special_characters) {
                             input = input.replace(/[^a-zA-Z0-9\s]/g, "")
                         }
 
                         text += " " + input;
                         elements.txMessage.value = "";
                         if (input.trim() == "") return;
 
                         NDSchat.addMessage(input, new Date(), client_name);
 
 
                         text = text.trim();
 
                         if (withAgent) {
                             webChat.sendIsTyping(false);
                             webChat.sendChatMessage(text);
                             text = "";
                         } else if (text !== "" && answerList.length >= widget.minimum_responses) {
                             timer = setTimeout(function () {
                                 timer = null;
                                 NDSchat.sendMessage(text);
                                 return;
                             }, 3e3);
                         } else if (text !== "") {
                             timer = null;
                             NDSchat.sendMessage(text);
                             return;
                         }
 
                     }
                 }; // end key handler
 
                 if (elements.txMessage !== undefined) elements.txMessage.onkeyup = keyhandler;
 
                 if (!listener) {
                     listener = window.addEventListener ? "addEventListener" : "attachEvent";
                     (0, window[listener])("attachEvent" == listener ? "onmessage" : "message", function (event) {
                         var message = event[event.message ? "message" : "data"];
                         if ("nds-chat-open" === message) NDSchat.open();
                         else if ("nds-chat-close" === message) NDSchat.close();
                         else if ("nds_geoerror" === message) NDSchat.getContextNode("loc-15", true);
                         else {
                             var data = message.split("_");
                             if ("nds-chat-openwm" == data[0] && data[1] !== "null" && data[2] !== "null") {
                                 NDSchat.openWithMessage(data[1], data[2]);
                             }
                             if ("account" == data[0] && "id" == data[1]) NDSchat.state.accountID = void 0 !== NDSchat.state.accountID ? NDSchat.state.accountID : data[2];
                             if ("latlng" == data[0]) {
                                 var chat_latlng = [];
                                 chat_latlng.push(data[1]);
                                 chat_latlng.push(data[2]);
                                 var latlng = data[1] + "," + data[2];
                                 // var keyword = watson.context;
                                 NDSchat.getLocation(latlng, "", null);
                             }
                             if ("jump" === data[0] && "to" === data[1]) {
                                 if (session_ended) {
                                     clearTimeout(not_input_timeout);
                                     clearTimeout(not_input_timeout2);
                                     clearTimeout(chat_closed_timeout);
                                 }
 
                                 if ("" !== data[2]) {
                                     var modal = window.parent.document.getElementsByClassName("modal-container");
 
                                     if (modal.length > 0) {
                                         nds_utils.removeClass(modal[0], "-activeVideoModal");
                                     }
 
                                     in_more_info = false;
 
                                     NDSchat.getContextNode(data[2], true);
                                 }
                             }
                         }
                     }, false);
                 }
 
                 setInterval(function () {
                     _.toArray(document.querySelectorAll(".nds-chat-relative-time"))
                         .forEach(function (e) {
                             var t = new Date(e.getAttribute("data-timestamp")),
                                 n = nds_utils.timeSince(t, minutesTxt, justNowTxt);
                             e.innerHTML = n;
                         });
                 }, 6e4);
 
 
                 if (window.collectEmbedded) {
                     if (document.getElementById("loader") && (document.getElementById("loader").style.display = "none")) {
                         NDSchat.open();
                     }
                 }
             },
             /** End of init functions */
             /* Messages handlers */
             /**
              * This function will pre-process the message before selecting the visualization of this
              * also checks if the message is empty or if it's an image to display
              *
              * @param {string} answer - The answer from the user
              */
             sendMessage: function (answer) {
 
                 var parameter = " ";
                 if (questionList[questionList.length - 1].validate) {
                     var and_validate = questionList[questionList.length - 1].validate.and;
                     var or_validate = questionList[questionList.length - 1].validate.or;
                     var and_validation = true;
                     var or_validation = false;
                     var count = 0;
 
                     if (and_validate) {
                         for (count; count < and_validate.length; ++count) {
                             and_validation = and_validation && NDSchat.validateData(and_validate[count], answer);
                             if (!and_validation) {
                                 parameter = and_validate[count];
                                 break;
                             }
                         }
                     }
 
                     if (or_validate && and_validation) {
                         for (count = 0; count < or_validate.length; ++count) {
                             or_validation = or_validation || NDSchat.validateData(or_validate[count], answer);
                             if (count === or_validate.length - 1) {
                                 parameter += or_validate[count] + " ";
                             } else {
                                 parameter += or_validate[count] + "/";
                             }
                         }
                     }
 
                     var passed_validation = and_validation && or_validation;
 
                     if (passed_validation) {
                         if (answer.trim() != "") {
                             answerList.push({
                                 question: questionList[this.state.activeQuestion].id,
                                 answer: answer
                             });
                             NDSchat.getNextQuestion(answer);
                         }
 
                         if (!nds_utils.mobilecheck()) {
                             elements.txMessage.blur();
                         }
 
                     } else {
                         var back_buttons = document.querySelectorAll(".button_back_chat");
                         _.toArray(back_buttons).forEach(function (element) {
                             element.parentElement.removeChild(element);
                         });
 
                         var error_text = widgetTexts.validation_error_text.replace("{{}}", parameter.replace("client_num", "número de cliente"));
 
                         var object_response = NDSchat.defineResponseObject(error_text, "Question", "text", "Question");
                         object_response.validate = questionList[questionList.length - 1].validate;
                         NDSchat.addQuestion(object_response);
                     }
                 } else {
                     if (answer.trim() != "") {
                         answerList.push({
                             question: questionList[this.state.activeQuestion].id,
                             answer: answer
                         });
                         NDSchat.getNextQuestion(answer);
                     }
 
                     if (!nds_utils.mobilecheck()) {
                         elements.txMessage.blur();
                     }
 
                 }
 
                 text = "";
             },
             /**
              * This method add a message bubble and handle the waiting bubbles animation
              * @param {string} message - The message that is going to be added
              * @param {Date} current_date - The date object of this message
              * @param {string} current_user - Who sent the message
              */
             addMessage: function (message, current_date, current_user) {
                 // Save the message before modifying it
                 var tmp_message = message;
                 if (inserted_card) {
                     c_number = tmp_message;
                     var masked_card = "************" + tmp_message.substr(tmp_message.length - 4, 4);
                     tmp_message = masked_card;
                     inserted_card = false;
                 }
                 var conversation_parts = document.getElementById("nds-chat-message");
 
                 var animation_from_bottom = function () {
                     this.classList.remove("fromBottomToUp");
                     this.removeEventListener("animationend", animation_from_bottom, false);
                 };
 
                 // Sets who is sending the interaction
                 this.state.current = this.config.user == current_user ? "user" : "nds-chat";
 
                 var bubbles_class = "",
                     m, body_container, avatar,
                     conversation_parts_classes,
                     metadata_container = document.querySelector(".nds-chat-comment-metadata-container"),
                     metadata_container_styles = "";
 
                 // Check if appending the bubbles is needed
                 if (need_thinking) {
                     if (this.state.current === "nds-chat") {
                         bubbles_class = "nds-chat-thinking-body";
                         message = '<div class="thinking-indicator"><span></span>';
                         message += '<span></span><span></span></div><div id="nds-chatbot-message-';
                         message += (++this.tags.chatbot_message);
                         message += '" class="nds-chat-comment-content">';
                         message += tmp_message;
                         message += "</div>";
 
                         // Remove bubbles after certain time
                         setTimeout(function () {
                             NDSchat.removeBubbles();
                         }, this.config.thinkingTime);
 
                     } else {
                         NDSchat.removeBubbles();
                         message = '<div id="nds-chatbot-user-';
                         message += (++this.tags.user_message);
                         message += '" class="nds-chat-comment-content">';
                         message += tmp_message;
                         message += "</div>";
                     }
                 } else {
                     if (this.state.current === "nds-chat") {
                         message = '<div id="nds-chatbot-message-';
                         message += (++this.tags.chatbot_message);
                         message += '" class="nds-chat-comment-content">';
                         message += tmp_message;
                         message += "</div>";
                     } else {
                         message = '<div id="nds-chatbot-user-';
                         message += (++this.tags.user_message);
                         message += '" class="nds-chat-comment-content">';
                         message += tmp_message;
                         message += "</div>";
                     }
                     need_thinking = true;
                 }
 
                 body_container = '<div class="nds-chat-comment-body-container"> <div class="lp_chat_arrow_border"></div><div class="lp_chat_arrow"></div>';
                 body_container += '<div class="nds-chat-comment-body ' + bubbles_class + '">';
                 body_container += message;
 
                 var comment_container = document.createElement("div");
                 nds_utils.addClass(comment_container, "nds-chat-comment nds-chat-comment-by-" + this.state.current);
                 comment_container.innerHTML = body_container;
 
                 if (this.state.last != this.state.current) {
                     if (metadata_container) {
                         nds_utils.removeClass(metadata_container, "nds-chat-comment-metadata-container");
                         nds_utils.addClass(metadata_container, "nds-chat-comment-metadata-container-static");
                     }
                 } else {
                     metadata_container.parentNode.removeChild(metadata_container);
                 }
 
                 window.metadata = this.metadata = document.createElement("div");
                 nds_utils.addClass(this.metadata, "nds-chat-comment-metadata-container");
                 metadata_container_styles = '<div class="nds-chat-comment-metadata"><span class="nds-chat-comment-state"></span>';
                 metadata_container_styles += '<span class="nds-chat-relative-time" data-timestamp="';
                 metadata_container_styles += current_date;
                 metadata_container_styles += '">' + justNowTxt + '</span></div><div class="nds-chat-comment-readstate"></div></div>';
                 this.metadata.innerHTML = metadata_container_styles;
                 comment_container.appendChild(this.metadata);
                 body_container = comment_container.outerHTML;
 
                 conversation_parts_classes = "nds-chat-conversation-part nds-chat-conversation-part-grouped";
                 if (this.state.last != this.state.current) {
                     if ("nds-chat" == this.state.current) {
                         // show avatar if needed
                         avatar =
                             "undefined" != typeof config.avatar ?
                                 config.avatar :
                                 "http://i.imgur.com/vbnL8Wz.png";
                         body_container =
                             '<div style="background-image: url(' +
                             avatar +
                             ')" class="nds-chat-comment-avatar nds-chat-theme-bg"></div>' +
                             body_container;
                     }
                     conversation_parts_classes += "-first";
                 }
                 conversation_parts_classes += " fromBottomToUp";
 
                 bubble_parent_div = document.createElement("div");
                 bubble_parent_div.className = conversation_parts_classes;
                 bubble_parent_div.innerHTML = body_container;
                 bubble_parent_div.addEventListener("animationend", animation_from_bottom, false);
                 conversation_parts.appendChild(bubble_parent_div);
                 conversation_parts.scrollTop = conversation_parts.scrollHeight;
                 this.state.last = this.state.current;
                 if (this.state.current == 'nds-chat' && this.state.microphone) {
                     this.state.microphone = false;
                     var audio_text = bubble_parent_div.childNodes[1].childNodes[0].childNodes[3].childNodes[0]
                         .childNodes[0].childNodes[0].innerHTML;
                     // console.log(audio_text);
                     var regex = /(<([^>]+)>)/ig;
                     audio_text = audio_text.replace(regex, "");
                     // console.log(audio_text);
                     // parent.postMessage("text_2_speech", "*");
                     nds_utils.minAjax({
                         url: 'https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=',
                         type: "POST",
                         data: {
                             "input": {
                                 "text": audio_text
                             },
                             "voice": {
                                 "languageCode": "es-MX"
                             },
                             "audioConfig": {
                                 "audioEncoding": "LINEAR16"
                             }
                         },
                         json: true,
                         success: function (response) {
                             var responseJSON = JSON.parse(response);
                             // console.log(responseJSON);
 
                             var byteCharacters = atob(responseJSON.audioContent);
                             var byteArrays = [];
                             var sliceSize = 512;
                             var contentType = '';
 
                             for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                                 var slice = byteCharacters.slice(offset, offset + sliceSize);
 
                                 var byteNumbers = new Array(slice.length);
                                 for (var i = 0; i < slice.length; i++) {
                                     byteNumbers[i] = slice.charCodeAt(i);
                                 }
 
                                 var byteArray = new Uint8Array(byteNumbers);
                                 byteArrays.push(byteArray);
                             }
 
                             var blob = new Blob(byteArrays, { type: contentType });
 
                             var url = URL.createObjectURL(blob);
                             var audio_tag = document.createElement("AUDIO");
                             audio_tag.src = url;
                             audio_tag.play();
                         }
                     });
                 }
                 var sheet_content = document.querySelector(".nds-chat-sheet-content");
                 nds_utils.scrollTo(sheet_content, sheet_content.scrollHeight, 400);
 
                 if (not_timeout && !session_ended && answerList.length >= 0) {
                     NDSchat.initTimers();
                 } else {
                     not_timeout = true;
                 }
             },
             /**
              * This function will call the specific endpoints for banorte
              * fluxes and returns the answer from the API
              * @param {string} endpoint - The endpoint to be reached
              * @param {string} method - The method to call the endpoint
              * @param {object} data - The data to be sended
              * @callback callback - The data returned from the API
              */
             getIntegrationsEndpoint: function (endpoint, method, data, callback) {
                 nds_utils.minAjax({
                     url: config.url + config.api_version + endpoint,
                     type: method,
                     headers: {
                         "Content-Type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     },
                     data: data,
                     json: true,
                     success: function (response) {
                         response = JSON.parse(response);
                         callback(response);
                     },
                     error: function (status, readyState, code) {
                         NDSchat.removeBubbles();
                         NDSchat.handleError(code);
                     }
                 });
             },
             /**
              * This function is in charge of set the type of message and the variables needed for every
              * flux, creates bubbles and question templates
              * @param {string} lastAnswer - The last answer of the user
              */
             handleAuthFlux: function (lastAnswer) {
                 var body = {}, object_response, contractType, d, currentMonth, currentYear;
                 if (card_filter_response) {
                     NDSchat.removeButtons();
                     card_filter_response = false;
                     if (lastAnswer == "Centro Financiero") {
                         use_case_flux = false;
                         card_filter_response = false;
                         use_case_action = "";
                         NDSchat.removeBubbles();
                         object_response = NDSchat.defineResponseObject(widgetTexts.card_filter, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     } else {
                         NDSchat.removeBubbles();
                         object_response = NDSchat.defineResponseObject(widgetTexts.card_client_number, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         get_client_data = true;
                     }
                 }
                 else if (get_client_number_by_contract_data) {
                     //verifies client number inserted
 
 
                     body.contractNumber = lastAnswer;
                     get_client_number_by_contract_data = false;
                     NDSchat.getIntegrationsEndpoint('getClientNumber', "POST", body, function (response) {
                         NDSchat.removeBubbles();
                         final_use_case = true;
                         if (!response.error) {
                             //filter results that have no value
                             unique_client_number = response.clientNumber;
                             NDSchat.handleAuthFlux(unique_client_number);
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
                 }
                 else if (get_client_data) {
 
                     body.ClientNumber = lastAnswer;
                     NDSchat.getIntegrationsEndpoint('getClientInfo', "POST", body, function (response) {
                         get_client_data = false;
                         NDSchat.removeBubbles();
                         if (!response.error) {
 
 
                             NDSchat.createInteractionUseCase(lastAnswer, widgetTexts.asking_client_number_acct)
 
                             retryCount = 0;
                             actinver_number = lastAnswer;
                             actinver_phones = response.phoneNumbers;
                             actinver_emails = response.emails;
                             var have_phones = actinver_phones.length > 0;
 
                             //If we only have phones ask for the last 4 digits
                             if (have_phones) {
 
                                 choose_token_method = true;
                                 token_method = "sms";
                                 phone_validation = true;
                                 NDSchat.handleAuthFlux("");
                             } else {
                                 use_case_flux = false;
                                 NDSchat.removeButtons();
                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_phones, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         } else {
                             //If not client, ask for the user information
                             if (retryCount >= 2) {
                                 use_case_flux = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.try_again_later, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 retryCount++;
                                 get_client_data = true;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_client_number, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         NDSchat.searchLinkClasses();
 
                     });
                 }
                 else if (choose_token_method) {
                     NDSchat.removeButtons();
                     NDSchat.removeBubbles();
                     choose_token_method = false;
 
                     NDSchat.IsBirthday();
 
                 }
                 else if (phone_validation) {
                     NDSchat.removeButtons();
                     var phone_registered = false;
                     phone_registered_spei = lastAnswer;
 
                     for (var index = 0; index < actinver_phones.length; index++) {
                         var element = actinver_phones[index];
                         phone_registered = element.phoneNumber.substr(element.phoneNumber.length - 4) == lastAnswer;
                         if (phone_registered) break;
                     }
                     if (phone_registered) {
                         body.phoneNumberDigits = lastAnswer;
                         body.clientNumber = actinver_number;
                         NDSchat.getIntegrationsEndpoint('sendSMS', "POST", body, function (response) {
                             get_client_data = false;
                             get_client_number_by_contract_data = false;
                             retryCount = 0;
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 validate_phone_code = true;
                                 phone_validation = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_for_dynamic_token, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 phone_validation = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
 
                         });
                     } else {
                         NDSchat.removeBubbles();
                         if (retryCount >= 2) {
                             use_case_flux = false;
                             phone_validation = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.no_number_associated, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         } else {
                             retryCount++;
                             object_response = NDSchat.defineResponseObject(widgetTexts.wrong_phonenumber, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                     }
                 }
                 else if (new_statement) {
                     NDSchat.removeButtons();
                     final_use_case = false;
                     new_statement = false;
                     select_contract = true;
                     body = {};
                     body.ClientNumber = actinver_number;
                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                         NDSchat.removeBubbles();
                         if (!response.error) {
 
                             object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                             actinver_contracts = [];
                             response.bankContracts.forEach(function (element) {
                                 var a = NDSchat.maskContract(element);
                                 actinver_contracts.push(a);
                                 ContractsDict[element] = 1;
                             });
                             if (!use_case_action == "cuenta_clabe") {
                                 response.houseContracts.forEach(function (element) {
                                     var a = NDSchat.maskContract(element);
                                     actinver_contracts.push(a);
                                     ContractsDict[element] = 2;
                                 });
                             }
                             object_response.options = actinver_contracts;
                             NDSchat.addQuestion(object_response);
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             validate_phone_code = false;
                             select_contract = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
                 }
                 else if (validate_phone_code) {
                     NDSchat.removeButtons();
                     validate_phone_code = false;
 
                     body.Token = lastAnswer;
                     body.ClientNumber = actinver_number;
 
 
 
 
                     NDSchat.getIntegrationsEndpoint('validatePassword', "POST", body, function (response) {
                         //if (!response.error) { 
                         if (!response.error) {
                             //TODO
                             if (response.validated) {
                                 //if (response.validated) {
                                token_value = lastAnswer;
                                 NDSchat.createInteractionUseCase(lastAnswer, widgetTexts.security_token_received);
 
                                 retryCount = 0;
                                 if (use_case_action == "saldo" || use_case_action == "activacion_tdd") {
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             object_response = NDSchat.defineResponseObject(use_case_action == "activacion_tdd" ? widgetTexts.showing_contracts_tdd : widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                             actinver_contracts = [];
                                             response.bankContracts.forEach(function (element) {
                                                 var a = NDSchat.maskContract(element);
                                                 actinver_contracts.push(a);
                                                 ContractsDict[element] = 1;
                                             });
                                             response.houseContracts.forEach(function (element) {
                                                 var a = NDSchat.maskContract(element);
                                                 actinver_contracts.push(a);
                                                 ContractsDict[element] = 2;
                                             });
                                             object_response.options = actinver_contracts;
                                             NDSchat.addQuestion(object_response);
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                                 else if (use_case_action == "edo_cta" || use_case_action == "constancia") {
                                     NDSchat.removeBubbles();
                                     verify_email = true;
                                     if (actinver_emails.length <= 0) {
                                         object_response = NDSchat.defineResponseObject(widgetTexts.no_email, "Single Choice", "option", "Question");
                                         object_response.options = actinver_emails;
                                         NDSchat.addQuestion(object_response);
                                     } else {
                                         object_response = NDSchat.defineResponseObject(widgetTexts.validate_email, "Single Choice", "option", "Question");
                                         object_response.options = actinver_emails;
                                         NDSchat.addQuestion(object_response);
                                     }
                                 } else if (use_case_action == "token") {
                                     NDSchat.removeBubbles();
                                     select_contract = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else if (use_case_action == "cuenta_clabe") {
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                             actinver_contracts = [];
                                             response.bankContracts.forEach(function (element) {
                                                 var a = NDSchat.maskContract(element);
                                                 actinver_contracts.push(a);
                                                 ContractsDict[element] = 1;
                                             });
                                             object_response.options = actinver_contracts;
                                             NDSchat.addQuestion(object_response);
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                                 else if (use_case_action == "cliente_unico") {
                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_client_number + unique_client_number, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     closing_flux = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else if (use_case_action == "spei") {
                                     if (send_spei) {
                                         confirm_successful_spei = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
 
                                         select_contract = true;
                                         body = {};
                                         body.ClientNumber = actinver_number;
                                         NDSchat.getIntegrationsEndpoint('getContractsSpei', "POST", body, function (response) {
                                             NDSchat.removeBubbles();
                                             if (!response.error) {
                                                 actinver_contracts = [];
                                                 actinver_bank_contracts = [];
                                                 actinver_house_contracts = [];
                                                 var bank_contracts = false;
                                                 var house_contracts = false;
 
                                                 if (response.bankContracts.length > 0) {
                                                     bank_contracts = true;
                                                     response.bankContracts.forEach(function (element) {
                                                         var a = NDSchat.maskContract(element);
                                                         actinver_bank_contracts.push(a);
                                                         ContractsDict[element] = 1;
                                                     });
                                                 }
                                                 if (response.houseContracts.length > 0) {
                                                     house_contracts = true;
                                                     response.houseContracts.forEach(function (element) {
                                                         var a = NDSchat.maskContract(element);
                                                         actinver_house_contracts.push(a);
                                                         ContractsDict[element] = 2;
                                                     });
                                                 }
 
                                                 if ((bank_contracts) && (house_contracts)) {
                                                     NDSchat.removeButtons();
                                                     object_response = NDSchat.defineResponseObject("La Transferencia SPEI será de un contrato de:", "Single Choice", "option", "Question");
                                                     object_response.options = ["Banco", "Casa de bolsa Bursanet"];
                                                     NDSchat.addQuestion(object_response);
                                                     select_bank_or_house = true;
                                                     select_contract = false;
                                                 }
                                                 else if (bank_contracts) {
                                                     select_contract = true;
                                                     contracts_numbers = [MaskedContractsDict[lastAnswer]];
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                                                     NDSchat.addQuestion(object_response);
                                                     NDSchat.removeButtons();
 
 
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                                     actinver_contracts = actinver_bank_contracts;
                                                     object_response.options = actinver_contracts;
                                                     NDSchat.addQuestion(object_response);
                                                 }
                                                 else if (house_contracts) {
                                                     contracts_numbers = [MaskedContractsDict[lastAnswer]];
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                                                     NDSchat.addQuestion(object_response);
                                                     NDSchat.removeButtons();
 
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                                     actinver_contracts = actinver_house_contracts;
                                                     object_response.options = actinver_contracts;
                                                     NDSchat.addQuestion(object_response);
                                                     select_contract = true;
                                                 }
 
 
                                             } else {
                                                 // If not client, ask for the user information
                                                 use_case_flux = false;
                                                 validate_phone_code = false;
                                                 select_contract = false;
                                                 token_method = "";
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                             }
                                             NDSchat.searchLinkClasses();
                                         });
                                     }
                                 }
 
                                 else if (use_case_action == "venta_fondos") {
                                     if (send_fund) {
                                         if (select_choice_bank_or_house === "Banco") {
                                             confirm_successful_fund_bank = true;
                                             NDSchat.handleAuthFlux("");
                                         }
                                         else {
                                             confirm_successful_fund = true;
                                             NDSchat.handleAuthFlux("");
                                         }
                                     }
                                     else {
 
 
                                         select_contract = true;
                                         body = {};
                                         body.ClientNumber = actinver_number;
                                         NDSchat.getIntegrationsEndpoint('getContractsSpei', "POST", body, function (response) {
                                             NDSchat.removeBubbles();
                                             if (!response.error) {
                                                 actinver_contracts = [];
                                                 actinver_bank_contracts = [];
                                                 actinver_house_contracts = [];
                                                 var bank_contracts = false;
                                                 var house_contracts = false;
                                                 showing_contracts = widgetTexts.showing_contracts;
 
 
                                                 if (response.bankContracts.length > 0) {
                                                    
                                                     bank_contracts = true;
                                                     response.bankContracts.forEach(function (element) {
                                                         var a = NDSchat.maskContract(element);
                                                         actinver_bank_contracts.push(a);
                                                         ContractsDict[element] = 1;
                                                     });
                                                 }
                                                 if (response.houseContracts.length > 0) {
                                                     house_contracts = true;
                                                     response.houseContracts.forEach(function (element) {
                                                         var a = NDSchat.maskContract(element);
                                                         actinver_house_contracts.push(a);
                                                         ContractsDict[element] = 2;
                                                     });
                                                 }
 
                                                 if ((bank_contracts) && (house_contracts)) {
                                                     NDSchat.removeButtons();
                                                     object_response = NDSchat.defineResponseObject("La venta de fondos será de un contrato de:", "Single Choice", "option", "Question");
                                                     object_response.options = ["Banco", "Casa de bolsa Bursanet"];
                                                     NDSchat.addQuestion(object_response);
                                                     fund_select_bank_or_house = true;
                                                     select_contract = false;
                                                 }
                                                 else if (bank_contracts) {
                                                     select_contract = true;
                                                     select_choice_bank_or_house = "Banco";
 
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
 
                                                     actinver_contracts = actinver_bank_contracts;
                                                     object_response.options = actinver_contracts;
                                                     NDSchat.addQuestion(object_response);
                                                 }
                                                 else if (house_contracts) {
                                                     select_choice_bank_or_house = "Casa de bolsa Bursanet";
 
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
 
                                                     actinver_contracts = actinver_house_contracts;
                                                     object_response.options = actinver_contracts;
                                                     NDSchat.addQuestion(object_response);
                                                     select_contract = true;
                                                 }
                                                 else {
                                                     use_case_flux = false;
                                                     validate_phone_code = false;
                                                     select_contract = false;
                                                     token_method = "";
                                                     object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                                     NDSchat.addQuestion(object_response);
                                                 }
 
 
                                             } else {
                                                 // If not client, ask for the user information
                                                 use_case_flux = false;
                                                 validate_phone_code = false;
                                                 select_contract = false;
                                                 token_method = "";
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                             }
                                             NDSchat.searchLinkClasses();
                                         });
                                     }
                                 }
                                 else if (use_case_action == "bloqueo_tdd") {
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                             actinver_contracts = [];
                                             response.bankContracts.forEach(function (element) {
                                                 var a = NDSchat.maskContract(element);
                                                 actinver_contracts.push(a);
                                                 ContractsDict[element] = 1;
                                             });
                                             object_response.options = actinver_contracts;
                                             NDSchat.addQuestion(object_response);
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
 
                                 else if (use_case_action == "desbloqueo_tdd") {
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                             actinver_contracts = [];
                                             response.bankContracts.forEach(function (element) {
                                                 var a = NDSchat.maskContract(element);
                                                 actinver_contracts.push(a);
                                                 ContractsDict[element] = 1;
                                             });
                                             object_response.options = actinver_contracts;
                                             NDSchat.addQuestion(object_response);
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                                 else if (use_case_action == "ivr_geolocalizacion") {
                                    NDSchat.removeBubbles();
                                    select_contract = true;
                                    object_response = NDSchat.defineResponseObject("¿Para continuar será necesario nos compartas tu ubicacion, ¿estas de acuerdo?", "Yes No", "option", "Question");
                                    object_response.options = ["No", "Sí"];
                                    NDSchat.addQuestion(object_response);
                                }
                             }
 
                             else {
                                 validate_phone_code = true;
                                 if (retryCount >= 2) {
                                     use_case_flux = false;
                                     validate_phone_code = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.retry_exceeded, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     object_response = NDSchat.defineResponseObject(widgetTexts.agent_request, "Yes No", "confirmAgent", "Question");
                                     object_response.options = ["No", "Sí"];
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     retryCount++;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.wrong_password, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                             }
                         }
 
                         else if (is_option_fund_bank) {
 
                             if (use_case_action == "spei") {
                                 if (send_spei) {
                                     confirm_successful_spei = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else {
 
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContractsSpei', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             actinver_contracts = [];
                                             actinver_bank_contracts = [];
                                             actinver_house_contracts = [];
                                             var bank_contracts = false;
                                             var house_contracts = false;
 
                                             if (response.bankContracts.length > 0) {
                                                 bank_contracts = true;
                                                 response.bankContracts.forEach(function (element) {
                                                     var a = NDSchat.maskContract(element);
                                                     actinver_bank_contracts.push(a);
                                                     ContractsDict[element] = 1;
                                                 });
                                             }
                                             if (response.houseContracts.length > 0) {
                                                 house_contracts = true;
                                                 response.houseContracts.forEach(function (element) {
                                                     var a = NDSchat.maskContract(element);
                                                     actinver_house_contracts.push(a);
                                                     ContractsDict[element] = 2;
                                                 });
                                             }
 
                                             if ((bank_contracts) && (house_contracts)) {
                                                 NDSchat.removeButtons();
                                                 object_response = NDSchat.defineResponseObject("La Transferencia SPEI será de un contrato de:", "Single Choice", "option", "Question");
                                                 object_response.options = ["Banco", "Casa de bolsa Bursanet"];
                                                 NDSchat.addQuestion(object_response);
                                                 select_bank_or_house = true;
                                                 select_contract = false;
                                             }
                                             else if (bank_contracts) {
                                                 select_contract = true;
                                                 contracts_numbers = [MaskedContractsDict[lastAnswer]];
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                                 NDSchat.removeButtons();
 
 
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                                 actinver_contracts = actinver_bank_contracts;
                                                 object_response.options = actinver_contracts;
                                                 NDSchat.addQuestion(object_response);
                                             }
                                             else if (house_contracts) {
                                                 contracts_numbers = [MaskedContractsDict[lastAnswer]];
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                                 NDSchat.removeButtons();
 
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                                 actinver_contracts = actinver_house_contracts;
                                                 object_response.options = actinver_contracts;
                                                 NDSchat.addQuestion(object_response);
                                                 select_contract = true;
                                             }
 
 
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                             }
 
                             else if (use_case_action == "venta_fondos") {
                                 if (send_fund) {
                                     if (select_choice_bank_or_house === "Banco") {
                                         confirm_successful_fund_bank = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
                                         confirm_successful_fund = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                 }
                                 else {
 
 
                                     select_contract = true;
                                     body = {};
                                     body.ClientNumber = actinver_number;
                                     NDSchat.getIntegrationsEndpoint('getContractsSpei', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             actinver_contracts = [];
                                             actinver_bank_contracts = [];
                                             actinver_house_contracts = [];
                                             var bank_contracts = false;
                                             var house_contracts = false;
                                             showing_contracts = widgetTexts.showing_contracts;
 
 
                                             if (response.bankContracts.length > 0) {
 
                                                 bank_contracts = true;
                                                 response.bankContracts.forEach(function (element) {
                                                     var a = NDSchat.maskContract(element);
                                                     actinver_bank_contracts.push(a);
                                                     ContractsDict[element] = 1;
                                                 });
                                             }
                                             if (response.houseContracts.length > 0) {
                                                 house_contracts = true;
                                                 response.houseContracts.forEach(function (element) {
                                                     var a = NDSchat.maskContract(element);
                                                     actinver_house_contracts.push(a);
                                                     ContractsDict[element] = 2;
                                                 });
                                             }
 
                                             if ((bank_contracts) && (house_contracts)) {
                                                 NDSchat.removeButtons();
                                                 object_response = NDSchat.defineResponseObject("La venta de fondos será de un contrato de:", "Single Choice", "option", "Question");
                                                 object_response.options = ["Banco", "Casa de bolsa Bursanet"];
                                                 NDSchat.addQuestion(object_response);
                                                 fund_select_bank_or_house = true;
                                                 select_contract = false;
                                             }
                                             else if (bank_contracts) {
                                                 select_contract = true;
                                                 select_choice_bank_or_house = "Banco";
 
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
 
                                                 actinver_contracts = actinver_bank_contracts;
                                                 object_response.options = actinver_contracts;
                                                 NDSchat.addQuestion(object_response);
                                             }
                                             else if (house_contracts) {
                                                 select_choice_bank_or_house = "Casa de bolsa Bursanet";
 
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
 
                                                 actinver_contracts = actinver_house_contracts;
                                                 object_response.options = actinver_contracts;
                                                 NDSchat.addQuestion(object_response);
                                                 select_contract = true;
                                             }
                                             else {
                                                 use_case_flux = false;
                                                 validate_phone_code = false;
                                                 select_contract = false;
                                                 token_method = "";
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                             }
 
 
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             validate_phone_code = false;
                                             select_contract = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                             }
 
                         }
                         else {
                             NDSchat.removeBubbles();
                             validate_phone_code = true;
                             if (retryCount >= 2) {
                                 use_case_flux = false;
                                 validate_phone_code = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.retry_exceeded, "Question", "text", "Question");
                                 object_response = NDSchat.defineResponseObject(widgetTexts.agent_request, "Yes No", "confirmAgent", "Question");
                                 object_response.options = ["No", "Sí"];
                                 NDSchat.addQuestion(object_response);
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_password, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         NDSchat.searchLinkClasses();
 
                     });
                 }
                 else if (select_bank_or_house) {
                     NDSchat.removeButtons();
                     NDSchat.removeBubbles();
                     select_bank_or_house = false;
                     select_contract = true;
                     if (lastAnswer === "Banco") {
                         contracts_numbers = [MaskedContractsDict[lastAnswer]];
                         object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                         actinver_contracts = actinver_bank_contracts;
                         object_response.options = actinver_contracts;
                         NDSchat.addQuestion(object_response);
 
                     }
                     else if (lastAnswer === "Casa de bolsa Bursanet") {
                         contracts_numbers = [MaskedContractsDict[lastAnswer]];
                         object_response = NDSchat.defineResponseObject(widgetTexts.asking_geolocalizacion_spei, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                         actinver_contracts = actinver_house_contracts;
                         object_response.options = actinver_contracts;
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (fund_select_bank_or_house) {
                     NDSchat.removeButtons();
                     NDSchat.removeBubbles();
                     fund_select_bank_or_house = false;
                     select_contract = true;
                     select_choice_bank_or_house = lastAnswer;
 
                     if (lastAnswer === "Banco") {
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                         actinver_contracts = actinver_bank_contracts;
                         object_response.options = actinver_contracts;
                         NDSchat.addQuestion(object_response);
 
                     }
                     else if (lastAnswer === "Casa de bolsa Bursanet") {
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                         actinver_contracts = actinver_house_contracts;
                         object_response.options = actinver_contracts;
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (verify_email) {
                     NDSchat.removeButtons();
                     selected_email = lastAnswer;
                     select_contract = true;
                     verify_email = false;
                     body = {};
                     body.ClientNumber = actinver_number;
                     NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                         NDSchat.removeBubbles();
                         if (!response.error) {
                             object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                             var actinver_contracts = [];
                             response.bankContracts.forEach(function (element) {
                                 var a = NDSchat.maskContract(element);
                                 actinver_contracts.push(a);
                                 ContractsDict[element] = 1;
                             });
                             response.houseContracts.forEach(function (element) {
                                 var a = NDSchat.maskContract(element);
                                 actinver_contracts.push(a);
                                 ContractsDict[element] = 2;
                             });
                             object_response.options = actinver_contracts;
                             NDSchat.addQuestion(object_response);
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             validate_phone_code = false;
                             select_contract = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
                 }
                 else if (select_contract) {
                     NDSchat.removeButtons();
                     select_contract = false;
                     if (use_case_action == "saldo") {
                         contractType = ContractsDict[MaskedContractsDict[lastAnswer]];
                         if (contractType == 1) {
                             body.ClientNumber = actinver_number;
                             body.Contracts = [MaskedContractsDict[lastAnswer]];
                             NDSchat.getIntegrationsEndpoint('getBankPortfolio', "POST", body, function (response) {
                                 NDSchat.removeBubbles();
                                 final_use_case = true;
                                 if (!response.error) {
                                     //filter results that have no value
                                     var html_response = response.response;
                                     object_response = NDSchat.defineResponseObject(html_response, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     document.getElementById('actual_value_bank').id = "actual_value_bank_zero";
                                     if (actinver_contracts.length > 1) {
                                         closing_flux = true;
                                         object_response = NDSchat.defineResponseObject(widgetTexts.contract_closing_flux, "Yes No", "option", "Question");
                                         object_response.options = ["Sí", "No"];
                                         NDSchat.addQuestion(object_response);
                                     } else {
                                         closing_flux = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
                         } else {
                             final_use_case = true;
                             body.ClientNumber = actinver_number;
                             body.Contracts = [MaskedContractsDict[lastAnswer]];
 
                             if (!config.show_brokerage_portfolios) {
                                 NDSchat.removeBubbles();
                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_brokerage, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 if (actinver_contracts.length > 1) {
                                     closing_flux = true;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.contract_closing_flux, "Yes No", "option", "Question");
                                     object_response.options = ["Sí", "No"];
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     token_method = "";
                                 }
                             } else {
                                 NDSchat.getIntegrationsEndpoint('getBrokeragePortfolio', "POST", body, function (response) {
                                     NDSchat.removeBubbles();
                                     final_use_case = true;
                                     if (!response.error) {
                                         object_response = NDSchat.defineResponseObject(response.response, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                         if (actinver_contracts.length > 1) {
                                             closing_flux = true;
                                             object_response = NDSchat.defineResponseObject(widgetTexts.contract_closing_flux, "Yes No", "option", "Question");
                                             object_response.options = ["Sí", "No"];
                                             NDSchat.addQuestion(object_response);
                                         }
                                     } else {
                                         // If not client, ask for the user information
                                         use_case_flux = false;
                                         final_use_case = false;
                                         token_method = "";
                                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                     }
                                     NDSchat.searchLinkClasses();
                                 });
                             }
                         }
                     }
                     else if (use_case_action == "edo_cta" || use_case_action == "constancia") {
                         NDSchat.removeButtons();
                         contractType = ContractsDict[MaskedContractsDict[lastAnswer]];
                         actinver_contract = MaskedContractsDict[lastAnswer];
                         select_contract = false;
                         body.ContractNumber = actinver_contract;
                         body.BusinessType = contractType;
                         body.TypeAccountStatement = use_case_action == "constancia" ? 4 : 3;
                         //get available periods for the contract
                         NDSchat.getIntegrationsEndpoint('getAvailablePeriods', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 available_periods = response;
                                 if (use_case_action == "edo_cta") {
                                     select_period = true;
                                     var d = new Date();
                                     var currentYear = d.getFullYear();
                                     var options_response = [];
 
                                     var sorted_periods = available_periods.sortedPeriods;
                                     if (sorted_periods.length < 6) {
                                         for (var index = 0; index < sorted_periods.length; index++) {
                                             var element = sorted_periods[index];
                                             options_response.push(NDSchat.parseMonth(element.substring(0, 2), 1) + "-" + element.substring(2, element.length));
                                         }
                                     } else {
                                         for (var index = 0; index < 6; index++) {
                                             var element = sorted_periods[index];
                                             options_response.push(NDSchat.parseMonth(element.substring(0, 2), 1) + "-" + element.substring(2, element.length));
                                         }
                                     }
                                     if (options_response.length <= 0) {
                                         select_period = false;
                                         use_case_flux = false;
                                         final_use_case = false;
                                         object_response = NDSchat.defineResponseObject(widgetTexts.no_available_period, "Single Choice", "option", "Question");
                                         object_response.options = options_response;
                                         NDSchat.addQuestion(object_response);
                                     } else {
                                         object_response = NDSchat.defineResponseObject(widgetTexts.need_text, "Single Choice", "option", "Question");
                                         object_response.options = options_response;
                                         NDSchat.addQuestion(object_response);
                                     }
                                 } else if (use_case_action == "constancia") {
                                     select_period = true;
                                     var options_response = [];
                                     var sorted_periods = available_periods.sortedPeriods;
                                     if (sorted_periods.length < 6) {
                                         for (var index = 0; index < sorted_periods.length; index++) {
                                             var element = sorted_periods[index];
                                             options_response.push(element);
                                         }
                                     } else {
                                         for (var index = 0; index < 6; index++) {
                                             var element = sorted_periods[index];
                                             options_response.push(element);
                                         }
                                     }
                                     if (options_response.length <= 0) {
                                         select_period = false;
                                         use_case_flux = false;
                                         final_use_case = false;
                                         object_response = NDSchat.defineResponseObject(widgetTexts.no_available_period, "Single Choice", "option", "Question");
                                         object_response.options = options_response;
                                         NDSchat.addQuestion(object_response);
                                     } else {
                                         object_response = NDSchat.defineResponseObject(widgetTexts.need_text, "Single Choice", "option", "Question");
                                         object_response.options = options_response;
                                         NDSchat.addQuestion(object_response);
                                     }
                                 }
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "token") {
                         NDSchat.removeButtons();
                         NDSchat.removeBubbles();
                         body.ClientNumber = actinver_number;
                         final_use_case = true;
                         NDSchat.getIntegrationsEndpoint('getToken', "POST", body, function (response) {
 
                             if (!response.error && response.userTokens) {
                                 actinver_token = response.userTokens[0];
                                 changing_token_status = true;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.deactivate_token, "Yes No", "option", "Question");
                                 object_response.options = ["Sí", "No"];
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 use_case_action = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_token_found, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "activacion_tdd") {
                         NDSchat.removeButtons();
                         NDSchat.removeBubbles();
                         select_period = true;
                         actinver_contract = MaskedContractsDict[lastAnswer];
                         object_response = NDSchat.defineResponseObject(widgetTexts.ask_card, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         inserted_card = true;
                     }
                     else if (use_case_action == "cuenta_clabe") {
                         var body = {};
                         body.ContractNumber = MaskedContractsDict[lastAnswer];
                         NDSchat.getIntegrationsEndpoint('getClabeAccount', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             final_use_case = true;
                             if (!response.error) {
                                 //filter results that have no value
                                 var html_response = response.accountNumber;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.showing_clabe_account + html_response, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 if (actinver_contracts.length > 1) {
                                     closing_flux = true;
                                     object_response = NDSchat.defineResponseObject("¿Quieres consultar otra cuenta Clabe?", "Yes No", "option", "Question");
                                     object_response.options = ["Sí", "No"];
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     closing_flux = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "spei") {
 
                         NDSchat.removeButtons();
                         object_response = NDSchat.defineResponseObject("Espere un momento por favor...", "Question", "option", "Question");
                         object_response.options = [];
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
                         NDSchat.removeBubbles();
 
                         contractTypeSpei = ContractsDict[MaskedContractsDict[lastAnswer]];
                         contract_number = [MaskedContractsDict[lastAnswer]][0];
                         contracts_numbers = [MaskedContractsDict[lastAnswer]];
 
                         NDSchat.createInteractionUseCase(NDSchat.maskContract(contract_number), widgetTexts.showing_contracts)
 
                         parent.postMessage("nds_ask_gps", "*");
                         location_object = "spei_geolocalizacion";
                     }
                     else if (use_case_action == "venta_fondos") {
 
                         if (is_sale_the_same_day) {
                             NDSchat.removeBubbles();
                             is_sale_the_same_day = false;
                             select_contract = false;
                             confirm_spei_sale_the_same_day = true;
 
                             destination_account = [MaskedContractsDict[lastAnswer]][0];
                             NDSchat.createInteractionUseCase(NDSchat.maskContract(destination_account), widgetTexts.showing_contracts);
 
                             var date = new Date();
                             let day = date.getDate()
                             let month = date.getMonth() + 1
                             let year = date.getFullYear()
 
 
                             var body = {};
                             body.ClientNumber = actinver_number;
                             NDSchat.getIntegrationsEndpoint('ClientGeneralInfoSearch', "POST", body, function (response) {
                                 NDSchat.removeBubbles();
                                 if (!response.error) {
                                     message_confirm_sale_the_same_day = widgetTexts.confirm_sale_the_same_day
                                         .replace('{{1}}', transfer_amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                                         .replace('{{2}}', NDSchat.maskContract(contract_number))
                                         .replace('{{3}}', response.name + " " + response.lastname)
                                         .replace('{{4}}', NDSchat.maskContract(destination_account))
                                         .replace('{{5}}', issuer_name)
                                         .replace('{{6}}', `${day.toString().length == 1 ? "0" + day : day}-${month.toString().length == 1 ? "0" + month : month}-${year}`);
 
 
                                     object_response = NDSchat.defineResponseObject(message_confirm_sale_the_same_day + "¿Es correcto?", "Single Choice", "option", "Question");
                                     object_response.options = ["Sí", "No"];
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
                         }
                         else {
 
                          
                             contractType = ContractsDict[MaskedContractsDict[lastAnswer]];
                             retryCount = 0;
                             NDSchat.removeBubbles();
                             if (contractType == 1) {
 
 
                                 body.DateStr = "0";
 
                                 NDSchat.getIntegrationsEndpoint('BankInvstDate', "POST", body, function (response) {
                                     if (!response.error) {
 
                                         date_operation_lumina = "";
                                         date_operation_lumina = response.Date;
 
                                         contract_number = [MaskedContractsDict[lastAnswer]][0];
                                         body.ContractNumber = contract_number;
                                         body.DateOperationLumina = date_operation_lumina;
 
 
                                         NDSchat.getIntegrationsEndpoint('BankInvstFundsPositionsDetail', "POST", body, function (response) {
                                             if (!response.error) {
                                                 amount_funds_to_sell_bank = true;
 
                                                 //filter results that have no value
                                                 fundArray = response;
                                                 var options = [];
 
                                                 for (var item of fundArray) {
                                                     options.push(item.IssuerID + "|" + item.InvestmentAmount + "|" + item.TitlesQty + "|" + item.MarketPrice);
                                                 }
 
                                                 object_response = NDSchat.defineResponseObject("Por favor, selecciona el fondo a vender:", "Single Choice", "option_fund", "Question");
                                                 object_response.options = options;
                                                 NDSchat.addQuestion(object_response);
 
                                             } else {
                                                 // If not client, ask for the user information
                                                 use_case_flux = false;
                                                 token_method = "";
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                                 NDSchat.addQuestion(object_response);
                                             }
                                             NDSchat.searchLinkClasses();
                                         });
 
 
                                     } else {
                                         // If not client, ask for the user information
                                         use_case_flux = false;
                                         token_method = "";
                                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                     }
                                     NDSchat.searchLinkClasses();
                                 });
 
 
                             } else {
 
                                 body.ClientNumber = actinver_number;
                                 body.Contracts = [MaskedContractsDict[lastAnswer]];
                                 contract_number = [MaskedContractsDict[lastAnswer]][0];
                                 retryCount = 0;
 
                                 NDSchat.createInteractionUseCase(NDSchat.maskContract(contract_number), showing_contracts)
 
                                 NDSchat.getIntegrationsEndpoint('getBrokeragePortfolioFund', "POST", body, function (response) {
                                     if (!response.error) {
                                         amount_funds_to_sell = true;
                                         accountTransferArray = response;
                                         if (accountTransferArray.length > 0) {
                                             var options = [];
 
                                             for (var item of accountTransferArray) {
                                                 options.push(item.issuer + "|" + item.currentValue + "|" + item.titlesQty);
                                             }
 
                                             object_response = NDSchat.defineResponseObject("Por favor, selecciona el fondo a vender:", "Single Choice", "option_fund", "Question");
                                             object_response.options = options;
                                             NDSchat.addQuestion(object_response);
                                         }
                                         else {
 
                                             use_case_flux = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject("No se encontraros fondos por vender.", "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
 
 
                                     } else {
                                         // If not client, ask for the user information
                                         use_case_flux = false;
                                         token_method = "";
                                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                     }
                                     NDSchat.searchLinkClasses();
                                 });
                             }
                         }
 
                     }
                     else if (use_case_action == "bloqueo_tdd") {
 
                         contract_number = [MaskedContractsDict[lastAnswer]][0];
 
                         var body = {};
                         body.ContractNumber = contract_number;
                         NDSchat.getIntegrationsEndpoint('DebitCardInformation', "POST", body, function (response) {
                             NDSchat.removeBubbles();
 
                             if (!response.error) {
                                 //filter results that have no value
 
                                 tokenTDD = "";
                                 tokenTDD = response.Token;
 
                                 var body = {};
                                 body.Token = tokenTDD;
                                 NDSchat.getIntegrationsEndpoint('CardByToken', "POST", body, function (response) {
                                     NDSchat.removeBubbles();
                                     if (!response.error) {
                                         //filter results that have no value
                                         blockear_tdd = true;
 
                                         var cardNumber = response.CardNumber;
                                         object_response = NDSchat.defineResponseObject("Esta es la terminación de tu tarjeta " + NDSchat.maskContract(cardNumber) + ". ¿Estás de acuerdo en bloquear tu tarjeta ahora?", "Yes No", "option", "Question");
                                         object_response.options = ["Sí", "No"];
                                         NDSchat.addQuestion(object_response);
 
 
                                     } else {
                                         // If not client, ask for the user information
                                         use_case_flux = false;
                                         token_method = "";
                                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                     }
                                     NDSchat.searchLinkClasses();
                                 });
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "desbloqueo_tdd") {
 
                         contract_number = [MaskedContractsDict[lastAnswer]][0];
 
                         var body = {};
                         body.ContractNumber = contract_number;
                         NDSchat.getIntegrationsEndpoint('DebitCardInformation', "POST", body, function (response) {
                             NDSchat.removeBubbles();
 
                             if (!response.error) {
                                 //filter results that have no value
 
                                 tokenTDD = "";
                                 tokenTDD = response.Token;
 
                                 var body = {};
                                 body.Token = tokenTDD;
                                 NDSchat.getIntegrationsEndpoint('CardByToken', "POST", body, function (response) {
                                     NDSchat.removeBubbles();
                                     if (!response.error) {
                                         //filter results that have no value
                                         desblockear_tdd = true;
 
                                         var cardNumber = response.CardNumber;
                                         object_response = NDSchat.defineResponseObject("Esta es la terminación de tu tarjeta " + NDSchat.maskContract(cardNumber) + ". ¿Estás de acuerdo en desbloquear tu tarjeta ahora?", "Yes No", "option", "Question");
                                         object_response.options = ["Sí", "No"];
                                         NDSchat.addQuestion(object_response);
 
 
                                     } else {
                                         // If not client, ask for the user information
                                         use_case_flux = false;
                                         token_method = "";
                                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                         NDSchat.addQuestion(object_response);
                                     }
                                     NDSchat.searchLinkClasses();
                                 });
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "ivr_geolocalizacion") {
                        if (lastAnswer == "Sí") {

                            object_response = NDSchat.defineResponseObject("Espere un momento por favor...", "Question", "option", "Question");
                            object_response.options = [];
                            NDSchat.addQuestion(object_response);
                            NDSchat.removeButtons();
                            NDSchat.removeBubbles();

                            parent.postMessage("nds_ask_gps", "*");
                            location_object = "spei_geolocalizacion";
                        } else {

                            use_case_flux = false;
                            final_use_case = false;
                            token_method = "";
                            object_response = NDSchat.defineResponseObject("Se ha cancelado el proceso de geolocalizacion. Muchas gracias.", "Question", "text", "Question");
                            NDSchat.addQuestion(object_response);

                        }
                    }
                 }
                 else if (ask_geolocalizacion_ivr) {

                    body = {};
                    body.ClientNumber = actinver_number;
                    body.Geolocalizacion = spei_geolocalizacion;
                    body.Token = token_value;
                    NDSchat.getIntegrationsEndpoint('SaveGeolocalizacion', "POST", body, function (response) {
                        NDSchat.removeBubbles();
                        if (!response.error) {

                            object_response = NDSchat.defineResponseObject("Geolocalización obtenida con éxito. Por favor mencione la palabra CONTINUAR en el canal de voz para retomar el proceso. Muchas Gracias", "Question", "text", "Question");
                            NDSchat.addQuestion(object_response);

                            use_case_flux = false;
                            final_use_case = false;
                            token_method = "";
                            NDSchat.removeButtons();
                            nds_utils.addClass(elements.chatComposer, "hidden");

                        } else {
                            // If not client, ask for the user information
                            use_case_flux = false;
                            validate_phone_code = false;
                            select_contract = false;
                            token_method = "";
                            object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                            NDSchat.addQuestion(object_response);
                        }
                        NDSchat.searchLinkClasses();
                    });
                }
                 else if (ask_geolocalizacion_spei) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     ask_geolocalizacion_spei = false;
 
                     retryCount = 0;
                     if (contractTypeSpei == 1) {
                         body.ClientNumber = actinver_number;
                         contract_number = contract_number;
                         body.Contracts = contracts_numbers;
                         NDSchat.getIntegrationsEndpoint('getBankPortfolio', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             if (!response.error) {
 
                                 validate_transfer_amount = true;
 
                                 //filter results that have no value
                                 var html_response = response.response;
                                 object_response = NDSchat.defineResponseObject(html_response, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 NDSchat.removeButtons();
 
 
 
                                 validate_amount = document.getElementById("actual_value_bank").innerText;
                                 validate_amount = validate_amount.replace(/[^0-9.]/g, "").trim();
                                 if (parseFloat(validate_amount) <= 0) {
                                     retryCount++;
                                     object_response = NDSchat.defineResponseObject("Lo sentimos, el saldo de tu cuenta eje no es suficiente para realizar esta operación", "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     NDSchat.removeButtons();
 
                                     document.getElementById('actual_value_bank').id = "actual_value_bank_zero";
 
                                     validate_transfer_amount = false;
                                     use_case_flux = false;
                                     final_use_case = true;
                                     closing_flux = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else {
                                     validate_transfer_amount = true;
                                     remove_special_characters = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_amount_spei, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     } else {
 
                         body.ClientNumber = actinver_number;
                         body.Contracts = contracts_numbers;
                         retryCount = 0;
 
                         NDSchat.getIntegrationsEndpoint('getHouseRelatedContracts', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             // final_use_case = true;
                             if (!response.error) {
 
 
                                 contract_number = response.ContractNumber;
 
                                 object_response = NDSchat.defineResponseObject(response.htmlResponse, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 NDSchat.removeButtons();
 
                                 validate_amount = document.getElementById("actual_value_bank").innerText;
                                 validate_amount = validate_amount.replace(/[^0-9.]/g, "").trim();
                                 if (parseFloat(validate_amount) <= 0) {
                                     retryCount++;
                                     object_response = NDSchat.defineResponseObject("Lo sentimos, el saldo de tu cuenta eje no es suficiente para realizar esta operación", "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     NDSchat.removeButtons();
 
                                     document.getElementById('actual_value_bank').id = "actual_value_bank_zero";
 
                                     validate_transfer_amount = false;
                                     use_case_flux = false;
                                     final_use_case = true;
                                     closing_flux = true;
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else {
                                     validate_transfer_amount = true;
                                     remove_special_characters = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_amount_spei, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
 
 
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
 
                 }
                 else if (validate_transfer_amount) {
 
                     var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
                     var hr = new Date().toLocaleTimeString().split(":");
                     bank_amount = document.getElementById("actual_value_bank").innerText;
                     bank_amount = bank_amount.replace(/[^0-9.]/g, "").trim();
                     var filter_amount = "";
                     filter_amount = lastAnswer.replace(/[^0-9.]/g, "").trim();
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_transfer_amount = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseInt(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject("El monto a trasnferir no puede ser menor o igual a 0. Intente de nuevo, por favor", "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else {
                         if ((!regex.test(lastAnswer)) || (parseFloat(filter_amount) > parseFloat(bank_amount))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_format_amount, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount_2, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
                             if (!(hr[0] < form.schedule_restriction.spei.start && hr[0] >= form.schedule_restriction.spei.end)) {
                                 if (parseFloat(filter_amount) > parseFloat(form.schedule_restriction.spei.maximum_amount_spei)) {
                                     retryCount++;
                                     object_response = NDSchat.defineResponseObject("Te recordamos que a partir de las " + form.schedule_restriction.spei.start + ":00 hrs y hasta las " + form.schedule_restriction.spei.end + ":00 hrs, el monto máximo para operar es de $" + form.schedule_restriction.spei.maximum_amount_spei.toString() + " MXN por transacción.", "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     NDSchat.removeButtons();
 
                                     object_response = NDSchat.defineResponseObject("Por favor, intente nuevamente.", "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 else {
                                     validate_transfer_amount = false;
                                     document.getElementById('actual_value_bank').id = "actual_value_bank_zero";
                                     document.getElementById("txMessage").maxLength = "40";
                                     ask_beneficiary = true;
                                     remove_special_characters = true;
                                     transfer_amount = filter_amount;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_reason_spei, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                             }
                             else {
                                 validate_transfer_amount = false;
                                 document.getElementById('actual_value_bank').id = "actual_value_bank_zero";
                                 document.getElementById("txMessage").maxLength = "40";
                                 ask_beneficiary = true;
                                 remove_special_characters = true;
                                 transfer_amount = filter_amount;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_reason_spei, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                     }
                 }
                 else if (ask_beneficiary) {
                     document.getElementById("txMessage").maxLength = "140";
                     remove_special_characters = false;
 
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     reason_transfer = lastAnswer;
                     ask_beneficiary = false;
                     select_beneficiary = true;
 
                     object_response = NDSchat.defineResponseObject(widgetTexts.asking_find_account_spei, "Single Choice", "option", "Question");
                     object_response.options = ["Nombre del beneficiario", "Cuenta"];
                     NDSchat.addQuestion(object_response);
                 }
                 else if (select_beneficiary) {
 
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
                     select_beneficiary = false;
 
                     if (lastAnswer === "Nombre del beneficiario") {
 
                         ask_beneficiary = false;
                         find_beneficiary = true;
                         remove_special_characters = true;
 
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.asking_beneficiary_spei, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
 
                     }
                     else if (lastAnswer === "Cuenta") {
                         select_bank = true;
 
                         var body = {};
                         body.ContractNumber = contract_number;
                         NDSchat.getIntegrationsEndpoint('getDestinationAcount', "POST", body, function (response) {
                             if (!response.error) {
                                 //filter results that have no value
                                 arrayDestinationAccount = response;
                                 var options = [];
 
                                 for (var item of arrayDestinationAccount) {
                                     options.push(item.AccountTypeName);
                                 }
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_account_spei, "Single Choice", "option", "Question");
                                 object_response.options = options;
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                 }
                 else if (find_beneficiary) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
 
                     var body = {};
                     body.ContractNumber = contract_number;
                     body.FilterName = lastAnswer;
 
                     NDSchat.getIntegrationsEndpoint('getAccountTransferByName', "POST", body, function (response) {
                         if (!response.error) {
                             //filter results that have no value
                             if (response.length > 0) {
 
                                 find_beneficiary = false;
                                 transfer_summary = true;
                                 remove_special_characters = false;
 
 
                                 accountTransferArray = response;
                                 var options = [];
 
                                 for (var item of accountTransferArray) {
                                     options.push(item.BeneficiaryName + "|" + NDSchat.maskContract(item.AccountNumber) + "|" + item.BankName + "|" + item.AccountTypeName);
                                 }
 
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.asking_account_spei, "Single Choice", "option_account", "Question");
                                 object_response.options = options;
                                 NDSchat.addQuestion(object_response);
                             }
                             else {
 
                                 object_response = NDSchat.defineResponseObject("No se encontraron resultados. Intente de nuevo", "Question", "text", "Question");
                                 object_response.options = options;
                                 NDSchat.addQuestion(object_response);
                             }
 
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
                 }
                 else if (select_bank) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     select_bank = false;
                     select_account_tranfer = true;
 
                     for (var item of arrayDestinationAccount) {
                         if (lastAnswer === item.AccountTypeName) {
                             account_type = item.AccountType
                         }
                     }
 
                     var body = {};
                     body.ContractNumber = contract_number;
                     body.AccountType = account_type;
 
                     NDSchat.getIntegrationsEndpoint('getBank', "POST", body, function (response) {
                         if (!response.error) {
                             //filter results that have no value
                             bankArray = response;
                             var options = [];
 
                             for (var item of bankArray) {
                                 options.push(item.BankName);
                             }
 
                             object_response = NDSchat.defineResponseObject(widgetTexts.asking_bank_spei, "Single Choice", "option", "Question");
                             object_response.options = options;
                             NDSchat.addQuestion(object_response);
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
 
                 }
                 else if (select_account_tranfer) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
 
                     select_account_tranfer = false;
                     transfer_summary = true;
                     bank_name = lastAnswer;
 
                     for (var item of bankArray) {
                         if (lastAnswer === item.BankName) {
                             bank_id = item.BankID
                         }
                     }
 
                     var body = {};
                     body.ContractNumber = contract_number;
                     body.BankID = bank_id;
                     body.AccountType = account_type;
 
                     NDSchat.getIntegrationsEndpoint('getAccountTransfer', "POST", body, function (response) {
                         if (!response.error) {
                             //filter results that have no value
                             accountTransferArray = response;
                             var options = [];
 
                             for (var item of accountTransferArray) {
                                 options.push(item.BeneficiaryName + "|" + NDSchat.maskContract(item.AccountNumber) + "|" + item.BankName + "|" + item.AccountTypeName);
                             }
 
 
                             object_response = NDSchat.defineResponseObject(widgetTexts.asking_account_spei, "Single Choice", "option_account", "Question");
                             object_response.options = options;
                             NDSchat.addQuestion(object_response);
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
                 }
                 else if (transfer_summary) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
                     transfer_summary = false;
                     confirm_spei = true;
 
 
                     for (var item of accountTransferArray) {
                         if (lastAnswer === item.BeneficiaryName + " " + NDSchat.maskContract(item.AccountNumber)) {
                             beneficiary_name = item.BeneficiaryName
                             beneficiary_account = item.AccountNumber
                             bank_name = item.BankName
                             account_type = item.AccountType
                             bank_id = item.BankID
                         }
                     }
 
 
                     var date = new Date();
                     let day = date.getDate()
                     let month = date.getMonth() + 1
                     let year = date.getFullYear()
 
 
                     message_confirm_spei = widgetTexts.message_confirm_spei
                         .replace('{{0}}', transfer_amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                         .replace('{{1}}', NDSchat.maskContract(contract_number))
                         .replace('{{2}}', beneficiary_name)
                         .replace('{{3}}', bank_name)
                         .replace('{{4}}', NDSchat.maskContract(beneficiary_account))
                         .replace('{{5}}', `${day.toString().length == 1 ? "0" + day : day}-${month.toString().length == 1 ? "0" + month : month}-${year}`);
 
 
                  
 
                     object_response = NDSchat.defineResponseObject(message_confirm_spei, "Single Choice", "option", "Question");
                     object_response.options = ["Sí", "No"];
                     NDSchat.addQuestion(object_response);
                 }
                 else if (confirm_spei) {
                     confirm_spei = false;
 
                     NDSchat.createInteractionUseCase(lastAnswer, message_confirm_spei)
 
                     if (lastAnswer == "Sí") {
 
                         send_spei = true;
                         phone_validation = true;
                         NDSchat.handleAuthFlux(phone_registered_spei);
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.cancel_spei, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
 
                     }
 
                 }
                 else if (confirm_successful_spei) {
                     NDSchat.removeButtons();
 
                     confirm_successful_spei = false;
                     send_spei = false;
 
                     var body = {};
                     body.OriginAccountNumber = contract_number;
                     body.MandatorName = "";
                     body.BankDestinationID = bank_id;
                     body.RecipientName = beneficiary_name;
                     body.AccountTypeDestinationID = account_type;
                     body.DestinationAccountNumber = beneficiary_account;
                     body.Amount = transfer_amount;
                     body.Concept = reason_transfer;
                     body.IssuerID = "";
                     body.ClientNumber = actinver_number;
                     body.Location = spei_geolocalizacion;
 
 
                     NDSchat.getIntegrationsEndpoint('TransferSpei', "POST", body, function (response) {
                         if (!response.error) {
                             NDSchat.removeBubbles();
 
                             //filter results that have no value
                             transfer = response;
                             object_response = NDSchat.defineResponseObject(widgetTexts.success_spei + transfer.TransferReference, "Question", "text", "Question");
                             NDSchat.createInteractionUseCase("", widgetTexts.success_spei + NDSchat.maskContract(transfer.TransferReference));
                             NDSchat.addQuestion(object_response);
                             NDSchat.removeButtons();
 
                             use_case_flux = false;
                             final_use_case = true;
                             closing_flux = true;
                             NDSchat.handleAuthFlux("");
 
                         } else {
                             NDSchat.removeBubbles();
                             NDSchat.createInteractionUseCase("", widgetTexts.unavailable_info + " Operación cancelada.");
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
 
                 }
 
                 else if (amount_funds_to_sell) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
                     amount_funds_to_sell = false;
 
                     var html_fund = "";
 
                     for (var item of accountTransferArray) {
                         if (item.issuer === lastAnswer) {
                             current_value = item.currentValue.toString();
                             html_fund = "Seleccionaste " + item.issuer
                                 + " con un total de " + item.titlesQty.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " títulos "
                                 + "y un monto disponible de $ " + current_value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 
                             issuer_name = item.issuer;
                             issuer_serie = item.serie;
                             issuer_titles_qty = item.titlesQty;
                         }
                     }
 
 
                     var body = {};
                     body.IssuerName = issuer_name;
                     body.IssuerSerie = issuer_serie;
 
                     NDSchat.getIntegrationsEndpoint('getFundSaleOptions', "POST", body, function (response) {
                         if (!response.error) {
                             //filter results that have no value
                             if (response.IsSuccess) {
 
                                 object_response = NDSchat.defineResponseObject(html_fund, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 NDSchat.removeButtons();
 
                                 if (response.RegistrationType === "TITULOS") {
 
                                     object_response = NDSchat.defineResponseObject(widgetTexts.fund_number_to_sale, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     validate_fund_qty = true;
                                     issuer_registration_type = "1";
 
                                 }
                                 else {
                                     remove_special_characters = false; 
                                     object_response = NDSchat.defineResponseObject(widgetTexts.fund_amount_to_sale, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     validate_amount_funds_to_sell = true;
                                     issuer_registration_type = "2";
 
                                 }
                             }
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
                 }
                 else if (amount_funds_to_sell_bank) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
                     amount_funds_to_sell_bank = false;
 
                     var html_fund = "";
 
                     for (var item of fundArray) {
                         if (item.IssuerID === lastAnswer) {
                             current_value = item.InvestmentAmount.toString();
                             html_fund = "Seleccionaste " + item.IssuerID
                                 + " con un total de " + item.TitlesQty.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " títulos "
                                 + "y un monto disponible de $ " + current_value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
 
                             issuer_name = item.IssuerID;
                             issuer_serie = item.Serie;
                             issuer_titles_qty = item.TitlesQty;
                             issuer_market_price = item.MarketPrice;
                         }
                     }
 
 
                     var body = {};
                     body.FundID = issuer_name;
                     body.Serie = issuer_serie;
 
                     NDSchat.getIntegrationsEndpoint('BankInvstFundYield', "POST", body, function (response) {
                         if (!response.error) {
 
                             object_response = NDSchat.defineResponseObject(html_fund, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                             NDSchat.removeButtons();
                             anticipated_sell = response.AdvanceSaleIndicator == true ? "1" : "";
                             if (response.SellTitles) {
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_number_to_sale, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 validate_fund_qty_bank = true;
                                 issuer_registration_type = "1";
                             }
                             else {
                                 remove_special_characters = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_amount_to_sale, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 validate_amount_funds_to_sell_bank = true;
                                 issuer_registration_type = "2";
                             }
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
                 }
                 else if (validate_amount_funds_to_sell) {
 
                     var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     current_value = current_value.replace(/[^0-9.]/g, "").trim();
                     var filter_amount = "";
                     filter_amount = lastAnswer.replace(/[^0-9.]/g, "").trim();
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_amount_funds_to_sell = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseFloat(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject("El monto no puede ser menor o igual a 0. Intente de nuevo, por favor", "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else {
                         if ((!regex.test(lastAnswer)) || (parseFloat(filter_amount) > parseFloat(current_value))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_format, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount_fund_2, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
 
                             validate_amount_funds_to_sell = false;
                             remove_special_characters = true;
                             transfer_amount = filter_amount;
 
                             body.IssuerName = issuer_name;
                             body.IssuerSerie = issuer_serie;
                             body.IssuerAmount = current_value;
                             body.AdvanceSale = "";
                             body.ContractNumber = contract_number;
 
                             NDSchat.getIntegrationsEndpoint('getIsAdvanceSaleFund', "POST", body, function (response) {
                                 if (!response.error) {
                                     //filter results that have no value
                                     isAdvanceSaleFundResponse = response;
                                     anticipated_sell = isAdvanceSaleFundResponse.AnticipatedSell;
 
                                     options_advance_sale = [];
 
                                     for (var item of isAdvanceSaleFundResponse.OperationDatesData) {
                                         var date = new Date();
                                         date_result = date.toISOString();
                                         if (item.OperationDate.substring(0, 10) >= date_result.substring(0, 10)) {
                                             options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDate.toString()));
                                         }
                                     }
 
                                     if (anticipated_sell === "1") {
                                         advance_sale_funds = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
                                         funds_summary = true;
 
                                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                         object_response.dates = options_advance_sale;
                                         NDSchat.addQuestion(object_response);
                                     }
 
 
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         }
                     }
                 }
                 else if (validate_amount_funds_to_sell_bank) {
 
                     var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     current_value = current_value.replace(/[^0-9.]/g, "").trim();
                     var filter_amount = "";
                     filter_amount = lastAnswer.replace(/[^0-9.]/g, "").trim();
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_amount_funds_to_sell = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseFloat(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject("El monto no puede ser menor o igual a 0. Intente de nuevo, por favor", "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else {
                         if ((!regex.test(lastAnswer)) || (parseFloat(filter_amount) > parseFloat(current_value))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_format, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount_fund_2, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
 
                             validate_amount_funds_to_sell_bank = false;
                             remove_special_characters = true;
                             transfer_amount = filter_amount;
 
 
                             body.FundID = issuer_name;
                             body.Serie = issuer_serie;
                             body.AnticipatedSell = "0";
                             body.OperationDateLumina = date_operation_lumina;
 
 
                             NDSchat.getIntegrationsEndpoint('BankInvstCalendarByFunds', "POST", body, function (response) {
                                 if (!response.error) {
 
                                     isAdvanceSaleFundResponse = response;
                                     options_advance_sale = [];
 
 
                                     for (var item of isAdvanceSaleFundResponse) {
                                         var date = new Date();
                                         date_result = date.toISOString();
                                         if (item.OperationDateTime.substring(0, 10) >= date_result.substring(0, 10)) {
                                             options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDateTime.toString()));
                                         }
                                     }
 
                                     if (anticipated_sell === "1") {
                                         advance_sale_funds_bank = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
                                         funds_summary_bank = true;
 
                                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                         object_response.dates = options_advance_sale;
                                         NDSchat.addQuestion(object_response);
 
                                     }
 
 
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
                         }
                     }
                 }
                 else if (validate_fund_qty) {
 
                     var regex = /^\d+$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     sale_titles_qty = lastAnswer.replace(/[^0-9]/g, "").trim();
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_transfer_amount = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_number, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseInt(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject("El número de títulos no puede ser menor o igual a 0. Intente de nuevo, por favor", "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     } else {
                         if ((!regex.test(lastAnswer)) || (parseInt(sale_titles_qty) > parseInt(issuer_titles_qty))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_format, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_number_2, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
                             validate_fund_qty = false;
                             remove_special_characters = true;
 
                             body.IssuerName = issuer_name;
                             body.IssuerSerie = issuer_serie;
                             body.IssuerAmount = current_value;
                             body.AdvanceSale = "";
                             body.ContractNumber = contract_number;
 
                             NDSchat.getIntegrationsEndpoint('getIsAdvanceSaleFund', "POST", body, function (response) {
                                 if (!response.error) {
                                     //filter results that have no value
                                     isAdvanceSaleFundResponse = response;
                                     anticipated_sell = isAdvanceSaleFundResponse.AnticipatedSell;
 
                                     options_advance_sale = [];
 
                                     for (var item of isAdvanceSaleFundResponse.OperationDatesData) {
                                         var date = new Date();
                                         date_result = date.toISOString();
                                         if (item.OperationDate.substring(0, 10) >= date_result.substring(0, 10)) {
                                             options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDate.toString()));
                                         }
                                     }
 
                                     if (anticipated_sell === "1") {
                                         advance_sale_funds = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
                                         funds_summary = true;
 
                                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                         object_response.dates = options_advance_sale;
                                         NDSchat.addQuestion(object_response);
 
                                     }
 
 
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         }
                     }
                 }
                 else if (validate_fund_qty_bank) {
 
                     var regex = /^\d+$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     sale_titles_qty = lastAnswer.replace(/[^0-9]/g, "").trim();
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_transfer_amount = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_number, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseInt(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject("El número de títulos no puede ser menor o igual a 0. Intente de nuevo, por favor", "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     } else {
                         if ((!regex.test(lastAnswer)) || (parseInt(sale_titles_qty) > parseInt(issuer_titles_qty))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_format, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_number_2, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
                             validate_fund_qty_bank = false;
                             remove_special_characters = true;
 
                             body.FundID = issuer_name;
                             body.Serie = issuer_serie;
                             body.AnticipatedSell = "0";
                             body.OperationDateLumina = date_operation_lumina;
 
 
                             NDSchat.getIntegrationsEndpoint('BankInvstCalendarByFunds', "POST", body, function (response) {
                                 if (!response.error) {
 
                                     isAdvanceSaleFundResponse = response;
                                     options_advance_sale = [];
 
 
                                     for (var item of isAdvanceSaleFundResponse) {
                                         var date = new Date();
                                         date_result = date.toISOString();
                                         if (item.OperationDateTime.substring(0, 10) >= date_result.substring(0, 10)) {
                                             options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDateTime.toString()));
                                         }
                                     }
 
                                     if (anticipated_sell === "1") {
                                         advance_sale_funds_bank = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                     else {
                                         funds_summary_bank = true;
 
                                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                         object_response.dates = options_advance_sale;
                                         NDSchat.addQuestion(object_response);
 
                                     }
 
 
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         }
                     }
                 }
                 else if (advance_sale_funds) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     if (lastAnswer == "Sí") {
                         advance_sale_funds = false;
 
                         body.IssuerName = issuer_name;
                         body.IssuerSerie = issuer_serie;
                         body.IssuerAmount = current_value;
                         body.AdvanceSale = anticipated_sell;
                         body.ContractNumber = contract_number;
 
                         NDSchat.getIntegrationsEndpoint('getIsAdvanceSaleFund', "POST", body, function (response) {
                             if (!response.error) {
                                 //filter results that have no value
                                 isAdvanceSaleFundResponse = response;
 
                                 funds_summary = true;
                                 var options_advance_sale = [];
 
                                 for (var item of isAdvanceSaleFundResponse.OperationDatesData) {
                                     var date = new Date();
                                     date_result = date.toISOString();
                                     if (item.OperationDate.substring(0, 10) >= date_result.substring(0, 10)) {
                                         options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDate.toString()));
                                     }
                                 }
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                 object_response.dates = options_advance_sale;
                                 NDSchat.addQuestion(object_response);
 
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                     else if (lastAnswer === "No") {
                         advance_sale_funds = false;
                         funds_summary = true;
                         anticipated_sell = "";
 
                         for (var item of isAdvanceSaleFundResponse.OperationDatesData) {
                             var date = new Date();
                             date_result = date.toISOString();
                             if (item.OperationDate.substring(0, 10) >= date_result.substring(0, 10)) {
                                 options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDate.toString()));
                             }
                         }
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                         object_response.dates = options_advance_sale;
                         NDSchat.addQuestion(object_response);
 
 
                     }
                     else {
                         object_response = NDSchat.defineResponseObject(widgetTexts.is_advance_sale, "Single Choice", "option", "Question");
                         object_response.options = ["Sí", "No"];
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (advance_sale_funds_bank) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     if (lastAnswer == "Sí") {
                         advance_sale_funds_bank = false;
 
                         body.FundID = issuer_name;
                         body.Serie = issuer_serie;
                         body.IssuerAmount = current_value;
                         body.AnticipatedSell = anticipated_sell;
                         body.OperationDateLumina = date_operation_lumina;
 
                         NDSchat.getIntegrationsEndpoint('BankInvstCalendarByFunds', "POST", body, function (response) {
                             if (!response.error) {
                                 //filter results that have no value
                                 isAdvanceSaleFundResponse = response;
 
                                 funds_summary_bank = true;
                                 var options_advance_sale = [];
 
                                 for (var item of isAdvanceSaleFundResponse) {
                                     var date = new Date();
                                     date_result = date.toISOString();
                                     if (item.OperationDateTime.substring(0, 10) >= date_result.substring(0, 10)) {
                                         options_advance_sale.push(NDSchat.convertFromStringToDate(item.OperationDateTime.toString()));
                                     }
                                 }
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                                 object_response.dates = options_advance_sale;
                                 NDSchat.addQuestion(object_response);
 
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                     else if (lastAnswer === "No") {
                         advance_sale_funds_bank = false;
                         funds_summary_bank = true;
                         anticipated_sell = "";
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_sale_date, "Calendar", "calendar", "Question");
                         object_response.dates = options_advance_sale;
                         NDSchat.addQuestion(object_response);
                     }
                     else {
                         object_response = NDSchat.defineResponseObject(widgetTexts.is_advance_sale, "Single Choice", "option", "Question");
                         object_response.options = ["Sí", "No"];
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (funds_summary) {
                     NDSchat.removeButtons();
                     funds_summary = false;
                     confirm_fund = true;
 
                     for (var item of isAdvanceSaleFundResponse.OperationDatesData) {
                         if (NDSchat.convertFromStringToDate(item.OperationDate.toString()) === lastAnswer) {
 
                             operation_date_fund = item.OperationDate.toString();
                             movement_type_fund = item.MovementType;
                             settlement_date = item.SettlementDate.toString();
                             break;
                         }
                     }
 
 
                     body.ClientNumber = actinver_number;
                     body.Contracts = [contract_number];
 
                     NDSchat.getIntegrationsEndpoint('getHouseRelatedContracts', "POST", body, function (response) {
                         NDSchat.removeBubbles();
 
                         if (!response.error) {
                             contract_number_eje = response.ContractNumber;
 
                             message_confirm_fund = "";
 
                             if (issuer_registration_type === "2") {
 
                                 message_confirm_fund = widgetTexts.message_confirm_fund
                                     .replace('{{0}}', NDSchat.maskContract(contract_number))
                                     .replace('{{1}}', select_choice_bank_or_house)
                                     .replace('{{2}}', issuer_name)
                                     .replace('{{3}}', transfer_amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                                     .replace('{{4}}', NDSchat.convertFromStringToDate(operation_date_fund.toString()))
                                     .replace('{{5}}', NDSchat.maskContract(contract_number_eje))
                             }
                             else {
 
                                 message_confirm_fund = widgetTexts.message_confirm_fund_qty
                                     .replace('{{0}}', NDSchat.maskContract(contract_number))
                                     .replace('{{1}}', select_choice_bank_or_house)
                                     .replace('{{2}}', issuer_name)
                                     .replace('{{3}}', sale_titles_qty.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                                     .replace('{{4}}', NDSchat.convertFromStringToDate(operation_date_fund.toString()))
                                     .replace('{{5}}', NDSchat.maskContract(contract_number_eje))
                             }
 
                             object_response = NDSchat.defineResponseObject(message_confirm_fund, "Single Choice", "option", "Question");
                             object_response.options = ["Sí", "No"];
                             NDSchat.addQuestion(object_response);
 
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             final_use_case = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
 
                 }
                 else if (funds_summary_bank) {
                     NDSchat.removeButtons();
                     NDSchat.removeBubbles();
                     funds_summary_bank = false;
                     confirm_fund_bank = true;
 
                     for (var item of isAdvanceSaleFundResponse) {
                         if (NDSchat.convertFromStringToDate(item.OperationDateTime.toString()) === lastAnswer) {
 
                             operation_date_fund = item.OperationDateTime.toString();
                             settlement_date = item.SettlementDateTime.toString();
                             break;
                         }
                     }
 
                     message_confirm_fund = "";
 
                     if (issuer_registration_type === "2") {
 
                         isAmount = true;
 
 
                         message_confirm_fund = widgetTexts.message_confirm_fund_bank
                             .replace('{{0}}', NDSchat.maskContract(contract_number))
                             .replace('{{1}}', select_choice_bank_or_house)
                             .replace('{{2}}', issuer_name)
                             .replace('{{3}}', transfer_amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                             .replace('{{4}}', NDSchat.convertFromStringToDate(operation_date_fund.toString()));
                     }
                     else {
 
                         isTitlesQty = true;
 
                         transfer_amount = "0";
                         message_confirm_fund = widgetTexts.message_confirm_fund_qty_bank
                             .replace('{{0}}', NDSchat.maskContract(contract_number))
                             .replace('{{1}}', select_choice_bank_or_house)
                             .replace('{{2}}', issuer_name)
                             .replace('{{3}}', sale_titles_qty.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                             .replace('{{4}}', NDSchat.convertFromStringToDate(operation_date_fund.toString()));
                     }
 
                     object_response = NDSchat.defineResponseObject(message_confirm_fund, "Single Choice", "option", "Question");
                     object_response.options = ["Sí", "No"];
                     NDSchat.addQuestion(object_response);
                 }
                 else if (confirm_fund) {
                     confirm_fund = false;
 
                     NDSchat.createInteractionUseCase(lastAnswer, message_confirm_fund);
 
                     if (lastAnswer == "Sí") {
 
                         send_fund = true;
 
                         phone_validation = true;
                         NDSchat.handleAuthFlux(phone_registered_spei);
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_cancel, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
 
                     }
 
                 }
                 else if (confirm_fund_bank) {
                     confirm_fund_bank = false;
 
                     NDSchat.createInteractionUseCase(lastAnswer, message_confirm_fund);
 
                     if (lastAnswer == "Sí") {
 
                         send_fund = true;
                         phone_validation = true;
                         NDSchat.handleAuthFlux(phone_registered_spei);
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.fund_cancel, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
 
                     }
 
                 }
                 else if (confirm_successful_fund) {
                     NDSchat.removeButtons();
 
                     confirm_successful_fund = false;
                     send_fund = false;
 
                     body.ContractNumber = contract_number;
                     body.IssuerName = issuer_name;
                     body.IssuerSerie = issuer_serie;
                     body.TitlesAmount = transfer_amount;
                     body.TitlesQty = sale_titles_qty;
                     body.OperationDate = operation_date_fund;
                     body.SettlementDate = settlement_date;
                     body.AnticipatedSell = anticipated_sell;
                     body.RegistrationType = issuer_registration_type;
 
                     NDSchat.getIntegrationsEndpoint('getFundOrderQuotation', "POST", body, function (response) {
                         NDSchat.removeBubbles();
 
                         if (!response.error) {
 
                             NDSchat.getIntegrationsEndpoint('getFundOrderRegistration', "POST", body, function (response) {
                                 if (!response.error) {
 
                                     var success_fund_sale = widgetTexts.success_fund_sale
                                         .replace("{{0}}", issuer_name)
                                         .replace("{{1}}", response.FirstOrderReference)
                                         .replace("{{2}}", response.TitlesQty)
                                         .replace("{{3}}", response.NetAmount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                                         .replace("{{4}}", NDSchat.convertFromStringToDate(settlement_date.toString()))
 
                                     NDSchat.createInteractionUseCase("", success_fund_sale);
 
                                     object_response = NDSchat.defineResponseObject(success_fund_sale, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     NDSchat.removeButtons();
 
                                     if (form.sale_funds.sale_the_same_day.includes(issuer_name.toLowerCase())) {
 
                                         asking_sale_same_day = widgetTexts.asking_sale_same_day;
                                         object_response = NDSchat.defineResponseObject(widgetTexts.asking_sale_same_day, "Yes No", "option", "Question");
                                         object_response.options = ["Sí", "No"];
                                         NDSchat.addQuestion(object_response);
 
                                         sale_the_same_day = true;
 
                                     }
                                     else {
                                         use_case_flux = false;
                                         final_use_case = true;
                                         closing_flux = true;
                                         NDSchat.handleAuthFlux("");
                                     }
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     NDSchat.createInteractionUseCase("", widgetTexts.unavailable_info + " Operación cancelada.");
 
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
                 }
                 else if (confirm_successful_fund_bank) {
                     NDSchat.removeButtons();
 
                     confirm_successful_fund_bank = false;
 
                     send_fund = false;
                     body.ContractNumber = contract_number;
                     body.ClientNumber = actinver_number;
                     body.FundName = issuer_name;
                     body.TitlesQty = sale_titles_qty;
                     body.Serie = issuer_serie;
                     body.Amount = transfer_amount;
                     body.OperationDate = operation_date_fund;
                     body.Price = issuer_market_price;
                     body.RequestType = "VALIDATE";
                     body.IsTitlesQty = isTitlesQty;
                     body.IsAmount = isAmount;
 
                     NDSchat.getIntegrationsEndpoint('BankFundSell', "POST", body, function (response) {
 
                         if (response.IsValid) {
 
                             body.RequestType = "SAVE";
 
                             NDSchat.getIntegrationsEndpoint('BankFundSell', "POST", body, function (response) {
                                 if (response.IsValid) {
                                     NDSchat.removeBubbles();
 
                                     var success_fund_sale = widgetTexts.success_fund_sale
                                         .replace("{{0}}", issuer_name)
                                         .replace("{{1}}", response.OrderReference)
                                         .replace("{{2}}", response.TitlesQty)
                                         .replace("{{3}}", response.Amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                                         .replace("{{4}}", NDSchat.convertFromStringToDate(response.OperationDate.toString()))
 
                                     end_option_fund_bank = true;
 
 
                                     object_response = NDSchat.defineResponseObject(success_fund_sale + "<br><br> ¿Quisieras realizar alguna de las siguientes opciones?", "Single Choice", "option", "Question");
                                     object_response.options = ["SPEI", "Venta de Fondos", "No"];
                                     NDSchat.addQuestion(object_response);
 
                                     NDSchat.createInteractionUseCase("", success_fund_sale);
 
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     token_method = "";
                                     NDSchat.createInteractionUseCase("", widgetTexts.unavailable_info + " Operación cancelada.");
 
                                     object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         } else {
                             // If not client, ask for the user information
                             use_case_flux = false;
                             token_method = "";
                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                         NDSchat.searchLinkClasses();
                     });
 
                 }
                 else if (end_option_fund_bank) {
                     NDSchat.removeButtons();
                     NDSchat.removeBubbles();
                     end_option_fund_bank = false;
 
                     if (lastAnswer == "SPEI") {
                         use_case_action = "spei";
                         send_spei = false;
                         validate_phone_code = true;
                         is_option_fund_bank = true;
                         NDSchat.handleAuthFlux("****");
 
                     }
                     else if (lastAnswer = "Venta de Fondos") {
 
                         send_fund = false;
                         validate_phone_code = true;
                         is_option_fund_bank = true;
                         NDSchat.handleAuthFlux("*****");
                     }
                     else if (lastAnswer == "No") {
 
                         use_case_flux = false;
                         final_use_case = true;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
                     }
                     else {
                         use_case_flux = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
 
                     }
 
                 }
                 else if (blockear_tdd) {
                     blockear_tdd = false;
 
                     if (lastAnswer == "Sí") {
 
                         var body = {};
                         body.Token = tokenTDD;
                         NDSchat.getIntegrationsEndpoint('DebitCardStatus', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 //filter results that have no value
 
 
                                 if (response.Status == "2") {
                                     var body = {};
                                     body.CardToken = tokenTDD;
                                     body.ContractNumber = contract_number;
                                     body.BlockingFlag = true;
                                     body.Description = "Bloqueo de TDD";
 
 
                                     NDSchat.getIntegrationsEndpoint('DebitCardBlocking', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             //filter results that have no value
 
 
                                             object_response = NDSchat.defineResponseObject(widgetTexts.tdd_successful_block, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                             NDSchat.removeButtons();
 
                                             object_response = NDSchat.defineResponseObject(widgetTexts.agent_request, "Yes No", "confirmAgent", "Question");
                                             object_response.options = ["No", "Sí"];
                                             NDSchat.addQuestion(object_response);
 
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                                 else if (response.Status == "9") {
                                     closing_flux = true;
                                     use_case_flux = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.tdd_card_blocked_alert, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
 
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else {
 
                                     closing_flux = true;
                                     use_case_flux = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.tdd_card_canceled_alert, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
 
                                     NDSchat.handleAuthFlux("");
                                 }
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.tdd_operation_cancelled, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
                     }
                 }
                 else if (desblockear_tdd) {
                     desblockear_tdd = false;
 
                     if (lastAnswer == "Sí") {
 
                         var body = {};
                         body.Token = tokenTDD;
                         NDSchat.getIntegrationsEndpoint('DebitCardStatus', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 //filter results that have no value
 
 
                                 if (response.Status == "9") {
                                     var body = {};
                                     body.CardToken = tokenTDD;
                                     body.ContractNumber = contract_number;
                                     body.BlockingFlag = false;
                                     body.Description = "Desbloqueo de TDD";
 
 
                                     NDSchat.getIntegrationsEndpoint('DebitCardBlocking', "POST", body, function (response) {
                                         NDSchat.removeBubbles();
                                         if (!response.error) {
                                             //filter results that have no value
 
 
                                             object_response = NDSchat.defineResponseObject(widgetTexts.tdd_successful_unlock, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                             NDSchat.removeButtons();
 
                                             closing_flux = true;
                                             use_case_flux = false;
                                             NDSchat.handleAuthFlux("");
 
                                         } else {
                                             // If not client, ask for the user information
                                             use_case_flux = false;
                                             token_method = "";
                                             object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                             NDSchat.addQuestion(object_response);
                                         }
                                         NDSchat.searchLinkClasses();
                                     });
                                 }
                                 else if (response.Status == "2") {
                                     closing_flux = true;
                                     use_case_flux = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.tdd_card_unblocked_alert, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
 
                                     NDSchat.handleAuthFlux("");
                                 }
                                 else {
 
                                     closing_flux = true;
                                     use_case_flux = false;
                                     object_response = NDSchat.defineResponseObject(widgetTexts.tdd_card_canceled_alert, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
 
                                     NDSchat.handleAuthFlux("");
                                 }
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.tdd_operation_cancelled, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
 
                     }
 
                 }
                 else if (sale_the_same_day) {
                     NDSchat.removeBubbles();
 
                     sale_the_same_day = false;
                     remove_special_characters = false;
 
                     NDSchat.createInteractionUseCase(lastAnswer, asking_sale_same_day);
                     if (lastAnswer == "Sí") {
 
                         body.ContractNumber = contract_number;
                         NDSchat.getIntegrationsEndpoint('BuyingPower', "POST", body, function (response) {
                             if (!response.error) {
 
                                 validate_amont_sale_the_same_day = true;
 
                                 currentCash = response.CurrentCash;
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.sale_same_day_buying_power.replace('{{1}}', currentCash.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")), "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 // If not client, ask for the user information
                                 use_case_flux = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else {
                         use_case_flux = false;
                         final_use_case = true;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
                     }
                 }
 
                 else if (validate_amont_sale_the_same_day) {
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
 
                     var regex = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
                     NDSchat.removeBubbles();
                     NDSchat.removeButtons();
 
                     current_value = current_value.replace(/[^0-9.]/g, "").trim();
                     var filter_amount = "";
                     filter_amount = lastAnswer.replace(/[^0-9.]/g, "").trim();
 
 
                     if (retryCount >= 3) {
                         use_case_flux = false;
                         validate_amont_sale_the_same_day = false;
                         token_method = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else if (parseFloat(filter_amount) <= 0) {
                         retryCount++;
                         object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount_sale_same_day_2, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                     else {
                         if ((!regex.test(lastAnswer)) || (parseFloat(filter_amount) > parseFloat(current_value))) {
                             if ((!regex.test(lastAnswer))) {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fund_wrong_format, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                             } else {
                                 retryCount++;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.wrong_amount_sale_same_day, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                         }
                         else {
 
                             validate_amont_sale_the_same_day = false;
                             select_contract = true;
                             is_sale_the_same_day = true;
                             remove_special_characters = true;
                             transfer_amount = filter_amount;
 
                             body = {};
                             body.ClientNumber = actinver_number;
                             NDSchat.getIntegrationsEndpoint('getContracts', "POST", body, function (response) {
                                 NDSchat.removeBubbles();
                                 if (!response.error) {
                                     object_response = NDSchat.defineResponseObject(widgetTexts.showing_contracts, "Single Choice", "option", "Question");
                                     actinver_contracts = [];
                                     response.bankContracts.forEach(function (element) {
                                         var a = NDSchat.maskContract(element);
                                         actinver_contracts.push(a);
                                         ContractsDict[element] = 1;
                                     });
                                     object_response.options = actinver_contracts;
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     // If not client, ask for the user information
                                     use_case_flux = false;
                                     validate_phone_code = false;
                                     select_contract = false;
                                     token_method = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.no_contracts_found, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                                 NDSchat.searchLinkClasses();
                             });
 
                         }
                     }
                 }
 
                 else if (confirm_spei_sale_the_same_day) {
                     confirm_spei_sale_the_same_day = false;
                     NDSchat.removeButtons();
 
                     NDSchat.createInteractionUseCase(lastAnswer, message_confirm_sale_the_same_day);
 
                     if (lastAnswer == "Sí") {
                         var body = {};
                         body.ClientNumber = actinver_number;
                         body.ContractNumber = contract_number;
                         body.DestinationAccount = destination_account;
                         body.Amount = transfer_amount;
                         body.TransferDetails = "Venta de fondos : Transfer Casa de Bolsa a Banco"
 
                         NDSchat.getIntegrationsEndpoint('TransferActinverAccounts', "POST", body, function (response) {
                             if (!response.error) {
                                 NDSchat.removeBubbles();
                                 NDSchat.createInteractionUseCase("", widgetTexts.successful_sale_the_same_day.replace("{{1}}", NDSchat.maskContract(response.OperationReference)));
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.successful_sale_the_same_day.replace("{{1}}", response.OperationReference), "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 NDSchat.removeButtons();
 
                                 final_use_case = true;
                                 use_case_flux = false;
                                 closing_flux = true;
                                 NDSchat.handleAuthFlux("");
 
 
                             } else {
                                 // If not client, ask for the user information
                                 token_method = "";
                                 NDSchat.createInteractionUseCase("", widgetTexts.unavailable_info + " Operación cancelada.");
                                 object_response = NDSchat.defineResponseObject(widgetTexts.unavailable_info, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                                 final_use_case = true;
                                 use_case_flux = false;
                                 closing_flux = true;
                                 NDSchat.handleAuthFlux("");
                             }
                             NDSchat.searchLinkClasses();
                         });
 
 
                     }
                     else {
                         NDSchat.removeButtons();
 
                         object_response = NDSchat.defineResponseObject(widgetTexts.cancel_spei, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         NDSchat.removeButtons();
 
                         final_use_case = true;
                         use_case_flux = false;
                         closing_flux = true;
                         NDSchat.handleAuthFlux("");
 
                     }
 
                 }
 
                 else if (select_period) {
                     NDSchat.removeButtons();
                     contractType = ContractsDict[actinver_contract];
                     select_period = false;
                     if (use_case_action == "activacion_tdd") {
                         var card = lastAnswer;
                         body.cardNumber = card;
                         NDSchat.getIntegrationsEndpoint('getCardStatus', "POST", body, function (response) {
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 if (response.status) {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     token_method = "";
                                     use_case_action = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.active_card, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     object_response = NDSchat.defineResponseObject(widgetTexts.card_activation_question, "Yes No", "option", "Question");
                                     object_response.options = ["Sí", "No"];
                                     NDSchat.addQuestion(object_response);
                                     card_activation = true;
                                 }
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 use_case_action = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_token_found, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     }
                     else if (use_case_action == "edo_cta") {
                         //selected period
                         d = new Date();
                         currentMonth = d.getMonth();
                         currentYear = d.getFullYear();
                         var selectedPeriod = lastAnswer.split("-");
                         body.contractNumber = actinver_contract;
                         body.TypeAccountStatement = 3;
                         body.BusinessType = contractType;
                         body.email = selected_email.toLowerCase();
                         body.year = parseInt(selectedPeriod[1]);
                         body.month = NDSchat.parseMonth(selectedPeriod[0], 2);
                         NDSchat.getIntegrationsEndpoint('sendAccountStatement', "POST", body, function (response) {
                             final_use_case = true;
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 select_period = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.statement_sent, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                                 closing_flux = true;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.statement_closing_flux, "Yes No", "option", "Question");
                                 object_response.options = ["Sí", "No"];
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 select_period = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                     else if (use_case_action == "constancia") {
                         //selected period
                         d = new Date();
                         currentMonth = d.getMonth();
                         currentYear = d.getFullYear();
 
                         body.contractNumber = actinver_contract;
                         body.TypeAccountStatement = 4;
                         body.BusinessType = contractType;
                         body.email = selected_email.toLowerCase();
                         body.year = lastAnswer;
                         body.month = "01";
                         NDSchat.getIntegrationsEndpoint('sendAccountStatement', "POST", body, function (response) {
                             final_use_case = true;
                             NDSchat.removeBubbles();
                             if (!response.error) {
                                 select_period = false;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.constancia_sent, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
 
                                 closing_flux = true;
                                 object_response = NDSchat.defineResponseObject(widgetTexts.fiscal_closing_flux, "Yes No", "option", "Question");
                                 object_response.options = ["Sí", "No"];
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 final_use_case = false;
                                 select_period = false;
                                 token_method = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
 
                     }
                 }
                 else if (card_activation) {
                     NDSchat.removeBubbles();
                     if (lastAnswer == "Sí") {
                         body.cardNumber = c_number;
                         body.contract = actinver_contract;
                         NDSchat.getIntegrationsEndpoint('activateCard', "POST", body, function (response) {
                             if (!response.error) {
                                 if (response.status) {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     changing_token_status = false;
                                     card_activation = false;
                                     token_method = "";
                                     use_case_action = "";
                                     object_response = NDSchat.defineResponseObject(response.status, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                                     object_response.options = ["No", "Sí"];
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     changing_token_status = false;
                                     card_activation = false;
                                     token_method = "";
                                     use_case_action = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                     object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                                     object_response.options = ["No", "Sí"];
                                     NDSchat.addQuestion(object_response);
                                 }
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 card_activation = false;
                                 token_method = "";
                                 use_case_action = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     } else {
                         use_case_flux = false;
                         final_use_case = false;
                         card_activation = false;
                         token_method = "";
                         use_case_action = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (changing_token_status) {
                     NDSchat.removeBubbles();
                     if (lastAnswer == "Sí") {
                         body.ClientNumber = actinver_number;
                         body.tokenSerial = actinver_token;
                         NDSchat.getIntegrationsEndpoint('changeTokenStatus', "POST", body, function (response) {
                             if (!response.error) {
                                 if (response.statusChanged) {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     changing_token_status = false;
                                     token_method = "";
                                     use_case_action = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.token_deactivated, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     use_case_flux = false;
                                     final_use_case = false;
                                     changing_token_status = false;
                                     token_method = "";
                                     use_case_action = "";
                                     object_response = NDSchat.defineResponseObject(widgetTexts.token_fail, "Question", "text", "Question");
                                     NDSchat.addQuestion(object_response);
                                 }
                             } else {
                                 use_case_flux = false;
                                 final_use_case = false;
                                 token_method = "";
                                 use_case_action = "";
                                 object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.searchLinkClasses();
                         });
                     } else {
                         use_case_flux = false;
                         final_use_case = false;
                         token_method = "";
                         use_case_action = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.service_unavailable, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 else if (closing_flux) {
                     NDSchat.removeBubbles();
                     closing_flux = false;
                     if (lastAnswer == "Sí") {
                         if (use_case_action == "saldo") {
                             verify_email = true;
                             NDSchat.handleAuthFlux("");
                         }
                         else if (use_case_action == "edo_cta") {
                             new_statement = true;
                             NDSchat.handleAuthFlux("");
                         }
                         else if (use_case_action == "constancia") {
                             new_statement = true;
                             NDSchat.handleAuthFlux("");
                         }
                         else if (use_case_action == "cuenta_clabe") {
                             new_statement = true;
                             NDSchat.handleAuthFlux("");
                         }
                     } else {
                         use_case_flux = false;
                         final_use_case = false;
                         token_method = "";
                         use_case_action = "";
                         object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                         object_response.options = ["No", "Sí"];
                         NDSchat.addQuestion(object_response);
                     }
                 }
             },
             /**
              * This function is in charge of set the type of message and the variables needed for every
              * flux, creates bubbles and question templates
              * @param {Object} watson - The new question sended from watson
              * @param {string} lastAnswer - The last answer of the user
              */
             handleMessage: function (watson, lastAnswer) {
                 // Get the entities and compose a generic doubt string
                 context = watson.context;
 
                 if (transcript.length >= 5) {
                     transcript.pop();
                 }
 
                 transcript.push({
                     "user": lastAnswer,
                     "bot": watson.response
                 });
 
                 var entities = [];
                 if (watson.context.duda_generica === "true") {
                     watson.entities.forEach(function (element) {
                         if (!_.contains(entities, lastAnswer.substring(element.location[0], element.location[1])) &&
                             lastAnswer.substring(element.location[0], element.location[1]) !== "duda") {
                             entities.push(lastAnswer.substring(element.location[0], element.location[1]));
                         }
                     });
                 }
 
                 doubt_string = entities.length !== 0 ? entities.join(' ') : '';
 
                 watson.response = NDSchat.modifyLinks(watson.response);
 
                 // If there is unclosed or unstarted links, remove it
                 if (watson.response[watson.response.length - 1] === "a" &&
                     watson.response[watson.response.length - 2] === "<")
                     watson.response = watson.response.slice(0, -2);
 
                 var object_response = false;
                 opciones = false;
                 current_context = null;
                 phone_regex = /[+52 ]*\((01 55|55)\) 5721-(1|3)[0-9]{3}/g;
 
                 // aqui va phon
                 if (nds_utils.mobilecheck()) {
                     var matches = watson.response.match(phone_regex);
                     if (matches != null) {
                         matches.forEach(function (match) {
                             watson.response = watson.response.replace(match, '<a href="tel:"' + match.replace(/\s/g, "") + '">' + match.replace(/\s/, "") + "</a>");
                         });
                     }
                 }
 
                 // Evaluate context to classify case
                 if (watson.context != null) {
                     current_context = watson.context;
                     // For testing purposes
                     nid = watson.context.nid ? watson.context.nid : "";
                     if (session_ended) {
                         clearTimeout(not_input_timeout);
                         clearTimeout(not_input_timeout2);
                         clearTimeout(chat_closed_timeout);
                     }
                 }
 
                 if (widget.nid)
                     watson.response += "<p style='color:#006600;'>" + nid + "</p>";
 
                 if (watson.context.metodo_localizacion && watson.context.metodo_localizacion != "ubicacion") {
                     location_object = watson.context.metodo_localizacion;
                 }
                 //////////////////////////////
                 // Date CaseFlux
                 //   - Sends the date to Avaya or to email
                 if (watson.context.enviar_cita === "true") {
                     isDate = true;
 
                     if (watson.context.in_time === "holiday") {
                         tp_text = widgetTexts.agent_holiday_text;
                         object_response = NDSchat.defineResponseObject(
                             tp_text,
                             "dateInfoCC",
                             "dateInfoCC",
                             "Form");
                         NDSchat.addQuestion(object_response);
                     } else if (watson.context.in_time === "notInTime") {
                         tp_text = widgetTexts.agent_out_hours_text;
                         object_response = NDSchat.defineResponseObject(
                             tp_text,
                             "dateInfoCC",
                             "dateInfoCC",
                             "Form");
                         NDSchat.addQuestion(object_response);
                     } else {
                         object_response = NDSchat.defineResponseObject(widgetTexts.date_agent_request, "Yes No", "confirmAgent", "Question");
                         object_response.options = ["No", "Sí"];
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 //////////////////////////////
                 // Use CaseFlux
                 //   - Looks for the variable that indicates that the user must be authenticated
                 else if (watson.context.flujo_consulta) {
                     use_case_flux = true;
                     final_use_case = false;
                     use_case_action = watson.context.flujo_consulta;
 
                     get_client_data = use_case_action == "activacion_tdd" ? false : true;
                     get_client_number_by_contract_data = use_case_action == "cliente_unico" ? true : false;
 
 
                     var dictionary_use_case_action = {
                         cliente_unico: function () {
 
                             return object_response = NDSchat.defineResponseObject(widgetTexts.asking_client_contract, "Question", "text", "Question");
                         },
                         other: function () {
 
                             var hr = new Date().toLocaleTimeString().split(":");
                             if (use_case_action === "spei" && !(hr[0] < form.schedule_restriction.spei.start && hr[0] >= form.schedule_restriction.spei.end)) {
                                 object_response = NDSchat.defineResponseObject("Te recordamos que a partir de las " + form.schedule_restriction.spei.start + ":00 hrs y hasta las " + form.schedule_restriction.spei.end + ":00 hrs, el monto máximo para operar es de $" + form.schedule_restriction.spei.maximum_amount_spei.toString() + " MXN por transacción.", "Question", "text", "Question");
                                 NDSchat.addQuestion(object_response);
                             }
                             NDSchat.removeButtons();
 
 
                             return object_response = NDSchat.defineResponseObject(use_case_action == "saldo" ? widgetTexts.asking_client_number_saldo : widgetTexts.asking_client_number_acct, "Question", "text", "Question");
                         },
                         activacion_tdd: function () {
 
                             object_response = NDSchat.defineResponseObject("Tu tarjeta la recibiste en: ", "Single Choice", "option", "Question");
                             object_response.options = ["Tu Domicilio", "Centro Financiero"];
                             card_filter_response = true;
                             card_filter = false;
                             get_client_data = false;
                             return object_response;
                         },
                         venta_fondos: function () {
 
                             //choose_token_method = false;
                             //phone_validation = false
                             //get_client_data = false;
                             //sale_the_same_day = true
                             //NDSchat.handleAuthFlux(lastAnswer);
                             if (form.schedule_restriction.fund.is_active) {
                                 const start = form.schedule_restriction.fund.start_hr * 60 + form.schedule_restriction.fund.start_min;
                                 const end = form.schedule_restriction.fund.end_hr * 60 + form.schedule_restriction.fund.end_min;
                                 const date = new Date();
                                 const now = date.getHours() * 60 + date.getMinutes();
 
                                 let day = date.getDate()
                                 let month = date.getMonth() + 1
                                 let year = date.getFullYear()
 
                                 if ((form.schedule_restriction.fund.day_restriction.includes(date.getDay())) || (form.schedule_restriction.no_labour_days.includes(`${day}-${month}-${year}`))) {
                                     closing_flux = true;
                                     use_case_flux = false;
                                     final_use_case = true;
                                     get_client_data = false;
 
                                     return object_response = NDSchat.defineResponseObject(widgetTexts.fund_schedule_restriction, "Question", "text", "Question");
                                     NDSchat.removeButtons();
                                 }
 
                                 else if (!(start <= now && now <= end)) {
                                     closing_flux = true;
                                     use_case_flux = false;
                                     final_use_case = true;
                                     get_client_data = false;
 
                                     return object_response = NDSchat.defineResponseObject(widgetTexts.fund_schedule_restriction, "Question", "text", "Question");
                                     NDSchat.removeButtons();
                                 }
                                 else {
                                     return object_response = NDSchat.defineResponseObject(widgetTexts.asking_client_number_acct, "Question", "text", "Question");
                                 }
                             }
                             else {
                                 return object_response = NDSchat.defineResponseObject(widgetTexts.asking_client_number_acct, "Question", "text", "Question");
                             }
                         },
                         seguro_auto: function () { return NDSchat.getUrlInsurance(select_use_case_action); },
                         seguro_vida: function () { return NDSchat.getUrlInsurance(select_use_case_action); },
                         seguro_hogar: function () { return NDSchat.getUrlInsurance(select_use_case_action); },
                         seguro_gmm: function () { return NDSchat.getUrlInsurance(select_use_case_action); },
                         seguro_otros: function () { return NDSchat.getUrlInsurance(select_use_case_action); }
 
                     };
 
                     var select_use_case_action = use_case_action;
 
                     if (!dictionary_use_case_action.hasOwnProperty(select_use_case_action)) {
                         select_use_case_action = "other"
                     }
 
                     object_response = dictionary_use_case_action[select_use_case_action]();
                     NDSchat.addQuestion(object_response);
                 }
 
                 //////////////////////////////
                 // Contact Center Agent
                 //   - Check is Contact Center Agent is needed to continue the interaction.
                 //     and if the time of the request is ok
                 else if (watson.context.agente === "true") {
                     if (watson.context.agente === "true" &&
                         watson.context.in_time !== "holiday" &&
                         watson.context.in_time !== "notInTime") {
                         // Ask if the user wants to start contact center flux
                         object_response = NDSchat.defineResponseObject(watson.response, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         object_response = NDSchat.defineResponseObject(widgetTexts.agent_request, "Yes No", "confirmAgent", "Question");
                         object_response.options = ["No", "Sí"];
                         NDSchat.addQuestion(object_response);
                     }
                     //    - If the contact center request is not in time
                     else if (watson.context.agente === "true") {
                         if (watson.context.in_time === "holiday") {
                             tp_text = widgetTexts.agent_holiday_text;
                             object_response = NDSchat.defineResponseObject(
                                 tp_text,
                                 "closedContactCenter",
                                 "closedContactCenter",
                                 "Form");
                         } else if (watson.context.in_time === "notInTime") {
                             tp_text = widgetTexts.agent_out_hours_text;
                             object_response = NDSchat.defineResponseObject(
                                 tp_text,
                                 "closedContactCenter",
                                 "closedContactCenter",
                                 "Form");
                         }
 
                         NDSchat.addQuestion(object_response);
                     }
                 }
                 /////////////////////////////
                 // Localization Flux
                 //   - Handles the localization flux
                 else if (finish_localization) {
                     NDSchat.initTimers();
                     NDSchat.addBubbles();
                     nds_utils.minAjax({
                         url: config.url + config.api_version + "getCoordinates",
                         type: "POST",
                         headers: {
                             "Content-type": "application/json",
                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                             "X-APP-TOKEN": NDSchat.state.token,
                             "X-API-KEY": config.token_apigee
                         },
                         data: {
                             "query": "cp-" + lastAnswer.trim() + "+Mexico"
                         },
                         json: true,
                         success: function (response) {
                             finish_localization = false;
                             response = JSON.parse(response);
                             latlng = response.latlng;
                             var keyword = watson.context.metodo_localizacion;
                             if (watson.context.metodo_localizacion == "cajero") keyword += " multiva scotiabank";
                             if (latlng) NDSchat.getLocation(latlng[0] + "," + latlng[1], keyword, null);
                             else {
                                 var object_response = NDSchat.defineResponseObject(widgetTexts.localization_message,
                                     "Yes No",
                                     "timers",
                                     "Question");
                                 object_response.options = ['No', 'Sí'];
                                 NDSchat.removeBubbles();
                                 NDSchat.addQuestion(object_response);
                             }
                         },
                         error: function (status, readyState, code) {
                             finish_localization = false;
                             var object_response = NDSchat.defineResponseObject(widgetTexts.localization_message,
                                 "Yes No",
                                 "timers",
                                 "Question");
                             object_response.options = ['No', 'Sí'];
                             NDSchat.removeBubbles();
                             NDSchat.addQuestion(object_response);
                         }
                     });
                 }
                 else if (watson.context.tipo_localizacion && watson.context.metodo_localizacion === 'ubicacion') {
                     NDSchat.initTimers();
                     parent.postMessage("nds_ask_gps", "*");
                 }
                 else if (watson.context.metodo_localizacion && watson.context.tipo_localizacion == "codigo_postal") {
                     var validation = {
                         "or": [
                             "código postal"
                         ]
                     };
                     object_response = NDSchat.defineResponseObject(watson.response, "Question", "text", nid);
                     object_response.validate = validation;
                     NDSchat.addQuestion(object_response);
                     finish_localization = true;
                 }
                 else if (watson.context.localizar && !watson.context.pedir_cp && !watson.context.metodo_localizacion) {
                     NDSchat.checkArray(watson.context.opciones, watson);
                 }
                 /////////////////////////////
                 // Options
                 //   - Check for context var to show options (4 or less buttons, more than 4 select)
                 else if (watson.context.opciones !== null && watson.context.opciones !== undefined) {
                     var options = watson.context.opciones;
                     watson.element = nid;
                     NDSchat.checkArray(options, watson);
                 }
                 /////////////////////////////
                 // Multimedia
                 //   - Check for context var to show Multimedia
                 else if (watson.context.multimedia) {
                     object_response = NDSchat.defineResponseObject(watson.response, "Question", "multimedia", watson.element);
                     object_response.multimedia = watson.context.multimedia;
                     object_response.context = watson.context;
                     NDSchat.addQuestion(object_response);
                     last_questions.push(watson.response);
 
                     if (!session_ended) {
                         NDSchat.searchLinkClasses();
                     }
                 }
                 /////////////////////////////
                 // Normal Answer
                 //   - Can be Long Answer (New Screen) or short answer in the same chat bubble
                 else {
                     // Check if answer is too long and display new screen
                     if (NDSchat.getCharactersCount(watson.response) &&
                         (watson.context.buscar === null || watson.context.buscar === undefined)) {
                         watson.element = nid;
 
                         if (nds_utils.mobilecheck()) {
                             NDSchat.longAnswer(watson);
                         } else {
                             //TODO: maybe putting the text on the iframe for multimedia
                             object_response = NDSchat.defineResponseObject(watson.response, "Question", "multimedia", watson.element);
                             object_response.multimedia = watson.context.multimedia;
                             object_response.context = watson.context;
                             NDSchat.addQuestion(object_response);
                         }
 
                         last_questions.push(watson.response);
 
                         if (!session_ended) {
                             NDSchat.searchLinkClasses();
                         }
                     } else if (watson.context.buscar === null || watson.context.buscar === undefined) {
                         bubbles = watson.response.split("<div");
 
                         for (var i = 0; i < bubbles.length; i++) {
                             bubbles[i] = i == 0 ? NDSchat.emptyParagraph(bubbles[i]) : '<div' + bubbles[i];
                             object_response = NDSchat.defineResponseObject(bubbles[i], "Question", "text", nid);
                             NDSchat.addQuestion(object_response);
                         }
 
                         if ("true" === watson.context.despedida) {
                             clearTimeout(not_input_timeout);
                             clearTimeout(not_input_timeout2);
                             clearTimeout(chat_closed_timeout);
                             if (config.require_postsurvey) {
                                 NDSchat.close();
                             } else {
                                 NDSchat.reconnectButton();
                             }
                         }
 
                         if (!session_ended) {
                             NDSchat.searchLinkClasses();
                         }
                     } else {
                         object_response = NDSchat.defineResponseObject(watson.response, "Question", "text", nid);
                         NDSchat.addQuestion(object_response);
 
                         if (!session_ended) {
                             NDSchat.searchLinkClasses();
                         }
                     }
                 }
             },
             /**
             * open insurance window by case 
             * @param {string} key - use case value
             */
             getUrlInsurance: function (key) {
                 window.open(widgetTexts.urls_insurance[key], '_blank');
                 closing_flux = false;
                 use_case_flux = false;
                 final_use_case = false;
                 token_method = "";
                 use_case_action = "";
                 object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                 object_response.options = ["No", "Sí"];
                 return object_response;
             },
 
             /**
                * open insurance window by case 
                * @param {string} key - use case value
               */
             createInteractionUseCase: function (user, agent) {
 
                 var body = {};
                 body.Agent = agent;
                 body.User = user;
 
                 NDSchat.getIntegrationsEndpoint('UseCaseCreateInteraction', "POST", body, function (response) {
                 });
 
             },
 
             /**
             * open insurance window by case 
             * @param {string} key - use case value
             */
             IsBirthday: function () {
 
                 body = {};
                 body.ClientNumber = actinver_number;
                 NDSchat.getIntegrationsEndpoint('getBirthDay', "POST", body, function (response) {
                     NDSchat.removeBubbles();
                     if (!response.error) {
                         birthDate = response.BirthDay;
                         //var date = new Date('1995-04-10T03:24:00');
                         var date = new Date();
 
                         var arrayDate = birthDate.split("-");
                         var dayMonthDate = ('0' + date.getUTCDate()).slice(-2) + ":" + ('0' + (date.getUTCMonth() + 1)).slice(-2);
                         var dayMonthActinver = arrayDate[2] + ":" + arrayDate[1];
                         if (dayMonthDate == dayMonthActinver) {
                             object_response = NDSchat.defineResponseObject("<div class='nds-is-birthday'><img></img></div>", "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                             NDSchat.removeButtons();
                         }
                         // token_method = lastAnswer.toLowerCase();
                         // If the user select phones as option and there is only one phone
                         if (token_method === "sms") {
                             NDSchat.removeBubbles();
                             object_response = NDSchat.defineResponseObject(widgetTexts.asking_for_cellphone, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                     }
                     else {
                         if (token_method === "sms") {
                             NDSchat.removeBubbles();
                             object_response = NDSchat.defineResponseObject(widgetTexts.asking_for_cellphone, "Question", "text", "Question");
                             NDSchat.addQuestion(object_response);
                         }
                     }
                     NDSchat.searchLinkClasses();
                 });
 
             },
             /**
             * open insurance window by case
             * @param {string} key - use case value
             */
             convertFromStringToDate: function (requestDate) {
                 var subfecha = requestDate.substring(0, 10)
                 let datePieces = subfecha.split("-");
                 var fecha = datePieces[2] + "-" + datePieces[1] + "-" + datePieces[0];
                 return fecha;
             },
             /**
              * Gets the maps and images from the near locations
              * @param {array} latlng - The array of latitude and longitude for the search
              * @param {string} keyword - The name of the store
              * @param {string} query_string - The query for teleton directory search
             */
             getLocation: function (latlng, keyword, query_string) {
                 if (location_object == "cajero") keyword = "cajero multiva scotiabank";
                 else if (location_object == "spei_geolocalizacion") {
                    spei_geolocalizacion = latlng;

                    if (use_case_action != "ivr_geolocalizacion") {
                        ask_geolocalizacion_spei = true;
                    }
                    else {
                        ask_geolocalizacion_ivr = true;
                    }
                    NDSchat.handleAuthFlux("");
                }
                 else if (location_object == "centro_financiero") keyword = "centro financiero actinver";
 
                 if (location_object == "cajero" || location_object == "centro_financiero") {
                     nds_utils.minAjax({
                         url: config.url + config.api_version + "getLocation",
                         type: "POST",
                         headers: {
                             "Content-type": "application/json",
                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                             "X-APP-TOKEN": NDSchat.state.token,
                             "X-API-KEY": config.token_apigee
                         },
                         json: true,
                         data: {
                             "location": latlng,
                             "keyword": keyword,
                             "rankby": "distance"
                         },
                         success: function (response) {
                             response = JSON.parse(response);
                             bubbles = response.response.split("<div class=\"atm-location\"");
 
                             for (var i = 0; i < bubbles.length; i++) {
                                 bubbles[i] = i == 0 ? NDSchat.emptyParagraph(bubbles[i]) : '<div class="atm-location"' + bubbles[i];
                                 if (bubbles[i].replace(/<[^>]*>/g, "").trim() !== "") {
                                     object_response = NDSchat.defineResponseObject(bubbles[i], "Question", "text", "0");
                                     NDSchat.addQuestion(object_response);
                                 }
                             }
                             if (!session_ended) {
                                 NDSchat.searchLinkClasses();
                             }
                             NDSchat.initTimers();
                             NDSchat.removeBubbles();
                         },
                         error: function (status, readyState, code) {
                             NDSchat.removeBubbles();
                             NDSchat.handleError(code);
                         }
                     });
                 }
             },
             /**
              * Get the content of an specific node
              * @param {string} node - The node that Watson need to reach
              */
             getContextNode: function (node, need_response) {
                 if (need_response) {
                     NDSchat.addBubbles();
                     nds_utils.removeClass(elements.chatComposer, "hidden");
 
                     _.toArray(document.querySelectorAll(".sel-box-options")).forEach(function (t) {
                         t.parentNode.removeChild(t);
                     });
 
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         if (!nds_utils.hasClass(t, "triggerVideoModal")) {
                             t.parentNode.removeChild(t);
                         }
                     });
                 }
 
                 NDSchat.getToken(function () {
                     nds_utils.minAjax({
                         url: config.url + config.api_version + "getNode/" + node,
                         type: "GET",
                         headers: {
                             "Content-type": "application/json",
                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                             "X-APP-TOKEN": NDSchat.state.token,
                             "X-API-KEY": config.token_apigee,
                             "Cache-Control": "no-cache",
                             Pragma: "no-cache",
                             Expires: -1
                         },
                         json: true,
                         success: function (response) {
                             NDSchat.removeBubbles();
                             if (need_response) {
                                 use_case_flux = false;
                                 get_client_data = false;
                                 get_client_number_by_contract_data = false;
                                 unique_client_number = "";
                                 phone_validation = false;
                                 validate_phone_code = false;
                                 choose_token_method = false;
                                 select_contract = false;
                                 verify_email = false;
                                 select_period = false;
                                 changing_token_status = false;
                                 closing_flux = false;
                                 new_statement = false;
                                 available_periods = {};
                                 ContractsDict = {};
                                 MaskedContractsDict = {};
                                 use_case_action = "";
                                 selected_email = "";
                                 actinver_contracts = [];
                                 actinver_token = "";
                                 actinver_contract = "";
                                 actinver_phones;
                                 actinver_emails;
                                 actinver_number = "";
                                 amount_funds_to_sell_bank = false;
                                 validate_amount_funds_to_sell_bank = false;
                                 validate_fund_qty_bank = false;
                                 amount_funds_to_sell = false;
                                 validate_amount_funds_to_sell = false;
                                 advance_sale_funds = false;
                                 advance_sale_funds_bank = false;
 
                                 funds_summary = false;
                                 funds_summary_bank = false;
                                 confirm_fund = false;
                                 confirm_fund_bank = false;
                                 isTitlesQty = false;
                                 isAmount = false;
                                 confirm_successful_fund = false;
                                 confirm_successful_fund_bank = false;
                                 end_option_fund_bank = false;
                                 is_option_fund_bank = false;
                                 anticipated_sell = "";
                                 current_value = "";
                                 validate_fund_qty = "";
 
                                 blockear_tdd = false;
                                 desblockear_tdd = false;
 
 
                                 sale_the_same_day = false;
                                 is_sale_the_same_day = false;
                                 validate_amont_sale_the_same_day = false;
                                 confirm_spei_sale_the_same_day = false;
                                 destination_account = "";
                                 currentCash = "";
 
 
                                 response = JSON.parse(response);
 
                                 if (undefined !== document.getElementById(current_clicked) &&
                                     null !== document.getElementById(current_clicked)) {
                                     document.getElementById("nds-chat-conversation").style.display = "block";
                                     document.getElementById(current_clicked).style.display = "none";
                                 }
 
 
                                 if (transcript.length >= 5) {
                                     transcript.pop();
                                 }
 
                                 transcript.push({
                                     "user": "",
                                     "bot": response.response
                                 });
 
                                 NDSchat.handleMessage(response, "");
 
                                 if (node === "rao-2" || node === "con-3" || node === "con-4") {
                                     nds_utils.minAjax({
                                         url: config.url + config.api_version + 'newContext',
                                         type: 'GET',
                                         headers: {
                                             "Content-type": "application/json",
                                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                                             "X-APP-TOKEN": NDSchat.state.token,
                                             "X-API-KEY": config.token_apigee
                                         },
                                         success: function (t) {
                                             t = JSON.parse(t);
                                             NDSchat.full_context = t.context;
                                         },
                                         error: function (x, r, s) {
                                             NDSchat.handleError(s);
                                         }
                                     });
                                 }
                             }
                         },
                         error: function (e, t, n) {
                             if (need_response) {
                                 NDSchat.removeBubbles();
                                 NDSchat.handleError(n);
                             }
                         }
                     });
                 });
             },
             /* End of messages handlers */
             /* Questions handlers */
             /**
              * Adds the question into the frontend widget page
              * @param {Object} question - The values of the question to be displayed
              */
             addQuestion: function (question, msg = null, nid = null) {
                 // agrega el mensaje como bubble en front
                 if (question.label.trim() !== "<div></div>" || question.element === "Form") {
                     this.addMessage(this.getQuestionTemplate(question), new Date(), "nds-chat", question);
                     // agrega los eventos de la pregunta
                     this.bindQuestionEvents(question, msg, nid);
                     // Agrega la pregunta a la lista de preguntas que se va a mostrar
                     questionList.push(question);
 
                     window.setTimeout(function () {
                         var chat_sheet = document.querySelector(".nds-chat-sheet-content");
                         nds_utils.scrollTo(chat_sheet, chat_sheet.scrollHeight, 400);
                     }, this.config.thinkingTime);
                 }
                 NDSchat.setClickReturn();
                 NDSchat.searchLinkClasses();
             },
             /**
              * It gets the next answer from the json file or from Watson
              * @param {string} lastAnswer - The user's last answer to ask the next question
              */
             getNextQuestion: function (lastAnswer) {
                 // Ask for next json formatted questions
                 var predefined = widget.minimum_responses >= answerList.length;
                 var number_words = true;
 
                 if (lastAnswer) {
                     is_common = _.contains(global_names, lastAnswer.split(" ")[0].toLowerCase());
                     number_words = is_common || lastAnswer.split(" ").length <= 5;
                 }
                 if (predefined && number_words) {
                     if (
                         widget.require_email &&
                         widget.require_email.value &&
                         widget.require_email.answerNumber === answerList.length
                     ) {
                         client_email = lastAnswer && lastAnswer !== "" ? lastAnswer.trim() : lastAnswer;
                     }
                     if (
                         widget.require_client_segment &&
                         widget.require_client_segment.value &&
                         widget.require_client_segment.answerNumber === answerList.length
                     ) {
                         client_segment = lastAnswer && lastAnswer !== "" ? lastAnswer.trim() : lastAnswer;
                     }
 
                     if (
                         widget.require_client_name &&
                         widget.require_client_name.value &&
                         widget.require_client_name.answerNumber === answerList.length
                     ) {
                         // TODO: Check it works in IE.
                         client_name = lastAnswer && lastAnswer !== "" ? NDSchat.titleCase(lastAnswer.trim()) : lastAnswer;
                         is_common = _.contains(global_names, client_name.toLowerCase());
                         NDSchat.config = nds_utils.mergeConfig({
                             user: client_name,
                             thinkingTime: 1e3,
                             questionInterval: 2e3,
                             errorInterval: 1500
                         });
                     }
 
                     var currentQuestion = questionList[NDSchat.state.activeQuestion],
                         nextQuestion;
 
                     if (currentQuestion.conditions && currentQuestion.conditions.length != 0) {
                         currentQuestion.forEach(function (question) {
                             eval("question.val" + question.type + "lastAnswer");
                             nextQuestion = question.next;
                         });
                     } else if (currentQuestion.next) {
                         nextQuestion = currentQuestion.next;
                     }
 
                     var findNext = questionList.filter(function (question) {
                         return question.id === nextQuestion;
                     });
 
                     if (findNext.length != 0) {
                         nextQuestion = findNext[0];
                         NDSchat.state.activeQuestion = questionList.indexOf(findNext[0]);
                     } else if (nextQuestion === "END") {
                         nextQuestion = null;
                     } else {
                         nextQuestion = questionList[++NDSchat.state.activeQuestion];
                     }
                     NDSchat.addQuestion(nextQuestion);
                     NDSchat.searchLinkClasses();
                 } else {
                     NDSchat.addBubbles();
                     var a = /[0-9][,0-9][,0-9]+[\s.,-]?[0-9]+/g;
                     // TODO: Beautify this line
                     n = /\r?\n|\r/g, s = (s = (o = /[\$][0-9][,0-9][,0-9]+[\s.,-]?[0-9]+/g).test(lastAnswer) || a.test(lastAnswer) ? NDSchat.maskMe(lastAnswer) : lastAnswer).replace(n, " ");
 
                     var data = {
                         message: lastAnswer.replace('"', "") + " " + doubt_string.replace('"', "")
                     };
 
                     if (!client_name) {
                         client_name = "anonymous";
                         is_common = false;
 
                         answerList.push({
                             question: "Whats your name?",
                             answer: client_name
                         });
 
                         not_client_name = true;
 
                         NDSchat.config = nds_utils.mergeConfig({
                             user: client_name,
                             thinkingTime: 1e3,
                             questionInterval: 2e3,
                             errorInterval: 1500
                         }, {});
                     }
 
                     if (use_case_flux) NDSchat.handleAuthFlux(lastAnswer);
                     else if (NDSchat.getToken(function () {
                         nds_utils.minAjax({
                             url: config.url + config.api_version + "message",
                             type: "POST",
                             headers: {
                                 "Content-type": "application/json",
                                 "X-ACCOUNT-ID": NDSchat.state.accountID,
                                 "X-APP-TOKEN": NDSchat.state.token,
                                 "X-API-KEY": config.token_apigee
                             },
                             data: data,
                             json: true,
                             success: function (response) {
                                 response = JSON.parse(response);
                                 NDSchat.removeBubbles();
                                 NDSchat.handleMessage(response, lastAnswer);
                             },
                             error: function (status, readyState, code) {
                                 NDSchat.removeBubbles();
                                 NDSchat.handleError(code);
                             }
                         });
                     }))
                         ;
                 }
             },
             /**
              * This function will assgin the HTML template to each question
              * @param {Object} question - the parameters of the question in place
              */
             getQuestionTemplate: function (question) {
                 var content = "";
                 var client_name_tmp;
                 var i;
                 var iterations;
                 question.label = minEmoji(question.label);
                 question.label = question.label.replace(/\*url_replace\*/g, config.url);
 
                 var asterisk = " <strong class='mx-1' style='color:red'>*</strong>";
 
                 if ("statement" === question.type) {
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                 } else if ("text" === question.type) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                 } else if ("endMessage" === question.type) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                 } else if ("option" === question.type && question.options.length >= 3) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div id="nds-chat-option-wrap" class="nds-chat-comment-option-wrap sel sel-big">';
                     content += '<span class="sel-placeholder">' + opcionesTxt + '</span>';
                     content += '<div class="options-arrow"></div>';
                     content += '<div id="nds-chat-options-container" class="sel-box">';
                     iterations = question.options.length;
 
                     for (i = 0; i < iterations; i++) {
 
                         content += '<span class="sel-box-options data-value="' + question.options[i].replace(/<img .*>/g, "") + '">' + question.options[i] + "</span>";
                     }
                     // add the button outside the dropdown
                     content += '</div>';
                     content += "</div>";
                 } else if (("option_account" === question.type)) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div id="nds-chat-option-wrap" class="nds-chat-comment-option-wrap sel sel-big">';
                     content += '<span class="sel-placeholder">' + opcionesTxt + '</span>';
                     content += '<div class="options-arrow"></div>';
                     content += '<div id="nds-chat-options-container" class="sel-box">';
                     iterations = question.options.length;
 
                     for (i = 0; i < iterations; i++) {
                         var split_item = question.options[i].split("|");
                         var data_value_item = split_item[0] + " " + split_item[1];
                         content += '<div  class="nds-card-select" data-value="' + data_value_item.replace(/<img .*>/g, "") + '" >';
                         content += '<img>';
                         content += '<div class ="card-info">';
                         content += '<p class ="card-owner">' + split_item[0] + '</p>';
                         content += '<p class ="card-type">' + split_item[2] + ' - ' + split_item[3] + '</p>';
                         content += '<p class ="card-number">' + split_item[1] + '</p>';
                         content += '</div>';
                         content += '</div>';
 
                     }
                     // add the button outside the dropdown
                     content += '</div>';
                     content += "</div>";
                 } else if (("option_fund" === question.type)) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div id="nds-chat-option-wrap" class="nds-chat-comment-option-wrap sel sel-big">';
                     content += '<span class="sel-placeholder">' + opcionesTxt + '</span>';
                     content += '<div class="options-arrow"></div>';
                     content += '<div id="nds-chat-options-container" class="sel-box">';
                     iterations = question.options.length;
 
                     for (i = 0; i < iterations; i++) {
                         var split_item = question.options[i].split("|");
                         var data_value_item = split_item[0];
                         content += '<div  class="nds-card-fund-select" data-value="' + data_value_item.replace(/<img .*>/g, "") + '" >';
                         content += '<img>';
                         content += '<div class ="card-info">';
                         content += '<p class ="card-owner">' + split_item[0] + '</p>';
                         content += '<p class ="card-type">' + split_item[2].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' títulos</p>';
                         content += '<p class ="card-number">Monto disponible: $' + split_item[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</p>';
                         content += '</div>';
                         content += '</div>';
                     }
                     // add the button outside the dropdown
                     content += '</div>';
                     content += "</div>";
                 } else if ("calendar" === question.type) {
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div><input id=\"calendar-" + parseInt(NDSchat.tags.chatbot_message + 1).toString() + "\"/>";
                 } else if ("option" === question.type || "timers" === question.type || "confirmAgent" == question.type || "postchat" === question.type) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div class="nds-chat-comment-option-wrap">';
                     for (i = 0; i < question.options.length; i++) {
 
                         content += '<div class="nds-chat-comment-content nds-chat-comment-option nds-chat-btn-option';
 
                         if (question.options.length === 2 && question.options[i] === "No") {
                             content += ' -secondary"';
                         } else {
                             content += '"';
                         }
 
                         content += ' data-value="';
                         content += question.options[i].replace(/<img .*>/g, "");
                         content += '">';
                         content += question.options[i];
                         content += "</div>";
                     }
                     content += "</div>";
                 } else if ("multimedia" === question.type) {
                     var truncated_response = question.label.replace(/<(.|\n)*?>/g, "").substring(0, 200) + '...';
                     question.multimedia == null ? content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + truncated_response + "</div>" : content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div class="nds-chat-comment-option-wrap">';
                     if (nds_utils.mobilecheck()) { //mobile
                         content += question.multimedia[1].replace("{}", "40%");
                         content += "</div>";
                     } else {
                         var msg = "";
                         if (question.multimedia) {
                             if (question.multimedia[0] === "video") {
                                 lastMedia = "video";
                                 msg = seeVideo;
                             } else if (question.multimedia[0] == "imagen") {
                                 msg = seeImage;
                                 lastMedia = "image";
                             }
                         } else {
                             msg = moreInfoTxt;
                             lastMedia = "info";
                         }
                         var video_btns = document.querySelectorAll('.triggerVideoModal');
                         content += '<div id="triggerVideoModal' + video_btns.length + '" class="nds-chat-comment-option triggerVideoModal">' + msg + '</div>';
                         content += "</div>";
                     }
                 } else if ("social" === question.type) {
                     if ((question.label).indexOf('first_name') !== -1) {
                         client_name_tmp = client_name.toLowerCase().replace(/(\b\w)/i, function (m) {
                             return m.toUpperCase();
                         });
 
                         question.label = is_common ? question.label.replace(/first_name/, client_name_tmp) : question.label.replace(/\s?first_name/, "");
                     }
 
                     content = '<div class="nds-chat-question-label" data-nid="' + question.element + '">' + question.label + "</div>";
                     content += '<div class="nds-chat-comment-option-wrap">';
                     for (i = 0; i < question.links.length; i++) {
                         var c = "Open";
                         switch (question.links[i].type) {
                             case "link":
                                 c = question.links[i].text ? question.links[i].text : "Abrir";
                                 content += '<div class="nds-chat-comment-content nds-chat-comment-social nds-chat-comment-option nds-chat-theme-border nds-show-more2 ';
                                 content += 'nds-chat-social-' + question.links[i].type + '" data-type="' + question.links[i].type + '" id="' + question.links[i].id + count.toString() + '">' + c + "</div>";
                         }
                     }
                     content += "</div>";
                 } else if ("closedContactCenter" === question.type || "userInfoCC" === question.type || "dateInfoCC" === question.type) {
                     content += '<div class="nds-chat-question-label">' + question.label + '</div>';
                     content += '<br>';
                     // Form Nombre Completo
                     content += '<div class="nds-chat-question-label -special-form" name="cc_name">Nombre Completo' + asterisk + ':</div>';
                     content += '<div class="nds-chat-comment-option-wrap -input">';
                     content += '<input class="nds-input-text" type="text" id="cc_name" maxlength="50" required>';
                     content += '</div>';
                     // Form Email
                     content += '<div class="nds-chat-question-label -special-form" name="cc_email" style="margin-top:10px;">Email' + asterisk + ':</div>';
                     content += '<div class="nds-chat-comment-option-wrap -input">';
                     content += '<input class="nds-input-text" type="email" id="cc_email" value="' + client_email.trim() + '" required>';
                     content += '</div>';
                     // Form Telefono
                     content += '<div class="nds-chat-question-label -special-form" name="cc_phone" style="margin-top:10px;">Teléfono (10 dígitos)' + asterisk + ':</div>';
                     content += '<div class="nds-chat-comment-option-wrap -input">';
                     content += '<input class="nds-input-text" type="text" id="cc_phone" maxlength="10" value="' + client_phone + '" required>';
                     content += '</div>';
                     // Form Comentario extra
                     if (question.type === "closedContactCenter") {
                         content += '<div class="nds-chat-question-label -special-form" name="cc_comment" style="margin-top:10px;">¿En qué te podemos ayudar?' + asterisk + ':</div>';
                         content += '<div class="nds-chat-comment-option-wrap -input">';
                         content += '<textarea class="nds-input-text" id="cc_comment" rows="3" required></textarea>';
                         content += '</div>';
                     }
                     content += '<div class="nds-chat-comment-option-wrap">';
                     // Cancel button
                     content += '<button type="button" class="btn conoce-btn btn-lg nds-chat-comment-option nds-chat-btn-option -secondary cc_cancel">Cancelar</button>';
                     // Submit button
                     content += '<button type="button" class="btn conoce-btn btn-lg nds-chat-comment-option nds-chat-btn-option cc_submit">Enviar</button>';
                     content += '</div>';
                 }
 
                 if (use_case_flux && !final_use_case) {
                     content += '<button type="button" class="nds-chat-comment-content nds-chat-comment-option-wrap nds-chat-btn-option button_back_chat">Volver al chat</button>';
                 }
 
                 return content;
             },
             /**
              * This function will assgin the js functionality to each question
              * @param {Object} question - the parameters of the question in place
              */
             bindQuestionEvents: function (question, msg = null, nid = null) {
                 var email_subject = "";
                 var object_response;
                 if ("statement" === question.type) {
                     if (nid != null) {
                         NDSchat.addMessage(msg, new Date(), client_name);
                         NDSchat.getContextNode(nid, true);
                     } else {
                         setTimeout(function () {
                             NDSchat.getNextQuestion();
                         }, NDSchat.config.questionInterval);
                     }
                 } else if ("option" === question.type && question.options.length >= 3) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
 
                     document.getElementById("nds-chat-option-wrap").onclick = function () {
                         this.classList.toggle('active');
                         var r = document.querySelector(".nds-chat-sheet-content");
                         nds_utils.scrollTo(r, r.scrollHeight, 400);
                     };
 
                     _.toArray(document.querySelectorAll(".sel-box-options")).forEach(function (t) {
                         t.onclick = function (e) {
                             nds_utils.removeClass(elements.chatComposer, "hidden");
 
                             _.toArray(document.querySelectorAll(".sel-box-options")).forEach(function (t) {
                                 t.parentNode.removeChild(t);
                             });
 
                             document.getElementById("nds-chat-option-wrap").parentNode.removeChild(document.getElementById("nds-chat-option-wrap"));
 
                             NDSchat.addMessage(t.textContent, new Date(), client_name);
                             NDSchat.sendMessage(t.textContent);
                         };
                     });
                 } else if ("option_account" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
 
                     if (question.options.length > 3) {
                         document.getElementById("nds-chat-option-wrap").onclick = function () {
                             this.classList.toggle('active');
                             var r = document.querySelector(".nds-chat-sheet-content");
                             nds_utils.scrollTo(r, r.scrollHeight, 400);
                         };
                     }
                     else {
 
                         document.getElementById("nds-chat-option-wrap").classList.toggle('active');
                         var r = document.querySelector(".nds-chat-sheet-content");
                         nds_utils.scrollTo(r, r.scrollHeight, 400);
                         var div = document.getElementById("nds-chat-option-wrap");
                         div.removeChild(div.childNodes[0]);
                         div.removeChild(div.childNodes[0]);
                     }
 
                     _.toArray(document.querySelectorAll(".nds-card-select")).forEach(function (t) {
                         t.onclick = function (e) {
                             nds_utils.removeClass(elements.chatComposer, "hidden");
 
                             _.toArray(document.querySelectorAll(".nds-card-select")).forEach(function (t) {
                                 x = t.dataset.value;
                                 t.parentNode.removeChild(t);
                             });
 
                             document.getElementById("nds-chat-option-wrap").parentNode.removeChild(document.getElementById("nds-chat-option-wrap"));
 
 
                             NDSchat.addMessage(t.dataset.value, new Date(), client_name);
                             NDSchat.sendMessage(t.dataset.value);
                         };
                     });
                 } else if ("option_fund" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
 
                     if (question.options.length > 3) {
                         document.getElementById("nds-chat-option-wrap").onclick = function () {
                             this.classList.toggle('active');
                             var r = document.querySelector(".nds-chat-sheet-content");
                             nds_utils.scrollTo(r, r.scrollHeight, 400);
                         };
                     }
                     else {
 
                         document.getElementById("nds-chat-option-wrap").classList.toggle('active');
                         var r = document.querySelector(".nds-chat-sheet-content");
                         nds_utils.scrollTo(r, r.scrollHeight, 400);
                         var div = document.getElementById("nds-chat-option-wrap");
                         div.removeChild(div.childNodes[0]);
                         div.removeChild(div.childNodes[0]);
                     }
 
                     _.toArray(document.querySelectorAll(".nds-card-fund-select")).forEach(function (t) {
                         t.onclick = function (e) {
                             nds_utils.removeClass(elements.chatComposer, "hidden");
 
                             _.toArray(document.querySelectorAll(".nds-card-fund-select")).forEach(function (t) {
                                 x = t.dataset.value;
                                 t.parentNode.removeChild(t);
                             });
 
                             document.getElementById("nds-chat-option-wrap").parentNode.removeChild(document.getElementById("nds-chat-option-wrap"));
 
 
                             NDSchat.addMessage(t.dataset.value, new Date(), client_name);
                             NDSchat.sendMessage(t.dataset.value);
                         };
                     });
                 } else if ("calendar" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     dates_enabled = [];
                     if (question.dates) {
                         if (!question.formated) {
                             for (var index = 0; index < question.dates.length; ++index) {
                                 var separated = question.dates[index].split("-");
                                 dates_enabled.push(separated[2] + "-" + separated[1] + "-" + separated[0]);
                             }
                         }
 
                         var calendar_input = document.getElementById("calendar-" + NDSchat.tags.chatbot_message);
                         var calendar_div = document.getElementById("nds-chatbot-message-" + NDSchat.tags.chatbot_message);
                         flatpickr(calendar_input, {
                             appendTo: calendar_div,
                             minDate: dates_enabled[0],
                             maxDate: dates_enabled[dates_enabled.length - 1],
                             enable: dates_enabled,
                             locale: "es",
                             inline: true,
                             dateFormat: "d-m-Y",
                             onValueUpdate: function (dObj, dStr, fp, dayElem) {
                                 var calendar_div_class = document.getElementsByClassName("flatpickr-calendar");
                                 for (var calendar_index = 0; calendar_index < calendar_div_class.length; ++calendar_index) {
                                     calendar_div_class[calendar_index].style = "display:none;";
                                 }
 
                                 var calendar = document.getElementById("calendar-" + NDSchat.tags.chatbot_message);
                                 calendar.parentElement.removeChild(calendar);
                                 NDSchat.addMessage(dStr, new Date(), client_name);
                                 NDSchat.sendMessage(dStr);
                                 NDSchat.initTimers();
                             }
                         });
                     }
                 } else if ("option" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         if (!nds_utils.hasClass(t, "triggerVideoModal")) {
                             t.onclick = function () {
                                 nds_utils.removeClass(elements.chatComposer, "hidden");
                                 if (session_ended) {
                                     clearTimeout(not_input_timeout);
                                     clearTimeout(not_input_timeout2);
                                     clearTimeout(chat_closed_timeout);
                                 }
 
                                 _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                     if (!nds_utils.hasClass(t, "triggerVideoModal")) {
                                         t.parentNode.removeChild(t);
                                     }
                                 });
                                 NDSchat.addMessage(t.getAttribute('data-value'), new Date(), client_name);
                                 NDSchat.sendMessage(t.getAttribute('data-value'));
                             };
                         }
                     });
                     NDSchat.setClickReturn();
                 } else if ("timers" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         t.onclick = function () {
                             _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                 t.parentNode.removeChild(t);
                             });
                             if (t.getAttribute('data-value') === yesOption) {
                                 if (NDSchat.state.token === null || NDSchat.state.token === undefined) {
                                     client_name = client_name === undefined || client_name === null ? "anonymous" : client_name;
                                     client_segment = client_segment === undefined || client_segment === null ? "Otros" : client_segment;
                                     NDSchat.getToken(function () { });
                                 } else {
                                     nds_utils.minAjax({
                                         url: config.url + config.auth_endpoint + "sessionExpired",
                                         type: "GET",
                                         headers: {
                                             "Content-type": "application/json",
                                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                                             "X-APP-TOKEN": NDSchat.state.token,
                                             "X-API-KEY": config.token_apigee
 
                                         },
                                         json: true,
                                         success: function (tt) {
                                             tt = JSON.parse(tt);
                                             NDSchat.addMessage(t.getAttribute('data-value'), new Date(), client_name);
                                             var object_response;
 
                                             if (tt.response === 'Active') {
                                                 nds_utils.removeClass(elements.chatComposer, "hidden");
                                                 object_response = NDSchat.defineResponseObject(helpTxt, "Question", "text", "0");
                                                 NDSchat.addQuestion(object_response);
                                                 NDSchat.initTimers();
                                             } else {
                                                 session_ended = true;
                                                 if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                                     nds_utils.deleteCookie("sessionID");
                                                 }
                                                 if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                                     nds_utils.deleteCookie("preserve_chat");
                                                 }
                                                 object_response = NDSchat.defineResponseObject(
                                                     form.timerMessages[2],
                                                     "Question",
                                                     "endMessage",
                                                     "Question"
                                                 );
                                                 NDSchat.addQuestion(object_response);
                                                 NDSchat.reconnectButton();
                                             }
                                         },
                                     });
                                 }
                             } else {
                                 NDSchat.addMessage(t.getAttribute('data-value'), new Date(), client_name);
                                 if (config.require_postsurvey) {
                                     if (last_questions[last_questions.length - 1] !== "¿Nos podrías ayudar contestando una encuesta de satisfacción?" || last_questions[last_questions.length - 1] !== "Gracias por utilizar el servicio de chat.") {
                                         object_response = NDSchat.defineResponseObject("Queremos conocer más acerca de tu experiencia con nuestro servicio, ¿nos podrías ayudar respondiendo 2 preguntas?", "Yes No", "postchat", "0");
                                         object_response.options = ["No", "Sí"];
                                         NDSchat.addQuestion(object_response);
                                         last_questions.push("¿Nos podrías ayudar contestando una encuesta de satisfacción?");
                                     }
                                 } else {
                                     if (last_questions[last_questions.length - 1] !== vuelvePronto) {
                                         object_response = NDSchat.defineResponseObject(vuelvePronto, "Question", "endMessage", "0");
                                         NDSchat.addQuestion(object_response);
                                         last_questions.push(vuelvePronto);
                                     }
                                     NDSchat.reconnectButton();
                                 }
                             }
                         };
                     });
                 } else if ("postchat" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         t.onclick = function () {
                             _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                 t.parentNode.removeChild(t);
                             });
                             if (t.getAttribute('data-value') === "Sí") {
                                 if (NDSchat.state.token === null || NDSchat.state.token === undefined) {
                                     client_name = client_name === undefined || client_name === null ? "anonymous" : client_name;
                                     client_segment = client_segment === undefined || client_segment === null ? "Otros" : client_segment;
                                     NDSchat.getToken(function () { });
                                 } else {
                                     nds_utils.minAjax({
                                         url: config.url + config.api_version + "newContext",
                                         type: "GET",
                                         headers: {
                                             "Content-type": "application/json",
                                             "X-ACCOUNT-ID": NDSchat.state.accountID,
                                             "X-APP-TOKEN": NDSchat.state.token,
                                             "X-API-KEY": config.token_apigee
 
                                         }
                                     });
                                     NDSchat.showPostChatSurvey('nds-chat-conversation');
                                 }
                             } else {
                                 if (last_questions[last_questions.length - 1] !== "Gracias por utilizar el servicio de chat.") {
                                     object_response = NDSchat.defineResponseObject("Gracias por utilizar el servicio de chat. ¡Vuelve pronto!", "Question", "endMessage", "0");
                                     NDSchat.addQuestion(object_response);
                                     last_questions.push("Gracias por utilizar el servicio de chat.");
                                 }
                                 NDSchat.reconnectButton();
                             }
                         };
                     });
                 } else if ("text" === question.type) {
                     nds_utils.removeClass(elements.chatComposer, "hidden");
                     if (!nds_utils.mobilecheck()) {
                         window.setTimeout(function () {
                             elements.txMessage.focus();
                         }, 0);
                     }
                 } else if ("multimedia" == question.type) {
                     var url = document.domain !== "" ? location.protocol + "//" + document.domain : "*";
 
                     var video_btns = document.querySelectorAll('.triggerVideoModal').length - 1;
                     var btn_name = '#triggerVideoModal' + video_btns;
                     var btn = document.querySelector(btn_name);
 
                     btn.addEventListener('click', function () {
                         if (question.multimedia) {
                             parent.postMessage([btn_name, question.multimedia[1].replace("{}", "96%")], url);
                         } else {
                             parent.postMessage([btn_name, question.label], url);
                         }
                     });
                 } else if ("endMessage" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     clearTimeout(not_input_timeout);
                     clearTimeout(not_input_timeout2);
                     clearTimeout(chat_closed_timeout);
                 } else if ("social" === question.type) {
                     _.toArray(document.querySelectorAll(".nds-chat-comment-social")).forEach(function (t) {
                         t.onclick = function () {
                             var c = t.getAttribute('data-value');
                             switch (t.dataset.type) {
                                 default:
                                     break;
                             }
                         };
                     });
                 } else if ("confirmAgent" === question.type) {
                     nds_utils.addClass(elements.chatComposer, "hidden");
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         t.onclick = function () {
                             _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                 t.parentNode.removeChild(t);
                             });
                             NDSchat.addMessage(t.getAttribute('data-value'), new Date(), client_name);
                             // If user answer reuse the email to next flux
                             if (t.getAttribute('data-value') === "Sí") {
                                 NDSchat.connectContactCenter();
                             } else {
                                 object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                                 object_response.options = ["No", "Sí"];
                                 NDSchat.addQuestion(object_response);
                             }
                         };
                     });
                 }
                 else if ("closedContactCenter" === question.type || "userInfoCC" === question.type || "dateInfoCC" === question.type) {
                     in_form = true;
                     nds_utils.addClass(elements.chatComposer, "hidden");
 
                     _.toArray(document.querySelectorAll(".cc_submit")).forEach(function (element) {
                         element.onclick = function () {
                             var name = document.getElementById("cc_name").value;
                             var email = document.getElementById("cc_email").value;
                             var phone = document.getElementById("cc_phone").value;
 
                             var comment;
                             if (question.type === "closedContactCenter") {
                                 comment = document.getElementById("cc_comment").value;
                             }
 
                             var phone_validation = NDSchat.validateData("phone", phone);
                             var email_validation = NDSchat.validateData("email", email);
 
                             clean = name === "" ? false : comment && comment === "" ? false : !email_validation ? false : !phone_validation ? false : true;
                             if (clean) {
                                 element.setAttribute('disabled', true);
 
                                 document.getElementById("cc_name").setAttribute('readonly', true);
                                 document.getElementById("cc_email").setAttribute('readonly', true);
                                 document.getElementById("cc_phone").setAttribute('readonly', true);
 
                                 if (question.type === "closedContactCenter") {
                                     document.getElementById("cc_comment").setAttribute('readonly', true);
                                 }
 
                                 if (question.type === "userInfoCC") {
                                     user_name = name;
                                     user_email = email;
                                     user_phone = phone;
 
                                     webChat.initChat(user_name, "", false);
                                     withAgent = true;
                                     avayaRetryCount = 0;
                                 } else {
                                     doc = {
                                         "data": {
                                             "mail": email,
                                             "name": name,
                                             "phone": phone
                                         },
                                         "subject": widgetTexts.no_agents_subject,
                                         "date": false
                                     };
 
                                     if (comment) {
                                         doc.data.comment = comment;
                                     }
 
                                     if (context.tipo_persona && context.tipo_montos && context.cuenta_sugerida) {
                                         doc.data.tipo_persona = context.tipo_persona;
                                         doc.data.tipo_montos = context.tipo_montos;
                                         doc.data.cuenta_sugerida = context.cuenta_sugerida;
                                         doc.date = true;
                                         doc.subject = widgetTexts.date_subject;
                                     }
 
                                     NDSchat.sendMail(doc);
                                     isDate = false;
                                 }
 
                                 document.getElementById("cc_name").parentElement.removeChild(document.getElementById("cc_name"));
                                 document.getElementById("cc_email").parentElement.removeChild(document.getElementById("cc_email"));
                                 document.getElementById("cc_phone").parentElement.removeChild(document.getElementById("cc_phone"));
 
                                 if (question.type === "closedContactCenter") {
                                     document.getElementById("cc_comment").parentElement.removeChild(document.getElementById("cc_comment"));
                                 }
 
                                 _.toArray(document.querySelectorAll(".cc_submit")).forEach(function (e) {
                                     e.remove();
                                 });
 
                                 _.toArray(document.querySelectorAll(".cc_cancel")).forEach(function (e) {
                                     e.remove();
                                 });
 
                                 _.toArray(document.querySelectorAll(".-special-form")).forEach(function (e) {
                                     e.remove();
                                 });
 
                                 _.toArray(document.querySelectorAll(".-input")).forEach(function (e) {
                                     e.remove();
                                 });
 
                                 in_form = false;
                                 count_in_form = 0;
                             } else {
                                 var form_inputs;
 
                                 if (name === "") {
                                     form_inputs = document.getElementById("cc_name");
 
                                     if (form_inputs) {
                                         nds_utils.addClass(form_inputs.parentElement, "-input-error");
                                     }
                                 } else {
                                     form_inputs = document.getElementById("cc_name");
 
                                     if (form_inputs) {
                                         nds_utils.removeClass(form_inputs.parentElement, "-input-error");
                                     }
                                 }
 
                                 if (comment === "") {
                                     form_inputs = document.getElementById("cc_comment");
 
                                     if (form_inputs) {
                                         nds_utils.addClass(form_inputs.parentElement, "-input-error");
                                     }
                                 } else {
                                     form_inputs = document.getElementById("cc_comment");
 
                                     if (form_inputs) {
                                         nds_utils.removeClass(form_inputs.parentElement, "-input-error");
                                     }
                                 }
 
                                 if (!phone_validation) {
                                     form_inputs = document.getElementById("cc_phone");
 
                                     if (form_inputs) {
                                         nds_utils.addClass(form_inputs.parentElement, "-input-error");
                                     }
                                 } else {
                                     form_inputs = document.getElementById("cc_phone");
 
                                     if (form_inputs) {
                                         nds_utils.removeClass(form_inputs.parentElement, "-input-error");
                                     }
                                 }
 
                                 if (!email_validation) {
                                     form_inputs = document.getElementById("cc_email");
 
                                     if (form_inputs) {
                                         nds_utils.addClass(form_inputs.parentElement, "-input-error");
                                     }
                                 } else {
                                     form_inputs = document.getElementById("cc_email");
 
                                     if (form_inputs) {
                                         nds_utils.removeClass(form_inputs.parentElement, "-input-error");
                                     }
                                 }
                             }
                         };
                     });
 
                     _.toArray(document.querySelectorAll(".cc_cancel")).forEach(function (element) {
                         element.onclick = function () {
                             in_form = false;
                             document.getElementById("cc_name").parentElement.removeChild(document.getElementById("cc_name"));
                             document.getElementById("cc_email").parentElement.removeChild(document.getElementById("cc_email"));
                             document.getElementById("cc_phone").parentElement.removeChild(document.getElementById("cc_phone"));
 
                             if (question.type === "closedContactCenter") {
                                 document.getElementById("cc_comment").parentElement.removeChild(document.getElementById("cc_comment"));
                             }
 
                             _.toArray(document.querySelectorAll(".cc_submit")).forEach(function (e) {
                                 e.remove();
                             });
 
                             _.toArray(document.querySelectorAll(".cc_cancel")).forEach(function (e) {
                                 e.remove();
                             });
 
                             _.toArray(document.querySelectorAll(".-special-form")).forEach(function (e) {
                                 e.remove();
                             });
 
                             _.toArray(document.querySelectorAll(".-input")).forEach(function (e) {
                                 e.remove();
                             });
 
                             var ask_text = "¿Hay algo más en lo que pueda apoyarte?";
                             var object_response = NDSchat.defineResponseObject(ask_text, "Yes No", "timers", "Question");
                             object_response.options = ["Sí", "No"];
                             NDSchat.addQuestion(object_response);
                         };
                     });
                 }
 
                 NDSchat.setClickReturn();
             },
             /* End of questions handlers */
             /* Response handlers */
             /**
              * Sets the template for the question or answer
              * @param {string} label - The content of the question/anser
              * @param {string} name - The name of the question/answer
              * @param {string} type - The type of question
              * @param {string} element - The number of question
              */
             defineResponseObject: function (label, name, type, element) {
                 return {
                     label: "<div>" + label + "</div>",
                     name: name,
                     type: type,
                     element: element
                 };
             },
             /**
              * Set the link functionality
              * @param {string} id - the id of the link
              * @param {string} type - The type of link
              * @param {string} text - The text over the link
              */
             defineResponseLinks: function (id, type, text) {
                 return [{
                     id: id,
                     type: type,
                     text: text,
                     value: "javascript:void(0)"
                 }];
             },
             /**
              * Creates a button that allows the user to get out of a flux
              */
             setClickReturn: function () {
                 _.toArray(document.querySelectorAll(".button_back_chat")).forEach(function (element) {
                     element.onclick = function () {
                         nds_utils.minAjax({
                             url: config.url + config.api_version + "newContext",
                             type: "GET",
                             headers: {
                                 "Content-type": "application/json",
                                 "X-ACCOUNT-ID": NDSchat.state.accountID,
                                 "X-APP-TOKEN": NDSchat.state.token,
                                 "X-API-KEY": config.token_apigee
                             },
                             success: function (t) {
                                 use_case_flux = false;
                                 get_client_data = false;
                                 get_client_number_by_contract_data = false;
                                 unique_client_number = "";
                                 phone_validation = false;
                                 validate_phone_code = false;
                                 select_contract = false;
                                 verify_email = false;
                                 select_period = false;
                                 changing_token_status = false;
                                 closing_flux = false;
                                 new_statement = false;
                                 final_use_case = false;
                                 remove_special_characters = false;
                                 bank_contracts = false;
                                 house_contracts = false;
                                 send_spei = false;
                                 confirm_spei = false;
                                 select_account_tranfer = false;
                                 transfer_amount = "";
                                 transfer_summary = false;
 
                                 validate_transfer_amount = false;
                                 find_beneficiary = false;
                                 select_bank = false;
                                 select_bank_or_house = false;
                                 fund_select_bank_or_house = false;
                                 validate_phone_code = false;
                                 ask_beneficiary = false;
                                 remove_special_characters = false;
                                 select_beneficiary = false;
                                 confirm_successful_spei = false;
                                 confirm_successful_fund_bank = false;
                                 end_option_fund_bank = false;
                                 is_option_fund_bank = false;
 
                                 amount_funds_to_sell_bank = false;
                                 validate_amount_funds_to_sell_bank = false;
                                 validate_fund_qty_bank = false;
                                 amount_funds_to_sell = false;
                                 validate_amount_funds_to_sell = false;
                                 advance_sale_funds = false;
                                 advance_sale_funds_bank = false;
 
                                 funds_summary = false;
                                 funds_summary_bank = false;
                                 confirm_fund = false;
                                 confirm_fund_bank = false;
                                 isTitlesQty = false;
                                 isAmount = false;
                                 confirm_successful_fund = false;
                                 anticipated_sell = "";
                                 current_value = "";
                                 validate_fund_qty = "";
 
                                 blockear_tdd = false;
                                 desblockear_tdd = false;
 
 
                                 sale_the_same_day = false;
                                 is_sale_the_same_day = false;
                                 validate_amont_sale_the_same_day = false;
                                 confirm_spei_sale_the_same_day = false;
                                 destination_account = "";
                                 currentCash = "";
 
                                 document.getElementById("txMessage").maxLength = "140";
                                 _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (elmnt) {
                                     elmnt.parentElement.removeChild(elmnt);
                                 });
 
                                 options_wrapper = document.getElementById('nds-chat-option-wrap');
 
                                 if (options_wrapper !== null && options_wrapper !== undefined) {
                                     options_wrapper.parentElement.removeChild(options_wrapper);
                                 }
 
                                 if (element.parentElement !== null && element.parentElement !== undefined) {
                                     element.parentElement.removeChild(element);
                                 }
 
                                 var object_response = NDSchat.defineResponseObject("¿Te puedo ayudar en algo más?", "Yes No", "timers", "Question");
                                 object_response.options = ['No', 'Sí'];
                                 NDSchat.addQuestion(object_response);
                             },
                             error: function (e, t, n) {
                                 NDSchat.handleError(n);
                             }
                         });
                     };
                 });
             },
             /* End of response handlers */
             /* Token handlers */
             /**
              * Function that handles the token generation and cookie saving of it
              * @param {requestCallback} callback - A function of callback executing
              */
             getToken: function (callback) {
                 if (NDSchat.state.token === undefined || NDSchat.state.token === null) {
                     // define required data for api
                     var data = {
                         accountId: this.state.accountID,
                         referrer: referrer
                     };
 
                     data.client_name = client_name;
                     data.client_segment = client_segment || "MX";
                     data.browser = client_properties.browser;
                     data.device = client_properties.device;
                     data.os = client_properties.os;
 
                     // generate a session token
                     nds_utils.minAjax({
                         url: config.url + config.auth_endpoint + "getToken",
                         type: "POST",
                         headers: {
                             "Content-Type": "application/json",
                             "X-API-KEY": config.token_apigee
                         },
                         data: data,
                         json: true,
                         success: function (t, cookie_header) {
                             document.cookie = cookie_header;
                             session_affinity_cookie = cookie_header;
                             response = JSON.parse(t);
                             // set cookie with session token
                             nds_utils.setCookie("sessionID", response.account.token);
                             // set token in current context
                             NDSchat.state.token = response.account.token;
                             // return
                             callback();
                         },
                         error: function (e, t, n) {
                             NDSchat.removeBubbles();
                             NDSchat.handleError(n);
                         }
                     });
                 } else {
                     callback();
                 }
             },
             /* End of token handlers */
             /* Timers handler */
             /**
              * Start the timers for the session
              */
             initTimers: function () {
                 if (answerList.length > 0) {
                     clearTimeout(not_input_timeout);
                     clearTimeout(not_input_timeout2);
                     clearTimeout(chat_closed_timeout);
 
                     chat_closed_timeout = setTimeout(function () {
                         _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                             t.parentElement.removeChild(t);
                         });
 
                         clearTimeout(not_input_timeout2);
                         NDSchat.disableButtons();
                         if (chat_closed_timeout !== null) {
                             not_timeout = false;
                             session_ended = true;
 
                             if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                 nds_utils.deleteCookie("sessionID");
                             }
 
                             if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                 nds_utils.deleteCookie("preserve_chat");
                             }
 
                             var object_response = NDSchat.defineResponseObject(transTimerMessages[2], "Question", "endMessage", "Question");
                             NDSchat.addQuestion(object_response);
                             NDSchat.reconnectButton();
                             NDSchat.removeSession();
                         }
                     }, 1e3 * 580);
 
                     if (!in_form) {
                         not_input_timeout2 = setTimeout(function () {
                             _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                 t.parentElement.removeChild(t);
                             });
                             clearTimeout(not_input_timeout);
                             object_response = NDSchat.defineResponseObject(transTimerMessages[1], "Yes No", "timers", "Question");
                             object_response.options = [noOption, yesOption];
                             if (not_input_timeout2 !== null) {
                                 not_timeout = false;
                                 NDSchat.addQuestion(object_response);
                             }
                         }, 1e3 * 510);
 
                         not_input_timeout = setTimeout(function () {
                             NDSchat.removeBubbles();
                             if (document.getElementsByClassName("nds-chat-comment-option-wrap")[0]) {
                                 document.getElementsByClassName("nds-chat-comment-option-wrap")[0].innerHTML = "";
                                 document.getElementsByClassName("nds-chat-comment-option-wrap")[0].remove();
                             }
 
                             _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                                 t.parentElement.removeChild(t);
                             });
 
                             _.toArray(document.querySelectorAll(".button_back_chat")).forEach(function (t) {
                                 t.parentElement.removeChild(t);
                             });
 
 
                             object_response = NDSchat.defineResponseObject(transTimerMessages[0], "Yes No", "timers", "Question");
                             object_response.options = [noOption, yesOption];
                             if (not_input_timeout !== null) {
                                 not_timeout = false;
                                 NDSchat.addQuestion(object_response);
                             }
 
                             nds_utils.minAjax({
                                 url: config.url + config.api_version + 'newContext',
                                 type: 'GET',
                                 headers: {
                                     "Content-type": "application/json",
                                     "X-ACCOUNT-ID": NDSchat.state.accountID,
                                     "X-APP-TOKEN": NDSchat.state.token,
                                     "X-API-KEY": config.token_apigee
                                 },
                                 success: function (t) {
                                     t = JSON.parse(t);
                                     NDSchat.full_context = t.context;
                                 },
                                 error: function (x, r, s) {
                                     NDSchat.handleError(s);
                                 }
                             });
 
                         }, 1e3 * 300);
                     }
                 }
             },
             /* End of timers handler */
             /* Contact Center flow */
             /**
              * Connects the user to an agent if its needed
              */
             connectContactCenter: function () {
                 if (config.zendesk) {
                     // Function that connects to zendesk
                 } else if (config.teleperformance) {
                     // Function that connects to teleperformance
                 } else if (config.liveperson) {
                     // Function that connects to Liveperson
                 } else if (config.avaya) {
                     // Function that connects to Avaya
                     NDSchat.startAvayaSocket();
                 }
             },
             startAvayaSocket: function () {
                 links = NDSchat.loadAvayaLinks();
                 var object_response;
 
                 nds_utils.minAjax({
                     url: config.url + config.api_version + "ewt",
                     type: "POST",
                     headers: {
                         "Content-Type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     },
                     data: {
                         'serviceMap': {
                             '1': {
                                 'attributes': avayaConfig.logonAttributes,
                                 'priority': 5
                             }
                         }
                     },
                     json: true,
                     success: function (response) {
                         response = JSON.parse(response);
                         var mapId = '1';
                         var serviceMetricsResponseMap = response.serviceMetricsResponseMap;
 
                         var serviceMap = serviceMetricsResponseMap[mapId];
                         var metrics = serviceMap.metrics;
 
                         if (metrics !== undefined) {
                             var waitTime = parseInt(metrics.EWT);
                             var agentCount = parseInt(metrics.ResourceStaffedCount);
                             var availableAgentCount = parseInt(metrics.ResourceReadyCount);
 
                             if (waitTime < maxWaitTime && waitTime >= minWaitTime && agentCount >= minAgentCount && availableAgentCount > 0) {
                                 NDSchat.getContextNode("eag-conected", false);
                                 chatSocket = NDSchat.loadAvayaWebSocket();
                                 webChat = NDSchat.loadAvayaWebChat();
                                 chatConfig = NDSchat.loadAvayaChatConfig();
 
                                 object_response = NDSchat.defineResponseObject(widgetTexts.agent_info_ask, "userInfoCC", "userInfoCC", "Form");
                                 object_response.options = ["No", "Sí"];
                                 NDSchat.addQuestion(object_response);
                             } else {
                                 if (waitTime > maxWaitTime || agentCount <= 0) {
                                     object_response = NDSchat.defineResponseObject(
                                         widgetTexts.no_agents,
                                         "Question",
                                         "text",
                                         "0");
                                     NDSchat.addQuestion(object_response);
 
                                     name = isDate ? "dateInfoCC" : "closedContactCenter";
 
                                     object_response = NDSchat.defineResponseObject(
                                         widgetTexts.agent_closed_cc,
                                         name,
                                         name,
                                         "Form");
 
                                     NDSchat.addQuestion(object_response);
                                 } else {
                                     if (avayaRetryCount < maxRetries - 1) {
                                         setTimeout(function () {
                                             if (avayaRetryCount == 0) {
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_agents_1, "Question", "text", "Question");
                                             } else {
                                                 object_response = NDSchat.defineResponseObject(widgetTexts.no_agents_2, "Question", "text", "Question");
                                             }
 
                                             NDSchat.addQuestion(object_response);
                                             NDSchat.startAvayaSocket();
                                             avayaRetryCount++;
                                         }, 1e3 * config.agent_timer);
                                     } else {
                                         object_response = NDSchat.defineResponseObject(
                                             widgetTexts.agent_closed_cc,
                                             "closedContactCenter",
                                             "closedContactCenter",
                                             "Form");
 
                                         NDSchat.addQuestion(object_response);
                                     }
                                 }
                             }
                         }
                     },
                     error: function (x, r, s) {
                         console.error("Error Code: " + s);
                         object_response = NDSchat.defineResponseObject(widgetTexts.no_agents, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
 
                         object_response = NDSchat.defineResponseObject(
                             widgetTexts.agent_closed_cc,
                             "closedContactCenter",
                             "closedContactCenter",
                             "Form");
                         NDSchat.addQuestion(object_response);
                     }
                 });
             },
             loadAvayaWebChat: function () {
                 var webChat = {
                     users: {},
                     chatBotName: '',
                     guid: null,
                     ak: null,
                     pingInterval: null,
                     lastIsTypingSent: 0,
                     initCalled: false,
                     timeouts: [],
                     g_user: '',
                     g_user_last: '',
                     g_account: '',
                     workflowType: '',
                     routePointIdentifier: 'Default',
 
                     handleNotification: function (message) { // NOSONAR: too complex
                         // for Sonar, but cannot be reduced further
                         'use strict';
                         var body = message.body, method = body.method;
 
                         if (method === chatConfig.jsonMethodRequestChat) {
                             webChat.notifyRequestChat(body);
                         } else if (method === chatConfig.jsonMethodRequestNewParticipant) {
                             webChat.notifyNewParticipant(body);
                         } else if (method === chatConfig.jsonMethodRequestIsTyping) {
                             webChat.notifyIsTyping(body);
                         } else if (method === chatConfig.jsonMethodRequestNewMessage) {
                             webChat.notifyNewMessage(body);
                         } else if (method === chatConfig.jsonMethodRequestCloseConversation) {
                             webChat.notifyCloseConversation();
                         } else if (method === chatConfig.jsonMethodRequestParticipantLeave) {
                             webChat.notifyParticipantLeave(body);
                         } else if (method === chatConfig.jsonMethodPing) {
                             // do nothing with pings. They just confirm that the
                             // WebSocket is open.
                             clearTimeout(not_input_timeout);
                             clearTimeout(not_input_timeout2);
                             clearTimeout(chat_closed_timeout);
                         } else {
                             throw new TypeError('Received notification with unknown method: '.concat(method));
                         }
                     },
 
                     appendLink: function (url, urlDestination) {
                         'use strict';
                         return '<a href="' + url + '" target="_' + urlDestination + '">' + url + '</a>';
                     },
 
                     chatLogin: function (firstName, lastName) {
                         'use strict';
                         var leaseTime = chatConfig.leaseTime;
 
                         var calledParty = window.location.href;
                         var msg;
 
                         msg = {
                             'apiVersion': '1.0',
                             'type': 'request',
                             'body': {
                                 'method': 'requestChat',
                                 'deviceType': navigator.userAgent,
                                 'routePointIdentifier': webChat.routePointIdentifier,
                                 'workFlowType': webChat.workflowType,
                                 'requestTranscript': false,
                                 'calledParty': calledParty,
                                 'leaseTime': leaseTime,
                                 'intrinsics': {
                                     'channelAttribute': 'Chat',
                                     'attributes': avayaConfig.attributes,
                                     'name': firstName,
                                     'lastName': lastName,
                                     'email': user_email,
                                     'phoneNumber': "+521" + user_phone
                                 },
                                 'priority': 5,
                                 'customData': webChat.customData
                             }
                         };
 
                         chatSocket.sendMessage(msg);
 
                         if (webChat.g_user === '') {
                             webChat.g_user = chatConfig.defaultUsername;
                         }
 
                     },
 
                     clearAllTimeouts: function () {
                         'use strict';
                         for (var i = 0; i < webChat.timeouts.length; i++) {
                             clearTimeout(webChat.timeouts[i]);
                         }
                     },
 
                     initChat: function (firstName, lastName) {
                         'use strict';
 
                         // if the chat has already opened, don't bother opening it
                         if (webChat.initCalled) {
                             return;
                         }
 
                         webChat.g_user = firstName;
                         webChat.g_user_last = lastName;
 
                         chatSocket.openSocket();
                         webChat.initCalled = true;
                     },
 
                     notifyRequestChat: function (body) {
                         'use strict';
 
                         webChat.guid = body.guid;
                         webChat.g_user = body.intrinsics.name;
                         webChat.ak = body.authenticationKey;
 
                         var wrid = body.workRequestId;
                     },
 
                     notifyNewMessage: function (body) {
                         webChat.writeResponse(body.message);
                     },
 
                     notifyCloseConversation: function () {
                         'use strict';
                         chatSocket.manualClose = false;
                         chatConfig.dontRetryConnection = true;
                     },
 
                     notifyIsTyping: function (body) {
                         'use strict';
                         var isAgentTyping = body.isTyping;
                         NDSchat.removeBubbles();
 
                         if (isAgentTyping === true) {
                             NDSchat.addBubbles();
                         }
                     },
 
                     notifyNewParticipant: function (body) {
                         'use strict';
                         var id = body.agentId;
                         var role = body.role;
 
                         // assign chatbot name here. The UI will then use whatever name was assigned in AutomationController.
                         this.chatBotName = body.displayName;
                         if (id === 'AvayaAutomatedResource') {
                             this.chatBotName = body.displayName;
                         }
 
                         // check if notifications are allowed/required
                         var announceBot = (id === 'AvayaAutomatedResource' && !chatConfig.suppressChatbotPresence);
                         var announceObserve = (role === 'supervisor_observe' && chatConfig.notifyOfObserve);
                         var announceBarge = (role === 'supervisor_barge' && chatConfig.notifyOfBarge);
 
                         // if notifications are allowed/required, display them
                         if (announceBot || announceObserve || announceBarge || role === 'active_participant') {
                             webChat.writeResponse('Estas hablando con ' + body.displayName + ".");
 
                             if (context.tipo_persona && context.tipo_montos && context.cuenta_sugerida) {
                                 webChat.sendChatMessage('Perfilador de cita');
                                 webChat.sendChatMessage('Tipo de persona ' + context.tipo_persona);
                                 webChat.sendChatMessage('Tipo de montos ' + context.tipo_montos);
                                 webChat.sendChatMessage('Cuenta sugerida para el usuario ' + context.cuenta_sugerida);
                             } else {
                                 if (transcript) {
                                     for (var count = 0; count < transcript.length; count++) {
                                         var trans_message = "user: " + transcript[count].user;
                                         trans_message += "\nbot: " + transcript[count].bot.replace(/<\/?[^>]+(>|$)/g, "");
                                         webChat.sendChatMessage(trans_message);
                                     }
                                 }
                             }
                         }
 
                         var agents = body.participants;
                         webChat.updateUsers(agents);
                     },
 
                     notifyParticipantLeave: function (body) {
                         'use strict';
 
                         var id = body.agentId;
                         var agents = body.participants;
 
                         if (body.endChatFlag) {
                             chatConfig.dontRetryConnection = true;
                         }
 
                         var isAgentContained = false;
                         for (var i = 0; i < agents.length; i++) {
                             if (agents[i].id === id) {
                                 isAgentContained = true;
                                 break;
                             }
                         }
 
                         var leaveReason = body.leaveReason.toLowerCase();
 
                         var suppressBot = (leaveReason === 'escalate' && chatConfig.suppressChatbotPresence);
 
                         if (Object.keys(body.participants).length === 0) {
                             if (leaveReason === 'transfer') {
                                 webChat.writeResponse(widgetTexts.agent_transfer);
                             } else if (leaveReason === 'escalate' && !chatConfig.suppressChatbotPresence) {
                                 webChat.writeResponse(widgetTexts.agent_transfer);
                             }
                         }
 
                         webChat.updateUsers(agents);
                     },
 
                     quitChat: function () {
                         'use strict';
                         // Prevent reconnect attempts if customer clicks 'Close' while chat is
                         // reconnecting
                         chatConfig.dontRetryConnection = true;
                         chatSocket.manualClose = true;
                         webChat.clearAllTimeouts();
                         if (webSocket !== null && webSocket.readyState === webSocket.OPEN) {
                             var closeRequest = {
                                 'apiVersion': '1.0',
                                 'type': 'request',
                                 'body': {
                                     'method': 'closeConversation'
                                 }
                             };
                             chatSocket.sendMessage(closeRequest);
                         }
                     },
 
                     sendChatMessage: function (message) {
                         'use strict';
 
                         // add the timestamp message, then the chat.
                         var message_to_send = {
                             'apiVersion': '1.0',
                             'type': 'request',
                             'body': {
                                 'method': 'newMessage',
                                 'message': message,
                                 'type': 'text',
                                 'data': {
                                     'message': message
                                 },
                                 'customData': webChat.customData
                             }
                         };
 
                         nds_utils.minAjax({
                             url: config.url + config.api_version + "saveUserInteraction",
                             type: "POST",
                             headers: {
                                 "Content-type": "application/json",
                                 "X-ACCOUNT-ID": NDSchat.state.accountID,
                                 "X-APP-TOKEN": NDSchat.state.token,
                                 "X-API-KEY": config.token_apigee
                             },
                             data: {
                                 "message": message,
                                 "agent": webChat.chatBotName
                             },
                             json: true
                         });
 
                         chatSocket.sendMessage(message_to_send);
                     },
 
                     sendIsTyping: function (isUserTyping) {
                         'use strict';
                         var isTypingMessage = {
                             'apiVersion': '1.0',
                             'type': 'request',
                             'body': {
                                 'method': 'isTyping',
                                 'isTyping': isUserTyping
                             }
                         };
 
                         webChat.lastIsTypingSent = Date.now();
 
                         chatSocket.sendMessage(isTypingMessage);
                     },
 
                     sendPing: function () {
                         'use strict';
                         var ping = {
                             'apiVersion': '1.0',
                             'type': 'request',
                             'body': {
                                 'method': 'ping'
                             }
                         };
                         chatSocket.sendMessage(ping);
                     },
 
                     updateUsers: function (agents) {
                         'use strict';
                         webChat.users = {};
 
                         if (agents !== undefined) {
                             for (var i = 0; i < agents.length; i++) {
                                 var agent = agents[i];
 
                                 webChat.users[agent.id] = {
                                     displayName: agent.name,
                                     isTyping: false,
                                     agentType: agent.type
                                 };
                             }
                         }
                     },
 
                     splitText: function (text) {
                         'use strict';
                         var textArray = text.split(" ");
                         var output = [];
                         for (var i = 0; i < textArray.length; i++) {
                             output.push(textArray[i]);
                             output.push(" ");
                         }
 
                         return output;
 
                     },
 
                     writeResponse: function (text) {
                         'use strict';
 
                         // get message split by white-space
                         var textArray = webChat.splitText(text);
                         var responseText = "<div>";
 
                         // append each element of the message as a string or a link
                         for (var i = 0; i < textArray.length; i++) {
                             // check that URLs have at least one character in the path else display as text
                             // have to use "indexOf === 0", as IE does not support the startsWith method
                             if ((textArray[i].indexOf("http://") === 0 && textArray[i].length > 7) ||
                                 (textArray[i].indexOf("https://") === 0 && textArray[i].length > 8)) {
 
                                 responseText += " " + webChat.appendLink(textArray[i], 'blank');
                             }
                             else {
                                 responseText += " " + textArray[i];
                             }
                         }
 
                         responseText += "</div>";
 
                         nds_utils.minAjax({
                             url: config.url + config.api_version + "saveAgentInteraction",
                             type: "POST",
                             headers: {
                                 "Content-type": "application/json",
                                 "X-ACCOUNT-ID": NDSchat.state.accountID,
                                 "X-APP-TOKEN": NDSchat.state.token,
                                 "X-API-KEY": config.token_apigee
                             },
                             data: {
                                 "message": responseText,
                                 "agent": webChat.chatBotName
                             },
                             json: true
                         });
 
                         NDSchat.removeBubbles();
                         var object_response = NDSchat.defineResponseObject(responseText, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                     }
                 };
 
                 return webChat;
             },
             loadAvayaWebSocket: function () {
                 var chatSocket = {
                     manualClose: false,
                     authToken: '',
 
                     openSocket: function () {
                         'use strict';
 
                         // Create a new instance of the WebSocket using the specified url
                         webSocket = new WebSocket(links.getWebChatUrl());
 
                         //attach event handlers
                         webSocket.onopen = chatSocket.handleOpen;
                         webSocket.onmessage = chatSocket.handleMessage;
                         webSocket.onerror = chatSocket.handleError;
 
                         webSocket.onclose = function (event) {
                             if (!chatConfig.previouslyConnected || chatConfig.dontRetryConnection || event.code === 1000 ||
                                 event.code === 1005) {
                                 chatSocket.handleClose(event);
                             }
                         };
 
                     },
 
                     handleClose: function (event) {
                         'use strict';
                         webChat.initCalled = false;
 
                         if (!chatSocket.manualClose) {
                             webChat.writeResponse(widgetTexts.agent_session_ended);
                             NDSchat.reconnectButton();
                             webChat.clearAllTimeouts();
                         } else {
                             timer = 0;
                             webChat.initCalled = false;
                         }
                     },
 
                     handleOpen: function (event) {
                         'use strict';
 
                         chatSocket.manualClose = false;
 
                         // set up the ping mechanism here.
                         webChat.pingInterval = setInterval(function () {
                             webChat.sendPing();
                         }, chatConfig.pingTimer);
                         webChat.timeouts.push(webChat.pingInterval);
                         webChat.chatLogin(webChat.g_user, webChat.g_user_last);
                     },
 
                     handleMessage: function (event) {
                         'use strict';
                         var msg = JSON.parse(event.data), body = msg.body;
 
                         if (msg.type === chatConfig.messageTypeNotification) {
                             webChat.handleNotification(msg);
                         } else if (msg.type === chatConfig.messageTypeError) {
                             chatSocket.parseErrorMessage(body);
                         } else if (msg.type === chatConfig.messageTypeAck) {
                             // Nothing to do for acks
                         } else if (msg.type === chatConfig.messageTypeNewChatAck) {
                             webChat.guid = body.guid;
                             webChat.writeResponse('Chat request approved');
                         } else {
                             throw new TypeError('Unknown message type:\n' + msg);
                         }
                     },
 
                     handleError: function (event) {
                         'use strict';
                         NDSchat.handleError(0);
                     },
 
                     parseErrorMessage: function (error) {
                         'use strict';
                         var code = error.code;
                         var message = error.errorMessage;
 
                         // HTTP 503 means "service unavailable" - which is a perfect description for shutting down
                         if (code === 503) {
                             NDSchat.handleError(503);
                         } else {
                             NDSchat.handleError(500);
                         }
                     },
 
                     sendMessage: function (outMsg) {
                         'use strict';
 
                         var newMsg = $.extend({}, { "authToken": chatSocket.authToken }, outMsg);
 
                         if (webSocket !== null) {
                             webSocket.send(JSON.stringify(newMsg));
                         }
                     }
                 };
 
                 return chatSocket;
             },
             loadAvayaLinks: function () {
                 var links = {
                     secureAllConnections: true,
 
                     webChatHost: avayaConfig.webChatHost,
 
                     getWebChatUrl: function () {
                         'use strict';
                         return ((links.secureAllConnections ? 'wss://' : 'ws://') + links.webChatHost + avayaConfig.webChatUrl);
                     }
                 };
 
                 return links;
             },
             loadAvayaChatConfig: function () {
                 var chatConfig = {
                     jsonMethodRequestChat: 'requestChat',
                     jsonMethodRequestNewParticipant: 'newParticipant',
                     jsonMethodRequestIsTyping: 'isTyping',
                     jsonMethodRequestNewMessage: 'newMessage',
                     jsonMethodRequestCloseConversation: 'closeConversation',
                     jsonMethodRequestParticipantLeave: 'participantLeave',
                     jsonMethodPing: 'pong',
 
                     // If set to true, if the Websocket connection fails we will not attempt to re-establish the session
                     dontRetryConnection: false,
                     previouslyConnected: false,
 
                     // message types
                     messageTypeNewChatAck: 'newChatAcknowledgement',
                     messageTypeAck: 'acknowledgement',
                     messageTypeError: 'error',
                     messageTypeNotification: 'notification',
 
                     // if set to true, the chatbot will not announce its arrival/departure
                     suppressChatbotPresence: false,
 
                     // how frequently the pings are sent
                     pingTimer: 1e15,
 
                     // default username for if the customer doesn't enter a name.
                     defaultUsername: 'Customer',
 
                     // lease time in Context Store, measured in hours
                     leaseTime: 1
                 };
 
                 return chatConfig;
             },
             /* End ContactCenter connection */
             /* Post Survey flow */
             showPostChatSurvey: function (e) {
                 document.getElementById(e).style.display = "none";
                 document.getElementById("nds-chat-survey").style.display = "block";
                 document.onkeydown = function (e) {
                     if (13 === e.keyCode) return e.preventDefault(), false;
                 };
                 in_survey = true;
                 NDSchat.initTimers();
             },
             postSurvey: function () {
                 survey_form = document.getElementById("nds-survey-form");
                 names = form.post_survey;
                 result = {};
                 names.forEach(function (question) {
                     switch (question.type) {
                         case "radio":
                             name = question.name;
                             val = survey_form[name].value;
                             result[name] = val;
                             break;
 
                         case "checkbox":
                             name = question.name;
                             var vals = [];
                             survey_form[name].forEach(function (opt) {
                                 if (opt.checked) {
                                     vals.push(opt.value);
                                 }
                                 result[name] = vals;
                             });
                             break;
 
                         case "text":
                             name = question.name;
                             val = survey_form[name].value;
                             result[name] = val;
                             break;
 
                         case "number":
                             name = question.name;
                             val = survey_form[name].value;
                             result[name] = val;
                             break;
 
                         default:
                             break;
 
                     }
                 });
 
                 // post the result to somewhere
                 nds_utils.minAjax({
                     url: config.url + config.api_version + "survey",
                     type: "POST",
                     headers: {
                         "Content-type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     },
                     data: {
                         "survey": result
                     },
                     json: true,
                     success: function (t) {
                         document.getElementById("nds-survey-form").reset();
 
                         if (questionList[questionList.length - 1].label !== "<div>Fue un placer atenderte. ¡Vuelve pronto!<p style='color:#006600;'>smt-1</p></div>" &&
                             questionList[questionList.length - 1].label !== "<div>Fue un placer atenderte. ¡Vuelve pronto!</div>") {
                             var object_response = NDSchat.defineResponseObject("<div>Fue un placer atenderte. ¡Vuelve pronto!</div>", "Question", "endMessage", "Question");
                             NDSchat.addQuestion(object_response);
                             NDSchat.reconnectButton();
                         }
 
                         document.getElementById("nds-chat-survey").style.display = "none";
                         document.getElementById('nds-chat-conversation').style.display = "block";
                     },
                     error: function () {
                         document.getElementById("nds-survey-form").reset();
 
                         if (questionList[questionList.length - 1].label !== "<div>Fue un placer atenderte. ¡Vuelve pronto!<p style='color:#006600;'>smt-1</p></div>") {
                             var object_response = NDSchat.defineResponseObject("<div>Fue un placer atenderte. ¡Vuelve pronto!<p style='color:#006600;'>smt-1</p></div>", "Question", "endMessage", "Question");
                             NDSchat.addQuestion(object_response);
                             NDSchat.reconnectButton();
                         }
 
                         document.getElementById("nds-chat-survey").style.display = "none";
                         document.getElementById('nds-chat-conversation').style.display = "none";
 
                         clearTimeout(not_input_timeout);
                         clearTimeout(not_input_timeout2);
                         clearTimeout(chat_closed_timeout);
 
                         setTimeout(function () {
                             document.getElementById("nds-chat-screen-thanks").style.display = "none";
                             document.getElementById('nds-chat-conversation').style.display = "block";
                             var f = parent.document.getElementById("nds-chat-frame-container");
                             nds_utils.removeClass(f, "nds-chat-frame-container-active");
                         }, 1e3 * 10);
                     }
                 });
 
                 if (config.number_chats && config.number_chats > 0) {
                     nds_utils.minAjax({
                         url: config.url + config.auth_endpoint + "exited",
                         type: "GET"
                     });
                 }
             },
             /* End post survey flow */
             /* Widget functionalities handlers */
             open: function () {
                 if (
                     document.getElementById(current_clicked) !== undefined &&
                     document.getElementById(current_clicked) !== null &&
                     in_more_info && !in_survey
                 ) {
                     document.getElementById(current_clicked).style.display = "block";
                 }
                 if (answerList.length === 0) {
                     this.state.activeQuestion === -1 && this.addQuestion(questionList[++this.state.activeQuestion]);
                 } else if (!session_ended && !in_survey) {
                     if (document.getElementsByClassName("nds-chat-comment-option-wrap")[0]) {
                         NDSchat.initEventHandler(false);
                     } else {
                         NDSchat.initEventHandler(true);
                         nds_utils.removeClass(elements.chatComposer, "hidden");
                     }
                 } else {
                     if (!document.getElementById("reconnect-button"))
                         NDSchat.reconnectButton();
                 }
                 chat_state = "opened";
             },
             openWithMessage: function (msg, nid) {
                 if (
                     document.getElementById(current_clicked) !== undefined &&
                     document.getElementById(current_clicked) !== null &&
                     in_more_info && !in_survey
                 ) {
                     document.getElementById(current_clicked).style.display = "block";
                 }
                 if (answerList.length === 0) {
                     if (this.state.activeQuestion === -1) {
                         this.addQuestion(questionList[++this.state.activeQuestion], msg, nid);
                     } else if (msg != null && nid != null) {
                         NDSchat.addMessage(msg, new Date(), client_name);
                         NDSchat.getContextNode(nid, true);
                     }
                 } else if (!session_ended && !in_survey) {
                     if (document.getElementsByClassName("nds-chat-comment-option-wrap")[0]) {
                         NDSchat.initEventHandler(false);
                     } else {
                         NDSchat.initEventHandler(true);
                         nds_utils.removeClass(elements.chatComposer, "hidden");
                     }
                 } else {
                     if (!document.getElementById("reconnect-button"))
                         NDSchat.reconnectButton();
                 }
                 chat_state = "opened";
             },
             create_confirm_modal: function () {
                 var parent_div = document.getElementById("nds-chat-container");
                 var gray_cover = parent_div.appendChild(document.createElement("div"));
                 gray_cover.classList.add("bg-modal");
                 gray_cover.id = "gray-cover";
                 var modal = gray_cover.appendChild(document.createElement("div"));
                 modal.classList.add("cs-modal");
                 modal.id = "exit-confirmation-modal";
                 var text_confirm_modal = document.createElement("h5");
                 text_confirm_modal.textContent = widgetTexts.modalText;
                 modal.appendChild(text_confirm_modal);
                 var yey = document.createElement("button");
                 yey.textContent = "Salir";
                 yey.id = "confirm-close";
                 var nay = document.createElement("button");
                 nay.textContent = "Cancelar";
                 nay.id = "cancel-close";
 
                 modal.appendChild(nay);
                 modal.appendChild(yey);
             },
             close: function () {
                 singletonish = document.getElementById("gray-cover");
                 if ((singletonish === null || singletonish === undefined) && answerList.length > widget.minimum_responses && !session_ended && !in_survey) {
                     NDSchat.create_confirm_modal();
                     document.getElementById("confirm-close").onmousedown = NDSchat.close_confirmed;
                     document.getElementById("cancel-close").onmousedown = destroyModal;
                     if (
                         document.getElementById(current_clicked) !== undefined &&
                         document.getElementById(current_clicked) !== null &&
                         in_more_info
                     ) {
                         in_more_info = false;
                         document.getElementById(current_clicked).style.display = "none";
                     }
                 } else {
                     if (window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize-animated")) {
                         window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize-animated").click();
                     } else {
                         window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize").click();
                     }
                 }
 
                 function destroyModal() {
                     delete_me = document.getElementById("gray-cover");
                     if (delete_me.parentElement) {
                         delete_me.parentElement.removeChild(delete_me);
                     }
                 }
             },
             close_confirmed: function () {
 
                 var f;
                 delete_me = document.getElementById("gray-cover");
 
                 if (delete_me.parentElement) {
                     delete_me.parentElement.removeChild(delete_me);
                 }
 
                 // Do not display survey if less than X answers
                 if (answerList.length <= widget.minimum_responses) {
                     f = parent.document.getElementById("nds-chat-frame-container");
                     nds_utils.removeClass(f, "nds-chat-frame-container-active");
                     //nds_utils.addClass(elements.chatComposer, "hidden");
                 } else {
                     if (document.getElementById(current_clicked) !== undefined && document.getElementById(current_clicked) !== null) {
                         document.getElementById(current_clicked).style.display = "none";
                     }
                     delete_me = document.getElementById("nds-chat-composer");
                     if (delete_me) {
                         delete_me.innerHTML = "";
                         // delete_me.remove(); // this is called inside the reconnectButton
                     }
                     // this eliminates the buttons
                     _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                         t.parentElement.removeChild(t);
                     });
                     // this eliminates the select
                     delete_options = document.getElementById("nds-chat-option-wrap");
                     if (delete_options && delete_options.parentElement) {
                         delete_options.parentElement.removeChild(delete_options);
                     }
 
                     session_ended = true;
 
                     clearTimeout(not_input_timeout);
                     clearTimeout(not_input_timeout2);
                     clearTimeout(chat_closed_timeout);
 
                     f = parent.document.getElementById("nds-chat-frame-container");
 
                     if (config.require_postsurvey) {
                         NDSchat.showPostChatSurvey('nds-chat-conversation');
                     } else {
                         f = parent.document.getElementById("nds-chat-frame-container");
                         nds_utils.removeClass(f, "nds-chat-frame-container-active");
                         NDSchat.removeSession();
                     }
                 }
 
                 if (withAgent) {
                     webChat.quitChat();
                 }
 
                 try {
                     var launcher_icon = window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-active")[0];
                     launcher_icon.classList.remove("nds-chat-launcher-active");
                     launcher_icon.classList.add("nds-chat-launcher-closed");
                     chat_state = "closed";
                 } catch (err) { } finally {
                     NDSchat.reconnectButton();
                 }
             },
             restart: function (callback) {
                 session_affinity_cookie = "";
                 context = {};
                 transcript = [];
                 user_name = "";
                 user_email = "";
                 user_phone = "";
                 client_email = "";
                 client_phone = "";
                 in_form = false;
                 count_in_form = 0;
                 in_permanence = false;
                 not_timeout = true;
                 in_survey = false;
                 text = "";
                 timer = null;
                 is_common = false;
                 global_names = [];
                 words = [];
                 not_input_timeout = null;
                 not_input_timeout2 = null;
                 chat_closed_timeout = null;
                 last_questions = [];
                 current_clicked = "";
                 need_thinking = true;
                 session_ended = false;
                 is_refresh = false;
                 wasPressed = false;
                 doubt_string = "";
                 client_path = [];
                 is_full_screen = false;
                 in_more_info = false;
                 chat_state = "closed";
                 elements = {};
                 answerList = [];
                 finish_localization = false;
                 lp_retries = 0;
                 lp_max_retries = 4;
                 questionList = Array.from(form.questions);
                 chatSocket = undefined;
                 webChat = undefined;
                 links = undefined;
                 withAgent = false;
                 webSocket = undefined;
                 chatConfig = undefined;
                 maxWaitTime = 600;
                 minAgentCount = 1;
                 minWaitTime = -5;
                 use_case_flux = false;
                 get_client_data = false;
                 get_client_number_by_contract_data = false;
                 unique_client_number = "";
                 phone_validation = false;
                 choose_token_method = false;
                 select_contract = false;
                 verify_email = false;
                 select_period = false;
                 changing_token_status = false;
                 closing_flux = false;
                 new_statement = false;
                 validate_phone_code = false;
                 card_filter_response = false;
                 card_filter = false;
                 inserted_card = false;
                 card_activation = false;
                 available_periods = {};
                 ContractsDict = {};
                 MaskedContractsDict = {};
                 use_case_action = "";
                 selected_email = "";
                 actinver_token = "";
                 actinver_contract = "";
                 actinver_phones = [];
                 actinver_emails = [];
                 actinver_contracts = [];
                 actinver_number = "";
                 retryCount = 0;
                 avayaRetryCount = 0;
                 isDate = false;
                 bank_contracts = false;
                 house_contracts = false;
                 send_spei = false;
                 confirm_spei = false;
                 select_account_tranfer = false;
                 transfer_amount = "";
                 transfer_summary = false;
 
                 validate_transfer_amount = false;
                 find_beneficiary = false;
                 select_bank = false;
                 select_bank_or_house = false;
                 fund_select_bank_or_house = false;
                 validate_phone_code = false;
                 ask_beneficiary = false;
                 remove_special_characters = false;
                 select_beneficiary = false;
                 confirm_successful_spei = false;
                 confirm_successful_fund_bank = false;
                 end_option_fund_bank = false;
                 is_option_fund_bank = false;
                 //document.getElementById("txMessage").maxLength = "140";
 
                 clearTimeout(not_input_timeout);
                 clearTimeout(not_input_timeout2);
                 clearTimeout(chat_closed_timeout);
 
                 this.state.current = undefined;
                 this.state.last = undefined;
                 this.state.activeQuestion = 0;
                 this.state.token = null;
 
                 this.config = nds_utils.mergeConfig({
                     user: client_name,
                     thinkingTime: 1e3,
                     questionInterval: 2e3,
                     errorInterval: 1500
                 }, {});
 
                 var more_info_divs = document.querySelectorAll("[id^=nds-chat-extra-]");
                 _.toArray(more_info_divs).forEach(function (element) {
                     element.parentElement.removeChild(element);
                 });
 
                 var dadDiv = document.getElementById('nds-chat-composer-container').appendChild(document.createElement('div'));
                 dadDiv.id = "nds-chat-composer";
                 dadDiv.classList.add("nds-chat-composer");
                 dadDiv.classList.add("hidden");
                 dadDiv.setAttribute("style", "transform: translate(0,0)");
 
                 //stuff
                 var sonDiv = dadDiv.appendChild(document.createElement('div'));
                 sonDiv.classList.add("nds-chat-composer-textarea-container");
 
                 var son2Div = sonDiv.appendChild(document.createElement('div'));
                 son2Div.classList.add("nds-chat-composer-textarea");
 
                 var son3Label = son2Div.appendChild(document.createElement('label'));
                 son3Label.id = "charcount";
 
                 var son3Pre = son2Div.appendChild(document.createElement('pre'));
                 son3Pre.classList.add("nds-chat-send-button");
 
                 var son3TextArea = son2Div.appendChild(document.createElement('textarea'));
                 son3TextArea.id = "txMessage";
                 son3TextArea.maxLength = 140;
                 son3TextArea.placeholder = textAreaTxt;
 
                 if (document.getElementById("reconnect-button") !== null || document.getElementById('reconnect-button') !== undefined) {
                     document.getElementById("reconnect-button").parentElement.removeChild(document.getElementById("reconnect-button"));
                 }
 
                 if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                     nds_utils.deleteCookie("sessionID");
                 }
 
                 elements.divChatbox = document.getElementById("nds-chat-chatbox");
                 elements.txMessage = document.getElementById("txMessage");
                 elements.sendButton = document.querySelector(".nds-chat-send-button");
                 elements.sendButton.id = "nds-chatbot-send-button";
                 elements.chatComposer = document.getElementById("nds-chat-composer");
                 elements.skipBtn = document.getElementById("nds-chat-skip");
                 elements.returnBtn = document.getElementById("nds-chat-return");
                 elements.submitBtn = document.getElementById("nds-chat-submit");
                 elements.closeBtn = document.getElementById("nds-chat-launcher-close");
                 count = 0;
 
                 // Hides again the survey fields
                 var recommendation_divs = document.getElementsByClassName("question");
                 _.toArray(recommendation_divs).forEach(function (element) {
                     if (element.getAttribute("style"))
                         element.setAttribute("style", "display: none;");
                 });
 
                 callback();
             },
             dragElement: function (elmnt) {
                 if (elmnt.preventDefault) elmnt.preventDefault();
                 var pos1 = 0,
                     pos2 = 0,
                     pos3 = 0,
                     pos4 = 0;
                 if (document.getElementById("nds-chat-title")) {
                     /* if present, the header is where you move the DIV from:*/
                     document.getElementById("nds-chat-title").onmousedown = dragMouseDown;
                 }
 
                 function dragMouseDown(e) {
                     if (is_full_screen) {
                         return;
                     }
                     e = e || window.event;
                     // get the mouse cursor position at startup:
                     pos3 = parseInt(e.clientX);
                     pos4 = parseInt(e.clientY);
                     document.onmouseup = closeDragElement;
                     // call a function whenever the cursor moves:
                     document.onmousemove = elementDrag;
                 }
 
                 function elementDrag(e) {
                     e = e || window.event;
                     // calculate the new cursor position:
                     pos1 = pos3 - parseInt(e.clientX);
                     pos2 = pos4 - parseInt(e.clientY);
                     pos3 = parseInt(e.clientX);
                     pos4 = parseInt(e.clientY);
                     // set the element's new position:
                     elmnt.style.top = (parseInt(elmnt.offsetTop) - pos2 / 1.45) + "px";
                     elmnt.style.left = (parseInt(elmnt.offsetLeft) - pos1 / 1.45) + "px";
                 }
 
                 function closeDragElement() {
                     /* stop moving when mouse button is released:*/
                     document.onmouseup = null;
                     document.onmousemove = null;
                 }
             },
             resizeElement: function (elmnt) {
                 elmnt = elmnt.parentElement;
                 // resize the widget based on the mouse's movement
                 if (elmnt.preventDefault) elmnt.preventDefault();
                 var pos1 = 0,
                     pos2 = 0,
                     pos3 = 0,
                     pos4 = 0;
                 if (window.frameElement.ownerDocument.getElementById("nds-chat-launcher-resize")) {
                     /* if present, the icon is where you resize*/
                     window.frameElement.ownerDocument.getElementById("nds-chat-launcher-resize").onmousedown = resizeMouseDown;
                     if (elmnt.style.height == "" || elmnt.style.height == null || elmnt.style.height == undefined || elmnt.style.height == 0) {
                         elmnt.style.height = 600;
                     }
                     if (elmnt.style.width == "" || elmnt.style.width == null || elmnt.style.width == undefined || elmnt.style.width == 0) {
                         elmnt.style.width = 370;
                     }
                 }
 
                 function resizeMouseDown(e) {
                     if (is_full_screen) {
                         return;
                     }
                     e = e || window.event;
                     // get the mouse cursor position at startup:
                     pos3 = parseInt(e.clientX);
                     pos4 = parseInt(e.clientY);
                     document.onmouseup = closeResizeElement;
                     // call a function whenever the cursor moves:
                     document.onmousemove = elementResize;
                 }
 
                 function elementResize(e) {
                     e = e || window.event;
                     // calculate the new cursor position:
                     pos1 = pos3 - parseInt(e.clientX);
                     pos2 = pos4 - parseInt(e.clientY);
                     pos3 = parseInt(e.clientX);
                     pos4 = parseInt(e.clientY);
                     // set the element's new width & height:
                     var add_width, add_height;
                     add_width = (pos1 % 10);
                     add_height = (pos2 % 10);
                     elmnt.style.width = add_width + parseInt(elmnt.style.width);
                     elmnt.style.height = add_height + parseInt(elmnt.style.height);
                 }
 
                 function closeResizeElement() {
                     /* stop moving when mouse button is released:*/
                     document.onmouseup = null;
                     document.onmousemove = null;
                 }
             },
             resetElement: function (elmnt, init_offset_top, init_offset_left, init_height, init_width) {
                 elmnt = elmnt.parentElement;
                 window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize").onmousedown = resetMouseDown;
                 // reset the chat window to the "original" posotion
                 function resetMouseDown(e) {
                     e = e || window.event;
                     if (is_full_screen) {
                         elmnt.style.width = "370px";
                         elmnt.style.height = "600px";
                         elmnt.style.minHeight = "280px";
                         elmnt.style.minWidth = "250px";
                         elmnt.style.left = "";
                         is_full_screen = false;
                     }
 
                     elmnt.style.top = ""; // distance to look like it was the original position
                     elmnt.style.left = ""; // distance to look like it was the original position
                     elmnt.style.height = init_height; //initial height
                     elmnt.style.width = init_width; // initial width
 
                 }
             },
             fullSreen: function (elmnt) {
                 elmnt = elmnt.parentElement;
                 // resize the widget based on the mouse's movement
                 if (elmnt.preventDefault) elmnt.preventDefault();
                 window.frameElement.ownerDocument.getElementById("nds-chat-launcher-fullscreen").onmousedown = fullSreenToggle;
                 is_full_screen = false;
 
                 function fullSreenToggle(e) {
                     e = e || window.event;
                     var bubble_area = window.frameElement.contentDocument.getElementsByClassName("nds-chat-sheet-content-container")[0].style;
                     var write_area = document.getElementById("nds-chat-composer").style;
                     var state = NDSchat.getState();
                     if (state === "mined") {
                         var toggerable = window.frameElement.ownerDocument.getElementById("nds-chat-frame-container");
                         toggerable.classList.remove("chat-down");
                         toggerable.classList.add("chat-up");
                         chat_state = "opened";
                         var launcher_icon = window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-mined")[0];
                         launcher_icon.classList.remove("nds-chat-launcher-mined");
                         launcher_icon.classList.add("nds-chat-launcher-active");
                         return;
                     }
 
                     if (!is_full_screen) {
                         //reset the window
                         elmnt.style.top = ""; // distance to look like it was the original position
                         elmnt.style.left = ""; // distance to look like it was the original position
                         elmnt.style.left = 0;
                         // resizing the widget window
                         elmnt.style.width = "100%";
                         elmnt.style.height = "100%";
                         elmnt.style.minHeight = "100%";
                         elmnt.style.minWidth = "100%";
                         is_full_screen = true;
                     } else {
                         elmnt.style.width = "370px";
                         elmnt.style.height = "600px";
                         elmnt.style.minHeight = "280px";
                         elmnt.style.minWidth = "250px";
                         elmnt.style.left = "";
                         is_full_screen = false;
                     }
                 }
             },
             minimizedAnimated: function (elmnt) {
                 elmnt = elmnt.parentElement;
                 // resize the widget based on the mouse's movement
                 if (elmnt.preventDefault) elmnt.preventDefault();
                 window.frameElement.ownerDocument.getElementById("nds-chat-launcher-minimize-animated").onmousedown = standarizer;
 
                 function standarizer(e) {
                     e = e || window.event;
 
                     if (!is_full_screen) {
                         //reset the window
                         elmnt.style.top = ""; // distance to look like it was the original position
                         elmnt.style.left = ""; // distance to look like it was the original position
                         elmnt.style.width = "370px";
                         elmnt.style.height = "600px";
                         elmnt.style.minHeight = "280px";
                         elmnt.style.minWidth = "250px";
                         classToggle();
                     } else {
                         elmnt.style.width = "370px";
                         elmnt.style.height = "600px";
                         elmnt.style.minHeight = "280px";
                         elmnt.style.minWidth = "250px";
                         elmnt.style.left = "";
                         is_full_screen = false;
                         classToggle();
                     }
                 }
 
                 function classToggle() {
                     var toggerable = window.frameElement.ownerDocument.getElementById("nds-chat-frame-container");
                     var launcher_icon;
 
                     if (chat_state === "opened") {
                         toggerable.classList.remove("chat-up");
                         toggerable.classList.add("chat-down");
                         chat_state = "mined";
                         launcher_icon = window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-active")[0];
                         launcher_icon.classList.remove("nds-chat-launcher-active");
                         launcher_icon.classList.add("nds-chat-launcher-mined");
                     } else if (chat_state === "mined") {
                         toggerable.classList.remove("chat-down");
                         toggerable.classList.add("chat-up");
                         chat_state = "opened";
                         launcher_icon = window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-mined")[0];
                         launcher_icon.classList.remove("nds-chat-launcher-mined");
                         launcher_icon.classList.add("nds-chat-launcher-active");
                     }
                 }
             },
             /* End of widget functionalities handlers */
             /* Set's */
             /**
              * Sets all the objects inside the loaded json file
              * @param {Object} dictionaries - The loaded json file from the API
              */
             setDictionaries: function (dictionaries) {
                 var names = dictionaries.commonNames,
                     english = dictionaries.foreignWords;
                 names.forEach(function (e) {
                     global_names.push(e.toLowerCase());
                 });
                 english.forEach(function (e) {
                     words.push(e.toLowerCase());
                 });
             },
             /* End of set's */
             /* Get's */
             /**
              * Returns the current state of the widget presence
              * @return {string} - The state of the widget frame
              */
             getState: function () {
                 if (window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-active")[0]) {
                     return "active";
                 }
                 if (window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-mined")[0]) {
                     return "mined";
                 }
                 if (window.frameElement.ownerDocument.getElementsByClassName("nds-chat-launcher-closed")[0]) {
                     return "closed";
                 }
                 return undefined;
             },
             /* End of Get's*/
             /* Error handler */
             /**
              * Returns the error message depending on the status code
              * @param {number} status - The status code returned from the API
              */
             handleError: function (status) {
                 var error_message;
                 var object_response;
 
                 if (status === 403) {
                     NDSchat.disableButtons();
                     error_message = widgetTexts.error403;
                     object_response = NDSchat.defineResponseObject(error_message, "Question", "endMessage", "0");
                     if (last_questions[last_questions.length - 1] !== "Para continuar por favor presiona el botón 'Reconectar'") {
                         NDSchat.addQuestion(object_response);
                         last_questions.push("Para continuar por favor presiona el botón 'Reiniciar conversación'");
                         NDSchat.disableButtons();
                         NDSchat.reconnectButton();
                     }
                     NDSchat.removeSession();
                 } else if (status >= 500 && status <= 599) {
                     NDSchat.disableButtons();
                     error_message = widgetTexts.error500;
                     object_response = NDSchat.defineResponseObject(error_message, "Question", "endMessage", "0");
                     if (last_questions[last_questions.length - 1] !== error_message) {
                         NDSchat.addQuestion(object_response);
                         last_questions.push(error_message);
                     }
 
                     NDSchat.removeSession();
                     NDSchat.reconnectButton();
                 } else if (status === 0) {
                     NDSchat.disableButtons();
                     error_message = widgetTexts.InternetError;
                     object_response = NDSchat.defineResponseObject(error_message, "Question", "endMessage", "0");
                     if (last_questions[last_questions.length - 1] !== "Hay un error en la conexión a internet, por favor asegúrate de estar conectado, y reinicia la página.") {
                         NDSchat.addQuestion(object_response);
                         last_questions.push(conexionTxt);
                         NDSchat.disableButtons();
                         NDSchat.reconnectButton();
                     }
 
                     NDSchat.removeSession();
                 }
             },
             /* End error handler */
             // TODO: Checar el primer mensaje con translate y definir si es español o no
             /**
              * Checks if the initial input is on English, if it so, returns that the locale is not supported
              * @param {string} test_text - The text that will be evaluated
              */
             isForeign: function (test_text) {
                 var foreign = false;
                 var copy_string = test_text;
                 var punctuationless = copy_string.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
                 var finalString = punctuationless.replace(/\s{2,}/g, " ");
                 if (_.contains(words, finalString.toLowerCase())) {
                     foreign = true;
                     return foreign;
                 }
                 if (/\benglish\b/.test(finalString)) {
                     foreign = true;
                     return foreign;
                 }
                 if (/\bhelp\b/.test(finalString)) {
                     foreign = true;
                     return foreign;
                 }
                 if (/\bquestion\b/.test(finalString)) {
                     foreign = true;
                     return foreign;
                 }
                 if (/\bquestions\b/.test(finalString)) {
                     foreign = true;
                     return foreign;
                 }
 
                 return foreign;
             },
             /**
              * Adds the header of FAQ's, Demo's and Video's if they are present
              * @param {string} response - The response sended from watson
              */
             modifyLinks: function (response) {
                 var str = response;
                 var res = str.split("<a");
                 if (res.length > 1) {
                     response = "";
                     var response_type = "";
                     res.forEach(function (element) {
                         response_type = element.indexOf("<div class=\"faq\">") !== -1 ? "<h4>Temas relacionados: </h4><a" : element.indexOf("<div class=\"demo\">") !== -1 ? "<h4>Material de Apoyo: </h4><a" : element.indexOf("<div class=\"demo-video\">") !== -1 ? "<h4>Material de Apoyo: </h4><a" : "<a";
                         response += element + response_type;
                     });
                 }
                 return response;
             },
             /**
              * Reads an string and set if the string is too long for a single bubble
              * @param {string} response - The string to be evaluated on length property
              */
             // TODO: Set number characters on the .json
             getCharactersCount: function (response) {
                 // Regex that catches all the HTML Tags
                 var re = /<(.|\n)*?>/g;
                 response = (response).replace(re, ""); // replace all the tags for empty space
 
                 var long = false;
                 if (response.length > 400) {
                     long = true;
                 }
                 return long;
             },
             /**
              * Deletes the session in the current chat and in the server
              */
             removeSession: function () {
                 nds_utils.minAjax({
                     url: config.url + config.auth_endpoint + "removeSession",
                     type: "POST",
                     headers: {
                         "Content-type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     },
                     data: {},
                     json: true
                 });
 
                 if (config.number_chats && config.number_chats > 0) {
                     nds_utils.minAjax({
                         url: config.url + config.auth_endpoint + "exited",
                         type: "GET",
                         success: function (response) {
                             console.log(JSON.parse(response));
                         },
                         error: function (err) {
                             console.log(JSON.parse(err));
                         }
                     });
                 }
             },
             /**
              * Removes completely the buttons on the screen
              */
             removeButtons: function () {
                 deletes = document.getElementsByClassName("nds-chat-comment-option-wrap");
                 elems = [];
                 for (var index = 0; index < deletes.length; index++) {
                     elems.push(deletes[index]);
                 }
                 elems.forEach(function (elem) {
                     elem.parentElement.removeChild(elem);
                 });
             },
             /**
              * Generates the reconnect button and set it into the html element of your choice
              */
             reconnectButton: function () {
                 var textArea = document.getElementById('nds-chat-composer');
                 var dadDiv;
 
                 if (textArea) {
                     dadDiv = textArea.parentElement;
                     dadDiv.removeChild(textArea);
                 }
 
                 var reconnect = dadDiv.appendChild(document.createElement("div"));
                 var styles = [
                     "nds-chat-comment-content",
                     "nds-chat-comment-option",
                     "no-select",
                     "bubble-animate",
                     "nds-chat-theme-color",
                     "nds-chat-theme-border",
                     "nds-chat-theme-reconnect"
                 ];
                 styles.forEach(function (style) {
                     reconnect.classList.add(style);
                 });
                 reconnect.setAttribute("data-type", "link");
                 reconnect.id = "reconnect-button";
                 reconnect.innerHTML = newChatTxt;
                 reconnect.onclick = function () {
                     NDSchat.restart(function () {
                         var t = document.getElementById("nds-chat-message");
                         NDSchat.initEventHandler();
                         t.innerHTML = "";
                         NDSchat.addQuestion(questionList[NDSchat.state.activeQuestion]);
                     });
                 };
             },
             /**
              * Generates the new screen for the long answer display
              * @param {string} response - The response sended from watson
              */
             longAnswer: function (response) {
                 var object_response;
 
                 var answer_truncated = response.response.replace(/<(.|\n)*?>/g, "").substring(0, 200) + '...';
                 // Link to open
                 object_response = NDSchat.defineResponseObject(answer_truncated, "Links", "social", response.element);
                 var response_links = NDSchat.defineResponseLinks("nds-show-more-", "link", moreInfoTxt);
                 object_response.links = response_links;
                 NDSchat.addQuestion(object_response);
                 last_questions.push(answer_truncated);
 
                 // Insert Text
                 var dadDiv = document.getElementById("nds-chat-container");
                 var chat_extra_div = dadDiv.appendChild(document.createElement("div"));
                 chat_extra_div.classList.add("nds-chat-conversation");
                 chat_extra_div.classList.add("nds-chat-sheet");
                 chat_extra_div.classList.add("nds-chat-sheet-active");
                 chat_extra_div.classList.add("nds-chat-active");
                 chat_extra_div.setAttribute("style", "display: none;");
                 chat_extra_div.id = "nds-chat-extra-" + count;
 
                 var title_div = chat_extra_div.appendChild(document.createElement("div"));
                 title_div.classList.add("nds-chat-conversation-title");
                 var title_h4 = title_div.appendChild(document.createElement("h4"));
                 title_h4.innerHTML = config.project;
 
                 var back_button_div = chat_extra_div.appendChild(document.createElement("div"));
                 back_button_div.classList.add("return-button");
                 var back_button = back_button_div.appendChild(document.createElement("button"));
                 back_button.id = "nds-chat-return";
                 back_button.classList.add("btn");
                 back_button.classList.add("btn-default");
                 back_button.innerHTML = getBackTxt;
                 back_button.onclick = function () {
                     document.getElementById('nds-chat-conversation').style.display = 'block';
                     chat_extra_div.style.display = 'none';
                     if (!session_ended) {
                         nds_utils.minAjax({
                             url: config.url + config.auth_endpoint + "sessionExpired",
                             type: "GET",
                             headers: {
                                 "Content-type": "application/json",
                                 "X-ACCOUNT-ID": NDSchat.state.accountID,
                                 "X-APP-TOKEN": NDSchat.state.token,
                                 "X-API-KEY": config.token_apigee
                             },
                             json: true,
                             success: function (t) {
                                 t = JSON.parse(t);
 
                                 if (t.response === 'Active') {
                                     NDSchat.initTimers();
                                 } else {
                                     if (questionList[questionList.length - 1].label !== "<div>Muchas gracias por contactarnos. ¡Vuelve pronto!</div>") {
                                         session_ended = true;
                                         if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                             nds_utils.deleteCookie("sessionID");
                                         }
                                         if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                             nds_utils.deleteCookie("preserve_chat");
                                         }
                                         var object_response = NDSchat.defineResponseObject(
                                             form.timerMessages[2],
                                             "Question",
                                             "endMessage",
                                             "Question"
                                         );
                                         NDSchat.addQuestion(object_response);
                                         NDSchat.reconnectButton();
                                     }
                                 }
                             },
                         });
                     }
                 };
 
                 var chat_sheet_div = chat_extra_div.appendChild(document.createElement("div"));
                 chat_sheet_div.classList.add("nds-chat-sheet-content");
 
                 var chat_sheet_content_div = chat_sheet_div.appendChild(document.createElement("div"));
                 chat_sheet_content_div.classList.add("nds-chat-sheet-content-container");
 
                 var newDiv = chat_sheet_content_div.appendChild(document.createElement("div"));
                 newDiv.classList.add("nds-chat-sheet-content-on-ofy");
                 newDiv.classList.add("mg-top-return");
                 newDiv.id = "nds-chat-extra-info-" + count;
                 newDiv.classList.add("nds-chat-extra-info");
                 newDiv.innerHTML = response.response;
                 count++;
 
                 nds_utils.removeClass(elements.chatComposer, "hidden");
                 // Set button
                 NDSchat.showMore();
             },
             /**
              * Sets the functionality of the new generated screen
              */
             showMore: function () {
                 if (!session_ended) {
                     NDSchat.searchLinkClasses();
                 }
                 var showMoreBtn = document.getElementsByClassName("nds-show-more2");
 
                 // Return to chat
                 for (var i = 0; i < showMoreBtn.length; i++) {
                     showMoreBtn[i].classList.add('nds-show-more');
                     showMoreBtn[i].onclick = function (t) {
                         in_more_info = true;
                         var button_id = (t.target.id).split("-");
                         document.getElementById('nds-chat-conversation').style.display = 'none';
                         document.getElementById('nds-chat-extra-' + (button_id[button_id.length - 1]).toString()).style.display = 'block';
                         current_clicked = "nds-chat-extra-" + button_id[button_id.length - 1].toString();
                         clearTimeout(not_input_timeout);
                         clearTimeout(not_input_timeout2);
                         clearTimeout(chat_closed_timeout);
                     };
                 }
 
                 var returnButtons = document.getElementsByClassName("return-button");
                 for (var j = 0; j < returnButtons.length; j++) {
                     returnButtons[j].onclick = function () {
                         in_more_info = false;
                         document.getElementById(current_clicked).style.display = 'none';
                         document.getElementById('nds-chat-conversation').style.display = 'block';
                         if (!session_ended) {
                             nds_utils.minAjax({
                                 url: config.url + config.auth_endpoint + "sessionExpired",
                                 type: "GET",
                                 headers: {
                                     "Content-type": "application/json",
                                     "X-ACCOUNT-ID": NDSchat.state.accountID,
                                     "X-APP-TOKEN": NDSchat.state.token,
                                     "X-API-KEY": config.token_apigee
                                 },
                                 json: true,
                                 success: function (tt) {
                                     tt = JSON.parse(tt);
                                     if (tt.response === 'Active') {
                                         NDSchat.initTimers();
                                         var r = document.querySelector(".nds-chat-sheet-content");
                                         nds_utils.scrollTo(r, r.scrollHeight, 400);
                                     } else {
                                         if (questionList[questionList.length - 1].label !== "<div>Muchas gracias por contactarnos. ¡Vuelve pronto!</div>") {
                                             session_ended = true;
                                             if (nds_utils.getCookie("sessionID") !== null && nds_utils.getCookie("sessionID") !== undefined) {
                                                 nds_utils.deleteCookie("sessionID");
                                             }
                                             if (nds_utils.getCookie("preserve_chat") !== null && nds_utils.getCookie("preserve_chat") !== undefined) {
                                                 nds_utils.deleteCookie("preserve_chat");
                                             }
                                             var object_response = NDSchat.defineResponseObject(
                                                 form.timerMessages[2],
                                                 "Question",
                                                 "endMessage",
                                                 "Question"
                                             );
                                             NDSchat.addQuestion(object_response);
                                             NDSchat.reconnectButton();
                                         }
                                     }
                                 },
                                 error: function (x, r, s) {
                                     NDSchat.removeBubbles();
                                     NDSchat.handleError(s);
                                 }
                             });
                         }
                     };
                 }
             },
             /**
              * Looks for link functionality that needs to be filled out (popups, faq, demos, etc...)
              */
             searchLinkClasses: function (nid = null) {
                 var i = 0;
                 var removable;
                 var dropdowns_market;
                 var dropdowns_atm;
                 var text;
 
                 // Look for form inputs;
                 _.toArray(document.querySelectorAll(".nds-input-text")).forEach(function (element) {
                     element.addEventListener('focusin', function () {
                         var form_inputs = document.getElementsByName(element.id);
 
                         if (form_inputs) {
                             if (!nds_utils.hasClass(form_inputs[0], "-active")) {
                                 nds_utils.addClass(form_inputs[0], "-active");
                             }
                         }
                     });
 
                     element.addEventListener('focusout', function () {
                         if (element.value === "") {
                             var form_inputs = document.getElementsByName(element.id);
 
                             if (form_inputs) {
                                 nds_utils.removeClass(form_inputs[0], "-active");
                             }
                         }
                     });
                 });
 
                 _.toArray(document.querySelectorAll(".-special-form")).forEach(function (element) {
                     element.onclick = function () {
                         var form_input = document.getElementById(element.getAttribute("name"));
                         form_input.focus();
                     };
                 });
 
                 // Look for faq
                 if (document.querySelector('.faq') != null) {
                     // Get hrefs
                     question_faq = document.querySelector('.faq').getElementsByTagName('a');
                     removable = document.querySelector('.faq');
                     removable.removeAttribute('class');
                     removable.className = 'faq2';
                     for (i = 0; i < question_faq.length; i++) {
                         if (question_faq[i].getAttribute('data-value') !== null) {
                             question_faq[i].onclick = function (t) {
                                 if (session_ended) {
                                     clearTimeout(not_input_timeout);
                                     clearTimeout(not_input_timeout2);
                                     clearTimeout(chat_closed_timeout);
                                 }
                                 in_more_info = false;
 
                                 text = t.target.text;
 
                                 if (text != "aquí") {
                                     NDSchat.addMessage(text, new Date(), client_name);
                                 }
                                 NDSchat.getContextNode(t.target.getAttribute("data-value"), true);
                             };
                         }
                     }
                 }
 
                 if (document.querySelector('.a-popup') != null) {
                     var question_demo = document.getElementsByClassName('a-popup');
                     for (i = 0; i < question_demo.length; i++) {
                         if (question_demo[i].getAttribute('href') !== null) {
                             question_demo[i].setAttribute("target", "_blank");
                             question_demo[i].onclick = function () {
                                 if (session_ended) {
                                     clearTimeout(not_input_timeout);
                                     clearTimeout(not_input_timeout2);
                                     clearTimeout(chat_closed_timeout);
                                 }
                             };
                         }
                     }
                 }
 
                 if (document.querySelector(".dropdown-issuer") != null) {
                     dropdowns_market = document.getElementsByClassName("dropdown-issuer");
                     for (i = 0; i < dropdowns_market.length; i++) {
                         dropdowns_market[i].onclick = function (target) {
                             if (nds_utils.hasClass(target.path[2], "-open-issuer")) {
                                 target.path[2].classList.remove("-open-issuer");
                             }
                             else {
                                 NDSchat.restartIssuersValue(function () { });
                                 target.path[2].classList.remove("-open-issuer");
                                 target.path[2].classList.add("-open-issuer");
                             }
                         };
                     }
                 }
 
                 if (document.querySelector(".dropdown-title") != null) {
                     dropdowns_market = document.getElementsByClassName("dropdown-title");
                     for (i = 0; i < dropdowns_market.length; i++) {
                         dropdowns_market[i].onclick = function (target) {
                             if (nds_utils.hasClass(target.path[2], "-open")) {
                                 target.path[2].classList.remove("-open");
                             }
                             else {
                                 NDSchat.restartIssuers(function () { });
                                 target.path[2].classList.remove("-open");
                                 target.path[2].classList.add("-open");
                             }
                         };
                     }
                 }
 
                 if (document.querySelector(".atm-dropdown") != null) {
                     dropdowns_atm = document.getElementsByClassName("atm-dropdown");
 
                     for (i = 0; i < dropdowns_atm.length; i++) {
                         dropdowns_atm[i].onclick = function (target) {
                             if (nds_utils.hasClass(target.path[3], "-accordion-open")) {
                                 NDSchat.restartMaps(function () { });
                             }
                             else {
                                 NDSchat.restartMaps(function () {
                                     target.path[3].classList.add("-accordion-open");
                                     target.path[3].children[0].firstElementChild.src = target.path[3].children[0].firstElementChild.src.replace("size=200x200", "size=300x80");
                                 });
                             }
                         };
                     }
                 }
 
                 if (document.querySelector(".market-dropdown") != null) {
                     dropdowns_atm = document.getElementsByClassName("atm-dropdown");
 
                     for (i = 0; i < dropdowns_atm.length; i++) {
                         dropdowns_atm[i].onclick = function (target) {
                             if (nds_utils.hasClass(target.path[3], "-accordion-open")) {
                                 NDSchat.restartMaps(function () { });
                             }
                             else {
                                 NDSchat.restartMaps(function () {
                                     target.path[3].classList.add("-accordion-open");
                                     // target.path[3].children[0].firstElementChild.src = target.path[3].children[0].firstElementChild.src.replace("size=200x200", "size=300x80");
                                 });
                             }
                         };
                     }
                 }
 
                 if (document.querySelectorAll('[class^=a-form]') != null) {
                     var question_form = document.querySelectorAll('[class^=a-form]');
                     for (i = 0; i < question_form.length; i++) {
                         question_form[i].onclick = function (t) {
                             var form_array = t.srcElement.classList[0].split("-");
                             var form_name = form_array[form_array.length - 1];
 
                             if (session_ended) {
                                 clearTimeout(not_input_timeout);
                                 clearTimeout(not_input_timeout2);
                                 clearTimeout(chat_closed_timeout);
                             }
 
                             if (undefined !== document.getElementById(current_clicked) &&
                                 null !== document.getElementById(current_clicked)) {
                                 document.getElementById("nds-chat-conversation").style.display = "block";
                                 document.getElementById(current_clicked).style.display = "none";
                             }
 
                             in_more_session = false;
                             var object_response = NDSchat.defineResponseObject("", "Form", form_name, "Form");
                             NDSchat.addQuestion(object_response);
                         };
                     }
                 }
 
                 if (document.getElementsByTagName("a") !== null) {
                     var anchors = document.getElementsByTagName("a");
                     for (i = 0; i < anchors.length; i++) {
                         if (anchors[i].getAttribute('href') !== null && anchors[i].onclick === null && anchors[i].getAttribute("data-value") !== null) {
                             anchors[i].onclick = function (t) {
                                 if (t.target.getAttribute("data-value") !== "agente") {
                                     if (session_ended) {
                                         clearTimeout(not_input_timeout);
                                         clearTimeout(not_input_timeout2);
                                         clearTimeout(chat_closed_timeout);
                                     }
                                     in_more_info = false;
                                     text = t.target.text;
 
                                     if (text != "aquí") {
                                         NDSchat.addMessage(text, new Date(), client_name);
                                     }
 
                                     NDSchat.getContextNode(t.target.getAttribute("data-value"), true);
                                 }
                             };
                         }
                     }
                 }
 
                 if (document.querySelectorAll(".nds-video") !== null) {
                     var question_video = document.querySelectorAll(".nds-video");
                     for (i = 0; i < question_video.length; i++) {
                         question_video[i].onclick = function (t) {
                             var url = document.domain !== "" ? location.protocol + "//" + document.domain : "*";
 
                             var video_url = "";
                             if (t.target.localName == "a") video_url = t.target.href;
                             else video_url = t.target.parentElement.href;
 
                             var btn_name = '#triggerVideoModal' + t.target.innerHTML;
                             var frame = '<iframe src="' + video_url + '" width="90%"></iframe>';
                             parent.postMessage([btn_name, frame.replace("{}", "96%")], url);
                             return false;
                         };
                     }
                 }
             },
             restartMaps: function (callback) {
                 var maps_atm = document.getElementsByClassName("atm-location");
 
                 for (var count = 0; count < maps_atm.length; count++) {
                     maps_atm[count].classList.remove("-accordion-open");
 
                     if (maps_atm[count].children.length > 0 &&
                         maps_atm[count].children[0].children.length > 0) {
                         maps_atm[count].children[0].children[0].src = maps_atm[count].children[0].children[0].src.replace("size=300x80", "size=200x200");
                     }
                 }
 
                 callback();
             },
             restartIssuersValue: function (callback) {
                 var issuers = document.getElementsByClassName("dropdown-issuer");
 
                 for (var count = 0; count < issuers.length; count++) {
                     if (nds_utils.hasClass(issuers[count], "-open-issuer")) {
                         issuers[count].classList.remove("-open-issuer");
                     }
                 }
 
                 callback();
             },
             restartIssuers: function (callback) {
                 var issuers = document.getElementsByClassName("-open");
 
                 for (var count = 0; count < issuers.length; count++) {
                     issuers[count].classList.remove("-open");
                 }
 
                 callback();
             },
             // TODO: Check if functions is still needed or removeButtons it's a better option.
             disableButtons: function () {
                 var i = 0;
                 var anchors;
 
                 if (document.querySelector('.faq') != null) {
                     // Get hrefs
                     question_faq = document.querySelector('.faq').getElementsByTagName('a');
                     var removable = document.querySelector('.faq');
                     removable.removeAttribute('class');
                     removable.className = 'faq2';
                     for (i = 0; i < question_faq.length; i++) {
                         if (question_faq[i].getAttribute('data-value') !== null) {
                             question_faq[i].onclick = null;
                         }
                     }
                 }
 
                 if (document.getElementsByTagName("a") !== null) {
                     anchors = document.getElementsByTagName("a");
                     for (i = 0; i < anchors.length; i++) {
                         if (anchors[i].getAttribute("href") !== null && anchors[i].onclick !== null && anchors[i].getAttribute("data-value") !== null) {
                             anchors[i].onclick = null;
                         }
                     }
                 }
 
                 if (document.getElementsByClassName("nds-chat-comment-option-wrap") !== null) {
                     anchors = document.getElementsByClassName("nds-chat-comment-option-wrap");
                     for (i = 0; i < anchors.length; i++) {
                         if (anchors[i].onclick !== null && (anchors[i].id !== null || anchors[i] !== undefined)) {
                             anchors[i].onclick = null;
                         }
                     }
                 }
 
                 _.toArray(document.querySelectorAll(".sel-box-options")).forEach(function (t) {
                     t.onclick = null;
                 });
 
                 _.toArray(document.querySelectorAll(".nds-chat-comment-option")).forEach(function (t) {
                     t.onclick = null;
                 });
                 clearTimeout(chat_closed_timeout);
             },
             /**
              * Masks the information before sending it into Watson or transcript
              * @param {string} input - The input text from the user
              */
             maskMe: function (input) {
                 // TODO: Define regex that will be masked
                 var regex = /[0-9]/g;
                 input = input.replace(regex, '•');
                 return input;
             },
             /**
              * Masks the contracts
              */
             maskContract: function (input) {
                 var a = input.substring(0, input.length - 3);
                 var unmasked = input.substring(input.length - 3, input.length);
                 var output = "";
 
                 for (var i = 0; i < a.length; i++) {
                     output += "*";
                 }
 
                 MaskedContractsDict[output + unmasked] = input;
                 return output + unmasked;
             },
             /**
              * Parses the month for what u need
              */
             parseMonth: function (input, mode) {
                 var dict1 = {
                     "01": "Enero",
                     "02": "Febrero",
                     "03": "Marzo",
                     "04": "Abril",
                     "05": "Mayo",
                     "06": "Junio",
                     "07": "Julio",
                     "08": "Agosto",
                     "09": "Septiembre",
                     "10": "Octubre",
                     "11": "Noviembre",
                     "12": "Diciembre"
                 }
                 var dict2 = {
                     "Enero": "01",
                     "Febrero": "02",
                     "Marzo": "03",
                     "Abril": "04",
                     "Mayo": "05",
                     "Junio": "06",
                     "Julio": "07",
                     "Agosto": "08",
                     "Septiembre": "09",
                     "Octubre": "10",
                     "Noviembre": "11",
                     "Diciembre": "12"
                 }
                 var output;
                 if (mode === 1) {
                     output = dict1[input];
                 } else {
                     output = dict2[input];
                 }
                 return output;
             },
             /**
              * Create the "typing" bubbles before answering the question
              */
             addBubbles: function () {
                 var a = document.getElementById("nds-chat-message"),
                     n = "",
                     l = "";
                 n = "nds-chat-thinking-body";
                 t = '<div class="thinking-indicator"><span></span><span></span><span></span></div>';
 
                 var i = '<div class="nds-chat-comment-body-container"> <div class="lp_chat_arrow_border"></div><div class="lp_chat_arrow"></div>';
                 i += '<div class="nds-chat-comment-body ' + n + '">';
                 i += t;
 
                 var r = document.createElement("div");
                 nds_utils.addClass(r, "nds-chat-comment nds-chat-comment-by-nds-chat" + l);
                 r.innerHTML = i;
                 i = r.outerHTML;
 
                 var h = "nds-chat-conversation-part nds-chat-conversation-part-grouped-removable";
                 h += " fromBottomToUp";
 
                 var m = document.createElement("div");
                 m.className = h;
                 m.innerHTML = i;
 
                 var u = function () {
                     this.classList.remove("fromBottomToUp");
                     this.removeEventListener("animationend", u, false);
                 };
 
                 m.addEventListener("animationend", u, false);
                 a.appendChild(m);
                 a.scrollTop = a.scrollHeight;
 
                 r = document.querySelector(".nds-chat-sheet-content");
                 nds_utils.scrollTo(r, r.scrollHeight, 400);
                 need_thinking = false;
             },
             /**
              * Removes created "typing" bubbles after answering the question
              */
             removeBubbles: function () {
                 if (document.getElementsByClassName("nds-chat-thinking-body")[0] !== undefined) {
                     nds_utils.removeClass(document.getElementsByClassName("nds-chat-thinking-body")[0], "nds-chat-thinking-body");
                 }
                 if (document.getElementsByClassName("thinking-indicator")[0] !== undefined) {
                     document.getElementsByClassName("thinking-indicator")[0].parentElement.removeChild(document.getElementsByClassName("thinking-indicator")[0]);
                 }
                 if (document.getElementsByClassName("nds-chat-conversation-part nds-chat-conversation-part-grouped-removable")[0] !== undefined) {
                     document.getElementsByClassName("nds-chat-conversation-part nds-chat-conversation-part-grouped-removable")[0].parentElement.removeChild(document.getElementsByClassName("nds-chat-conversation-part nds-chat-conversation-part-grouped-removable")[0]);
                 }
             },
             /**
              * Checks if the Watson array of options is in fact an array or convert a string into array
              * @param {(Array|string)} options - The options returned by Watson
              * @param {Object} question - The question and its properties
              */
             checkArray: function (options, question) {
                 if (options.constructor === Array) {
                     object_response = NDSchat.defineResponseObject(question.response, "Single Choice", "option", question.element);
                     object_response.options = options;
                     object_response.buttons = question.buttons;
                     object_response.context = question.context;
                 } else if (options.constructor === String) {
                     object_response = NDSchat.defineResponseObject(question.response, "Single Choice", "option", question.element);
                     opciones = options.replace(/'/g, '"');
                     opciones = JSON.parse(opciones);
                     object_response.options = opciones;
                 }
                 NDSchat.addQuestion(object_response);
                 NDSchat.searchLinkClasses();
                 last_questions.push(question.response);
             },
             /**
              * Checks if the response is empty
              * @param {string} response - The response that it's going to be processed
              */
             emptyParagraph: function (response) {
                 return response.replace(/(\s<div>\s<\/div>\s<p>\s<\/p>\s|\s<h2>\s<\/h2>\s)/g, "");
             },
             /**
              * This function connects into the API to send the mail
              * @param {Object} doc - The parameters for the email to send
              */
             sendMail: function (doc) {
                 nds_utils.minAjax({
                     url: config.url + config.api_version + 'sendMail',
                     type: "POST",
                     data: doc,
                     headers: {
                         "Content-type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     },
                     json: true,
                     success: function (t) {
                         var object_response = NDSchat.defineResponseObject(widgetTexts.mail_text, "Question", "text", "Question");
                         NDSchat.addQuestion(object_response);
                         object_response = NDSchat.defineResponseObject(widgetTexts.something_more, "Yes No", "timers", "Question");
                         object_response.options = ["No", "Sí"];
                         NDSchat.addQuestion(object_response);
                     }
                 });
             },
             /**
              * This funcitons change a string to title case, for example the client name.
              * @param {string} str - String we want change to title case
              */
             titleCase: function (str) {
                 try {
                     // Step 1. Lowercase the string
                     str = str.toLowerCase()
                         // Step 2. Split the string into an array of strings
                         .split(' ')
                         // Step 3. Map over the array
                         .map(function (word) {
                             return word.replace(word[0], word[0].toUpperCase());
                         });
                 } catch (error) { }
                 // Step 4. Return the output
                 return str.join(' ');
             },
             /**
              * This function validate different types of data and returns true or false.
              * @param {string} text_type - The type of text we want to check(email, phone, curp, nss or rfc)
              * @param {string} value - The value(string) we want to validate
              * @return {bool} - If the validation has passed
              */
             validateData: function (text_type, value) {
                 switch (text_type) {
                     case "email":
                         value = value.toLowerCase();
                         var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                         return email_regex.test(value);
                     case "código postal":
                         var cp_regex_all_text = /\d{5}/g,
                             cp_regex = /^\d{5}$/,
                             tmp_cp_validate = value.match(cp_regex_all_text);
 
                         if (tmp_cp_validate) cp_validate = tmp_cp_validate[0].match(cp_regex);
                         else return false;
 
                         return true;
                     case "phone":
                         value = value.toLowerCase();
                         var phone_regex = /^\d{10}$/;
                         return phone_regex.test(value);
                     default:
                         return true;
                 }
             },
             /**
              * Removes accents from strings
              * @param {string} word - The string with accents
              * @return {string} - The string without accents
              */
             removeAccents: function (word) {
                 word = word.replace("Á", "A");
                 word = word.replace("É", "E");
                 word = word.replace("Í", "I");
                 word = word.replace("Ó", "O");
                 word = word.replace("Ú", "U");
                 word = word.replace("Ü", "U");
                 word = word.replace("á", "a");
                 word = word.replace("é", "e");
                 word = word.replace("í", "i");
                 word = word.replace("ó", "o");
                 word = word.replace("ú", "u");
                 word = word.replace("ü", "u");
                 return word;
             },
             /**
              * Sends a keep alive to the API token for the flux
              */
             keepAlive: function () {
                 nds_utils.minAjax({
                     url: config.url + config.api_version + 'keepAlive',
                     type: 'GET',
                     headers: {
                         "Content-type": "application/json",
                         "X-ACCOUNT-ID": NDSchat.state.accountID,
                         "X-APP-TOKEN": NDSchat.state.token,
                         "X-API-KEY": config.token_apigee
                     }
                 });
             }
         };
 
         NDSchat.init();
     },
     /**
      * [1] - Loads nds_utils functions to the page
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      */
     function (module_object, exports) {
         var nds_utils = {
             /**
              * Reads the information of the current browser
              * @return {boolean} - The value if the browser is mobile or desktop
              */
             mobilecheck: function () {
                 var e, t = false;
                 return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = true), t;
             },
             /**
              * Check if element has a class
              * @param {Object} element - The HTML element that will check for a class
              * @param {string} css_class - The name of class that you want to check
              * @return {boolean} - If the class is present on the element
              */
             hasClass: function (element, css_class) {
                 return new RegExp("(^|\\s)" + css_class + "(\\s|$)").test(element.className);
             },
             /**
              * Adds the class to the element
              * @param {Object} element - The HTML element that you want to add a class
              * @param {string} css_class - The name of the class that you want to add
              */
             addClass: function (element, css_class) {
                 if (!this.hasClass(element, css_class)) {
                     element.className += " " + css_class;
                 }
             },
             /**
              * Removes the class from the element
              * @param {Object} element - The HTML element that you want to remove a class
              * @param {string} css_class - The name of the class that will be removed
              */
             removeClass: function (element, css_class) {
                 if (this.hasClass(element, css_class)) {
                     var n = new RegExp("(\\s|^)" + css_class + "(\\s|$)");
                     element.className = element.className.replace(n, "");
                 }
             },
             /**
              * Adds or Removes the class depending on the state
              * @param {Object} element - The HTML element that you want to remove a class
              * @param {string} css_class - The name of the class that will be removed
              */
             toggleClass: function (element, css_class) {
                 this.hasClass(element, css_class) ? this.removeClass(element, css_class) : this.addClass(element, css_class);
             },
             /**
              * Generate the configuration object for this chat
              * @param {Object} user_values - The values of the configuration object
              * @param {Object} css_class - The last values of the configuration object
              */
             mergeConfig: function (user_values, last_object) {
                 for (var value in last_object) try {
                     if (last_object[value].constructor == Object)
                         user_values[value] = this.mergeConfig(user_values[value], last_object[value]);
                     else
                         user_values[value] = last_object[value];
                 } catch (a) {
                     user_values[value] = last_object[value];
                 }
                 return user_values;
             },
             /**
              * It creates a new instance for make HTTP requests
              * @return {(XMLHttpRequest|ActiveXObject)} - An instance of http hook for requests
              */
             initXMLhttp: function () {
                 return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
             },
             /**
              * Sends the request via AJAX in a minified form
              * @param {Object} request - The request object
              * @param {string} request.url - The request url to target
              * @param {string} request.type - The request type (GET, POST, PUT)
              * @param {function} request.success - The callback function that stablish the connection is done
              * @param {Object} [request.headers] - The headers to append into the request
              * @param {Object} [request.data] - The object with the data to be send
              * @param {boolean} [request.json] - If the data type is json
              * @param {function} [request.error] - The callback function if there's an error with the request
              * @param {boolean} [request.debugLog] - If there's a need to debug the request
              */
             minAjax: function (request) {
                 var debug = request.debugLog;
                 if (request.url) {
                     if (request.type) {
                         if (!request.method) {
                             request.method = true;
                         }
                         var xmlHttpInstance = this.initXMLhttp();
                         xmlHttpInstance.withCredentials = true;
                         xmlHttpInstance.onreadystatechange = function () {
                             if (xmlHttpInstance.readyState !== 4) {
                                 if (debug) {
                                     console.error("FailureResponse --\x3e State: " + xmlHttpInstance.readyState + "Status: " + xmlHttpInstance.status);
                                 }
                             } else {
                                 if (xmlHttpInstance.status === 0) {
                                     if (request.error) {
                                         request.error(xmlHttpInstance.responseText, xmlHttpInstance.readyState, xmlHttpInstance.status);
                                     }
                                     if (debug) {
                                         console.error("Error Response");
                                         console.error("Response Data: " + xmlHttpInstance.responseText);
                                     }
                                 } else if (xmlHttpInstance.status >= 200 && xmlHttpInstance.status <= 299) {
                                     if (request.success) {
                                         request.success(xmlHttpInstance.responseText, xmlHttpInstance.readyState);
                                     }
                                     if (debug) {
                                         console.info("Success Response");
                                         console.info("Response Data: " + xmlHttpInstance.responseText);
                                     }
                                 } else if (xmlHttpInstance.status >= 304 && xmlHttpInstance.status <= 399) {
                                     if (request.success) {
                                         request.success(xmlHttpInstance.responseText, xmlHttpInstance.readyState);
                                     }
                                     if (debug) {
                                         console.info("Success Response");
                                         console.info("Response Data: " + xmlHttpInstance.responseText);
                                     }
                                 } else if (xmlHttpInstance.status >= 400 && xmlHttpInstance.status <= 499) {
                                     if (request.error) {
                                         request.error(xmlHttpInstance.responseText, xmlHttpInstance.readyState, xmlHttpInstance.status);
                                     }
                                     if (debug) {
                                         console.error("Error Response");
                                         console.error("Response Data: " + xmlHttpInstance.responseText);
                                     }
                                 } else if (xmlHttpInstance.status >= 500 && xmlHttpInstance.status <= 599) {
                                     if (request.error) {
                                         request.error(xmlHttpInstance.responseText, xmlHttpInstance.readyState, xmlHttpInstance.status);
                                     }
                                     if (debug) {
                                         console.error("Error Response");
                                         console.error("Response Data: " + xmlHttpInstance.responseText);
                                     }
                                 }
                             }
                         };
 
                         var new_data = [],
                             data = request.data;
 
                         if (request.json) {
                             new_data = JSON.stringify(data);
                         } else {
                             if (typeof data === "string") {
                                 var splited_data = String.prototype.split.call(data, "&");
                                 for (var r = 0; r < splited_data.length; r++) {
                                     var variable = splited_data[r].split("=");
                                     new_data.push(encodeURIComponent(variable[0] + "=" + encodeURIComponent(variable[1])));
                                 }
                             } else if (typeof data === "object" && !(data instanceof String && data instanceof FormData)) {
                                 for (var key in data) {
                                     var key_type = data[key];
                                     if (Object.prototype.toString.call(key_type) === "[object Array]") {
                                         var key_length = key_type.length;
                                         for (var s = 0; s < key_length; s++) {
                                             new_data.push(encodeURIComponent(key) + "[" + s + "]=" + encodeURIComponent(JSON.stringify(key_type[s])));
                                         }
                                     } else if (Object.prototype.toString.call(key_type) === "[object Object]") {
                                         for (var inner_key in key_type) {
                                             new_data.push(key + "[" + inner_key + "]=" + encodeURIComponent(key_type[inner_key]));
                                         }
                                     } else {
                                         new_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(key_type));
                                     }
                                 }
                             }
                             new_data = new_data.join("&");
                         }
 
                         var header;
                         if (request.type === "GET") {
                             if (request.headers !== undefined || request.headers !== null) {
                                 for (header in xmlHttpInstance.open("GET", request.url, request.method), request.headers) {
                                     xmlHttpInstance.setRequestHeader(header, request.headers[header]);
                                 }
                             } else {
                                 xmlHttpInstance.open("GET", request.url, request.method);
                             }
 
                             if (request.json) {
                                 xmlHttpInstance.setRequestHeader("Content-Type", "application/json");
                             } else {
                                 xmlHttpInstance.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                             }
 
                             xmlHttpInstance.send();
                             if (debug) {
                                 console.log("GET fired at:" + request.url + "?" + new_data);
                             }
                         } else if (request.type === "POST") {
                             if (request.headers !== undefined || request.headers !== null) {
                                 for (header in xmlHttpInstance.open("POST", request.url, request.method), request.headers) {
                                     xmlHttpInstance.setRequestHeader(header, request.headers[header]);
                                 }
                             } else {
                                 xmlHttpInstance.open("POST", request.url, request.method);
                             }
                             xmlHttpInstance.send(new_data);
                             if (debug) {
                                 console.log("POST fired at:" + request.url + " || Data:" + new_data);
                             }
                         } else if (request.type === "PUT") {
                             if (request.headers !== undefined || request.headers !== null) {
                                 for (header in xmlHttpInstance.open("PUT", request.url, request.method), request.headers) {
                                     xmlHttpInstance.setRequestHeader(header, request.headers[header]);
                                 }
                             } else {
                                 xmlHttpInstance.open("PUT", request.url, request.method);
                             }
                             xmlHttpInstance.send(new_data);
                             if (debug) {
                                 console.log("PUT fired at:" + request.url + " || Data:" + new_data);
                             }
                         }
                     } else {
                         if (debug) {
                             console.log("No Default type (GET/POST/PUT) given!");
                         }
                     }
                 } else {
                     if (debug) {
                         console.log("No Url!");
                     }
                 }
             },
             /**
              * Returns the desire month in the format needed
              * @param {int} current_month - The current month
              * @param {int} months_to_decrease  - The months to decrease
              */
             getTargetMonth: function (current_month, months_to_decrease) {
                 var target_month = 0;
                 if (current_month - months_to_decrease < 1) {
                     var dif = current_month - months_to_decrease;
                     target_month = 12 - dif;
                     return target_month.toString().length == 1 ? "0" + target_month : target_month;
                 }
                 target_month = current_month - months_to_decrease;
                 return target_month.toString().length == 1 ? "0" + target_month : target_month;
             },
             /**
              * Returns a Cookie in the browser
              * @param {string} cookie_name - The name of the cookie you're lokking up to
              */
             getCookie: function (cookie_name) {
                 var t, n, a, o = document.cookie.split(";");
                 for (t = 0; t < o.length; t++)
                     if (n = o[t].substr(0, o[t].indexOf("=")), a = o[t].substr(o[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) == cookie_name) return unescape(a);
             },
             /**
              * Returns a Cookie in the browser
              * @param {string} cookie_name - The name of the cookie you're saving
              * @param {string} cookie_value - The value of the cookie you're saving
              * @param {number} cookie_expires - The time to live of the cookie
              */
             setCookie: function (cookie_name, cookie_value, cookie_expires) {
                 var current_date = new Date();
                 cookie_expires = null == cookie_expires ? 180 : cookie_expires;
                 current_date.setDate(current_date.getDate() + cookie_expires / 24 / 60);
                 var cookie = escape(cookie_value) + "; path=/";
                 document.cookie = cookie_name + "=" + cookie;
             },
             /**
              * Deletes a Cookie in the browser
              * @param {string} cookie_name - The name of the cookie you're saving
              */
             deleteCookie: function (cookie_name) {
                 document.cookie = cookie_name + "=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
             },
             scrollTo: function (e, t, n) {
                 var a = this,
                     o = e.scrollTop,
                     s = t - o,
                     i = function (t) {
                         t += 20;
                         var c = a.easeInOut(t, o, s, n);
                         e.scrollTop = c, t < n && setTimeout(function () {
                             i(t);
                         }, 20);
                     };
                 i(0);
             },
             easeInOut: function (e, t, n, a) {
                 return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * ((e -= 1) * (e - 2) - 1) + t;
             },
             /**
              * Returns the current Date as string without the TZ info
              */
             currentDateStr: function () {
                 return (new Date()).toISOString().substring(0, 19);
             },
             /**
              * Returns the string of the time elapsed since the message is shown
              * @param {string} time - The initial time of display
              */
             timeSince: function (time, mText, jNowTxt) {
                 var t = Math.floor((new Date() - time) / 1e3),
                     n = Math.floor(t / 31536e3);
                 var msjReciente = n > 1 ? n + " años antes" : (n = Math.floor(t / 2592e3)) > 1 ? n + " meses antes" : (n = Math.floor(t / 86400)) > 1 ? n + " días antes" : (n = Math.floor(t / 3600)) > 1 ? n + "h antes" : (n = Math.floor(t / 60)) >= 2 ? n + " " + mText : 1 == (n = Math.floor(t / 60)) ? n + " " + mText.replace("s", "") : jNowTxt;
                 return msjReciente;
 
             },
             /* Encryption using AES */
             AESCtr: function (e, t, n) {
                 if (e = e.toString(), 128 != n && 192 != n && 256 != n) return "";
                 e = e.encodeUTF8();
                 for (var a = n / 8, o = new Array(a), s = 0; s < a; s++) o[s] = isNaN(t.charCodeAt(s)) ? 0 : t.charCodeAt(s);
                 var i = this.Cipher(o, this.KeyExpansion(o));
                 i = i.concat(i.slice(0, a - 16));
                 var c = new Array(16),
                     r = (new Date()).getTime(),
                     A = Math.floor(r / 1e3),
                     d = r % 1e3;
                 for (s = 0; s < 4; s++) c[s] = A >>> 8 * s & 255;
                 for (s = 0; s < 4; s++) c[s + 4] = 255 & d;
                 var l = "";
                 for (s = 0; s < 8; s++) l += String.fromCharCode(c[s]);
                 for (var h = this.KeyExpansion(i), u = Math.ceil(e.length / 16), m = new Array(u), p = 0; p < u; p++) {
                     for (var g = 0; g < 4; g++) c[15 - g] = p >>> 8 * g & 255;
                     for (g = 0; g < 4; g++) c[15 - g - 4] = p / 4294967296 >>> 8 * g;
                     var f = this.Cipher(c, h),
                         b = p < u - 1 ? 16 : (e.length - 1) % 16 + 1,
                         v = new Array(b);
                     for (s = 0; s < b; s++) v[s] = f[s] ^ e.charCodeAt(16 * p + s), v[s] = String.fromCharCode(v[s]);
                     m[p] = v.join("");
                 }
                 return (l + m.join("")).encodeBase64();
             },
             Cipher: function (e, t) {
                 for (var n = t.length / 4 - 1, a = [
                     [],
                     [],
                     [],
                     []
                 ], o = 0; o < 16; o++) a[o % 4][Math.floor(o / 4)] = e[o];
                 a = this.AddRoundKey(a, t, 0, 4);
                 for (var s = 1; s < n; s++) a = this.SubBytes(a, 4), a = this.ShiftRows(a, 4), a = this.MixColumns(a, 4), a = this.AddRoundKey(a, t, s, 4);
                 a = this.SubBytes(a, 4), a = this.ShiftRows(a, 4), a = this.AddRoundKey(a, t, n, 4);
                 var i = new Array(16);
                 for (o = 0; o < 16; o++) i[o] = a[o % 4][Math.floor(o / 4)];
                 return i;
             },
             SubBytes: function (e, t) {
                 for (var n = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], a = 0; a < 4; a++)
                     for (var o = 0; o < t; o++) e[a][o] = n[e[a][o]];
                 return e;
             },
             ShiftRows: function (e, t) {
                 for (var n = new Array(4), a = 1; a < 4; a++) {
                     for (var o = 0; o < 4; o++) n[o] = e[a][(o + a) % t];
                     for (o = 0; o < 4; o++) e[a][o] = n[o];
                 }
                 return e;
             },
             MixColumns: function (e, t) {
                 for (var n = 0; n < 4; n++) {
                     for (var a = new Array(4), o = new Array(4), s = 0; s < 4; s++) a[s] = e[s][n], o[s] = 128 & e[s][n] ? e[s][n] << 1 ^ 283 : e[s][n] << 1;
                     e[0][n] = o[0] ^ a[1] ^ o[1] ^ a[2] ^ a[3], e[1][n] = a[0] ^ o[1] ^ a[2] ^ o[2] ^ a[3], e[2][n] = a[0] ^ a[1] ^ o[2] ^ a[3] ^ o[3], e[3][n] = a[0] ^ o[0] ^ a[1] ^ a[2] ^ o[3];
                 }
                 return e;
             },
             AddRoundKey: function (e, t, n, a) {
                 for (var o = 0; o < 4; o++)
                     for (var s = 0; s < a; s++) e[o][s] ^= t[4 * n + s][o];
                 return e;
             },
             KeyExpansion: function (e) {
                 for (var t = [
                     [0, 0, 0, 0],
                     [1, 0, 0, 0],
                     [2, 0, 0, 0],
                     [4, 0, 0, 0],
                     [8, 0, 0, 0],
                     [16, 0, 0, 0],
                     [32, 0, 0, 0],
                     [64, 0, 0, 0],
                     [128, 0, 0, 0],
                     [27, 0, 0, 0],
                     [54, 0, 0, 0]
                 ], n = e.length / 4, a = n + 6, o = new Array(4 * (a + 1)), s = new Array(4), i = 0; i < n; i++) {
                     var c = [e[4 * i], e[4 * i + 1], e[4 * i + 2], e[4 * i + 3]];
                     o[i] = c;
                 }
                 for (i = n; i < 4 * (a + 1); i++) {
                     o[i] = new Array(4);
                     for (var r = 0; r < 4; r++) s[r] = o[i - 1][r];
                     if (i % n == 0)
                         for (s = this.SubWord(this.RotWord(s)), r = 0; r < 4; r++) s[r] ^= t[i / n][r];
                     else n > 6 && i % n == 4 && (s = this.SubWord(s));
                     for (r = 0; r < 4; r++) o[i][r] = o[i - n][r] ^ s[r];
                 }
                 return o;
             },
             SubWord: function (e) {
                 for (var t = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], n = 0; n < 4; n++) e[n] = t[e[n]];
                 return e;
             },
             RotWord: function (e) {
                 for (var t = e[0], n = 0; n < 3; n++) e[n] = e[n + 1];
                 return e[3] = t, e;
             }
             /* Final del cifrado por AES */
         };
         module_object.exports = nds_utils;
     },
     /**
      * [2] - Loads MinEmoji library to the page
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      */
     function (module_object, exports) {
         function n(e) {
             for (var t = "", n = 0; n < e.length; n++)
                 t += "\\u" + ("000" + e[n].charCodeAt(0).toString(16)).substr(-4);
             return t;
         }
 
         var a = {
             "ðŸ‘©â€ðŸ‘©â€ðŸ‘¦â€ðŸ‘¦": 964,
             "â™": 87
         },
             o = [];
 
         for (var s in a) o.push(n(s));
 
         var i = new RegExp("(" + o.join("|") + ")", "g");
 
         o = null, module_object.exports = function (e) {
             return e.replace(i, function (e, t) {
                 return '<span class="em emj' + a[t] + '"></span>';
             });
         };
     },
     /**
      * [3] - Loads styles and Fonts to the page
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      * @param {Object} loader - The function that will be called after this hook finishes
      */
     function (module_object, exports, loader) {
         // CSS file configuration a[3]
         (exports = module_object.exports = loader(4)()).push([module_object.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,600);", ""]);
         exports.push([module_object.id, "@import url(" + form.config.url + form.config.css_route + ")", ""]);
     },
     /**
      * [4] - Decode media into the iframe
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      */
     function (module_object, exports) {
         // Inserts the media into the iframe a[4]
         module_object.exports = function () {
             var e = [];
             return e.toString = function () {
                 for (var e = [], t = 0; t < this.length; t++) {
                     var n = this[t];
                     n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
                 }
                 return e.join("");
             }, e.i = function (t, n) {
                 "string" == typeof t && (t = [
                     [null, t, ""]
                 ]);
                 for (var a = {}, o = 0; o < this.length; o++) {
                     var s = this[o][0];
                     "number" == typeof s && (a[s] = true);
                 }
                 for (o = 0; o < t.length; o++) {
                     var i = t[o];
                     "number" == typeof i[0] && a[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i));
                 }
             }, e;
         };
     },
     /**
      * [5] - ...
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      * @param {Object} loader - The function that will be called after this hook finishes
      */
     function (module_object, exports, loader) {
         // Insertion of files into iframe a[7]
         function a(e, t) {
             for (var n = 0; n < e.length; n++) {
                 var a = e[n],
                     o = d[a.id];
                 var s;
 
                 if (o) {
                     o.refs++;
                     for (s = 0; s < o.parts.length; s++) o.parts[s](a.parts[s]);
                     for (; s < a.parts.length; s++) o.parts.push(r(a.parts[s], t));
                 } else {
                     var i = [];
                     for (s = 0; s < a.parts.length; s++) i.push(r(a.parts[s], t));
                     d[a.id] = {
                         id: a.id,
                         refs: 1,
                         parts: i
                     };
                 }
             }
         }
 
         function o(e) {
             for (var t = [], n = {}, a = 0; a < e.length; a++) {
                 var o = e[a],
                     s = o[0],
                     i = {
                         css: o[1],
                         media: o[2],
                         sourceMap: o[3]
                     };
                 n[s] ? n[s].parts.push(i) : t.push(n[s] = {
                     id: s,
                     parts: [i]
                 });
             }
             return t;
         }
 
         function s(e, t) {
             var n = u(),
                 a = g[g.length - 1];
             if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), g.push(t);
             else {
                 if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                 n.appendChild(t);
             }
         }
 
         function i(e) {
             e.parentNode.removeChild(e);
             var t = g.indexOf(e);
             t >= 0 && g.splice(t, 1);
         }
 
         function c(e) {
             var t = document.createElement("style");
             return t.type = "text/css", s(e, t), t;
         }
 
         function r(e, t) {
             var n, a, o, r, d;
             if (t.singleton) {
                 var l = p++;
                 n = m || (m = c(t)), a = A.bind(null, n, l, false), o = A.bind(null, n, l, true);
             } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (r = t, (d = document.createElement("link")).rel = "stylesheet", s(r, d), a = function (e, t) {
                 var n = t.css,
                     a = t.sourceMap;
                 a && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
                 var o = new Blob([n], {
                     type: "text/css"
                 }),
                     s = e.href;
                 e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s);
             }.bind(null, n = d), o = function () {
                 i(n), n.href && URL.revokeObjectURL(n.href);
             }) : (n = c(t), a = function (e, t) {
                 var n = t.css,
                     a = t.media;
                 if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n;
                 else {
                     for (; e.firstChild;) e.removeChild(e.firstChild);
                     e.appendChild(document.createTextNode(n));
                 }
             }.bind(null, n), o = function () {
                 i(n);
             });
             return a(e),
                 function (t) {
                     if (t) {
                         if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                         a(e = t);
                     } else o();
                 };
         }
         var d = {},
             l = function (e) {
                 var t;
                 return function () {
                     return void 0 === t && (t = e.apply(this, arguments)), t;
                 };
             },
             h = l(function () {
                 return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
             }),
             u = l(function () {
                 return document.head || document.getElementsByTagName("head")[0];
             }),
             m = null,
             p = 0,
             g = [];
 
         module_object.exports = function (e, t) {
             void 0 === (t = t || {}).singleton && (t.singleton = h()), void 0 === t.insertAt && (t.insertAt = "bottom");
             var n = o(e);
             return a(n, t),
                 function (e) {
                     var r;
 
                     for (var s = [], i = 0; i < n.length; i++) {
                         var c = n[i];
                         (r = d[c.id]).refs--, s.push(r);
                     }
                     for (e && a(o(e), t), i = 0; i < s.length; i++) {
                         if (0 === (r = s[i]).refs) {
                             for (var A = 0; A < r.parts.length; A++) r.parts[A]();
                             delete d[r.id];
                         }
                     }
                 };
         };
 
         var f, b = (f = [], function (e, t) {
             return f[e] = t, f.filter(Boolean).join("\n");
         });
     },
     /**
      * [6] -Creates the base HTML for the widget
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      */
     function (module_object, exports) {
         /**
          * Helper function to parse the json with the survey
          * @param {object} e - context to append the html as parsing
          * @param {object} survey - the object containing the JSON with the QA's
          */
         function parseSruvey(module_object, survey) {
             survey.forEach(function (q) {
                 module_object.exports += q.name !== 'satisfaccion' ? '<div style="display: none;" class="question">' : '<div class="question">';
                 switch (q.type) {
                     case "radio":
                         module_object.exports += '<div class="nds-div-' + String(q.name) + '-btn">';
                         module_object.exports += '<div id="div-' + String(q.name) + '">';
                         module_object.exports += '<label for="div-' + String(q.name) + '">' + String(q.question) + '</label>';
                         module_object.exports += '</div>';
 
                         if (String(q.name) === 'satisfaccion') {
                             module_object.exports += '<div class="satisfaction_wrapper">';
                         }
 
 
                         q.options.forEach(function (opt) {
                             switch (String(q.name)) {
                                 case 'satisfaccion':
                                     module_object.exports += '<div class="content-image-satisfaction">';
                                     module_object.exports += '<input type="radio" name="' + String(q.name) + '" value="' + opt.value + '"/>';
                                     module_object.exports += '<div class="image-satisfaccion"></div>';
                                     module_object.exports += '<div class="text-satisfaccion"></div>';
                                     module_object.exports += '</div>';
                                     break;
 
                                 default:
                                     module_object.exports += '<label><input type="radio" name="' + String(q.name) + '" value="' + opt.value + '"/>' + opt.text + '</label><br/>';
                                     break;
                             }
                         });
 
                         if (String(q.name) === 'satisfaccion') {
                             module_object.exports += '</div>';
                         }
 
                         module_object.exports += '</div>';
                         module_object.exports += '';
                         break;
 
                     case "checkbox":
                         module_object.exports += '<label for="div-' + String(q.name) + '">' + String(q.question) + '</label>';
                         module_object.exports += '<div id="div-' + String(q.name) + '">';
                         // for each option add the html
                         q.options.forEach(function (opt) {
                             module_object.exports += '<label><input type="checkbox" name="' + String(q.name) + '" value="' + opt.value + '"/>' + opt.text + '</label><br />';
                         });
                         module_object.exports += '</div>';
                         break;
 
                     case "text":
                         module_object.exports += '<label for="' + String(q.name) + '">' + String(q.question) + '</label><br />';
                         module_object.exports += '<textarea id="' + String(q.name) + '" class="textarea-survey" rows="7" name="' + String(q.name) + '"></textarea>';
                         break;
                     case "number":
                         module_object.exports += '<label for="' + String(q.name) + '">' + String(q.question) + '</label><br />';
                         module_object.exports += '<input type="number" name="' + String(q.name) + '" />';
                         break;
                     default:
                         break;
 
                 }
                 module_object.exports += '</ul><br />';
             });
         }
 
         module_object.exports = "";
         module_object.exports += '<!DOCTYPE html>';
         module_object.exports += '<html lang=en>';
         module_object.exports += '<body>';
         module_object.exports += '<div id=nds-chat-container class="nds-chat-container nds-chat-reset">';
         module_object.exports += '<div id=nds-chat-chatbox class=nds-chat-chatbox>';
         module_object.exports += '<div id=nds-chat-conversation class="nds-chat-conversation nds-chat-sheet nds-chat-sheet-active nds-chat-active">';
         module_object.exports += '<div class="nds-chat-conversation-title" id="nds-chat-title">';
         module_object.exports += '<h4>';
         module_object.exports += String(form.config.project) + '</h4>';
         module_object.exports += '</div>';
         module_object.exports += '<div class="nds-chat-sheet-content nds-chat-sheet-content-on-ofy">';
         module_object.exports += '<div class=nds-chat-sheet-content-container>';
         module_object.exports += '<div class=nds-chat-conversation-parts-container>';
         module_object.exports += '<div id=nds-chat-message class=nds-chat-conversation-parts></div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '<div class=nds-chat-composer-container id=nds-chat-composer-container>';
         module_object.exports += '<div id=nds-chat-composer class=nds-chat-composer style=transform:translate(0,0)>';
         module_object.exports += '<div class=nds-chat-composer-textarea-container>';
         module_object.exports += '<div class=nds-chat-composer-textarea-container>';
         module_object.exports += '<div class=nds-chat-composer-textarea>';
         module_object.exports += '<label id=charcount></label>';
         module_object.exports += '<pre class=nds-chat-send-button></pre>';
         var auxTxtPlaceholde = localStorage.getItem('text-placeholder') ? localStorage.getItem('text-placeholder') : "Escribe tu mensaje";
         module_object.exports += '<textarea id=txMessage maxlength="140" placeholder="' + auxTxtPlaceholde + '"></textarea> </div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '<div id="nds-chat-survey" class="nds-chat-conversation nds-chat-sheet nds-chat-sheet-active nds-chat-active" style="display: none;">';
         module_object.exports += '<div class="nds-chat-conversation-title">';
         module_object.exports += '<h4>';
         module_object.exports += String(form.config.project) + '</h4>';
         module_object.exports += '</div>';
         module_object.exports += '<div class="nds-chat-sheet-content nds-chat-sheet-content-on-ofy">';
         module_object.exports += '<div class=nds-chat-sheet-content-container>';
         module_object.exports += '<div id="nds-chat-survey">';
         module_object.exports += '<form id="nds-survey-form">';
         /* Load an export the survey questions if exitsts */
         if (form.post_survey && form.post_survey.length > 0) {
             parseSruvey(module_object, form.post_survey);
         }
         /* Finish load of survey */
         module_object.exports += '<button id="nds-chat-submit" class="btn btn-default nds-chat-video-option" type="button">Enviar</button>';
         module_object.exports += '</form>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</div>';
         module_object.exports += '</body>';
         module_object.exports += '</html>';
 
     },
     /**
      * [7] - Defines the media queries to the page
      *
      * @param {Object} module_object - The attributes of the module
      * @param {number} module_object.id - The index in the module array of the current module_object
      * @param {boolean} module_object.loaded - If the module has beign loaded or not
      * @param {Object} exports - Property that defines the export to the global context of the browser
      * @param {Object} loader - The function that will be called after this hook finishes
      */
     function (module_object, exports, loader) {
         // This function inject the css file into the iframe a[10]
         var styles = loader(3);
         "string" == typeof styles && (styles = [
             [module_object.id, styles, ""]
         ]), loader(5)(styles, {}), styles.locals && (module_object.exports = styles.locals);
     }
 ]);