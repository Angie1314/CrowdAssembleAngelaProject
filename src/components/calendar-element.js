
class CalendarElement extends HTMLElement {
   
   connectedCallback() {
      let chatTemplate = `
<button type="button" class="btn border-0 text-left" data-toggle="modal" data-target="#exampleModal">
   <p><img src="src/images/f2.png" alt="foxbot Icon" class="img-fluid img-circle" /> FQA Chat </p>
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby
   ="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><img src="src/images/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Crowd Chat</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
         </div>
         <div class="modal-body">
            <h1>Ask questions</h1>
            <form>
               <div class="form-group" method="scripts/index.js">
                  <label for="exampleInputEmail1" class="text-left">Message</label>
                  <input type="email" class="form-control" id="tf" aria-describedby="emailHelp" placeholder="Ask Question">
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1"><img src="src/images/foxs.png" alt="foxbot icon" class="img-fluid img-circle" />Bot Response</label>
                  <textarea class="form-control" id="textAreaResponse" rows="5"></textarea>
               </div>
            </form>
            <div class="modal-footer">
               <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
               <button type="submit" class="btn btn-dark" id="myObj" onclick="sendButton()">Send Q</button>
            </div>
         </div>
      </div>
   </div>
</div>`;

      let calendarTemplate = `<h1 class="categories"> Calendar</h1>
        <div id="simple-date-selector" class="hasDatepicker">
        <div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="display: block;">
           <div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
              <a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_1551085827624.datepicker._adjustDate(&#39;#simple-date-selector&#39;, -1, &#39;M&#39;);" title="Prev">
              <span class="icon-disclosure-left"></span></a>
              <a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_1551085827624.datepicker._adjustDate(&#39;#simple-date-selector&#39;, +1, &#39;M&#39;);" title="Next">
              <span class="icon-disclosure-right"></span></a>
              <div class="ui-datepicker-title">
                 <span class="ui-datepicker-month heading">February</span>&nbsp;<span class="ui-datepicker-year heading">2019</span>
              </div>
           </div>
           <table class="ui-datepicker-calendar categories">
              <thead>
                 <tr>
                    <th class="ui-datepicker-week-end"><span title="Sunday">Su</span></th>
                    <th><span title="Monday">Mo</span></th>
                    <th><span title="Tuesday">Tu</span></th>
                    <th><span title="Wednesday">We</span></th>
                    <th><span title="Thursday">Th</span></th>
                    <th><span title="Friday">Fr</span></th>
                    <th class="ui-datepicker-week-end">
                       <span title="Saturday">Sa</span>
                    </th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                    <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled ">&nbsp;</td>
                    <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                    <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                    <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                    <td class=" date_01" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">1</a>
                    </td>
                    <td class=" ui-datepicker-week-end date_02" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default " href="https://www.meetup.com/#">2</a>
                    </td>
                 </tr>
                 <tr>
                    <td class=" ui-datepicker-week-end date_03" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">3</a>
                    </td>
                    <td class=" date_04" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">4</a>
                    </td>
                    <td class=" date_05" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">5</a>
                    </td>
                    <td class=" date_06" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">6</a>
                    </td>
                    <td class=" date_07" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">7</a>
                    </td>
                    <td class=" date_08" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">8</a>
                    </td>
                    <td class=" ui-datepicker-week-end date_09" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">9</a>
                    </td>
                 </tr>
                 <tr>
                    <td class=" ui-datepicker-week-end date_10" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">10</a>
                    </td>
                    <td class=" date_11" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">11</a>
                    </td>
                    <td class=" date_12" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">12</a>
                    </td>
                    <td class=" date_13" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">13</a>
                    </td>
                    <td class=" date_14" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">14</a>
                    </td>
                    <td class=" date_15" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">15</a>
                    </td>
                    <td class=" ui-datepicker-week-end date_16" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">16</a>
                    </td>
                 </tr>
                 <tr>
                    <td class=" ui-datepicker-week-end date_17" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">17</a>
                    </td>
                    <td class=" date_18" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">18</a></td>
                    <td class=" date_19" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">19</a>
                    </td>
                    <td class=" date_20" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">20</a>
                    </td>
                    <td class=" date_21" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">21</a></td>
                    <td class=" date_22" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">22</a></td>
                    <td class=" ui-datepicker-week-end date_23" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">23</a></td>
                 </tr>
                 <tr>
                    <td class=" ui-datepicker-week-end date_24" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">24</a></td>
                    <td class=" ui-datepicker-days-cell-over date_25 ui-datepicker-current-day ui-datepicker-today" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default ui-state-highlight ui-state-active" href="https://www.meetup.com/#">25</a>
                    </td>
                    <td class=" date_26" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">26</a>
                    </td>
                    <td class=" date_27" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;">
                       <a class="ui-state-default" href="https://www.meetup.com/#">27</a>
                    </td>
                    <td class=" date_28" onclick="DP_jQuery_1551085827624.datepicker._selectDay(&#39;#simple-date-selector&#39;,1,2019, this);return false;"><a class="ui-state-default" href="https://www.meetup.com/#">28</a></td>
                    <td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                    <td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td>
                 </tr>
              </tbody>
           </table>
        </div>`;
      this.innerHTML = calendarTemplate + chatTemplate;
   }

}

customElements.define('calendar-element', CalendarElement);