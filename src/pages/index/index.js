import './index.scss';
import 'bootstrap';
import CalendarElement from '../../components/calendar-element.js';
import SocialTagElement from '../../components/socialtag-element.js';
import Swal from 'sweetalert2';
import SearchboxElement from '../../components/searchbox-element';
import FooterElement from '../../components/footer-element.js';
import CategoiresElement from '../../components/categories-element.js';
import UserProfileElement from '../../components/user-profile-element.js';

$(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://api.meetup.com/';
    const key = '79265535896f4f69573a5c191e4947';

    var $items = $('#groups');
    var $mem = $('#member');


    $.ajax({
        type: 'GET',
        url: `${proxyUrl}${baseUrl}/find/topic_categories?key=${key}&category=1,2,3&sign=true`,
        success: (groups) => {
            $mem.find('.spinner-border').addClass('d-none');
            $items.find('#spin').addClass('d-none');

            $.each(groups, function (i, group) { 

                $mem.append(`
                <table class="table table-striped">
                <tbody>
                   <tr>
                      <td class="text-center">
                         <h5 class="text-left categories"><img src=${group.photo.thumb_link}>
                            <a
                            title="Click to view Groups" 
                            onclick="page.funcs(${group.category_ids});" 
                            href="javascript:void(0);">${group.name} 
                            </a> 
                         </h5>
                         <td id="timing"></td>
                      </td>
                   </tr>
                </tbody>
             </table>`);
            });
        },
        error: errorFunction
    });
});

function errorFunction(error) {
    console.log(error);
    const Swal = require('sweetalert2');

    Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!' + error,
        footer: '<a href="#">Try again in a minute</a>'
    });
};

window.page = {

    funcs: (val) => {

        window.location.href = `about.html?category_ids=${val}`;
    },
};
