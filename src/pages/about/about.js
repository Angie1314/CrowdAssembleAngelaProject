import './about.scss';
import 'bootstrap';
import Social from '../../components/socialTags.js';
import EventsComponents from '../../components/eventsComponent';
import Swal from 'sweetalert2';

console.log('This is the about page.');
$(function (parameter) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://api.meetup.com/';
    const key = '79265535896f4f69573a5c191e4947';

    var $items = $('#groups');
    var $mem=$('#members');

    let category=getParameterByName("category_id");
    
    $.ajax({
        type: 'GET' ,
        url: `${proxyUrl}${baseUrl}find/groups?key=${key}&category=${category}&sign=true`,
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
                <button class="btn btn-dark btn-lg btn-block mb-2 mt-2" onclick="page.funcs(${group.id});">See events</button>`);
                $mem.append(`<img src=${group.organizer.photo.thumb_link} alt="organizer photo"class="rounded-circle img-hover"/>
                `);
                

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
        var $tim=$('#times');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}/self/calendar?key=${key}&category=1,2,3&sign=true`,
            success: function(calendars ) {
                $.each(calendars, function(i, cals)  {
                    $cal.append(`<div><h3>${cals.name}</h3></div>`);
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
                text: 'Something went wrong!'+error,
                footer: 'Try again in a minute'
              });  
    
     }

     function getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
 
        name = name.replace(/[\[\]]/g, '\\$&');
 
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
 
        if (!results)
            return null;
 
        if (!results[2])
            return '';
 
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
window.page={
    funcs: function(val) {
        alert ("ok");
        window.location.href = `about.html?category_id=${val}`;
    },
};