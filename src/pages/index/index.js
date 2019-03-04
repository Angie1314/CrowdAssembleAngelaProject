import './index.scss';
import 'bootstrap';
import MeetupService from '../../services/meetup-service.js';
import MeetupGroupElement from '../../components/meetup-group.js';
import Calendar from '../../components/calendarCreation.js';
import Social from '../../components/socialTags.js';
import Swal from 'sweetalert2';

customElements.define('meetup-group', MeetupGroupElement);

document.addEventListener("DOMContentLoaded", () => { 
    MeetupService
        .getGroups('ZA')
        .then(data => {
            const status = document.querySelector('[role="status"]');
            status.classList.add('d-none');
            
            const container = document.querySelector('.container .row');
            
            for (var i = 0; i < data.length; i++) {
                const group = document.createElement('meetup-group');
                group.name = data[i].name;

                groups.appendChild(group);
            }
        });
});
   
    $(function () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
    
        var $items = $('#groups');
        var $mem=$('#member');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/2/categories?key=${key}&category=1,2,3&sign=true`,
            success: function(groups) {
                $items.find('.spinner-border').addClass('d-none');
    
                $.each(groups.results, function(i, group) {
                    $mem.append(`
                        <div class="border border-light">
                            <h5 class="card-title heading">${group.name}</h5> 
                            
                            <button class="btn btn-dark btn-lg btn-block mb-2 mt-2 data-toggle="tooltip " 
                            data-placement="top" title="Find group details here" onclick="page.funcs(${group.id});">Group Details
                            </button>
                        </div>`);
                }); 
                
            },
            error: errorFunction
        });
    
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/find/groups?key=${key}&category=1,2,3&sign=true`,
            success: function(groups) {
                $items.find('.spinner-border').addClass('d-none');
                var $mem=$('#member');
            
                $.each(groups, function(i, group) {
                    $mem.append(`<h5 class="card-title heading2">${group.city}</h5> `);
                
                });
            },
            error: errorFunction
        });
    });
    
    $ (function () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
        var $cal = $('#calendars');
        var $items = $('#titles');
        var chat=$('#chat');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/self/calendar?key=${key}&category=1,2,3&sign=true`,
            success: function(calendars ) {
    
                $.each(calendars, function(i, cals)  {
                    $cal.append(`<div><h3 class="heading">Calendar</h3></div>`);
                    $items.append(`<br/><br/>
                    <button type="button" class="btn border border-0 text-left" data-toggle="modal" data-target="#exampleModal">
                        <p class="heading2" ><img src="src/f2.png" alt="foxbot icon" class="img-fluid img-circle" /> FQA Chat </p>
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby
                         ="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title heading2" id="exampleModalLabel"><img src="src/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Crowd Chat</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h1 class="heading2">Ask questions</h2>
                            <form>
                                <div class="form-group" method="scripts/index.js">
                                    <label for="exampleInputEmail1" class="text-left">Message</label>
                                    <input type="email" class="form-control" id="tf" aria-describedby="emailHelp" placeholder="Ask Question">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1"><img src="src/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Bot Response</label>
                                    <textarea class="form-control" rows="5" id="comment" contentEditable="true"></textarea>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                                    <button type="submit" id="send"class="btn btn-dark" onclick="page.responseFunc(${cals.f});">Send</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>`);
            }); 
        },
    error: errorFunction
    });       
});
    function errorFunction(xhr, status, error){
        const Swal = require('sweetalert2');
          
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
            });  
    }
     
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    
        window.page = {
            funcs: function(val) {
    
                window.location.href = `about.html?category_id=${val}`;
            },
            
            responseFunc: function(val) {
                var text=document.getElementById('tf').value;
                var newLine='\r';
                if(text==="join"){
                    comment.append(newLine);
                    comment.append("Joining a group is simple. Find the catagory you are interested in and join!");
                    comment.append(newLine);
                    comment.append("Anything else you would like to know?");
                }
                if(text==="area"){
                    comment.append("Crow Assemble are available cross country! Click and see where your nearst groupd is located!");
                    comment.append(newLine);
                    comment.append("Anything else you would like to know?");
    
                }
                if(text==="date"){
                    comment.append("Crow Assemble groups run from Monday through to Sunday! Join up!");
                    comment.append(newLine);
                    comment.append("Anything else you would like to know?");
    
                }else{
                    comment.append(newLine);
                    comment.append("Didnt Quite get that try ask again!");
                }
                
            },
            error: errorFunction
        };
    



