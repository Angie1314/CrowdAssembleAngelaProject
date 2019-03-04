import './index.scss';
import 'bootstrap';
import MeetupService from '../../services/meetup-service.js';
import MeetupGroupElement from '../../components/meetup-group.js';

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

                container.appendChild(group);
            }
        });
});
try{
    $(function () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
    
        var $items = $('#groups');
        
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/find/topic_categories?key=${key}&category=1,2,3&sign=true`,
            success: function(groups) {
                $items.find('.spinner-border').addClass('d-none');
    
                $.each(groups, function(i, group) {
                    $items.append(`
                        <div class="border border-light">
                            <h5 class="card-title heading">${group.name}</h5> 
                            <button class="btn btn-dark btn-lg btn-block mb-2 mt-2 data-toggle="tooltip " 
                            data-placement="top" title="Find group details here" onclick="page.func(${group.id});">Group Details
                            </button>
                        </div>
                       
                    `);
                    //$items.append(`<h2> ${group.organizer.id}</h2>`);
    
                }); 
            },
            error: errorFunction
        });
    
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/find/groups?key=${key}&category=1,2,3&sign=true`,
            success: function(groups) {
                $items.find('.spinner-border').addClass('d-none');
            
                $.each(groups, function(i, group) {
                    $mem.append(`<img src=${group.organizer.photo.thumb_link} alt="organizer photo"class="rounded-circle img-hover"/>`);
                    $items.append(`<h5 class="card-title heading2">${group.city}</h5> `);
                
                });
            },
            error: errorFunction
        });
    });
    }
    
    catch(err){
        alert(err.message);
    }
    
    $ (function () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
        var $cal = $('#calendars');
        var $items = $('#titles');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/self/calendar?key=${key}&category=1,2,3&sign=true`,
            success: function(calendars ) {
    
                $.each(calendars, function(i, cals)  {
                    $cal.append(`<div><h3 class="heading">Calendar</h3></div>`);
                    $items.append(`<div id="simple-date-selector" class="hasDatepicker">
                    <div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="display: block;">
                      <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                        <a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_1551085827624.datepicker._adjustDate(&#39;#simple-date-selector&#39;, -1, &#39;M&#39;);" title="Prev">
                        <span class="icon-disclosure-left"></span></a>
                        <a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_1551085827624.datepicker._adjustDate(&#39;#simple-date-selector&#39;, +1, &#39;M&#39;);" title="Next">
                        <span class="icon-disclosure-right"></span></a><div class="ui-datepicker-title">
                        <span class="ui-datepicker-month heading">February</span>&nbsp;<span class="ui-datepicker-year heading">2019</span></div>
                     </div>
    
                    <table class="ui-datepicker-calendar heading2"><thead><tr><th class="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                        <th><span title="Monday">Mo</span></th><th><span title="Tuesday">Tu</span></th><th><span title="Wednesday">We</span></th>
                        <th><span title="Thursday">Th</span></th><th><span title="Friday">Fr</span></th><th class="ui-datepicker-week-end">
                            <span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" date_01" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">1</a></td>
                                <td class=" ui-datepicker-week-end date_02" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">2</a></td></tr>
                                <tr><td class=" ui-datepicker-week-end date_03" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">3</a></td><td class=" date_04" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">4</a></td><td class=" date_05" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">5</a></td><td class=" date_06" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">6</a></td><td class=" date_07" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">7</a></td><td class=" date_08" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">8</a></td><td class=" ui-datepicker-week-end date_09" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">9</a></td></tr><tr><td class=" ui-datepicker-week-end date_10" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">10</a></td><td class=" date_11" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">11</a></td><td class=" date_12" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">12</a></td><td class=" date_13" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">13</a></td><td class=" date_14" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">14</a></td><td class=" date_15" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">15</a></td><td class=" ui-datepicker-week-end date_16" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">16</a></td></tr><tr><td class=" ui-datepicker-week-end date_17" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">17</a></td>
                                <td class=" date_18" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">18</a></td>
                                <td class=" date_19" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">19</a></td><td class=" date_20" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">20</a></td>
                                    <td class=" date_21" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">21</a></td>
                                    <td class=" date_22" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">22</a></td>
                                    <td class=" ui-datepicker-week-end date_23" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">23</a></td></tr>
                                    <tr><td class=" ui-datepicker-week-end date_24" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">24</a></td>
                                <td class=" ui-datepicker-days-cell-over date_25 ui-datepicker-current-day ui-datepicker-today" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default ui-state-highlight ui-state-active" href="https://www.meetup.com/#">25</a></td><td class=" date_26" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">26</a></td><td class=" date_27" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                                    <a class="ui-state-default" href="https://www.meetup.com/#">27</a></td>
                                <td class=" date_28" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">28</a></td>
                                <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                                <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table>
                            </div>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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
    $(function (parameter) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
        var $mem=$('#member');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}find/groups?key=${key}&category=1,2,3&sign=true`,
            success: function(groups) {
                $.each(groups, function(i, group) {
                    $mem.append(`
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col"><h3>${group.name}</h3>
                                <img src= ${group.key_photo.thumb_link}  alt="Group photos" class="img-fluid img-thumbnail" />
                                <h6>Members Joined: ${group.members}</h6></div></th>
                            </tr>
                        </thead>
                    </table>`);
                });
            },
            error: errorFunction
        });
    });
    
        function errorFunction(xhr, status, error){
            alert("Error loading HTML Request Check Internet / URL");
           // var modal=$('#modal');
            //$('#myModal').on('shown.bs.modal', function modal() {
              //  $('#myInput').trigger('focus');
                //    modal.append(`<div class="modal" tabindex="-1" role="dialog">
                  //   <div class="modal-dialog" role="document">
                    //     <div class="modal-content">
                      //       <div class="modal-header">
                        //         <h5 class="modal-title">Modal title</h5>
                          //       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            //     <span aria-hidden="true">&times;</span>
                              //   </button>
                            // </div>
                    // <div class="modal-body">
                      //   <p>Error loading HTML Request Check Internet / URL</p>
                     //</div>
                     //<div class="modal-footer">
                       //  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        // <button type="button" class="btn btn-primary">Save changes</button>
                     //</div>
                    //</div>
                 //</div>
             //</div>)`);
        
             // });
             
        }
     
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    
        window.page = {
            func: function(val) {
    
                window.location.href = `about.html?organizer.id=${val}`;
            },
            error: errorFunction
        };
    
        window.page = {
            
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
    
    
    
/*import MeetupService from '../../services/meetup-service.js';
import MeetupGroupElement from '../../components/meetup-group.js';

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

                container.appendChild(group);
            }
        });
});

$(function (parameter) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://api.meetup.com/';
    const key = '79265535896f4f69573a5c191e4947';

    var $items = $('#groups');
    var $mem=$('#members');
    
    $.ajax({
        type: 'GET' ,
        url: `${proxyUrl}${baseUrl}find/groups?key=${key}&category=1,2,3&sign=true`,
        success: function(groups) {
            $items.find('.spinner-border').addClass('d-none');

            
            $.each(groups, function(i, group) {
                $items.append(`<div class="border border-light">
                <h5 class="card-title heading">${group.name}</h5>
                <div class="class="img-fluid">${group.description}</div>
                <br/>
                <h2 class=" heading">[ORGANIZER] ${group.organizer.name}</h2>
                <br/>
                <h6>[BIO] ${group.organizer.bio}</h6>
                <img src=${group.organizer.photo.photo_link} alt="organizer photo"class="rounded" />
                <button class="btn btn-dark btn-lg btn-block mb-2 mt-2" onclick="page.func(${group.id});">Join Group</button>`);
                $mem.append(`<img src=${group.organizer.photo.thumb_link} alt="organizer photo"class="rounded-circle img-hover"/>
                `);
                

            });
        },
        error: errorFunction
    });
    $ (function () {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
        var $cal = $('#calendars');
        var $tim=$('#times');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/self/calendar?key=${key}&category=1,2,3&sign=true`,
            success: function(calendars ) {
                $.each(calendars, function(i, cals)  {
                    $cal.append(`<div><h3>${cals.name}</h3></div>`);
                });
                
            }
        });
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/self/calendar?key=${key}&category=1,2,3&sign=true`,
            success: function(tim ) {
                $.each(tim, function(i, tims)  {
                    $tim.append(`<div><h3>${tims.local_time}</h3></div>
                        <div><h5>${tims.local_date}</h5></div>`);
                   
                });
                
            },
            error: errorFunction
        });
        
    });

    });
    function errorFunction(xhr, status, error){
  
        alert("Error incorrect HTML Request");
    
     }

    window.page = {
        
        func: function() {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const baseUrl = 'https://api.meetup.com/';
            const key = '79265535896f4f69573a5c191e4947';
            var $tim=$('#times');

        var urlParams = new URLSearchParams(window.location.search);
        var parameter =urlParams.toString();
        console.log(parameter); 
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/find/groups?key=${key}&parameter&sign=true`,
            success: function(parameter ) {
                $.each(parameter , function(i, parameter )  {
                    $tim.append(`<h2> ${group.organizer.id}</h2>`);
                });
            },
            error: errorFunction
        }); 
    }
};
*/



