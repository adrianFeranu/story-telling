
Spry.Utils.addLoadListener(function() {

        $(document).ready(function() {

          var last_valid_selection = null;

          $('#tag').change(function(event) {

            if ($(this).val().length > 3) {

              $(this).val(last_valid_selection);
            } else {
              last_valid_selection = $(this).val();
            }
          });
        });
        


       		</form>
       	
	<!-- Include all compiled plugins (below), or include individual files as needed --> 
	<script src="js/bootstrap.js">

});
