import './index.scss';
import 'bootstrap';
import Calendar from '../../components/calendarCreation.js';
import Social from '../../components/socialTags.js';
import Swal from 'sweetalert2';
import Miscell from '../../components/miscellaneous.js';
import Footer from '../../components/footer.js';
import Cate from '../../components/categories.js';


$(function () {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const baseUrl = 'https://api.meetup.com/';
    const key = '79265535896f4f69573a5c191e4947';

    var $items = $('#groups');
    var $mem=$('#member');
    
    
    $.ajax({
        type: 'GET' ,
        url: `${proxyUrl}${baseUrl}/find/topic_categories?key=${key}&category=1,2,3&sign=true`,
        success: function(groups) {
            $mem.find('.spinner-border').addClass('d-none');
            $items.find('#spin').addClass('d-none');

            $.each(groups, function(i, group) {
                console.log(group.category_ids);

                $mem.append(`
                   
                    <table class="table table-striped ">
                        <tbody>
                            <tr>
                            <td class="text-center">
                                <h5><a class="card-title categories" title="Click to view Groups" onclick="page.funcs(${group.category_ids});" 
                                href="javascript:void(0);">${group.name} </h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>`);
            });
        },
        error: errorFunction
    });
});

    function errorFunction(xhr, status, error){
        console.log(error);
        const Swal = require('sweetalert2');
          
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'+error,
            footer: '<a href>Try again in a minute</a>'
        });  
    };
     
        window.page = {
            
            funcs: function(val) {
    
                window.location.href = `about.html?category_ids=${val}`;
            },
        };
        