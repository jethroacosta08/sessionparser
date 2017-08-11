var SessionParserException = function(message) {
    this.message = message;
    this.name = 'ERROR::SessionParserException : ';
};
    
var SessionParser = function(typeOfStorage)
{
    //Checking type of storage (Session or Local)
    var isSession = null;
    try
    {
        if(typeOfStorage === 'session')
        {
            isSession = true;
        }
        else if(typeOfStorage === 'local')
        {
            isSession = false;
        }
        else
        {
            throw new SessionParserException('Invalid definition of SessionParser object!');
        }
    }
    catch (e) 
    {
        console.log(e.name,e.message); // pass exception object to err handler
    }
    
    //Converting the storage to Array variable
    var sessionToArray = function(sessionName)
    {
        if(isSession)
        {
            var json_data = JSON.parse(sessionStorage.getItem(sessionName));
            return json_data;
        }
        else
        {
            var json_data = JSON.parse(localStorage.getItem(sessionName));
            return json_data;
        }
    };
    
    //Converting array to json string then assign to Session or Local Storage
    var arrayToSession = function(sessionName,data)
    {
        var json_data = JSON.stringify(data);
        
        if(isSession)
        {
            sessionStorage.setItem(sessionName,json_data);
        }
        else
        {
            localStorage.setItem(sessionName,json_data);
        }
    };
    
    //SessionParser Functions
    return {
        init : function(sessionName,dataObject){
            arrayToSession(sessionName,dataObject);
        },
        set : function(sessionName,value){
            if(isSession)
            {
                sessionStorage.setItem(sessionName,value);
            }
            else
            {
                localStorage.setItem(sessionName,value);
            }
        },
        get : function(sessionName)
        {
            if(isSession)
            {
                return sessionStorage.getItem(sessionName);
            }
            else
            {
                return localStorage.getItem(sessionName);
            }
        },
        isset : function(sessionName)
        {
            if(isSession)
            {
                var sessionNameFocus = sessionStorage.getItem(sessionName);
            }
            else
            {
                var sessionNameFocus = localStorage.getItem(sessionName);
            }
            
            if (sessionNameFocus === undefined || sessionNameFocus === null || sessionNameFocus.length === 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        },
        unset : function(sessionName){
            if(isSession)
            {
                sessionStorage.removeItem(sessionName);
            }
            else
            {
                localStorage.removeItem(sessionName);
            }
        },
        getData : function(sessionName)
        {
            var data = sessionToArray(sessionName);
            return data;
        },
        setData : function(sessionName,data)
        {
            arrayToSession(sessionName,data);
        },
        setKey : function(sessionName,key,value)
        {
            var data = sessionToArray(sessionName);
            data[key] = value;
            arrayToSession(sessionName,data);
        },
        getKey : function(sessionName,key)
        {
            var data = sessionToArray(sessionName);
            return data[key];
        },
        getKeyStringified : function(sessionName,key)
        {
            var data = sessionToArray(sessionName);
            return JSON.stringify(data[key]);
        },
        removeField : function(sessionName,field)
        {
            var session_data = sessionToArray(sessionName);
            session_data.splice(field, 1);
            arrayToSession(sessionName,session_data);
        },
        removeFieldKey : function(sessionName,field,key)
        {
            var session_data = sessionToArray(sessionName);
            session_data[field].splice(key, 1);
            arrayToSession(sessionName,session_data);
        },
        pushToKey : function(sessionName,key,dataObject)
        {
            try
            {
                var data = sessionToArray(sessionName);

                if(data[key].constructor === Array)
                {
                    data[key].push(dataObject);
                    arrayToSession(sessionName,data);
                }
                else
                {
                    throw new SessionParserException('Session key must be defined as Array in order to use pushToKey() function!');
                }
            }
            catch (e) 
            {
                console.log(e.name,e.message); // pass exception object to err handler
            }
        },
        appendToKey : function(sessionName,key,dataString)
        {
            try
            {
                var data = sessionToArray(sessionName);
                
                if (typeof data[key] === 'string' || data[key] instanceof String)
                {
                    data[key]+=dataString;
                    arrayToSession(sessionName,data);
                }
                else
                {
                    throw new SessionParserException('Session key must be defined as String in order to use appendToKey() function!');
                }
            }
            catch (e) 
            {
                console.log(e.name,e.message); // pass exception object to err handler
            }
        }
    };
};

//Global variable for SessionParser
var sp = new SessionParser('session');
var lp = new SessionParser('local');
