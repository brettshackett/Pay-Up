$(document).ready(function() {

  $("#add").click(function() {
      var
      $self = $(this),
          $element_to_clone = $self.prev(),
          $wrapper_parent_element = $self.parent(),
          $new_element = $element_to_clone.clone();

      $new_element.find('.del').removeClass('hidden disabled').addClass('enabled');

      $new_element.insertAfter($element_to_clone);

      return false;
  });

  $("body").on("click", ".del.enabled", function(event) {
      var $parent = $(this).parent();
      $parent.remove();
      return false;
  });
});