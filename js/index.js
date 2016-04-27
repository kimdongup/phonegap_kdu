/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        /*window.addEventListener('storage', function(e) {  
          document.querySelector('.my-key').textContent = e.key;
          document.querySelector('.my-old').textContent = e.oldValue;
          document.querySelector('.my-new').textContent = e.newValue;
          document.querySelector('.my-url').textContent = e.url;
          document.querySelector('.my-storage').textContent = e.storageArea;
        });*/
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    sendSms: function() {
        window.localStorage.setItem('mobileid', document.getElementById('mobileid').value);
        window.localStorage.setItem('hospitalid', document.getElementById('hospitalid').value);
        window.localStorage.setItem('orthoid', document.getElementById('orthoid').value);
        window.localStorage.setItem('wardid', document.getElementById('wardid').value);
        window.localStorage.setItem('patientid', document.getElementById('patientid').value);

        var number = document.getElementById('mobileid').value;
        var hospital = document.getElementById('hospitalid').value;
        var ortho = document.getElementById('orthoid').value;
        var ward = document.getElementById('wardid').value;
        var patient = document.getElementById('patientid').value;
    
        var message = number + ", " + hospital + ", " + ortho + ", " + ward + ", " + patient ; 
        
        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };
        var success = function () { navigator.notification.alert('Message sent successfully'); };
        var error = function (e) { navigator.notification.alert('Message Failed:' + e); };
        sms.send('01073597355', message, options, success, error);
        
        var element = document.getElementById('deviceProperties');
        element.innerHTML  = 'Done. <br />'; 
    },
    
    savelocal: function() {
            window.localStorage.setItem('mobileid', document.getElementById('mobileid').value);
            window.localStorage.setItem('hospitalid', document.getElementById('hospitalid').value);
            window.localStorage.setItem('orthoid', document.getElementById('orthoid').value);
            window.localStorage.setItem('wardid', document.getElementById('wardid').value);
            window.localStorage.setItem('patientid', document.getElementById('patientid').value);
    },

    restorelocal: function() {
          document.getElementById('mobileid').value = window.localStorage.getItem('mobileid');
          document.getElementById('hospitalid').value = window.localStorage.getItem('hospitalid');
          document.getElementById('orthoid').value = window.localStorage.getItem('orthoid');
          document.getElementById('wardid').value = window.localStorage.getItem('wardid');
          document.getElementById('patientid').value = window.localStorage.getItem('patientid');
    }
};
