# SessionParser
- A JS library where you can store two or three dimensional array to Session Storage or Local Storage

## Global Variables
### sp
  - object that stores and manipulates values in Session Storage.
### lp
  - object that stores and manipulates values in Local Storage.
  
## Declaring SessionParser Object
  #### Example:
  ```javascript
  //Declaring object that will handle session storage
  var my_sp = new SessionParser('session');
  //Declaring object that will handle local storage
  var my_lp = new SessionParser('local');
  ```
  
## Methods

### set(sessionName,value)
  - setting up of key value pair in session or local storage.
  #### Example:
  ```javascript
  sp.set('username','myUsername');
  ```
### get(sessionName)
  - fetching of key value pair in session or local storage.
  #### Example:
  ```javascript
  var userName = sp.get('username');
  ```
### init(sessionName,dataObject)
  - initializes a two dimensional array.
  #### Example:
  ```javascript
  sp.init('mySession',{
                        saved : false, //Storing boolean value
                        list : [], //Defining the field as array, where you can push data object later on
                        note : "This is a note" //Storing string
                       });
  ```
### isset(sessionName)
  - returns true or false if the session name is existing in session or local storage.
  #### Example:
  ```javascript
  if(sp.isset('username')
  {
    //statement here...
  }
  ```
### unset(sessionName)
  - unsets a session name in session or local storage.
  #### Example:
  ```javascript
  sp.unset('username');
  ```
### getData(sessionName)
  - returns a two dimensional array of the session name stored in session or local storage.
  #### Example:
  ```javascript
  var sessionData = sp.getData('mySession');
  ```
### setData(sessionName,dataArray)
  - storing two dimensional array to session name stored in session or local storage.
  #### Example:
  ```javascript
  sp.setData('mySession',dataArray);
  ```
### getKey(sessionName,key)
  - fetching the value of a key in a session name stored in session or local storage.
  #### Example:
  ```javascript
  var note = sp.getKey('mySession','note');
  ```
### getKeyStringified(sessionName,Arraykey)
  - fetching JSON Stringified array value of a key in a session name stored in session or local storage.
  #### Example:
  ```javascript
  var listJSONString = sp.getKeyStringified('mySession','list');
  ```
### setKey(sessionName,key,value)
  - storing value to a specific key in a session name stored in session or local storage.
  #### Example:
  ```javascript
  sp.setKey('mySession','saved',true);
  ```
### removeField(sessionName,key)
  - removing a specific key in a session name stored in session or local storage.
  #### Example:
  ```javascript
  sp.removeField('mySession','note');
  ```
### removeFieldKey(sessionName,key,index)
  - removing a specific item from an array stored in a key in a session name.
  #### Example:
  ```javascript
  sp.removeFieldKey('mySession','list',0);
  ```
  #### Note:
  In this case list is a field in mySession that holds an array value,defining the index will remove the specific record from the array. The example above means deleting the first record from list.
  
### pushToKey(sessionName,key,dataObject)
  - adding a record to the array stored in a key in a session name.
  #### Example:
  ```javascript
  sp.pushToKey('mySession','list',dataObject);
  ```
  #### Note:
  This is being used if the key holds an Array value.
  
### appendToKey(sessionName,key,dataString)
  - appending to a string stored in a key in a session name.
  #### Example:
  ```javascript
  sp.appendToKey('mySession','note','The End');
  ```
  #### Note:
  This is being used if the key holds a String value.
