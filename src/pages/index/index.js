import './index.scss';
import 'bootstrap';
import Calendar from '../../components/calendarCreation.js';
import Social from '../../components/socialTags.js';
import Swal from 'sweetalert2';

 
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
    });

    function errorFunction(xhr, status, error){
        const Swal = require('sweetalert2');
          
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'+error,
            footer: '<a href>Try again in a minute</a>'
            });  
    }
     
        window.page = {
            
            funcs: function(val) {
    
                window.location.href = `about.html?category_id=${val}`;
            },
            
            // responseFunc: function(val) {
            //     var text=document.getElementById('tf').value;
            //     var newLine='\r';
            //     if(text==="join"){
            //         comment.append(newLine);
            //         comment.append("Joining a group is simple. Find the catagory you are interested in and join!");
            //         comment.append(newLine);
            //         comment.append("Anything else you would like to know?");
            //     }
            //     if(text==="area"){
            //         comment.append("Crow Assemble are available cross country! Click and see where your nearst groupd is located!");
            //         comment.append(newLine);
            //         comment.append("Anything else you would like to know?");
    
            //     }
            //     if(text==="date"){
            //         comment.append("Crow Assemble groups run from Monday through to Sunday! Join up!");
            //         comment.append(newLine);
            //         comment.append("Anything else you would like to know?");
    
            //     }else{
            //         comment.append(newLine);
            //         comment.append("Didnt Quite get that try ask again!");
            //     }
                
            // },
            // error: errorFunction
        };
    



