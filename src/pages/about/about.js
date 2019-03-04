import './about.scss';
import 'bootstrap';

console.log('This is the about page.');
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
            url: `${proxyUrl}${baseUrl}/recommended/groups?key=${key}&category=1,2,3&sign=true`,
            success: function(tim ) {
                $.each(tim, function(i, tims)  {
                   // $tim.append(`<h2> ${tims.id}</h2>`);
                    //$tim.append(`<div><h3>${tims.local_time}</h3></div>
                      //  <div><h5>${tims.local_date}</h5></div>`);
                   
                });
                
            },
            error: errorFunction
        });
        
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

    window.page = {
        
        func: function() {

        var urlParams = new URLSearchParams(window.location.search);
        var parameter =urlParams.toString();
        //console.log(parameter);
        var queries = {};

        $.each(document.location.search.substr(1).split('&'),function(c,q){
          var i = q.split('=');
          queries[i[0].toString()] = i[1].toString();
        });

        console.log(queries);
        
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const baseUrl = 'https://api.meetup.com/';
        const key = '79265535896f4f69573a5c191e4947';
    
        var $items = $('#groups');
        var $mem=$('#members');
        
        $.ajax({
            type: 'GET' ,
            url: `${proxyUrl}${baseUrl}find/groups?key=${key}&${queries}&sign=true`,
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
}
    };