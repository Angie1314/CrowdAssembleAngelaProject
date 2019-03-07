import './about.scss';
import 'bootstrap';
import Social from '../../components/socialTags.js';
import EventsComponents from '../../components/eventsComponent';
import Swal from 'sweetalert2';
import Miscell from '../../components/miscellaneous.js';
import GroupDetails from '../../components/groupDetails.js';
//import Groups from '../../components/groups.js';


//customElements.define('groups-here', Groups );

$(function (parameter) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://api.meetup.com/';
    const key = '79265535896f4f69573a5c191e4947';

    var $items = $('#groups');
    var $mem=$('#members');

    let category=getParameterByName("category_ids");
    
    $.ajax({
        type: 'GET' ,
        url: `${proxyUrl}${baseUrl}find/groups?key=${key}&category=${category}&sign=true`,
        success: function(groups) {
            $items.find('.spinner-border').addClass('d-none');

            
            $.each(groups, function(i, group) {
                $items.append(`
                <div class="border border-primary">
                    <h5 class="card-title categories">${group.name}  
                    <button type="button" class="btn btn-outline-light" onclick="page.like();">
                    <img src="src/like.png" alt="like photo"class="rounded" title="like group" /></button></h5>
                <div class="class="img-fluid">${group.description}</div>

                <br/>

                    <h2 class=" heading">[ORGANIZER] ${group.organizer.name}</h2>

                <br/>

                    <h6>[BIO] ${group.organizer.bio}</h6>
                    <img src=${group.organizer.photo.photo_link} alt="organizer photo"class="rounded" />
                    <button class="btn btn-dark btn-lg btn-block mb-2 mt-2" onclick="page.funcs(${group.id});">See events</button>`);

                $mem.append(`
                <ul>
                    <h3><img src=${group.organizer.photo.thumb_link} alt="organizer photo"class="rounded-circle img-hover"/></h3>
                    <button class="btn btn-outline-info my-2 my-sm-0 bg-white" onclick="page.following();"> + Follow</button>
                <ul>`);
                

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
        
        $ (function () {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const baseUrl = 'https://api.meetup.com/';
            const key = '79265535896f4f69573a5c191e4947';

            var $tim=$('#times');
            
            $.ajax({
                type: 'GET' ,
                url: `${proxyUrl}${baseUrl}/find/upcoming_events?key=${key}&${val}&sign=true`,

                success: function(calendars ) {
                    $.each(calendars.events, function(i, cals)  {
                        $tim.append(`
                    <table class="table table-striped ">
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <h6 class="heading1">${cals.name}</h6>
                                    <h6 class="heading1">${cals.local_date}</h6>
                                    <h6 class="heading1">${cals.local_time}</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>`);
                    });
                    
                },
                error: errorFunction
            });   
        });
    },
     following(){
  
        const Swal = require('sweetalert2');
        
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Great Followed',
            showConfirmButton: false,
            timer: 1000
          });
  
   },
   like(){
  
    const Swal = require('sweetalert2');
    Swal.fire({
        title: 'Liked!',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/src/likegif.gif")
          center left
          no-repeat
        `
      });

},
};