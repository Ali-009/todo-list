(()=>{"use strict";var __webpack_modules__={79:(module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "\\n#page-container{\\n\\n  height: 90vh;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#todo-list-container{\\n\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  gap: 10px;\\n  justify-content: center;\\n\\n}\\n\\n.todo-container{\\n  border: thin solid black;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n#add-todo-list{\\n  border: thin solid black;\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n#todo-items-container{\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  gap: 15px;\\n}\\n\\n#wrapper{\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n\\n#navigation-container{\\n  display: flex;\\n  flex-direction: row;\\n  gap: 10px;\\n  align-items: center;\\n}\\n\\n.duedate, .priority, .checked{\\n  display: inline;\\n  margin-right: 20px;\\n}\\n.todo-item{\\n  display: flex;\\n  flex-direction: column;\\n  border: thin solid black;\\n  padding: 10px;\\n  gap: 10px;\\n}\\n\\n.todo-item > label > *{\\n  border: none;\\n  background: none;\\n}\\n\\n.todo-item textarea{\\n  border: thin solid black;\\n  width: 100%;\\n  height: 90%;\\n}\\n\\n.todo-item input[type=\\"text\\"]{\\n  width: 100%;\\n}\\n\\n.todo-item input[type=\\"date\\"]{\\n  width: 70%;\\n}\\n\\n.todo-item > *:focus {\\n  background: white;\\n  border: 1px solid grey;\\n}\\n\\n.todo-item > label{\\n  font-family: \'liberation sans\';\\n  font-size: 80%;\\n\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 10px;\\n}\\n\\n.form-control{\\n  display: flex;\\n  flex-direction: row;\\n  align-self: flex-end;\\n  gap: 10px;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/todo.css?./node_modules/css-loader/dist/cjs.js')},645:module=>{eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?')},379:module=>{eval('\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},569:module=>{eval('\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},216:module=>{eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement("style");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},565:(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},795:module=>{eval('\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute("media", media);\n  } else {\n    style.removeAttribute("media");\n  }\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},589:module=>{eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")},356:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"O\": () => (/* binding */ removeTodoItem)\n/* harmony export */ });\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);\n\n\nfunction removeTodoItem(e){\n  const todoItemsContainer = document.querySelector('#todo-items-container');\n  const todoListIndex = todoItemsContainer.dataset.todoListIndex;\n  const itemIndex = e.target.dataset.removeItem;\n\n  let todoList = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .retrieveTodoList */ .UC)(todoListIndex);\n  todoList.todo.splice(itemIndex, 1);\n\n  (0,_model_js__WEBPACK_IMPORTED_MODULE_0__/* .updateTodoList */ .Lw)(todoList);\n}\n\n\n//# sourceURL=webpack://todo-list/./src/controller.js?")},214:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Lw\": () => (/* binding */ updateTodoList),\n/* harmony export */   \"UC\": () => (/* binding */ retrieveTodoList),\n/* harmony export */   \"TJ\": () => (/* binding */ retrieveAllTodoLists),\n/* harmony export */   \"Dg\": () => (/* binding */ todoListFactory),\n/* harmony export */   \"gR\": () => (/* binding */ todoItemFactory)\n/* harmony export */ });\n/* unused harmony export removeTodoList */\n/*The model is rewritten to only read and write to localStorage, and provide todoList and todoItem objects*/\n\n/*todoList is an object received from either the view or the controller. It has a name, an index and an array of todo objects*/\n\n/*This function is used by the controller to update a single todo-list in the localStorage*/\nfunction updateTodoList(todoList){\n  localStorage.setItem(todoList.index, JSON.stringify(todoList));\n}\n\nfunction retrieveTodoList(todoListIndex){\n  return JSON.parse(localStorage.getItem(todoListIndex));\n}\n\nfunction retrieveAllTodoLists(){\n\n  let todoList = [];\n  for(let i = 0; i < localStorage.length; i++){\n    todoList[i] = retrieveTodoList(i);\n  }\n  return todoList;\n}\n\nfunction removeTodoList(todoListIndex){\n  localStorage.removeItem(todoListIndex);\n\n  //find the item positioned after the removed one and change its index\n  //This shifts an item one step backward, after one has been removed\n  if(retrieveTodoList(todoListIndex + 1)){\n    let shiftedTodoList = retrieveTodoList(todoListIndex + 1)\n        .index = todoListIndex;\n    updateTodoList(shiftedTodoList);\n    localStorage.removeItem(todoListIndex + 1);\n  }\n}\n\n//Creates a new Todo-list\nfunction todoListFactory(name){\n\n  const index = localStorage.length\n  let todo = []; //An array of todoItem objects\n  return {index, name, todo};\n}\n\nfunction todoItemFactory(title = 'Title', description =\n    'Description', dueDate = '', priority = '', checked = ''){\n\n  return {title, description, dueDate, priority, checked};\n}\n\n\n//# sourceURL=webpack://todo-list/./src/model.js?")},922:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./src/model.js\nvar model = __webpack_require__(214);\n// EXTERNAL MODULE: ./src/assets/outline_arrow_back_black_24dp.png\nvar outline_arrow_back_black_24dp = __webpack_require__(461);\n// EXTERNAL MODULE: ./src/assets/outline_add_black_24dp.png\nvar outline_add_black_24dp = __webpack_require__(632);\n// EXTERNAL MODULE: ./src/controller.js\nvar controller = __webpack_require__(356);\n;// CONCATENATED MODULE: ./console-tests.js\n\n\nfunction testTodoListCreation(){\n\n  localStorage.clear();\n\n  let todoList1 = (0,model/* todoListFactory */.Dg)('todoList1');\n\n  let todoItem1 = (0,model/* todoItemFactory */.gR)('todo0','describe life', '2010-10-27', 'berry important', true);\n  let todoItem2 = (0,model/* todoItemFactory */.gR)('todo1', 'describe this', '2011-10-29',\n  'not that important', false);\n\n  //adding items to todoList1\n  todoList1.todo[0] = todoItem1;\n  todoList1.todo[1] = todoItem2;\n\n  (0,model/* updateTodoList */.Lw)(todoList1);\n\n  //creating a second todoList\n  let todoList2 = (0,model/* todoListFactory */.Dg)('todoList2');\n\n  let todoItem3 = (0,model/* todoItemFactory */.gR)('todo4', 'describe that', '2010-10-29',\n  'big important', false);\n  let todoItem4 = (0,model/* todoItemFactory */.gR)('todo6', 'describe them', '2010-09-23',\n  'ignore this', true);\n\n  todoList2.todo[0] = todoItem3;\n  todoList2.todo[1] = todoItem4;\n  (0,model/* updateTodoList */.Lw)(todoList2);\n\n}\n\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(379);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js\nvar styleDomAPI = __webpack_require__(795);\nvar styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js\nvar insertBySelector = __webpack_require__(569);\nvar insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\nvar setAttributesWithoutAttributes = __webpack_require__(565);\nvar setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js\nvar insertStyleElement = __webpack_require__(216);\nvar insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js\nvar styleTagTransform = __webpack_require__(589);\nvar styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/todo.css\nvar todo = __webpack_require__(79);\n;// CONCATENATED MODULE: ./src/todo.css\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (styleTagTransform_default());\noptions.setAttributes = (setAttributesWithoutAttributes_default());\n\n      options.insert = insertBySelector_default().bind(null, \"head\");\n    \noptions.domAPI = (styleDomAPI_default());\noptions.insertStyleElement = (insertStyleElement_default());\n\nvar update = injectStylesIntoStyleTag_default()(todo/* default */.Z, options);\n\n\n\n\n       /* harmony default export */ const src_todo = (todo/* default */.Z && todo/* default.locals */.Z.locals ? todo/* default.locals */.Z.locals : undefined);\n\n;// CONCATENATED MODULE: ./src/view.js\n\n\n\n\n\n\n\n\n\n\nconst pageContainer = document.querySelector('#page-container');\n\n//dsiplays the names of all todoLists on the homepage\nfunction loadAllTodoLists(){\n\n  const todoListContainer = document.createElement('div');\n  todoListContainer.setAttribute('id', 'todo-list-container');\n  pageContainer.appendChild(todoListContainer);\n\n  let todoListArray = (0,model/* retrieveAllTodoLists */.TJ)();\n\n  for(let i = 0; i < todoListArray.length; i++){\n    let todoContainer = createSingleTodoListDiv(todoListArray[i]);\n    todoListContainer.appendChild(todoContainer);\n  }\n\n  const addTodoList = document.createElement('div');\n  addTodoList.setAttribute('id','add-todo-list');\n  addTodoList.textContent = '+';\n  todoListContainer.appendChild(addTodoList);\n}\n\n/*creates a contianer for a single todoList, simply displaying its name. The todoList once clicked displays its content*/\nfunction createSingleTodoListDiv(todoList){\n\n  const todoContainer = document.createElement('div');\n  todoContainer.classList.add('todo-container');\n  todoContainer.setAttribute('data-display', todoList.index);\n\n  todoContainer.textContent = todoList.name;\n\n  todoContainer.addEventListener('click', displayTodoListContent, false);\n\n  //Creating a button to remove the todoList\n  const todoListRemoveButton = document.createElement('button');\n  todoListRemoveButton.setAttribute('data-remove', todoList.index);\n  todoListRemoveButton.textContent = 'X';\n  todoListRemoveButton.addEventListener('click', removeTodoListEvent, false);\n  todoContainer.appendChild(todoListRemoveButton);\n\n  return todoContainer;\n\n}\n\n//Event handler for removing an entire todo-list\nfunction removeTodoListEvent(e){\n  //This instruction is important as it prevents createTodoList from triggering when what we want is to remove a ToDoList\n  e.stopPropagation();\n}\n\n/*The event handler for clicking a todoList. Displays all of the list's content*/\nfunction displayTodoListContent(e){\n\n  document.querySelector('#todo-list-container').remove();\n\n  //The below elements wrap other elements for styling purposes\n  const wrapper = document.createElement('div');\n  wrapper.setAttribute('id', 'wrapper');\n  const navigationContainer = document.createElement('div');\n  navigationContainer.setAttribute('id','navigation-container');\n  const todoContainer = document.createElement('div');\n  todoContainer.setAttribute('id','todo-items-container');\n  todoContainer.setAttribute('data-todo-list-index', e.target.dataset.display);\n\n  let index = e.target.dataset.display;\n  let todoList = (0,model/* retrieveTodoList */.UC)(index);\n\n  for(let i = 0; i < todoList.todo.length; i++){\n    todoContainer.appendChild(createTodoItem(todoList.todo[i], i));\n  }\n\n  navigationContainer.appendChild(createBackButton());\n  navigationContainer.appendChild(createAddTodoItemButton());\n\n  wrapper.appendChild(navigationContainer);\n  wrapper.appendChild(todoContainer);\n\n  pageContainer.appendChild(wrapper);\n\n}\n\n//provide a button to return to the homepage\nfunction createBackButton(){\n  const backButton = document.createElement('img');\n  backButton.setAttribute('id','back-button');\n  backButton.setAttribute('src', outline_arrow_back_black_24dp);\n\n  backButton.addEventListener('click', (e) => {\n    document.querySelector('#wrapper').remove();\n    loadAllTodoLists();\n  });\n\n  return backButton;\n}\n\nfunction createAddTodoItemButton(){\n  const addButton = document.createElement('img');\n  addButton.setAttribute('id','add-todo-button');\n  addButton.setAttribute('src', outline_add_black_24dp);\n\n  //The button's event listener should go here\n\n  return addButton;\n}\n\n//Responsible of displaying a single todoItem within a TodoList\nfunction createTodoItem(todoItem, index){\n\n  //create a container for a todoItem in the todoList\n  const todoItemElement = document.createElement('div');\n  todoItemElement.classList.add('todo-item');\n  todoItemElement.setAttribute('data-todo-item', index);\n\n  //Title property\n  const titleElement = document.createElement('input');\n  titleElement.value = todoItem.title;\n\n  //Description property\n  const descriptionElement = document.createElement('textarea');\n  descriptionElement.value = todoItem.description;\n\n  //Priority Property\n  const priorityElement = document.createElement('input');\n  priorityElement.value = todoItem.priority;\n\n  //Date property\n  const dateElement = document.createElement('input');\n  dateElement.setAttribute('type','date');\n  dateElement.value = todoItem.dueDate;\n\n  //Checked property\n  const checkedElement = document.createElement('input');\n  checkedElement.setAttribute('type', 'checkbox');\n  todoItem.checked ? checkedElement.checked = true :\n      checkedElement.checked = false;\n\n  //Appending elments alongside their labels as todoItemElement\n  let elementArray = [titleElement, descriptionElement, priorityElement, dateElement, checkedElement];\n  let elementIdArray = ['title', 'description', 'priority',\n      'due-date','done'];\n  let labelTextArray = ['', '', 'Priority: ',\n      'Due Date: ', 'Done'];\n  for(let i = 0; i < elementArray.length; i++){\n    const label = document.createElement('label');\n    label.setAttribute('for',`${elementIdArray[i]}-${index}`);\n    label.textContent = labelTextArray[i];\n    todoItemElement.appendChild(label);\n    elementArray[i].setAttribute('id', `${elementIdArray[i]}-${index}`);\n    label.appendChild(elementArray[i]);\n  }\n\n  const formControl = document.createElement('div');\n  formControl.setAttribute('class','form-control');\n\n  const saveButton = createTodoItemSaveButton(index);\n  const removeButton = createTodoItemRemoveButton(index);\n\n  saveButton.textContent = 'Save';\n  removeButton.textContent = 'Remove';\n\n  formControl.appendChild(removeButton);\n  formControl.appendChild(saveButton);\n\n  todoItemElement.appendChild(formControl);\n\n  return todoItemElement;\n}\n\nfunction createTodoItemSaveButton(index){\n  const saveButton = document.createElement('button');\n  saveButton.setAttribute('data-save-item', index);\n\n  return saveButton;\n}\n\nfunction createTodoItemRemoveButton(index){\n  const removeButton = document.createElement('button');\n  removeButton.setAttribute('data-remove-item', index);\n\n  removeButton.addEventListener('click', (e) => {\n    //removing the todo-item from localStorage\n    (0,controller/* removeTodoItem */.O)(e);\n    //removing the todo-item from the display\n    document.querySelector(`div[data-todo-item=\"${e.target.dataset.removeItem}\"]`).remove();\n  });\n\n  return removeButton;\n}\n\n//testing the view.js module, to be removed later\ntestTodoListCreation();\nloadAllTodoLists();\n\n\n//# sourceURL=webpack://todo-list/./src/view.js_+_2_modules?")},632:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "813a20923a645eabb297.png";\n\n//# sourceURL=webpack://todo-list/./src/assets/outline_add_black_24dp.png?')},461:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "fd12553dc183face0a7c.png";\n\n//# sourceURL=webpack://todo-list/./src/assets/outline_arrow_back_black_24dp.png?')}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__=__webpack_require__(922)})();